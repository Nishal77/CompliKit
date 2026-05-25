import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY!);

export const EMAIL_FROM = process.env.EMAIL_FROM ?? "hello@complikit.io";

export async function sendWelcomeEmail(params: {
  to: string;
  firstName: string;
}): Promise<void> {
  await resend.emails.send({
    from: EMAIL_FROM,
    to: params.to,
    subject: "Welcome to CompliKit — let's get you SOC 2 ready",
    html: `<p>Hi ${params.firstName},</p><p>Welcome to CompliKit! Let's get your SOC 2 journey started.</p>`,
  });
}

export async function sendInviteEmail(params: {
  to: string;
  inviterName: string;
  orgName: string;
  inviteUrl: string;
}): Promise<void> {
  await resend.emails.send({
    from: EMAIL_FROM,
    to: params.to,
    subject: `${params.inviterName} invited you to join ${params.orgName} on CompliKit`,
    html: `<p>${params.inviterName} has invited you to join <strong>${params.orgName}</strong> on CompliKit.</p><p><a href="${params.inviteUrl}">Accept Invitation</a></p>`,
  });
}

export async function sendPolicyGeneratedEmail(params: {
  to: string;
  policyName: string;
  policyUrl: string;
}): Promise<void> {
  await resend.emails.send({
    from: EMAIL_FROM,
    to: params.to,
    subject: `Your ${params.policyName} is ready to review`,
    html: `<p>Your <strong>${params.policyName}</strong> has been generated and is ready for review.</p><p><a href="${params.policyUrl}">Review Policy</a></p>`,
  });
}

export async function sendPaymentFailedEmail(params: {
  to: string;
  orgName: string;
}): Promise<void> {
  await resend.emails.send({
    from: EMAIL_FROM,
    to: params.to,
    subject: "Action needed: payment failed",
    html: `<p>We were unable to process the payment for <strong>${params.orgName}</strong>. Please update your payment method to keep your CompliKit subscription active.</p>`,
  });
}
