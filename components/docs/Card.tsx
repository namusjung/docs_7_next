"use client";
import React from 'react';
import { ArrowRight, MessageCircle, Wrench, Image as ImageIcon, Book, Bot, ArrowUpRight } from 'lucide-react';
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
interface CardData {
  icon?: string;
  title?: string;
  description?: string;
  link?: string;
}

interface DocsCardProps {
  children: any;
}
type Props = {
  title?: string;
  icon?: string;
  children?: any;
};

// Icon mapping for common card types
const iconMap = {
  'quickstart': MessageCircle,
  'tool': Wrench,
  'image': ImageIcon,
  'chat': MessageCircle,
  'api': Wrench,
  'guide': MessageCircle,
  'book': Book,
  'bot': Bot
} as const;

export function DocsCard({ title, icon, children }: Props) {
  let cards: CardData[] = [];
 // console.log(React.Children.toArray(children.props.children).join('').trim())
  
  try {
    const jsonString = React.Children.toArray(children.props.children).join('').trim();
    cards = JSON.parse(jsonString);
  } catch (error) {
    console.error('DocsCard: Failed to parse JSON:', error);
    return (
      <div className="my-6 p-4 border border-destructive rounded text-destructive">
        Error: Invalid JSON format in card content
      </div>
    );
  }

  if (!Array.isArray(cards) || cards.length === 0) {
    return (
      <div className="my-6 p-4 border border-muted rounded text-muted-foreground">
        No cards to display
      </div>
    );
  }

  return (
    <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => {
        // Get icon component based on icon string or fallback to MessageCircle
        const IconComponent = card.icon && iconMap[card.icon as keyof typeof iconMap] 
          ? iconMap[card.icon as keyof typeof iconMap] 
          : MessageCircle;

        return (
          <ModernCard 
            variant="horizontal" 
            key={index}
            className="hover:border-foreground/20 relative group"
            link={card.link && card.link}
            clickable={true}
            hideLink={true}>
              <ArrowUpRight className="hidden w-5 h-5 absolute right-5 top-5 group-hover:block" />
              <ModernCardHeader variant="horizontal">
                    <ModernCardTitleRow>
                    <ModernCardIcon variant="horizontal" className="bg-background p-0 w-4 h-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                    </ModernCardIcon>
                    {card.title && (
                      <ModernCardTitle className="!font-semibold !tracking-tight !text-foreground !text-base !my-0">{card.title}</ModernCardTitle>
                    )}
                    
                    </ModernCardTitleRow>
                    {card.description && (
                         <ModernCardDescription>
                            {card.description}
                         </ModernCardDescription>
                    )}
                   
                </ModernCardHeader>
          </ModernCard>
        );
      })}
    </div>
  );
}
export default DocsCard;


