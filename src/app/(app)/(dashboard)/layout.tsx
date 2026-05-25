import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const user = await currentUser();

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader
          user={{
            id: userId,
            name: user ? [user.firstName, user.lastName].filter(Boolean).join(" ") || null : null,
            email: user?.emailAddresses[0]?.emailAddress ?? null,
            image: user?.imageUrl ?? null,
          }}
        />
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-6 py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
