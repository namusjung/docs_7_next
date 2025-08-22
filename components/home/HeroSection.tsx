
import React, { useEffect } from 'react';
import { ArrowRight, BookOpen, Code2 } from 'lucide-react';
import ModernButton from '@/components/ui/ModernButton';
import { FlickeringGrid } from '@/components/ui/flickering-grid-hero';
import Link from 'next/link';

interface HeroSectionProps {
  theme: string;
  type?: string;
  title?: string;
  description?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ theme, type = "", title, description }) => {
    useEffect(() => {
      theme = "dark";
    },[theme]);
  return (
    <section className="bg-background border-b border-border/50 py-0 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-0 relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-12 items-center min-h-[350px]`}>
          {/* Left Column - Content */}
          <div className="max-w-xl order-1 md:order-[-1] py-7 md:py-0">
            {/* Logo/Icon */}
            <div className="flex items-center gap-3 mb-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground" style={{marginBottom: type === "other" ? "0px" : "auto"}}>{title}</h1>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-sm text-muted-foreground mb-8">
             {description}
            </p>
            
            {/* Action Buttons */}
            {
              type !== "other" && (
                <div className="flex flex-wrap gap-4">
                  <Link href="/docs/getting-started/introduction">
                  <ModernButton 
                    variant="primary"
                    className="inline-flex items-center gap-2"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Getting Started
                  </ModernButton>
                  </Link>
                  <Link href="/api/api-reference/">
                  <ModernButton 
                    variant="outline"
                    className="inline-flex items-center gap-2"
                  >
                    <Code2 className="h-4 w-4" />
                    API Reference
                  </ModernButton>
                  </Link>
                </div>
              )
            }
          </div>

          {/* Right Column - FlickeringGrid Animation */}
          <div className={`relative h-full min-h-[155px] md:min-h-[350px] flex items-center justify-center`}>
            {/* Background flickering grid with radial mask */}
            <FlickeringGrid
              className="absolute inset-0 z-0"
              style={{
                maskImage: 'radial-gradient(400px circle at center, white, transparent)',
                WebkitMaskImage: 'radial-gradient(400px circle at center, white, transparent)',
              }}
              squareSize={1.2}
              gridGap={3}
              flickerChance={5}
              color="hsl(var(--foreground))"
              maxOpacity={0.25}
            />
            
            {/* Logo masked flickering grid */}
            <div 
              className="absolute inset-0 z-10 flex items-center justify-center"
              style={{
                maskImage: `url('/logo-no-outline.svg')`,
                WebkitMaskImage: `url('/logo-no-outline.svg')`,
                maskSize: type === "other" ? '300px auto': '400px auto',
                WebkitMaskSize: type === "other" ? '300px auto': '400px auto',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
              }}
            >
              <FlickeringGrid
                squareSize={1}
                gridGap={1.5}
                flickerChance={3}
                color="hsl(var(--foreground))"
                maxOpacity={0.9}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
