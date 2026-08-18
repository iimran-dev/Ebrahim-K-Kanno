'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

export default function CareersSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = shouldReduceMotion
    ? {}
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      };

  const itemVariants = shouldReduceMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: 'easeOut' },
        },
      };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/careers-bg.png"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-corporate-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.h2
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          variants={itemVariants}
        >
          {"Join Bahrain's Most Trusted"}
          <br />
          {"Business Group."}
        </motion.h2>

        <motion.p
          className="text-lg text-white/70 mt-4 max-w-xl mx-auto"
          variants={itemVariants}
        >
          Build your career with a legacy of excellence.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-10"
          variants={itemVariants}
        >
          <button className="bg-white text-corporate px-8 py-4 font-semibold hover:bg-silver-light transition-colors">
            Explore Careers
          </button>
          <button className="border border-white/40 text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors">
            Life At Kanoo
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
