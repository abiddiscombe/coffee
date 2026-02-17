import { TooltipProvider } from "@/components/elements/tooltip";
import type { Metadata, Viewport } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coffee",
  description: "A web map of coffee shops with support for location filtering.",
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NuqsAdapter>
      <TooltipProvider>
        <html lang="en">
          <body className="bg-base-50 h-dvh">{children}</body>
        </html>
      </TooltipProvider>
    </NuqsAdapter>
  );
}
