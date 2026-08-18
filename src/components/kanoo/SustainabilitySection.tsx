'use client';

import { Sun, Leaf, TrendingDown, Users } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import SectionContainer from './SectionContainer';
import ScrollReveal from './ScrollReveal';

interface Initiative {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const initiatives: Initiative[] = [
  {
    icon: Sun,
    title: 'Renewable Energy',
    desc: "Investing in solar and clean energy solutions to power Bahrain's future.",
  },
  {
    icon: Leaf,
    title: 'ESG Initiatives',
    desc: 'Embedding environmental, social, and governance principles across all operations.',
  },
  {
    icon: TrendingDown,
    title: 'Carbon Reduction',
    desc: 'Committed to measurable carbon footprint reduction across our business divisions.',
  },
  {
    icon: Users,
    title: 'Community Projects',
    desc: 'Supporting communities through education, health, and environmental programs.',
  },
];

export default function SustainabilitySection() {
  return (
    <SectionContainer background="surface" id="sustainability">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-corporate leading-tight">
          Driving Bahrain Towards
          <br />
          A Sustainable Future.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="mt-6 text-charcoal/70 max-w-2xl leading-relaxed">
          Sustainability is not just a commitment—it is integral to our business
          strategy and the future of Bahrain.
        </p>
      </ScrollReveal>

      {/* Initiative Cards Grid */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        {initiatives.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <ScrollReveal key={item.title} delay={0.15 + index * 0.08}>
              <div className="bg-white p-8 rounded-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-sm bg-corporate/5 flex items-center justify-center mb-5">
                  <IconComponent className="w-6 h-6 text-corporate" />
                </div>
                <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionContainer>
  );
}
