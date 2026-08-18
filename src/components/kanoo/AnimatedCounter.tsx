'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

export default function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2,
  label,
}: AnimatedCounterProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  const startAnimation = useCallback(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldReduceMotion, startAnimation]);

  const displayCount = shouldReduceMotion ? end : count;

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
        {prefix}{displayCount}{suffix}
      </div>
      <div className="mt-2 text-sm md:text-base text-white/70 uppercase tracking-[0.15em] font-medium">
        {label}
      </div>
    </div>
  );
}
