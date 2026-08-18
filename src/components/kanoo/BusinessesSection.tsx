'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import SectionContainer from './SectionContainer';
import ScrollReveal from './ScrollReveal';

const businesses = [
  {
    title: 'Automotive',
    category: 'MOTORS',
    desc: "Bahrain's premier Toyota and Lexus distributor, delivering excellence in mobility since 1963.",
    img: '/images/business-automotive.png',
  },
  {
    title: 'Leasing',
    category: 'FLEET',
    desc: 'Comprehensive fleet management and vehicle leasing solutions tailored to corporate needs.',
    img: '/images/business-leasing.png',
  },
  {
    title: 'Industrial',
    category: 'ENGINEERING',
    desc: 'Industrial equipment, machinery, and engineering solutions for Bahrain\'s growing infrastructure.',
    img: '/images/business-industrial.png',
  },
  {
    title: 'Energy',
    category: 'POWER',
    desc: "Energy solutions driving Bahrain's sustainable future with innovation and reliability.",
    img: '/images/business-energy.png',
  },
  {
    title: 'Technology',
    category: 'DIGITAL',
    desc: 'Advanced IT infrastructure and cybersecurity solutions for the modern enterprise.',
    img: '/images/business-technology.png',
  },
  {
    title: 'Security',
    category: 'PROTECTION',
    desc: 'Comprehensive security systems and surveillance solutions protecting what matters most.',
    img: '/images/business-security.png',
  },
];

export default function BusinessesSection() {
  return (
    <SectionContainer background="white" id="businesses">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-corporate leading-tight">
          Diverse Businesses.
          <br />
          Unified By Purpose.
        </h2>
      </ScrollReveal>

      {/* Mobile: horizontal snap scroll / Desktop: 3-col grid */}
      <div className="mt-12 flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-x-visible md:snap-none md:gap-6 -mx-6 px-6 md:mx-0 md:px-0">
        {businesses.map((biz, index) => (
          <ScrollReveal
            key={biz.title}
            delay={index * 0.08}
            className="flex-none snap-center min-w-[85vw] md:min-w-0 md:flex-auto"
          >
            <div className="group relative overflow-hidden rounded-sm bg-corporate aspect-[4/3] cursor-pointer">
              <Image
                src={biz.img}
                alt={biz.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark/80 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-wider text-white/70 mb-1">
                  {biz.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {biz.title}
                </h3>
                <p className="text-sm text-white/80 max-w-xs">
                  {biz.desc}
                </p>
              </div>

              {/* Arrow icon - top right */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionContainer>
  );
}
