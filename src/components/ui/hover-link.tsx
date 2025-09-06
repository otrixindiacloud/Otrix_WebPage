"use client";

import Link from "next/link";
import { useHoverNavigation } from "@/hooks/useHoverNavigation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HoverLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  hoverDelay?: number;
  enabled?: boolean;
  external?: boolean;
}

export function HoverLink({ 
  href, 
  children, 
  className, 
  hoverDelay = 800, 
  enabled = true,
  external = false 
}: HoverLinkProps) {
  const hoverNavProps = enabled ? useHoverNavigation(href, { delay: hoverDelay }) : {};
  
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("transition-all duration-200", className)}
        {...hoverNavProps}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn("transition-all duration-200", className)}
      {...hoverNavProps}
    >
      {children}
    </Link>
  );
}
