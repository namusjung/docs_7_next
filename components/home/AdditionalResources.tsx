
"use client";
import React from 'react';
import { ArrowRight, ArrowUpRight, ExternalLink, Shield } from 'lucide-react';
import { 
  ModernCard, 
  ModernCardHeader, 
  ModernCardTitle, 
  ModernCardDescription, 
  ModernCardContent, 
  ModernCardIcon,
  ModernCardTitleRow,
  ModernCardLink
} from '@/components/ui/ModernCard';
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const AdditionalResources: React.FC = () => {

  const features: Feature[] = [
    {
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      ),
      title: "Tutorials",
      description: "Step-by-step guides to integrate 7en.ai's AI agents into your workflows seamlessly.",
      link: "/docs/tutorials"
    },
    {
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
        </svg>
      ),
      title: "API Reference",
      description: "Comprehensive API documentation to harness 7en.ai's custom AI solutions.",
      link: "/api/api-reference/"
    },
    {
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      title: "Quick Start",
      description: "Get your AI agent ready under 5 minutes.",
      link: "/docs/getting-started/quick-start"
    },
    {
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      title: "FAQ & Support",
      description: "Quick answers and community support to unlock 7en.ai's full potential.",
      link: "/docs/faq/"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-0 py-16 text-left border-t">
      <div className="text-left mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Resources
        </h2>
      </div>
      
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
           <ModernCard 
            key={index}
            variant="horizontal" 
            className="hover:border-foreground/20 relative group"
            link={feature.link}
            clickable={true}
            hideLink={true}>
                <ArrowUpRight className="hidden w-5 h-5 absolute right-5 top-5 group-hover:block" />
                <ModernCardHeader variant="horizontal">
                    <ModernCardTitleRow>
                    <ModernCardIcon variant="horizontal" className="bg-background p-0 w-4 h-4">
                        {feature.icon}
                    </ModernCardIcon>
                    <ModernCardTitle className="text-base">{feature.title}</ModernCardTitle>
                    </ModernCardTitleRow>
                    <ModernCardDescription>
                    {feature.description}
                    </ModernCardDescription>
                </ModernCardHeader>
            </ModernCard>
        ))}
      </div>
    </section>
  );
};

export default AdditionalResources;
