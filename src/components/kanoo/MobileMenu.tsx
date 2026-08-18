'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SubItem {
  title: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: SubItem[];
}

const navItems: NavItem[] = [
  {
    label: 'The Group',
    children: [
      { title: 'About Us', href: '#about' },
      { title: 'Heritage', href: '#heritage' },
      { title: 'Leadership', href: '#leadership' },
      { title: 'Bahrain Presence', href: '#presence' },
    ],
  },
  {
    label: 'Businesses',
    children: [
      { title: 'Automotive', href: '#automotive' },
      { title: 'Leasing', href: '#leasing' },
      { title: 'Industrial', href: '#industrial' },
      { title: 'Energy', href: '#energy' },
      { title: 'Technology', href: '#technology' },
      { title: 'Security', href: '#security' },
    ],
  },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Media Centre', href: '#media' },
  { label: 'Investors', href: '#investors' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleAccordion = useCallback((index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset expanded state when menu closes
  // Not needed: AnimatePresence unmounts content when isOpen becomes false,
  // so expandedIndex naturally resets to null on next open.

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-black/50"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-[70] w-[85vw] max-w-[380px] bg-corporate-dark flex flex-col"
            initial={shouldReduceMotion ? { x: 0 } : { x: '100%' }}
            animate={{ x: 0 }}
            exit={shouldReduceMotion ? { x: '100%' } : { x: '100%' }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Close Button */}
            <div className="flex items-center justify-end px-4 h-16 flex-shrink-0">
              <button
                className="flex items-center justify-center w-11 h-11 text-white/60 hover:text-white transition-colors duration-200"
                onClick={onClose}
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            {/* Nav Items */}
            <nav className="flex-1 overflow-y-auto scrollbar-hide" aria-label="Mobile navigation">
              <ul className="divide-y divide-white/[0.06]">
                {navItems.map((item, index) => (
                  <li key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          className={`flex items-center justify-between w-full min-h-[52px] px-5 text-[15px] font-display font-semibold tracking-tight transition-colors duration-200 bg-transparent text-left cursor-pointer border-0 border-white/[0.06] ${
                            expandedIndex === index
                              ? 'text-white'
                              : 'text-white/70 hover:text-white'
                          }`}
                          onClick={() => toggleAccordion(index)}
                          aria-expanded={expandedIndex === index}
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 text-white/30 transition-transform duration-200 ${
                              expandedIndex === index ? 'rotate-180' : ''
                            }`}
                            strokeWidth={2.5}
                            aria-hidden="true"
                          />
                        </button>
                        <AnimatePresence>
                          {expandedIndex === index && (
                            <motion.ul
                              className="bg-corporate/50"
                              initial={shouldReduceMotion ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={shouldReduceMotion ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: 'easeOut' }}
                            >
                              {item.children.map((child) => (
                                <li key={child.title}>
                                  <a
                                    href={child.href}
                                    className="flex items-center min-h-[48px] px-5 pl-10 text-[14px] font-sans text-white/55 hover:text-white hover:bg-white/[0.04] transition-colors duration-200"
                                    onClick={onClose}
                                  >
                                    {child.title}
                                  </a>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="flex items-center min-h-[52px] px-5 text-[15px] font-display font-semibold tracking-tight text-white/70 hover:text-white hover:bg-white/[0.03] transition-colors duration-200"
                        onClick={onClose}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="flex-shrink-0 px-5 py-5 border-t border-white/[0.06]">
              <a
                href="#"
                className="block text-center min-h-[44px] leading-[44px] text-[13px] font-sans font-medium tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-200"
                dir="rtl"
              >
                العربية
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
