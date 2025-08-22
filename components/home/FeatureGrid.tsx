"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';
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

const FeatureGrid: React.FC = () => {

  const features: Feature[] = [
    {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      ),
      title: "Getting Started",
      description: "Step-by-step guides to integrate 7en.ai's AI agents into your workflows seamlessly.",
      link: "/docs/getting-started/introduction"
    },
    {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
        </svg>
      ),
      title: "API Reference",
      description: "Comprehensive API documentation to harness 7en.ai's custom AI solutions.",
      link: "/api/api-reference"
    },
    {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Comprehensive AI Solutions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
          Everything you need to build, deploy, and manage AI agents at enterprise scale
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <ModernCard variant="default" className="hover:border-foreground/20 group" key={index}>
            <ModernCardHeader>
              <ModernCardIcon className="bg-background border border-border group-hover:border-foreground/20">
                {feature.icon}
              </ModernCardIcon>
              <ModernCardTitle className="text-lg">{feature.title}</ModernCardTitle>
              <ModernCardDescription>
                {feature.description}
              </ModernCardDescription>
            </ModernCardHeader>
            <ModernCardContent>
              <ModernCardLink href={feature.link}>
                Explore <ArrowRight className="h-4 w-4" />
              </ModernCardLink>
            </ModernCardContent>
          </ModernCard>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
