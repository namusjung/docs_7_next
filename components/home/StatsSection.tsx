
import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    { number: "50+", label: "Integrations", description: "Connect with your favorite tools" },
    { number: "99.9%", label: "Uptime", description: "Enterprise-grade reliability" },
    { number: "24/7", label: "Support", description: "Always here when you need us" },
    { number: "10k+", label: "Developers", description: "Building with our platform" }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="text-center border-r border-border last:border-r-0 md:last:border-r-0">
            <div className="text-3xl font-bold text-foreground mb-2">
              {stat.number}
            </div>
            <div className="font-medium text-foreground mb-1 text-sm">
              {stat.label}
            </div>
            <div className="text-xs text-muted-foreground">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
