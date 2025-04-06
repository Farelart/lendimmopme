import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import DashboardNavigation from "@/components/DashboardNavigation";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }
  return (
    <main>
      <DashboardNavigation />
      {children}
    </main>
  );
}
