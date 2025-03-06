import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Header from "./_components/Header";
const DashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login");
  }
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />
      <section className="flex-1 p-4 md:p-6">{children}</section>
    </main>
  );
};
export default DashboardLayout;
