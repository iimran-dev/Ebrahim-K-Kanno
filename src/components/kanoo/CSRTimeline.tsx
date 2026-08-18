'use client';

import SectionContainer from './SectionContainer';
import ScrollReveal from './ScrollReveal';

const timelineItems = [
  {
    year: '2024',
    title: 'Community Education Program',
    desc: 'Launched STEM education initiative across 20 schools, impacting over 5,000 students in Bahrain.',
    stat: '5,000+',
    statLabel: 'Students Impacted',
  },
  {
    year: '2023',
    title: 'Environmental Restoration',
    desc: 'Partnered with Bahrain authorities to restore coastal marine ecosystems and plant 10,000 mangroves.',
    stat: '10,000',
    statLabel: 'Mangroves Planted',
  },
  {
    year: '2022',
    title: 'Workforce Development',
    desc: 'Invested in vocational training programs creating 200+ skilled jobs for Bahraini youth.',
    stat: '200+',
    statLabel: 'Jobs Created',
  },
  {
    year: '2021',
    title: 'Healthcare Support',
    desc: 'Donated medical equipment and funded community health centers across the Kingdom.',
    stat: '12',
    statLabel: 'Health Centers Supported',
  },
];

export default function CSRTimeline() {
  return (
    <SectionContainer background="white">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-corporate">
          Making A Difference In Our Community.
        </h2>
      </ScrollReveal>

      <div className="mt-12 md:mt-16 space-y-0">
        {timelineItems.map((item, index) => (
          <ScrollReveal key={item.year} delay={index * 0.15}>
            <div className="flex gap-6 md:gap-10 py-8 md:py-10">
              {/* Year */}
              <div className="w-20 flex-shrink-0">
                <span className="font-display text-3xl font-bold text-corporate">
                  {item.year}
                </span>
              </div>

              {/* Vertical Line */}
              <div className="flex-shrink-0">
                <div className="w-px bg-corporate/10 h-full" />
              </div>

              {/* Content Card */}
              <div className="flex-1 pb-2">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-charcoal">
                  {item.title}
                </h3>
                <p className="text-charcoal/60 mt-2 max-w-lg leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-corporate">
                    {item.stat}
                  </span>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {item.statLabel}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionContainer>
  );
}
