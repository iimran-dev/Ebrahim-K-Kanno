'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'surface' | 'corporate' | 'corporate-dark';
  fullHeight?: boolean;
  noPadding?: boolean;
}

export default function SectionContainer({
  children,
  className = '',
  id,
  background = 'white',
  fullHeight = false,
  noPadding = false,
}: SectionContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  const bgClass = {
    white: 'bg-white',
    surface: 'bg-surface',
    corporate: 'bg-corporate',
    'corporate-dark': 'bg-corporate-dark',
  }[background];

  const textColor = background === 'corporate' || background === 'corporate-dark'
    ? 'text-white'
    : 'text-charcoal';

  return (
    <motion.section
      id={id}
      className={`${bgClass} ${textColor} ${fullHeight ? 'min-h-screen' : ''} ${noPadding ? '' : 'py-20 md:py-28 lg:py-32'} ${className}`}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        {children}
      </div>
    </motion.section>
  );
}
