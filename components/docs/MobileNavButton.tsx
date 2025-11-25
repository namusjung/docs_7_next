"use client";

import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import ModernButton from "@/components/ui/ModernButton";
import { MobileNavContext } from "./MobileNavContext";

export default function MobileNavButton() {
  const pathname = usePathname();
  const context = useContext(MobileNavContext);
  
  const isDocsOrApiPage = pathname?.startsWith("/docs") || pathname?.startsWith("/api");
  
  // Only show on docs/api pages and on mobile (below 768px)
  if (!isDocsOrApiPage) {
    return null;
  }

  // Try to get context - if not available, don't render
  if (!context) {
    // Context not available yet (page might not have loaded provider)
    return null;
  }

  const { setIsOpen } = context;

  return (
    <ModernButton
      variant="ghost"
      size="sm"
      onClick={() => setIsOpen(true)}
      className="h-8 w-8 p-0 flex lg:hidden"
      iconOnly
      aria-label="Open navigation menu"
    >
      <Menu className="h-5 w-5" />
    </ModernButton>
  );
}
