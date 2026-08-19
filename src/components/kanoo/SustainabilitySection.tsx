'use client';

import { Sun, Leaf, TrendingDown, Users } from 'lucide-react';
import SectionContainer from './SectionContainer';
import ScrollReveal from './ScrollReveal';
import { sustainabilityInitiatives } from '@/data';

const iconMap = {
  Sun,
  Leaf,
  TrendingDown,
  Users,
};

export default function SustainabilitySection() {
  return (
    <SectionContainer
      background="surface"
      id="sustainability"
      noPadding
      className="py-12 md:py-16 border-y border-gray-200/60 bg-[#F4F7FA]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Compact Header & Intro */}
        <div className="lg:col-span-5 xl:col-span-4">
          <ScrollReveal direction="right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-[11px] font-bold tracking-wider uppercase mb-3">
              <Leaf className="w-3.5 h-3.5" />
              <span>SUSTAINABILITY</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-corporate leading-tight">
              Driving Bahrain Towards A Sustainable Future.
            </h2>
            <p className="mt-3 text-charcoal/70 text-sm leading-relaxed">
              Sustainability is integral to our business strategy—fostering environmental stewardship and lasting community impact across the Kingdom.
            </p>
          </ScrollReveal>
        </div>

        {/* Right Column: Compact 2x2 Modern Cards Grid */}
        <div className="lg:col-span-7 xl:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sustainabilityInitiatives.map((item, index) => {
              const IconComponent = iconMap[item.iconName];
              return (
                <ScrollReveal key={item.title} delay={0.1 + index * 0.06}>
                  <div className="group bg-white p-5 rounded-xl border border-gray-100/80 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all duration-300 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-charcoal group-hover:text-corporate transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-charcoal/70 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}


