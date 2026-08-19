'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import SectionContainer from './SectionContainer';
import ScrollReveal from './ScrollReveal';
import { leaders, Leader } from '@/data';

function LeaderCard({
  leader,
  index,
}: {
  leader: Leader;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div
        className="relative overflow-hidden group cursor-pointer max-w-sm mx-auto w-full"
        whileHover={shouldReduceMotion ? {} : { y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <div className="aspect-[3/4] relative">
          <Image
            src={leader.img}
            alt={leader.name}
            fill
            className="object-cover transition-all duration-500 [filter:grayscale(100%)] group-hover:[filter:grayscale(0%)] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-corporate-dark/80 to-transparent p-6">
          <div className="transition-transform duration-300 group-hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-white">{leader.name}</h3>
            <p className="text-sm text-white/70 uppercase tracking-wider mt-1">
              {leader.title}
            </p>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function LeadershipSection() {
  return (
    <SectionContainer background="white">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-corporate">
          Leadership Driving Transformation.
        </h2>
        <p className="text-charcoal/60 max-w-2xl mt-3">
          Our leadership team brings decades of experience and a shared vision
          for Bahrain&apos;s future.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
        {leaders.map((leader, i) => (
          <LeaderCard key={i} leader={leader} index={i} />
        ))}
      </div>
    </SectionContainer>
  );
}
