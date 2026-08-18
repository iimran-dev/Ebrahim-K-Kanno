'use client';

import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
import SectionContainer from './SectionContainer';
import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
  return (
    <SectionContainer background="white" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Text */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="right">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-corporate leading-tight">
              A Legacy Built On Trust.
              <br />
              A Future Driven By Innovation.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="mt-8 space-y-5">
              <p className="text-charcoal/80 leading-relaxed">
                For over six decades, Ebrahim K. Kanoo Group has been a cornerstone of
                Bahrain&rsquo;s commercial landscape. Founded on principles of integrity and
                excellence, the Group has grown from a single trading enterprise into one
                of the Kingdom&rsquo;s most diversified conglomerates.
              </p>
              <p className="text-charcoal/80 leading-relaxed">
                Our partnership with world-class brands including Toyota, Lexus, and
                Komatsu reflects our unwavering commitment to quality. Across automotive,
                industrial, energy, technology, and security sectors, we deliver solutions
                that drive progress for businesses and communities throughout the region.
              </p>
              <p className="text-charcoal/80 leading-relaxed">
                Today, with more than 2,600 dedicated professionals across 15 divisions,
                we continue to invest in people, innovation, and sustainable practices that
                will shape the future of Bahrain and beyond.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.25}>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-corporate font-medium hover:gap-3 transition-all mt-10"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4" />
            </a>
          </ScrollReveal>
        </div>

        {/* Right Column - Image */}
        <div className="lg:col-span-5">
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative rounded-sm overflow-hidden aspect-[4/3]">
              <Image
                src="/images/about-section.png"
                alt="Ebrahim K. Kanoo Group heritage and innovation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority={false}
              />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Play video about our story"
                  className="relative w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <span className="absolute inset-0 rounded-full bg-white/90 animate-ping opacity-20" />
                  <Play className="w-6 h-6 text-corporate fill-corporate ml-0.5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionContainer>
  );
}
