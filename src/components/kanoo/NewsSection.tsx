'use client';

import Image from 'next/image';
import { ArrowRight, Calendar, Newspaper } from 'lucide-react';
import SectionContainer from './SectionContainer';
import ScrollReveal from './ScrollReveal';
import { newsItems } from '@/data';

export default function NewsSection() {
  return (
    <SectionContainer background="surface" id="news" className="bg-[#F4F7FA]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <ScrollReveal direction="right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate/10 border border-corporate/20 text-corporate text-[11px] font-bold tracking-wider uppercase mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            <span>NEWS &amp; INSIGHTS</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-corporate leading-tight">
            Latest From The Group
          </h2>
          <p className="mt-2 text-charcoal/70 text-sm md:text-base max-w-xl">
            Stay updated with our recent press releases, partnerships, and community initiatives across the Kingdom.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0.1}>
          <a
            href="#all-news"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-gray-200 text-corporate font-bold text-xs uppercase tracking-wider shadow-xs hover:bg-corporate hover:text-white hover:border-corporate transition-all duration-300 group shrink-0"
          >
            <span>VIEW ALL NEWS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {newsItems.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.12}>
            <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-corporate font-bold text-[11px] uppercase tracking-wider shadow-xs">
                  {item.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-charcoal/60 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-corporate/70" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-charcoal group-hover:text-corporate transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-charcoal/70 line-clamp-2 mt-2 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-corporate uppercase tracking-wider group-hover:gap-2.5 transition-all">
                    Read Story
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </SectionContainer>
  );
}

