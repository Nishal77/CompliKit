import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "CompliKit", template: "%s | CompliKit" },
  description: "SOC 2 compliance for early-stage B2B SaaS — at 1/10th the cost of Vanta.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "https://app.complikit.io"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
