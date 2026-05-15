import { RequireUserAuth } from "@/components/auth/require-user-auth";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RequireUserAuth>{children}</RequireUserAuth>;
}
