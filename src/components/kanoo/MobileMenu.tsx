'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, MapPin, ChevronRight } from 'lucide-react';
import { headerNavItems } from '@/data';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const shouldReduceMotion = useReducedMotion();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-xs"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-[70] w-[85vw] max-w-[340px] bg-[#05162E] text-white flex flex-col border-l border-white/10 shadow-2xl"
            initial={shouldReduceMotion ? { x: 0 } : { x: '100%' }}
            animate={{ x: 0 }}
            exit={shouldReduceMotion ? { x: '100%' } : { x: '100%' }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 h-16 border-b border-white/10 shrink-0">
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white tracking-tight">
                  EK KANOO
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-emerald-400">
                  GROUP
                </span>
              </div>

              <button
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200"
                onClick={onClose}
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" strokeWidth={2} />
              </button>
            </div>

            {/* Direct Navigation Links */}
            <nav className="flex-1 overflow-y-auto scrollbar-hide py-3 px-3" aria-label="Mobile navigation">
              <ul className="space-y-1">
                {headerNavItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="flex items-center justify-between min-h-[50px] px-4 rounded-xl text-sm font-display font-semibold tracking-tight text-white/80 hover:text-white hover:bg-white/10 active:bg-white/15 transition-all duration-200 group"
                      onClick={onClose}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Footer CTA */}
            <div className="p-4 border-t border-white/10 shrink-0 bg-white/[0.02]">
              <a
                href="#presence"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-500 text-black text-xs font-bold uppercase tracking-wider shadow-md active:scale-98 transition-all"
              >
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Our Presence</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

