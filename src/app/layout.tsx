import { Button } from "@/components/elements/button";
import { Tag } from "@/components/elements/tag";
import { Typography } from "@/components/elements/typography";
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
      <html lang="en">
        <body className="bg-primary-50 grid h-dvh grid-rows-[auto_1fr]">
          <header className="border-b-primary-200 flex min-h-14 items-center justify-between gap-4 border-b bg-white px-4 py-0.5 sm:px-6">
            <Typography variant="h1" className="font-semibold">
              Coffee Map
            </Typography>
            <hr className="grow border-none" />
            <Tag variant="orange">Beta</Tag>
            <a href="https://github.com/abiddiscombe/coffee" target="_blank">
              <Button variant="ghost" size="icon">
                <GithubIcon className="h-4.5 w-4.5" />
              </Button>
            </a>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </NuqsAdapter>
  );
}
