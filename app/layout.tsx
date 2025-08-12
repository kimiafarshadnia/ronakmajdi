import type { Metadata } from "next";
import "./globals.css";
import { MainLayout } from "@/component/layout/MainLayout";

export const metadata: Metadata = {
  title: "روناک مجدی",
  description: "ظرافتی بی‌انتها، الهام‌گرفته از سادگی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" dir="rtl">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
