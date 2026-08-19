'use client';

import { Calendar, Users, Building2, UserCheck, Handshake } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  {
    icon: Calendar,
    end: 60,
    suffix: '+',
    label: 'Years of Legacy in Bahrain',
  },
  {
    icon: Users,
    end: 2600,
    suffix: '+',
    label: 'Employees and Growing',
  },
  {
    icon: Building2,
    end: 15,
    suffix: '+',
    label: 'Business Divisions',
  },
  {
    icon: UserCheck,
    end: 100000,
    suffix: '+',
    label: 'Happy Customers',
  },
  {
    icon: Handshake,
    end: 25,
    suffix: '+',
    label: 'Global Brands & Partnerships',
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[#0B213F] w-full py-8 md:py-10 border-t border-white/10 shadow-2xl relative z-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 items-center justify-between">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 lg:justify-center px-3 py-2 group hover:bg-white/5 rounded-xl transition-all duration-300 relative"
                >
                  {/* Icon block */}
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-300 flex-shrink-0 group-hover:scale-110 group-hover:border-blue-400/30 group-hover:bg-blue-500/10 transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[1.75]" aria-hidden="true" />
                  </div>

                  {/* Stat text */}
                  <AnimatedCounter
                    end={stat.end}
                    suffix={stat.suffix}
                    label={stat.label}
                  />

                  {/* Vertical divider - hidden on last item and mobile */}
                  {index < stats.length - 1 && (
                    <div
                      className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/15"
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
