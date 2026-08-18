'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

const navItems = [
  { label: 'The Group', hasMega: true, megaKey: 'group' as const },
  { label: 'Businesses', hasMega: true, megaKey: 'businesses' as const },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Media Centre', href: '#media' },
  { label: 'Investors', href: '#investors' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<'group' | 'businesses' | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMegaEnter = useCallback((key: 'group' | 'businesses') => {
    setActiveMega(key);
  }, []);

  const handleMegaLeave = useCallback(() => {
    // Small delay to allow mouse to move to mega menu
    const timer = setTimeout(() => {
      setActiveMega(null);
    }, 150);
    return () => clearTimeout(timer);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(10,45,94,0.08)]' : 'bg-white'
        }`}
        initial={false}
        animate={scrolled ? { y: 0 } : { y: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3, ease: 'easeOut' }}
      >
        {/* Top Utility Bar */}
        <div className="bg-corporate text-white/80">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 flex items-center justify-end h-8">
            <nav className="flex items-center gap-4 md:gap-6" aria-label="Utility navigation">
              <a
                href="#careers"
                className="text-[11px] md:text-xs tracking-wide uppercase hover:text-white transition-colors duration-200 font-sans"
              >
                Careers
              </a>
              <span className="text-white/20" aria-hidden="true">|</span>
              <a
                href="#contact"
                className="text-[11px] md:text-xs tracking-wide uppercase hover:text-white transition-colors duration-200 font-sans"
              >
                Contact
              </a>
              <span className="text-white/20" aria-hidden="true">|</span>
              <a
                href="#"
                className="text-[11px] md:text-xs tracking-wide hover:text-white transition-colors duration-200 font-sans"
                dir="rtl"
              >
                العربية
              </a>
            </nav>
          </div>
        </div>

        {/* Main Navigation */}
        <div className={`border-b transition-colors duration-300 ${
          scrolled ? 'border-corporate/5' : 'border-silver-light'
        }`}>
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <a href="#" className="flex flex-col items-start leading-none select-none group" aria-label="EK Kanoo Group Home">
              <span className="font-display text-xl md:text-2xl font-bold text-corporate tracking-tight transition-colors duration-200 group-hover:text-corporate-light">
                EK KANOO
              </span>
              <span className="text-[9px] md:text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-corporate/60 mt-0.5">
                GROUP
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center h-full" aria-label="Main navigation">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={item.hasMega ? () => handleMegaEnter(item.megaKey!) : undefined}
                  onMouseLeave={item.hasMega ? handleMegaLeave : undefined}
                >
                  {item.hasMega ? (
                    <button
                      className={`flex items-center gap-1 h-full px-4 text-[13px] font-sans font-medium tracking-wide uppercase transition-colors duration-200 border-b-2 -mb-px cursor-pointer bg-transparent border-transparent hover:text-corporate-light ${
                        activeMega === item.megaKey
                          ? 'text-corporate-light border-corporate'
                          : 'text-charcoal/80'
                      }`}
                      aria-expanded={activeMega === item.megaKey}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg
                        className={`w-3 h-3 mt-px transition-transform duration-200 ${
                          activeMega === item.megaKey ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="h-full flex items-center px-4 text-[13px] font-sans font-medium tracking-wide uppercase text-charcoal/80 hover:text-corporate-light transition-colors duration-200 border-b-2 -mb-px border-transparent hover:border-corporate/30"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center w-11 h-11 -mr-2 text-corporate hover:text-corporate-light transition-colors duration-200"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {activeMega && (
            <MegaMenu
              activeKey={activeMega}
              onClose={() => setActiveMega(null)}
              onMouseLeave={handleMegaLeave}
            />
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={handleMobileClose} />

      {/* Header spacer to prevent content jump */}
      <div className="h-[96px] md:h-[104px]" aria-hidden="true" />
    </>
  );
}
