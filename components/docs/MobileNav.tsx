"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import ModernButton from "@/components/ui/ModernButton";
import { cn } from "@/lib/utils";
import { useMobileNav } from "./MobileNavContext";

type NavItem = {
  slug: string[];
  frontmatter: { title?: string };
};

type GroupedNav = {
  section: string;
  items: NavItem[];
};

interface MobileNavProps {
  groupedNav: GroupedNav[];
  currentSlug: string[];
  basePath: string;
}

export default function MobileNav({ groupedNav, currentSlug, basePath }: MobileNavProps) {
  const { isOpen, setIsOpen } = useMobileNav();

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Flyout Menu */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-background dark:bg-[#0e0e10] border-r border-border z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto lg:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between z-10">
          <h2 className="font-semibold text-sm">Navigation</h2>
          <ModernButton
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 p-0"
            iconOnly
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </ModernButton>
        </div>

        <nav className="p-4 space-y-6">
          {groupedNav.map((group) => (
            <div key={group.section}>
              <p className="text-xs uppercase tracking-wide !text-gray-600/40 dark:!text-gray-200 mb-3">
                {group.section.replace(/-/g, " ")}
              </p>
              <div className="space-y-1">
                {group.items.map((item) => {
                  const itemSlug = item.slug.join("/");
                  const currentItemSlug = currentSlug.join("/");
                  const isActive = itemSlug === currentItemSlug;

                  return (
                    <Link
                      key={itemSlug}
                      href={`${basePath}/${itemSlug}`}
                      onClick={handleLinkClick}
                      className={cn(
                        "block text-[13px] px-4 py-2 rounded-lg transition-colors",
                        isActive
                          ? "!bg-muted/20 dark:bg-muted !text-black dark:!text-white font-medium"
                          : "hover:bg-muted/10 hover:!text-black dark:hover:!text-white text-foreground/70"
                      )}
                    >
                      {item.frontmatter.title || item.slug[item.slug.length - 1]}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}

