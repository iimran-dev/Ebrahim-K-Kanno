'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : delay,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/images/hero-bg.png"
        alt="Ebrahim K. Kanoo Group - Corporate headquarters"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(7, 29, 62, 0.92) 0%, rgba(7, 29, 62, 0.5) 50%, rgba(7, 29, 62, 0.05) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex items-end">
        <div className="w-full px-6 pb-16 md:px-10 md:pb-24 lg:px-16">
          <motion.p
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-sm font-medium uppercase tracking-[0.2em] text-white/70"
          >
            Ebrahim K. Kanoo Group
          </motion.p>

          <motion.h1
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-7xl"
          >
            Driven By Trust.
            <br />
            Powered By Excellence.
          </motion.h1>

          <motion.p
            custom={0.6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg text-white/80"
          >
            For over 60 years, Ebrahim K. Kanoo has been Bahrain&apos;s trusted
            partner in progress.
          </motion.p>

          <motion.div
            custom={0.8}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#businesses"
              className="inline-flex items-center justify-center bg-white px-8 py-4 font-semibold text-corporate transition-colors hover:bg-silver"
            >
              Explore Our Businesses
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center gap-2 border border-white/40 px-8 py-4 font-medium text-white transition-colors hover:bg-white/10"
            >
              <Play className="h-4 w-4" aria-hidden="true" />
              Watch Corporate Story
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : { y: [0, 6, 0] }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center gap-1"
        >
          <ChevronDown className="h-5 w-5 text-white/60" />
          <span className="text-xs uppercase tracking-[0.15em] text-white/50">
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
