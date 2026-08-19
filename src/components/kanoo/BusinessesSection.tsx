'use client';

import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import SectionContainer from './SectionContainer';
import ScrollReveal from './ScrollReveal';

const businesses = [
  {
    title: 'Automotive',
    desc: 'Toyota, Lexus and complete mobility solutions.',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Leasing',
    desc: 'Smart leasing solutions for businesses.',
    img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Industrial',
    desc: 'World-class equipment and industrial solutions.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Information Technology',
    desc: 'Innovative IT solutions for a connected world.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Energy',
    desc: 'Powering a cleaner and sustainable tomorrow.',
    img: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Security',
    desc: 'Advanced security solutions for total peace of mind.',
    img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
  },
];

export default function BusinessesSection() {
  return (
    <SectionContainer background="white" id="businesses">
      <ScrollReveal className="text-center">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#0B4DA2] block mb-2">
          OUR BUSINESSES
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C2340] leading-tight">
          Diverse Businesses. Unified by Purpose.
        </h2>
        <div className="w-12 h-1 bg-[#0056D2] mx-auto mt-4 rounded-full" aria-hidden="true" />
      </ScrollReveal>

      {/* 6-column responsive card grid matching image.png */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-6">
        {businesses.map((biz, index) => (
          <ScrollReveal
            key={biz.title}
            delay={index * 0.07}
            className="flex flex-col h-full"
          >
            <div className="group relative bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col h-full cursor-pointer">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={biz.img}
                  alt={biz.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>

              {/* Card Content Area */}
              <div className="p-5 flex flex-col flex-1 justify-between bg-white text-left">
                <div>
                  <h3 className="font-bold text-base md:text-lg text-[#0C2340] group-hover:text-[#0056D2] transition-colors leading-snug mb-2">
                    {biz.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-normal font-normal">
                    {biz.desc}
                  </p>
                </div>

                {/* Bottom Blue Arrow Icon */}
                <div className="mt-4 pt-2">
                  <ArrowRight className="w-4 h-4 text-[#0056D2] group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Bottom Center Outline Button */}
      <div className="mt-12 text-center">
        <a
          href="#businesses"
          className="inline-flex items-center gap-2 border border-[#0B4DA2]/40 hover:border-[#0B4DA2] text-[#0B4DA2] hover:bg-[#0B4DA2] hover:text-white px-8 py-3.5 rounded font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm group"
        >
          <span>EXPLORE ALL BUSINESSES</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </SectionContainer>
  );
}
