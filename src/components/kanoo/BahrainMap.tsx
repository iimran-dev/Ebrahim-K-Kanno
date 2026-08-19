'use client';

import { useState } from 'react';
import Bahrain from '@react-map/bahrain';
import { MapPin, Building2, Wrench, Factory, Landmark, Navigation } from 'lucide-react';
import SectionContainer from './SectionContainer';
import ScrollReveal from './ScrollReveal';
import { bahrainLocations, BahrainLocation } from '@/data';

const iconMap = {
  Landmark,
  Building2,
  Wrench,
  Factory,
};

export default function BahrainMap() {
  const [activeLocation, setActiveLocation] = useState<BahrainLocation | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  return (
    <SectionContainer background="surface" id="presence" className="bg-[#F4F7FA] py-12 md:py-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-12">
        <ScrollReveal direction="right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate/10 border border-corporate/20 text-corporate text-[11px] font-bold tracking-wider uppercase mb-2.5">
            <Navigation className="w-3.5 h-3.5" />
            <span>KINGDOM OF BAHRAIN</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-corporate leading-tight">
            Our Presence Across Bahrain.
          </h2>
          <p className="text-charcoal/70 mt-2 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
            Strategically located showrooms, service centers, and corporate facilities servicing clients across all governorates of Bahrain.
          </p>
        </ScrollReveal>
      </div>

      {/* Main Grid Layout: Mobile Order Optimized */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Right Column (Map) on Mobile goes first or side-by-side */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <ScrollReveal direction="left" delay={0.15}>
            <div className="relative bg-white rounded-2xl border border-gray-200/80 p-4 sm:p-6 shadow-sm flex flex-col items-center justify-center overflow-hidden">
              {/* Interactive SVG Map Wrapper */}
              <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[460px] aspect-square flex items-center justify-center mx-auto my-2">
                <Bahrain
                  type="select-single"
                  size={360}
                  mapColor="#F0F4F8"
                  strokeColor="#0A2D5E"
                  strokeWidth={1}
                  hoverColor="#163E7A"
                  selectColor="#0A2D5E"
                  hints={true}
                  hintTextColor="#ffffff"
                  hintBackgroundColor="#0A2D5E"
                  hintPadding="6px 12px"
                  hintBorderRadius={6}
                  onSelect={(state) => setSelectedState(state)}
                />

                {/* Location Map Pins Overlay */}
                {bahrainLocations.map((loc, idx) => {
                  const isActive = activeLocation?.id === loc.id;
                  return (
                    <div
                      key={loc.id}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
                      style={{ left: loc.x, top: loc.y }}
                      onMouseEnter={() => setActiveLocation(loc)}
                      onMouseLeave={() => setActiveLocation(null)}
                      onClick={() => setActiveLocation(loc)}
                    >
                      {/* Pulse ring */}
                      <span
                        className={`absolute inset-0 -m-2 rounded-full transition-opacity ${
                          isActive
                            ? 'w-8 h-8 bg-corporate/30 animate-ping opacity-100'
                            : 'w-5 h-5 sm:w-6 sm:h-6 bg-corporate/20 animate-pulse opacity-60'
                        }`}
                        style={{ animationDelay: `${idx * 0.2}s` }}
                      />

                      {/* Pin Marker Dot */}
                      <span
                        className={`relative flex items-center justify-center rounded-full shadow-md transition-all duration-300 ${
                          isActive
                            ? 'w-6 h-6 bg-corporate text-white scale-125 ring-2 ring-white'
                            : 'w-3.5 h-3.5 sm:w-4 sm:h-4 bg-corporate text-white'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                      </span>

                      {/* Tooltip Label */}
                      <div
                        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-corporate text-white text-[10px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded shadow-lg transition-all duration-200 pointer-events-none ${
                          isActive
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'
                        }`}
                      >
                        {loc.name}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-corporate" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Active Selection Details Banner */}
              {activeLocation ? (
                <div className="w-full bg-corporate/5 border border-corporate/20 rounded-xl p-3 sm:p-4 mt-2 transition-all flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-corporate text-white flex items-center justify-center shrink-0">
                      {(() => {
                        const Icon = iconMap[activeLocation.iconName];
                        return <Icon className="w-4 h-4" />;
                      })()}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-corporate truncate">
                        {activeLocation.name}
                      </h4>
                      <p className="text-[11px] text-charcoal/70 truncate flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-corporate shrink-0" />
                        {activeLocation.address}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white text-corporate border border-corporate/20 shrink-0">
                    {activeLocation.type}
                  </span>
                </div>
              ) : (
                <div className="mt-2 pt-3 border-t border-gray-100 w-full flex items-center justify-between text-[11px] sm:text-xs text-charcoal/60">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-corporate inline-block" />
                    Governorate Map
                  </span>
                  <span>Tap or hover locations to inspect</span>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* Left Column (Location Cards) */}
        <div className="lg:col-span-5 space-y-2.5 sm:space-y-3 order-2 lg:order-1">
          <ScrollReveal direction="right">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs font-bold text-corporate/60 uppercase tracking-widest">
                KEY LOCATIONS ({bahrainLocations.length})
              </p>
              <span className="text-[11px] text-charcoal/50">Kingdom Network</span>
            </div>
          </ScrollReveal>

          {bahrainLocations.map((loc, idx) => {
            const IconComponent = iconMap[loc.iconName];
            const isSelected = activeLocation?.id === loc.id || selectedState === loc.region;

            return (
              <ScrollReveal key={loc.id} delay={0.06 * idx} direction="right">
                <div
                  onMouseEnter={() => setActiveLocation(loc)}
                  onMouseLeave={() => setActiveLocation(null)}
                  onClick={() => setActiveLocation(loc)}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-white border-corporate shadow-md translate-x-1 ring-1 ring-corporate/20'
                      : 'bg-white/80 border-gray-200/80 hover:bg-white hover:border-corporate/40 hover:shadow-xs'
                  }`}
                >
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-corporate text-white shadow-xs'
                        : 'bg-corporate/5 text-corporate'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-xs sm:text-sm font-bold text-charcoal truncate">
                        {loc.name}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gray-100 text-charcoal/70 shrink-0">
                        {loc.type}
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-charcoal/60 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-corporate shrink-0" />
                      <span className="truncate">{loc.address}</span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}


