import { inngest } from "../client";
import { db } from "@/lib/db";
import { SOC2_CONTROLS } from "@/constants/soc2-controls";

export const initializeControls = inngest.createFunction(
  {
    id: "initialize-org-controls",
    name: "Initialize SOC 2 Controls for New Org",
    triggers: [{ event: "org/onboarding.completed" }],
  },
  async ({ event }) => {
    const { organizationId } = event.data as { organizationId: string };

    await db.controlInstance.createMany({
      data: SOC2_CONTROLS.map((control) => ({
        organizationId,
        controlId: control.id,
        status: "NOT_STARTED",
      })),
      skipDuplicates: true,
    });

    return { initialized: SOC2_CONTROLS.length };
  }
);
