'use client';

import { useState } from 'react';
import { MapPin, Building2, Wrench, Factory, Landmark } from 'lucide-react';
import SectionContainer from './SectionContainer';
import ScrollReveal from './ScrollReveal';

interface Location {
  name: string;
  x: string;
  y: string;
  type: string;
  icon: React.ReactNode;
}

const locations: Location[] = [
  {
    name: 'Headquarters - Manama',
    x: '55%',
    y: '45%',
    type: 'Headquarters',
    icon: <Landmark className="w-4 h-4" />,
  },
  {
    name: 'Toyota Showroom - Sitra',
    x: '65%',
    y: '60%',
    type: 'Showroom',
    icon: <Building2 className="w-4 h-4" />,
  },
  {
    name: 'Lexus Centre - Seef',
    x: '30%',
    y: '35%',
    type: 'Showroom',
    icon: <Building2 className="w-4 h-4" />,
  },
  {
    name: 'Service Center - Muharraq',
    x: '45%',
    y: '25%',
    type: 'Service Center',
    icon: <Wrench className="w-4 h-4" />,
  },
  {
    name: 'Industrial Division - Hidd',
    x: '75%',
    y: '55%',
    type: 'Industrial',
    icon: <Factory className="w-4 h-4" />,
  },
];

function MapMarker({ location, index }: { location: Location; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 group"
      style={{ left: location.x, top: location.y }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pulse Ring */}
      <span className="absolute inset-0 -m-2 w-7 h-7 rounded-full bg-corporate/20 animate-ping" style={{
        animationDelay: `${index * 0.3}s`,
        animationDuration: '2s',
        animationIterationCount: 'infinite',
      }} />
      {/* Dot */}
      <span className="relative block w-3 h-3 bg-corporate rounded-full shadow-md" />
      {/* Label - always visible on desktop, visible on hover on mobile */}
      <span className={`
        absolute left-1/2 -translate-x-1/2 top-5 whitespace-nowrap
        bg-corporate text-white text-xs font-medium px-3 py-1.5 rounded-sm shadow-lg
        transition-opacity duration-200 pointer-events-none
        md:opacity-100 ${isHovered ? 'opacity-100' : 'opacity-0'}
        after:content-[''] after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:-translate-y-full
        after:border-4 after:border-transparent after:border-b-corporate
      `}>
        {location.name}
      </span>
    </div>
  );
}

export default function BahrainMap() {
  return (
    <SectionContainer background="surface">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-corporate">
          Our Presence Across Bahrain.
        </h2>
        <p className="text-charcoal/60 mt-3 max-w-xl">
          Strategically located showrooms, service centers, and offices across the Kingdom.
        </p>
      </ScrollReveal>

      {/* Map Container */}
      <ScrollReveal delay={0.15}>
        <div className="relative mt-12 md:mt-16 w-full max-w-3xl mx-auto">
          <div className="relative w-full aspect-[3/2]">
            {/* Stylized SVG Map of Bahrain */}
            <svg
              viewBox="0 0 600 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Main Bahrain island shape - elongated north-south with a hook on the north */}
              <path
                d="M 320 60 C 340 55, 380 58, 400 70 C 420 82, 440 100, 445 120 C 450 140, 445 160, 435 180 C 425 200, 410 215, 395 230 C 380 245, 360 258, 340 268 C 320 278, 298 285, 275 290 C 252 295, 230 296, 210 290 C 190 284, 172 272, 160 255 C 148 238, 142 218, 140 198 C 138 178, 142 158, 150 140 C 158 122, 170 108, 185 96 C 200 84, 220 76, 240 70 C 260 64, 280 60, 300 58 Z"
                fill="var(--color-corporate, #0A2D5E)"
                fillOpacity="0.06"
                stroke="var(--color-corporate, #0A2D5E)"
                strokeWidth="2"
                strokeOpacity="0.2"
              />
              {/* Smaller islands to the east (Hawar Islands suggestion) */}
              <ellipse
                cx="480"
                cy="280"
                rx="25"
                ry="12"
                fill="var(--color-corporate, #0A2D5E)"
                fillOpacity="0.04"
                stroke="var(--color-corporate, #0A2D5E)"
                strokeWidth="1.5"
                strokeOpacity="0.15"
              />
              {/* Northern coastline detail */}
              <path
                d="M 300 58 C 285 50, 260 48, 240 52"
                fill="none"
                stroke="var(--color-corporate, #0A2D5E)"
                strokeWidth="1.5"
                strokeOpacity="0.12"
                strokeDasharray="6 4"
              />
              {/* Subtle grid lines for cartographic feel */}
              <line x1="0" y1="100" x2="600" y2="100" stroke="var(--color-corporate, #0A2D5E)" strokeWidth="0.5" strokeOpacity="0.05" />
              <line x1="0" y1="200" x2="600" y2="200" stroke="var(--color-corporate, #0A2D5E)" strokeWidth="0.5" strokeOpacity="0.05" />
              <line x1="0" y1="300" x2="600" y2="300" stroke="var(--color-corporate, #0A2D5E)" strokeWidth="0.5" strokeOpacity="0.05" />
              <line x1="150" y1="0" x2="150" y2="400" stroke="var(--color-corporate, #0A2D5E)" strokeWidth="0.5" strokeOpacity="0.05" />
              <line x1="300" y1="0" x2="300" y2="400" stroke="var(--color-corporate, #0A2D5E)" strokeWidth="0.5" strokeOpacity="0.05" />
              <line x1="450" y1="0" x2="450" y2="400" stroke="var(--color-corporate, #0A2D5E)" strokeWidth="0.5" strokeOpacity="0.05" />
            </svg>

            {/* Location Markers */}
            {locations.map((location, index) => (
              <MapMarker key={location.name} location={location} index={index} />
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Location List */}
      <ScrollReveal delay={0.3}>
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.map((location) => (
            <div
              key={location.name}
              className="flex items-start gap-3 bg-white p-4 rounded-sm group hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-9 h-9 bg-corporate/5 flex items-center justify-center text-corporate">
                {location.icon}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-charcoal truncate">
                  {location.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {location.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </SectionContainer>
  );
}
