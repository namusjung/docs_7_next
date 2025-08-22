
import * as React from "react"
import { cn } from "../../lib/utils"

const ModernCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'default' | 'glass' | 'elevated' | 'horizontal' | 'minimal'
    size?: 'sm' | 'md' | 'lg'
    link?: string
    hideLink?: boolean
    clickable?: boolean
  }
>(({ className, variant = 'default', size = 'md', link, hideLink = false, clickable = false, onClick, ...props }, ref) => {
  const variants = {
    default: "bg-card border border-border shadow-none",
    glass: "bg-card/50 backdrop-blur-sm border border-border/50 shadow-none",
    elevated: "bg-card border border-border shadow-sm",
    horizontal: "bg-card border border-border shadow-none flex flex-row items-start",
    minimal: "bg-transparent border-0 shadow-none"
  }
  
  const sizes = {
    sm: "rounded-lg",
    md: "rounded-xl", 
    lg: "rounded-2xl"
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (clickable && link) {
      window.open(link);
    }
    if (onClick) {
      onClick(event);
    }
  }
  
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-200",
        variants[variant],
        sizes[size],
        (clickable && link) && "cursor-pointer hover:border-foreground/30",
        className
      )}
      onClick={handleClick}
      {...props}
    />
  )
})
ModernCard.displayName = "ModernCard"

const ModernCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'default' | 'horizontal'
  }
>(({ className, variant = 'default', ...props }, ref) => {
  const headerVariants = {
    default: "flex flex-col space-y-1.5 p-6",
    horizontal: "flex flex-col space-y-3 p-6 flex-1"
  }
  
  return (
    <div
      ref={ref}
      className={cn(headerVariants[variant], className)}
      {...props}
    />
  )
})
ModernCardHeader.displayName = "ModernCardHeader"

const ModernCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight text-foreground",
      className
    )}
    {...props}
  />
))
ModernCardTitle.displayName = "ModernCardTitle"

const ModernCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground leading-relaxed", className)}
    {...props}
  />
))
ModernCardDescription.displayName = "ModernCardDescription"

const ModernCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'default' | 'horizontal'
  }
>(({ className, variant = 'default', ...props }, ref) => {
  const contentVariants = {
    default: "p-6 pt-0",
    horizontal: "p-6 py-0 flex-1"
  }
  
  return (
    <div 
      ref={ref} 
      className={cn(contentVariants[variant], className)} 
      {...props} 
    />
  )
})
ModernCardContent.displayName = "ModernCardContent"

const ModernCardIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'default' | 'horizontal'
  }
>(({ className, variant = 'default', ...props }, ref) => {
  const iconVariants = {
    default: "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
    horizontal: "w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0"
  }
  
  return (
    <div
      ref={ref}
      className={cn(iconVariants[variant], className)}
      {...props}
    />
  )
})
ModernCardIcon.displayName = "ModernCardIcon"

const ModernCardTitleRow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center mb-3", className)}
    {...props}
  />
))
ModernCardTitleRow.displayName = "ModernCardTitleRow"

const ModernCardLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, children, ...props }, ref) => (
  <a
    ref={ref}
    className={cn("text-sm text-foreground hover:text-primary transition-colors inline-flex items-center gap-2", className)}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
))
ModernCardLink.displayName = "ModernCardLink"

export { 
  ModernCard, 
  ModernCardHeader, 
  ModernCardTitle, 
  ModernCardDescription, 
  ModernCardContent, 
  ModernCardIcon,
  ModernCardTitleRow,
  ModernCardLink
}
