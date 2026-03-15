import { Header } from "@/components/blocks/header/header";
import { TooltipProvider } from "@/utilities/providers/tooltip";
import type { Metadata, Viewport } from "next";
import { Gabarito } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";

const gabarito = Gabarito({ weight: "variable" });

export const metadata: Metadata = {
  title: "Southampton Coffee Map",
  description: "A web map of coffee shops in Southampton.",
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
        <html lang="en" className={gabarito.className}>
          <body className="bg-base-50 grid grid-rows-[auto_1fr] h-dvh">
            <Header />
            {children}
          </body>
        </html>
      </TooltipProvider>
    </NuqsAdapter>
  );
}
