'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  /** 'up' = fade + slide up (default), 'fade' = fade only */
  variant?: 'up' | 'fade';
  /** Stagger delay index (1-6) for card grids */
  delay?: number;
  /** Intersection threshold (0-1). Default 0.15 */
  threshold?: number;
}

export default function AnimateOnScroll({
  children,
  className = '',
  variant = 'up',
  delay,
  threshold = 0.15,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const animClass = variant === 'fade' ? 'animate-fade' : 'animate-on-scroll';
  const delayClass = delay ? `animate-delay-${delay}` : '';

  return (
    <div ref={ref} className={`${animClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
