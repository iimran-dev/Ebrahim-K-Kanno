'use client';

import SectionContainer from './SectionContainer';
import ScrollReveal from './ScrollReveal';
import { brands } from '@/data';

export default function BrandsSection() {
  return (
    <SectionContainer background="white">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-corporate">
            Our Brand Partners
          </h2>
          <p className="text-charcoal/60 mt-3">
            Representing world-class brands across the Kingdom of Bahrain.
          </p>
        </div>
      </ScrollReveal>

      <div className="group overflow-hidden">
        <style>{`
          @keyframes brand-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .brand-scroll-track {
            animation: brand-scroll 25s linear infinite;
          }
          .group:hover .brand-scroll-track {
            animation-play-state: paused;
          }
        `}</style>
        <div className="brand-scroll-track flex items-center">
          {brands.map((brand, i) => (
            <div
              key={`a-${i}`}
              className="px-12 md:px-16 flex-shrink-0"
            >
              <span className="text-2xl md:text-3xl font-display font-bold text-silver hover:text-corporate transition-colors duration-300 select-none">
                {brand}
              </span>
            </div>
          ))}
          {/* Duplicated for seamless loop */}
          {brands.map((brand, i) => (
            <div
              key={`b-${i}`}
              className="px-12 md:px-16 flex-shrink-0"
            >
              <span className="text-2xl md:text-3xl font-display font-bold text-silver hover:text-corporate transition-colors duration-300 select-none">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
