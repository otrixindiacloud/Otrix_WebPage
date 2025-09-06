// Performance optimization utilities

export const animationConfig = {
  // Reduced motion for accessibility
  reducedMotion: {
    duration: 0.3,
    ease: "easeOut"
  },
  
  // Standard animations
  standard: {
    duration: 0.6,
    ease: "easeOut"
  },
  
  // Fast animations for micro-interactions
  fast: {
    duration: 0.2,
    ease: "easeOut"
  }
};

export const lazyLoadConfig = {
  threshold: 0.1,
  rootMargin: "-50px",
  delay: 100
};

export const intersectionObserverConfig = {
  threshold: 0.1,
  rootMargin: "-100px"
};

// Debounce utility for performance
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle utility for performance
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Image optimization settings
export const imageOptimization = {
  quality: 80,
  formats: ['webp', 'avif'],
  sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
};

// Animation performance settings
export const animationPerformance = {
  willChange: 'transform, opacity',
  backfaceVisibility: 'hidden',
  perspective: '1000px'
};
