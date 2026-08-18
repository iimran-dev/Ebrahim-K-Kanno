'use client';

import { useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Building2,
  History,
  Users,
  MapPin,
  Car,
  KeyRound,
  Factory,
  Zap,
  Cpu,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

interface MegaMenuProps {
  activeKey: 'group' | 'businesses';
  onClose: () => void;
  onMouseLeave: () => void;
}

const groupLinks = [
  {
    icon: Building2,
    title: 'About Us',
    description: 'Our vision, mission, and corporate values driving growth across the Kingdom.',
    href: '#about',
  },
  {
    icon: History,
    title: 'Heritage',
    description: 'Over a century of enterprise excellence and enduring community impact in Bahrain.',
    href: '#heritage',
  },
  {
    icon: Users,
    title: 'Leadership',
    description: 'Meet the executive team guiding the Group into its next chapter of innovation.',
    href: '#leadership',
  },
  {
    icon: MapPin,
    title: 'Bahrain Presence',
    description: 'Our network of showrooms, facilities, and operations across the Kingdom.',
    href: '#presence',
  },
];

const businessLinks = [
  {
    icon: Car,
    title: 'Automotive',
    description: 'Premium vehicle sales, aftersales, and service for world-class automotive brands.',
    href: '#automotive',
  },
  {
    icon: KeyRound,
    title: 'Leasing',
    description: 'Flexible fleet and corporate leasing solutions tailored to your business needs.',
    href: '#leasing',
  },
  {
    icon: Factory,
    title: 'Industrial',
    description: 'Heavy machinery, equipment, and engineering services for industrial sectors.',
    href: '#industrial',
  },
  {
    icon: Zap,
    title: 'Energy',
    description: 'Power generation, renewables, and energy solutions for a sustainable future.',
    href: '#energy',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Digital transformation, IT infrastructure, and smart technology solutions.',
    href: '#technology',
  },
  {
    icon: ShieldCheck,
    title: 'Security',
    description: 'Comprehensive security systems, surveillance, and protective solutions.',
    href: '#security',
  },
];

const menuData = {
  group: {
    title: 'The Group',
    subtitle: 'Discover Ebrahim K. Kanoo Group',
    links: groupLinks,
  },
  businesses: {
    title: 'Businesses',
    subtitle: 'Our diversified portfolio',
    links: businessLinks,
  },
};

export default function MegaMenu({ activeKey, onClose, onMouseLeave }: MegaMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const data = menuData[activeKey];
  const isBusiness = activeKey === 'businesses';

  const handleMouseLeave = useCallback(() => {
    onMouseLeave();
  }, [onMouseLeave]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      ref={containerRef}
      className="absolute top-full left-0 right-0 bg-corporate text-white shadow-[0_8px_30px_rgba(10,45,94,0.2)] z-40"
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0, y: 0 } : { opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      onMouseLeave={handleMouseLeave}
      role="menu"
      aria-label={`${data.title} submenu`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 py-10 md:py-12">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="font-display text-lg md:text-xl font-semibold tracking-tight">
            {data.title}
          </h2>
          <p className="mt-1 text-sm text-white/50 font-sans">
            {data.subtitle}
          </p>
        </div>

        {/* Links Grid */}
        <div
          className={`grid gap-px bg-white/[0.06] ${
            isBusiness
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          }`}
        >
          {data.links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.title}
                href={link.href}
                className="group/item flex items-start gap-4 p-5 bg-corporate hover:bg-corporate-light/80 transition-colors duration-200"
                role="menuitem"
              >
                <div className="flex-shrink-0 mt-0.5 w-10 h-10 flex items-center justify-center rounded bg-white/[0.08] group-hover/item:bg-white/[0.14] transition-colors duration-200">
                  <Icon className="w-5 h-5 text-white/70 group-hover/item:text-white transition-colors duration-200" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-sm font-semibold tracking-tight">
                      {link.title}
                    </span>
                    <ChevronRight
                      className="w-4 h-4 text-white/30 group-hover/item:text-white/70 -translate-x-1 group-hover/item:translate-x-0 transition-all duration-200 flex-shrink-0"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/45 group-hover/item:text-white/60 transition-colors duration-200 font-sans">
                    {link.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
