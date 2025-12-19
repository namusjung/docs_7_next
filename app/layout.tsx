import "./globals.css";
import { ReactNode } from "react";
import Providers from "@/components/Providers";
import { Viewport } from "next";
import SiteHeader from "@/components/ui/SiteHeader";
import { MobileNavProvider } from "@/components/docs/MobileNavContext";


export const metadata = {
  metadataBase: new URL("https://docs.7en.ai"),
  title: {
    default: "7en.ai Docs",
    template: "%s | 7en.ai Docs",
  },
  description:
    "Comprehensive documentation for 7en.ai — build, integrate, and scale AI agents.",
  openGraph: {
    title: "7en.ai Docs",
    description:
      "Comprehensive documentation for 7en.ai — build, integrate, and scale AI agents.",
    url: "https://docs.7en.ai",
    siteName: "7en.ai Docs",
    images: [
      { url: "/img/og.png", width: 1200, height: 630, alt: "7en.ai Docs" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "7en.ai Docs",
    description:
      "Comprehensive documentation for 7en.ai — build, integrate, and scale AI agents.",
    images: ["/img/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f172a" },
    { media: "(prefers-color-scheme: dark)", color: "#e5e7eb" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/x-icon" href="/img/logo.ico" media="(prefers-color-scheme: dark)"/>
        <link rel="icon" type="image/x-icon" href="/img/logo-black.ico" media="(prefers-color-scheme: light)"/>
      </head>
      <body className="min-h-screen" suppressHydrationWarning>
        <Providers>
          <MobileNavProvider>
            <SiteHeader />
            {children}
          </MobileNavProvider>
        </Providers>
      </body>
    </html>
  );
}


