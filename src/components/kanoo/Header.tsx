'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu, MapPin } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { headerNavItems } from '@/data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileClose = useCallback(() => {
    setMobileOpen(false);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200/60 shadow-xs py-2.5'
            : 'bg-white border-b border-gray-100 py-3.5'
        }`}
        initial={false}
        animate={{ y: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3, ease: 'easeOut' }}
      >
        {/* Main Container */}
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-16 flex items-center justify-between h-12 sm:h-14 md:h-16">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex flex-col items-start leading-none select-none group"
            aria-label="Ebrahim K. Kanoo Group"
          >
            <span className="font-display text-lg sm:text-xl md:text-2xl font-bold text-corporate tracking-tight transition-colors duration-200 group-hover:text-corporate-light">
              EK KANOO
            </span>
            <span className="text-[8px] sm:text-[9px] md:text-[10px] font-sans font-semibold uppercase tracking-[0.26em] text-corporate/60 mt-0.5">
              GROUP
            </span>
          </a>

          {/* Desktop Direct Links Navigation (No Dropdown) */}
          <nav className="hidden lg:flex items-center gap-1 sm:gap-1.5 h-full" aria-label="Main navigation">
            {headerNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-charcoal/80 hover:text-corporate hover:bg-corporate/5 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions & Mobile Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#presence"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-corporate text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider hover:bg-corporate-light transition-all shadow-xs hover:shadow-md"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>OUR PRESENCE</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-corporate/5 text-corporate hover:bg-corporate/10 transition-colors duration-200 shrink-0"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={handleMobileClose} />

      {/* Spacer to prevent content jump */}
      <div className="h-[68px] sm:h-[72px] md:h-[80px]" aria-hidden="true" />
    </>
  );
}



