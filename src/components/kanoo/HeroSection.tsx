'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides as slides } from '@/data';

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (isHovered || shouldReduceMotion) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isHovered, shouldReduceMotion]);

  const slideVariants: Variants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.98, transition: { duration: 0.6, ease: 'easeIn' } },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : custom,
        ease: 'easeOut',
      },
    }),
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative w-full h-[82vh] min-h-[620px] max-h-[880px] overflow-hidden bg-[#071930] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Hero Carousel"
    >
      {/* Background Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.alt}
            fill
            className="object-cover object-center"
            priority={currentIndex === 0}
            sizes="100vw"
          />
          {/* Gradient Overlay for Text Legibility matching image.png */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(7, 25, 48, 0.88) 0%, rgba(7, 25, 48, 0.55) 45%, rgba(7, 25, 48, 0.1) 85%)',
            }}
            aria-hidden="true"
          />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex items-center">
        <div className="max-w-2xl text-white">
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide.id}>
              {/* Main Heading */}
              <motion.h1
                custom={0.1}
                initial="hidden"
                animate="visible"
                variants={contentVariants}
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.12] tracking-tight text-white drop-shadow-md"
              >
                {currentSlide.titleLine1}
                <br />
                {currentSlide.titleLine2}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                custom={0.25}
                initial="hidden"
                animate="visible"
                variants={contentVariants}
                className="mt-5 text-base sm:text-lg md:text-xl text-white/85 max-w-xl font-normal leading-relaxed"
              >
                {currentSlide.subtitle}
              </motion.p>

              {/* Primary CTA Button */}
              <motion.div
                custom={0.4}
                initial="hidden"
                animate="visible"
                variants={contentVariants}
                className="mt-8"
              >
                <a
                  href={currentSlide.ctaLink}
                  className="inline-flex items-center gap-3 bg-[#0B4DA2] hover:bg-[#003B91] active:bg-[#003077] text-white px-8 py-4 font-semibold text-sm tracking-wider uppercase rounded transition-all duration-300 shadow-lg shadow-blue-900/40 group/btn"
                >
                  <span>{currentSlide.ctaText}</span>
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 stroke-[2.5]" aria-hidden="true" />
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Left Navigation Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 bg-black/20 text-white/90 hover:bg-white/20 hover:border-white flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-lg"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2]" />
      </button>

      {/* Right Navigation Button */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white text-[#0B4DA2] shadow-2xl hover:scale-105 flex items-center justify-center transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Bottom Progress Bars (Indicators) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentIndex === idx
                ? 'w-12 bg-[#0056D2] shadow-lg shadow-blue-500/50'
                : 'w-10 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
