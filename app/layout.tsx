import "./globals.css";
import { ReactNode } from "react";
import Providers from "@/components/Providers";
import { Viewport } from "next";
import SiteHeader from "@/components/ui/SiteHeader";


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
      <body className="min-h-screen">
        <Providers>
          <SiteHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}


