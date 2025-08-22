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
import { Book, Bot, Cog, ImageIcon, Lock, MessageCircle, User, Wrench, Zap } from "lucide-react";

interface Integrations {
    title: string;
    logo: string;
    link: string;
}

const iconMap = {
  'quickstart': MessageCircle,
  'tool': Wrench,
  'image': ImageIcon,
  'chat': MessageCircle,
  'api': Wrench,
  'guide': MessageCircle,
  'book': Book,
  'bot': Bot,
  'user': User,
  'cog': Cog,
  'padlock': Lock
} as const;

const renderIcon = (integration: any) => {
    const IconComponent = integration.logo && iconMap[integration.logo as keyof typeof iconMap] 
                        ? iconMap[integration.logo as keyof typeof iconMap] 
                        : MessageCircle;
    return <IconComponent className="h-5 w-5 text-foreground" strokeWidth={1.5} />;
}
export const IntegrationSection = ({ items, title, description }: any) => {
    const integrations: Integrations[] = items.length > 0 ? items : [];
    return (
    <section className="max-w-6xl mx-auto px-4 md:px-0 py-16 flex gap-12 flex-col md:flex-row border-t">
        <div className="text-left mb-12 max-w-80">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-4 md:mx-auto mb-12 flex-1">
          {
            integrations.map((integration,key) => (
                <ModernCard 
                variant="horizontal" 
                className="border-0 p-0 group" 
                link={integration.link}
                clickable={true}
                hideLink={true}
                key={key}>
                    <ModernCardHeader variant="horizontal" className="p-0">
                    <ModernCardTitleRow>
                        <ModernCardIcon variant="horizontal" className="bg-background border border-border">
                            {
                                integration.logo.includes('/') ? 
                                (
                                    <img src={integration.logo} alt={integration.title} className="h-10 w-10 rounded-lg" />
                                ) : (
                                    
                                    renderIcon(integration)
                                
                                )
                            }
                        </ModernCardIcon>
                        <ModernCardTitle className="text-base group-hover:underline underline-offset-4">{integration.title}</ModernCardTitle>
                    </ModernCardTitleRow>
                    </ModernCardHeader>
                </ModernCard>
            ))
          }
        </div>
    </section>
      );
}

export default IntegrationSection;