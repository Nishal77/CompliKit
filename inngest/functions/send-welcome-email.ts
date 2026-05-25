import { inngest } from "../client";
import { sendWelcomeEmail } from "@/lib/email";

export const sendWelcomeEmailFunction = inngest.createFunction(
  {
    id: "send-welcome-email",
    name: "Send Welcome Email",
    triggers: [{ event: "user/signed.up" }],
  },
  async ({ event }) => {
    const { email, firstName } = event.data as { email: string; firstName: string };
    await sendWelcomeEmail({ to: email, firstName });
    return { sent: true };
  }
);
