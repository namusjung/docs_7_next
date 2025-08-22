
import React from 'react';
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
import { Book, Code, MessageCircle, Zap, Shield, Cpu, ArrowRight } from 'lucide-react';

const CardShowcase: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Everything you need to get started
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Powerful tools and comprehensive documentation to build AI agents at scale
        </p>
      </div>
      
      {/* Cards with icons and links */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
        <ModernCard variant="default" className="hover:border-foreground/20 group">
          <ModernCardHeader>
            <ModernCardIcon className="bg-background border border-border group-hover:border-foreground/20">
              <Book className="h-6 w-6 text-foreground" strokeWidth={1.5} />
            </ModernCardIcon>
            <ModernCardTitle className="text-lg">Documentation</ModernCardTitle>
            <ModernCardDescription>
              Comprehensive guides and tutorials to get you started quickly
            </ModernCardDescription>
          </ModernCardHeader>
          <ModernCardContent>
            <ModernCardLink href="/docs/intro">
              Learn more <ArrowRight className="h-4 w-4" />
            </ModernCardLink>
          </ModernCardContent>
        </ModernCard>

        <ModernCard variant="default" className="hover:border-foreground/20 group">
          <ModernCardHeader>
            <ModernCardIcon className="bg-background border border-border group-hover:border-foreground/20">
              <Code className="h-6 w-6 text-foreground" strokeWidth={1.5} />
            </ModernCardIcon>
            <ModernCardTitle className="text-lg">API Reference</ModernCardTitle>
            <ModernCardDescription>
              Complete API documentation with examples and interactive testing
            </ModernCardDescription>
          </ModernCardHeader>
          <ModernCardContent>
            <ModernCardLink href="/api/api-reference/">
              Explore API <ArrowRight className="h-4 w-4" />
            </ModernCardLink>
          </ModernCardContent>
        </ModernCard>

        {/* Clickable card without visible link */}
        <ModernCard 
          variant="default" 
          className="hover:border-foreground/20 group" 
          link="/docs/faq/"
          clickable={true}
          hideLink={true}
        >
          <ModernCardHeader>
            <ModernCardIcon className="bg-background border border-border group-hover:border-foreground/20">
              <MessageCircle className="h-6 w-6 text-foreground" strokeWidth={1.5} />
            </ModernCardIcon>
            <ModernCardTitle className="text-lg">Community</ModernCardTitle>
            <ModernCardDescription>
              Join our community for support, discussions, and shared knowledge
            </ModernCardDescription>
          </ModernCardHeader>
        </ModernCard>
      </div>

      {/* Cards without icons */}
      <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
        <ModernCard variant="default" className="hover:border-foreground/20">
          <ModernCardHeader>
            <ModernCardTitle className="text-lg">Quick Integration</ModernCardTitle>
            <ModernCardDescription>
              Get up and running in minutes with our simple SDK and clear documentation. 
              No complex setup required.
            </ModernCardDescription>
          </ModernCardHeader>
          <ModernCardContent>
            <ModernCardLink href="/docs/getting-started/quick-start">
              Quick Start <ArrowRight className="h-4 w-4" />
            </ModernCardLink>
          </ModernCardContent>
        </ModernCard>

        <ModernCard variant="default" className="hover:border-foreground/20">
          <ModernCardHeader>
            <ModernCardTitle className="text-lg">Scalable Infrastructure</ModernCardTitle>
            <ModernCardDescription>
              Built to handle enterprise workloads with automatic scaling and 
              99.9% uptime guarantee.
            </ModernCardDescription>
          </ModernCardHeader>
        </ModernCard>
      </div>

      {/* Horizontal cards with icon and title in same row */}
      <div className="space-y-4 max-w-4xl mx-auto mb-12">
        <ModernCard variant="horizontal" className="hover:border-foreground/20">
          <ModernCardHeader variant="horizontal">
            <ModernCardTitleRow>
              <ModernCardIcon variant="horizontal" className="bg-background border border-border">
                <Zap className="h-5 w-5 text-foreground" strokeWidth={1.5} />
              </ModernCardIcon>
              <ModernCardTitle className="text-base">Lightning Fast</ModernCardTitle>
            </ModernCardTitleRow>
            <ModernCardDescription>
              Built for performance with optimized response times and efficient processing
            </ModernCardDescription>
          </ModernCardHeader>
        </ModernCard>

        <ModernCard variant="horizontal" className="hover:border-foreground/20">
          <ModernCardHeader variant="horizontal">
            <ModernCardTitleRow>
              <ModernCardIcon variant="horizontal" className="bg-background border border-border">
                <Shield className="h-5 w-5 text-foreground" strokeWidth={1.5} />
              </ModernCardIcon>
              <ModernCardTitle className="text-base">Enterprise Security</ModernCardTitle>
            </ModernCardTitleRow>
            <ModernCardDescription>
              Advanced security features and compliance standards for enterprise needs
            </ModernCardDescription>
          </ModernCardHeader>
        </ModernCard>
      </div>

      {/* Horizontal cards stacked side by side */}
      <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto mb-12">
        <ModernCard variant="horizontal" className="hover:border-foreground/20">
          <ModernCardHeader variant="horizontal">
            <ModernCardTitleRow>
              <ModernCardIcon variant="horizontal" className="bg-background border border-border">
                <Cpu className="h-5 w-5 text-foreground" strokeWidth={1.5} />
              </ModernCardIcon>
              <ModernCardTitle className="text-base">Advanced AI Models</ModernCardTitle>
            </ModernCardTitleRow>
            <ModernCardDescription>
              Support for multiple LLM providers and custom models
            </ModernCardDescription>
          </ModernCardHeader>
        </ModernCard>

        <ModernCard variant="horizontal" className="hover:border-foreground/20">
          <ModernCardHeader variant="horizontal">
            <ModernCardTitleRow>
              <ModernCardIcon variant="horizontal" className="bg-background border border-border">
                <MessageCircle className="h-5 w-5 text-foreground" strokeWidth={1.5} />
              </ModernCardIcon>
              <ModernCardTitle className="text-base">24/7 Support</ModernCardTitle>
            </ModernCardTitleRow>
            <ModernCardDescription>
              Round-the-clock customer support and monitoring
            </ModernCardDescription>
          </ModernCardHeader>
        </ModernCard>
      </div>

      {/* Minimal cards without icons */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <ModernCard variant="minimal" className="group">
          <ModernCardHeader className="px-0">
            <ModernCardTitle className="text-lg group-hover:text-primary transition-colors">
              Developer Friendly
            </ModernCardTitle>
            <ModernCardDescription>
              Built by developers, for developers. Clean APIs, comprehensive docs, 
              and excellent developer experience.
            </ModernCardDescription>
          </ModernCardHeader>
        </ModernCard>

        <ModernCard variant="minimal" className="group">
          <ModernCardHeader className="px-0">
            <ModernCardTitle className="text-lg group-hover:text-primary transition-colors">
              Global Scale
            </ModernCardTitle>
            <ModernCardDescription>
              Deploy your AI agents worldwide with our global infrastructure 
              and edge computing capabilities.
            </ModernCardDescription>
          </ModernCardHeader>
        </ModernCard>
      </div>
    </section>
  );
};

export default CardShowcase;
