"use client";
import AdditionalResources from "@/components/home/AdditionalResources";
import Image from "next/image";
import { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import FeatureGrid from "@/components/home/FeatureGrid";
import Footer from "@/components/home/Footer";
import IntegrationSection from "@/components/home/IntegrationSection";
import { ThemeProvider } from "next-themes";

export default function HomePage() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });
  const items =  [
        {
            title: "Zapier",
            logo: "https://img.logo.dev/zapier.com?token=pk_PBSGl-BqSUiMKphvlyXrGA&retina=true",
            link: "/docs/integrations/zapier"
        },
        {
            title: "Zendesk",
            logo: "https://img.logo.dev/zendesk.com?token=pk_PBSGl-BqSUiMKphvlyXrGA&retina=true",
            link: "/docs/integrations/zendesk"
        },
        {
            title: "Freshdesk",
            logo: "https://img.logo.dev/freshwork.com?token=pk_PBSGl-BqSUiMKphvlyXrGA&retina=true",
            link: "/docs/integrations/freshdesk"
        },
        {
            title: "Hubspot",
            logo: "https://img.logo.dev/hubspot.com?token=pk_PBSGl-BqSUiMKphvlyXrGA&retina=true",
            link: "/docs/integrations/hubspot"
        },
        {
            title: "Zoho",
            logo: "https://img.logo.dev/zoho.com?token=pk_PBSGl-BqSUiMKphvlyXrGA&retina=true",
            link: "/docs/integrations/zoho"
        },
        {
            title: "Salesforce",
            logo: "https://img.logo.dev/salesforce.com?token=pk_PBSGl-BqSUiMKphvlyXrGA&retina=true",
            link: "/docs/integrations/salesforce"
        }
    ];

  return (
    <main className="relative min-h-screen bg-background">
      <HeroSection 
      theme={theme} 
      description={`Learn how to build and deploy AI agents with 7en.ai through 
              comprehensive guides, API references, and integration tutorials.`}
      title={`7en.ai Documentation`}
      />
      <FeatureGrid />
      {/* <CardShowcase /> */}
      <IntegrationSection 
      title={`Thirdparty Integrations`}
      description={`Integrate 10 plus apps to 7en.ai to automate your workflow.`}
      items={items} />
      <AdditionalResources />
      <Footer />
    </main>
  );
}


