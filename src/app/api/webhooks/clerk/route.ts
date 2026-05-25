import { NextResponse } from "next/server";
import { Webhook } from "svix";
import { db } from "@/lib/db";

// Clerk webhook event types we handle
interface ClerkEmailAddress {
  email_address: string;
  id: string;
}

interface ClerkUserCreatedEvent {
  type: "user.created";
  data: {
    id: string;
    first_name: string | null;
    last_name: string | null;
    username: string | null;
    image_url: string | null;
    email_addresses: ClerkEmailAddress[];
    primary_email_address_id: string | null;
  };
}

interface ClerkUserUpdatedEvent {
  type: "user.updated";
  data: {
    id: string;
    first_name: string | null;
    last_name: string | null;
    username: string | null;
    image_url: string | null;
    email_addresses: ClerkEmailAddress[];
    primary_email_address_id: string | null;
  };
}

interface ClerkUserDeletedEvent {
  type: "user.deleted";
  data: {
    id: string;
    deleted: boolean;
  };
}

type ClerkWebhookEvent =
  | ClerkUserCreatedEvent
  | ClerkUserUpdatedEvent
  | ClerkUserDeletedEvent;

export async function POST(req: Request) {
  const secret = process.env.CLERK_WEBHOOK_SECRET;
  if (!secret) {
    console.error("CLERK_WEBHOOK_SECRET not set");
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
  }

  // Get raw body for signature verification
  const body = await req.text();

  // Extract Svix headers
  const svixId = req.headers.get("svix-id");
  const svixTimestamp = req.headers.get("svix-timestamp");
  const svixSignature = req.headers.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return NextResponse.json({ error: "Missing svix headers" }, { status: 400 });
  }

  // Verify webhook signature
  const wh = new Webhook(secret);
  let event: ClerkWebhookEvent;

  try {
    event = wh.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as ClerkWebhookEvent;
  } catch (err) {
    console.error("Clerk webhook verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Handle events
  switch (event.type) {
    case "user.created": {
      const { id: clerkId, first_name, last_name, username, image_url, email_addresses, primary_email_address_id } = event.data;

      const primaryEmail = email_addresses.find(
        (e) => e.id === primary_email_address_id
      ) ?? email_addresses[0];

      if (!primaryEmail) {
        console.error("No email found for Clerk user", clerkId);
        return NextResponse.json({ error: "No email found" }, { status: 400 });
      }

      await db.user.upsert({
        where: { clerkId },
        create: {
          clerkId,
          email: primaryEmail.email_address,
          firstName: first_name ?? null,
          lastName: last_name ?? null,
          username: username ?? null,
          avatarUrl: image_url ?? null,
        },
        update: {
          email: primaryEmail.email_address,
          firstName: first_name ?? null,
          lastName: last_name ?? null,
          username: username ?? null,
          avatarUrl: image_url ?? null,
        },
      });

      console.log("Created/synced user:", clerkId);
      break;
    }

    case "user.updated": {
      const { id: clerkId, first_name, last_name, username, image_url, email_addresses, primary_email_address_id } = event.data;

      const primaryEmail = email_addresses.find(
        (e) => e.id === primary_email_address_id
      ) ?? email_addresses[0];

      if (!primaryEmail) break;

      await db.user.update({
        where: { clerkId },
        data: {
          email: primaryEmail.email_address,
          firstName: first_name ?? null,
          lastName: last_name ?? null,
          username: username ?? null,
          avatarUrl: image_url ?? null,
        },
      }).catch((err) => {
        // User might not exist if webhook arrives before user.created
        console.warn("user.updated: user not found in DB for clerkId", clerkId, err);
      });

      console.log("Updated user:", clerkId);
      break;
    }

    case "user.deleted": {
      const { id: clerkId } = event.data;

      // Soft delete: preserve org data but remove user record
      // Organizations and policies survive user deletion
      await db.user.delete({ where: { clerkId } }).catch((err) => {
        console.warn("user.deleted: user not found in DB for clerkId", clerkId, err);
      });

      console.log("Deleted user:", clerkId);
      break;
    }

    default:
      // Ignore unhandled event types
      break;
  }

  return NextResponse.json({ received: true });
}
