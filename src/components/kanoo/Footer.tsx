'use client';

import { Globe, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';

const footerLinks = {
  group: [
    { label: 'About Us', href: '#' },
    { label: 'Leadership', href: '#' },
    { label: 'Heritage', href: '#' },
  ],
  businesses: [
    { label: 'Automotive', href: '#' },
    { label: 'Industrial', href: '#' },
    { label: 'Energy', href: '#' },
    { label: 'Technology', href: '#' },
    { label: 'Security', href: '#' },
  ],
  resources: [
    { label: 'News', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Sustainability', href: '#' },
    { label: 'Investors', href: '#' },
  ],
};

const socialLinks = [
  { icon: Globe, label: 'Website', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
];

const bottomLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Sitemap', href: '#' },
];

export default function Footer() {
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setMobileOpen(mobileOpen === section ? null : section);
  };

  return (
    <footer className="bg-corporate text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        {/* Logo */}
        <div className="mb-12">
          <span className="font-display font-bold text-xl tracking-tight text-white">
            EK KANOO
          </span>
          <span className="block text-white/40 text-xs uppercase tracking-[0.2em] mt-0.5">
            GROUP
          </span>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Column 1: The Group */}
          <div>
            <button
              className="text-white font-semibold mb-4 block md:cursor-default"
              onClick={() => toggleAccordion('group')}
              aria-expanded={mobileOpen === 'group'}
            >
              The Group
              <span className="md:hidden ml-1 text-white/40 text-xs">
                {mobileOpen === 'group' ? '−' : '+'}
              </span>
            </button>
            <ul className={`space-y-3 ${mobileOpen === 'group' ? 'block' : 'hidden md:block'}`}>
              {footerLinks.group.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Businesses */}
          <div>
            <button
              className="text-white font-semibold mb-4 block md:cursor-default"
              onClick={() => toggleAccordion('businesses')}
              aria-expanded={mobileOpen === 'businesses'}
            >
              Businesses
              <span className="md:hidden ml-1 text-white/40 text-xs">
                {mobileOpen === 'businesses' ? '−' : '+'}
              </span>
            </button>
            <ul className={`space-y-3 ${mobileOpen === 'businesses' ? 'block' : 'hidden md:block'}`}>
              {footerLinks.businesses.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <button
              className="text-white font-semibold mb-4 block md:cursor-default"
              onClick={() => toggleAccordion('resources')}
              aria-expanded={mobileOpen === 'resources'}
            >
              Resources
              <span className="md:hidden ml-1 text-white/40 text-xs">
                {mobileOpen === 'resources' ? '−' : '+'}
              </span>
            </button>
            <ul className={`space-y-3 ${mobileOpen === 'resources' ? 'block' : 'hidden md:block'}`}>
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-white/60">
              <p>
                P.O. Box 568<br />
                Manama, Kingdom of Bahrain
              </p>
              <p>
                <a href="tel:+97317000000" className="hover:text-white transition-colors">
                  +973 17 000 000
                </a>
              </p>
              <p>
                <a href="mailto:info@ekkanoo.com" className="hover:text-white transition-colors">
                  info@ekkanoo.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-white/40">
            © 2025 Ebrahim K. Kanoo Group. All rights reserved.
          </p>

          {/* Bottom Links */}
          <nav className="flex items-center gap-6" aria-label="Legal links">
            {bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
