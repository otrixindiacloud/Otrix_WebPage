"use client";

import { useRouter } from "next/navigation";
import { useCallback, useRef } from "react";

interface HoverNavigationOptions {
  delay?: number; // Delay in milliseconds before navigation
  enabled?: boolean; // Whether hover navigation is enabled
  onHoverStart?: () => void; // Callback when hover starts
  onHoverEnd?: () => void; // Callback when hover ends
  onNavigate?: () => void; // Callback when navigation occurs
}

export function useHoverNavigation(
  href: string,
  options: HoverNavigationOptions = {}
) {
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const {
    delay = 800, // Default 800ms delay
    enabled = true,
    onHoverStart,
    onHoverEnd,
    onNavigate,
  } = options;

  const handleMouseEnter = useCallback(() => {
    if (!enabled || !href) return;
    
    onHoverStart?.();
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Set new timeout for navigation
    timeoutRef.current = setTimeout(() => {
      onNavigate?.();
      router.push(href);
    }, delay);
  }, [enabled, href, delay, router, onHoverStart, onNavigate]);

  const handleMouseLeave = useCallback(() => {
    if (!enabled) return;
    
    onHoverEnd?.();
    
    // Clear timeout if user leaves before delay
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [enabled, onHoverEnd]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    // Clear timeout and navigate immediately on click
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    onNavigate?.();
    router.push(href);
  }, [href, router, onNavigate]);

  return {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick,
  };
}
