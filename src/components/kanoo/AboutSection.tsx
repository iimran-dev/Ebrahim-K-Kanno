'use client';

import Image from 'next/image';
import { ChevronRight, Play, Award, Users, Leaf } from 'lucide-react';
import SectionContainer from './SectionContainer';
import ScrollReveal from './ScrollReveal';
import { aboutData } from '@/data';

const iconMap = {
  Award,
  Users,
  Leaf,
};

export default function AboutSection() {
  return (
    <SectionContainer background="surface" id="about" className="bg-[#F2F5F8]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column - Text & Features */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <ScrollReveal direction="right">
              <span className="text-[#3B669B] font-semibold text-xs md:text-sm tracking-widest uppercase block mb-3">
                {aboutData.tag}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] font-bold text-corporate leading-[1.2]">
                {aboutData.titleLine1}
                <br />
                {aboutData.titleLine2}
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <p className="text-charcoal/80 text-sm md:text-base leading-relaxed mt-5 mb-8 max-w-2xl">
                {aboutData.description}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.25}>
              <a
                href={aboutData.ctaHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-corporate text-corporate hover:bg-corporate hover:text-white transition-all text-xs font-bold tracking-wider uppercase rounded-sm group mb-10"
              >
                <span>{aboutData.ctaText}</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </ScrollReveal>
          </div>

          {/* Bottom 3 Feature Highlights */}
          <ScrollReveal direction="up" delay={0.35}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-200/60">
              {aboutData.features.map((feat) => {
                const IconComponent = iconMap[feat.iconName];
                return (
                  <div key={feat.iconName} className="flex items-start gap-3">
                    <IconComponent className="w-6 h-6 text-corporate shrink-0 mt-0.5 stroke-[1.75]" />
                    <span className="text-xs md:text-sm font-bold text-corporate leading-snug whitespace-pre-line">
                      {feat.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column - Image / Video Overlay */}
        <div className="lg:col-span-5">
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative w-full aspect-[4/3] lg:aspect-[16/11] xl:aspect-[4/3] rounded-sm overflow-hidden shadow-sm group cursor-pointer">
              <Image
                src={aboutData.image}
                alt={aboutData.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority={false}
              />

              {/* Dark Overlay gradient for contrast */}
              <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/30 flex flex-col items-center justify-center text-center p-4">
                <button
                  type="button"
                  aria-label="Watch Our Story"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-3"
                >
                  <Play className="w-6 h-6 text-corporate fill-corporate ml-1" />
                </button>
                <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase drop-shadow-md">
                  WATCH OUR STORY
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionContainer>
  );
}


