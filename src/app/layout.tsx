import { Button } from "@/components/elements/button";
import { Icon } from "@/components/elements/icon";
import { Tag } from "@/components/elements/tag";
import { TooltipProvider } from "@/components/elements/tooltip";
import { GithubIcon } from "lucide-react";
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
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#ffffff" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
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
          <body className="bg-base-50 grid h-dvh grid-rows-[auto_1fr]">
            <header className="border-b-base-200 flex min-h-14 items-center justify-between gap-4 border-b bg-white px-4 py-0.5 sm:px-6">
              <h1>Coffee Map</h1>
              <hr className="grow border-none" />
              <Tag variant="orange">Beta</Tag>
              <a href="https://github.com/abiddiscombe/coffee" target="_blank">
                <Button variant="ghost" width="box">
                  <Icon>
                    <GithubIcon />
                  </Icon>
                </Button>
              </a>
            </header>
            <main>{children}</main>
          </body>
        </html>
      </TooltipProvider>
    </NuqsAdapter>
  );
}
