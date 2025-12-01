import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Image from "next/image";

export const metadata: Metadata = {
  title: "OTW Delivery Services",
  description: "Fast, reliable, and affordable delivery services.",
  icons: {
  icon: "/favicon.ico", // <-- important: leading slash
  shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
            <head>
        <link rel="icon" href="/favicon.ico" />
        {/* no <head /> empty tag — we want explicit links */}
      </head>
      <body className="font-satoshi">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
