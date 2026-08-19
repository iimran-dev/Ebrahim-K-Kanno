'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import SectionContainer from './SectionContainer';
import ScrollReveal from './ScrollReveal';
import { newsItems } from '@/data';

export default function NewsSection() {
  return (
    <SectionContainer background="surface">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-corporate">
          Latest From The Group
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {newsItems.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <article className="bg-white rounded-sm overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[16/9] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {item.date}
                  </span>
                  <span className="bg-corporate/5 px-2 py-1 rounded-sm text-corporate font-medium text-xs uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mt-3 leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-sm font-medium text-corporate mt-4 hover:gap-2 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5} className="mt-10">
        <button
          type="button"
          className="text-corporate font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          View All News
          <ArrowRight className="w-4 h-4" />
        </button>
      </ScrollReveal>
    </SectionContainer>
  );
}
