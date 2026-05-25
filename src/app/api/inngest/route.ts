import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { initializeControls } from "@/inngest/functions/initialize-controls";
import { generatePolicy } from "@/inngest/functions/generate-policy";
import { sendWelcomeEmailFunction } from "@/inngest/functions/send-welcome-email";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [initializeControls, generatePolicy, sendWelcomeEmailFunction],
});
