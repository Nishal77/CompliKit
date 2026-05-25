import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { OnboardingWizard } from "@/components/onboarding/onboarding-wizard";

export const metadata = { title: "Get Started" };

export default async function OnboardingPage() {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="w-full max-w-2xl">
        <OnboardingWizard />
      </div>
    </div>
  );
}
