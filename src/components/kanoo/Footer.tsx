'use client';

import { useState } from 'react';
import {
  Globe,
  Linkedin,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Send,
  ChevronDown,
} from 'lucide-react';

const footerLinks = {
  group: [
    { label: 'About Us', href: '#about' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Heritage & Legacy', href: '#about' },
    { label: 'Sustainability', href: '#sustainability' },
  ],
  businesses: [
    { label: 'Automotive', href: '#businesses' },
    { label: 'Leasing Solutions', href: '#businesses' },
    { label: 'Industrial Equipment', href: '#businesses' },
    { label: 'Information Technology', href: '#businesses' },
    { label: 'Energy & Power', href: '#businesses' },
    { label: 'Security Systems', href: '#businesses' },
  ],
  resources: [
    { label: 'News & Insights', href: '#news' },
    { label: 'Presence & Map', href: '#presence' },
    { label: 'Careers', href: '#' },
    { label: 'Investor Relations', href: '#' },
  ],
};

const socialLinks = [
  { icon: Globe, label: 'Website', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
];

const bottomLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Sitemap', href: '#' },
];

export default function Footer() {
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const toggleAccordion = (section: string) => {
    setMobileOpen(mobileOpen === section ? null : section);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05162E] text-white relative overflow-hidden border-t border-white/10">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-corporate-light/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-16 md:pt-20 pb-12 relative z-10">
        {/* Newsletter / CTA Banner */}
        <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 md:p-10 mb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest block mb-2">
              SUBSCRIBE TO INSIGHTS
            </span>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
              Stay Connected With Kanoo Group
            </h3>
            <p className="text-white/70 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Receive press releases, business announcements, and corporate insights directly to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
            <div className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 pr-32 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 px-5 py-2.5 rounded-xl bg-white text-[#05162E] font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 hover:text-black transition-all flex items-center gap-1.5 shadow-md"
              >
                <span>{subscribed ? 'Joined!' : 'Subscribe'}</span>
                {!subscribed && <Send className="w-3.5 h-3.5" />}
              </button>
            </div>
          </form>
        </div>

        {/* Links & Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Column 1: Corporate Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                EBRAHIM K. KANOO
              </span>
              <span className="text-emerald-400/90 text-xs font-bold uppercase tracking-[0.3em] mt-0.5">
                GROUP
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
              Cornerstone of Bahrain&apos;s commercial landscape for over six decades—pioneering automotive excellence, industrial solutions, and sustainable growth across the region.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-2.5">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-xs"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: The Group */}
          <div className="lg:col-span-2">
            <button
              className="w-full flex items-center justify-between text-white font-bold text-sm tracking-wider uppercase mb-4 md:cursor-default"
              onClick={() => toggleAccordion('group')}
              aria-expanded={mobileOpen === 'group'}
            >
              <span>The Group</span>
              <ChevronDown
                className={`w-4 h-4 text-white/40 md:hidden transition-transform ${
                  mobileOpen === 'group' ? 'rotate-180' : ''
                }`}
              />
            </button>
            <ul className={`space-y-2.5 ${mobileOpen === 'group' ? 'block' : 'hidden md:block'}`}>
              {footerLinks.group.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Businesses */}
          <div className="lg:col-span-3">
            <button
              className="w-full flex items-center justify-between text-white font-bold text-sm tracking-wider uppercase mb-4 md:cursor-default"
              onClick={() => toggleAccordion('businesses')}
              aria-expanded={mobileOpen === 'businesses'}
            >
              <span>Businesses</span>
              <ChevronDown
                className={`w-4 h-4 text-white/40 md:hidden transition-transform ${
                  mobileOpen === 'businesses' ? 'rotate-180' : ''
                }`}
              />
            </button>
            <ul className={`space-y-2.5 ${mobileOpen === 'businesses' ? 'block' : 'hidden md:block'}`}>
              {footerLinks.businesses.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & HQ */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Headquarters
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-white/60">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Kanoo Tower, Diplomatic Area<br />
                  P.O. Box 568, Manama, Kingdom of Bahrain
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+97317000000" className="hover:text-white transition-colors">
                  +973 17 000 000
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@ekkanoo.com" className="hover:text-white transition-colors">
                  info@ekkanoo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2025 Ebrahim K. Kanoo Group. All rights reserved.</p>

          <nav className="flex items-center gap-6" aria-label="Legal links">
            {bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-bold text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
