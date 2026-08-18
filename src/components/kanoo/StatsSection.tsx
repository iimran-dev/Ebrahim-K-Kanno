'use client';

import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { end: 60, suffix: '+', label: 'Years Legacy' },
  { end: 2600, suffix: '+', label: 'Employees' },
  { end: 15, suffix: '+', label: 'Business Divisions' },
  { end: 100000, suffix: '+', label: 'Customers' },
  { end: 25, suffix: '+', label: 'Global Partners' },
];

export default function StatsSection() {
  return (
    <section className="bg-corporate w-full py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-10 md:gap-0 md:flex-row md:justify-between">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex items-center gap-10 md:gap-0 w-full md:w-auto"
              >
                {/* Stat block */}
                <div className="flex-1 flex justify-center">
                  <AnimatedCounter
                    end={stat.end}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </div>

                {/* Vertical divider - hidden on last item and on mobile */}
                {index < stats.length - 1 && (
                  <div
                    className="hidden md:block h-16 w-px bg-white/10 flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
