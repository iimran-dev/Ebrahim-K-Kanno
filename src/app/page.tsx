import Header from '@/components/kanoo/Header';
import HeroSection from '@/components/kanoo/HeroSection';
import StatsSection from '@/components/kanoo/StatsSection';
import BusinessesSection from '@/components/kanoo/BusinessesSection';
import AboutSection from '@/components/kanoo/AboutSection';
import SustainabilitySection from '@/components/kanoo/SustainabilitySection';
import BrandsSection from '@/components/kanoo/BrandsSection';
import NewsSection from '@/components/kanoo/NewsSection';
import BahrainMap from '@/components/kanoo/BahrainMap';
import Footer from '@/components/kanoo/Footer';
import BackToTop from '@/components/kanoo/BackToTop';

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <HeroSection />
      <StatsSection />
      <BusinessesSection />
      <AboutSection />
      <SustainabilitySection />
      <BrandsSection />
      <NewsSection />
      {/*<LeadershipSection />*/}
      {/*<CareersSection />*/}
      {/*<CSRTimeline />*/}
      <BahrainMap />
      {/*<ContactCTA />*/}
      <Footer />
      <BackToTop />
    </main>
  );
}