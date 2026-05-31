'use client';

import TopContactBar from '@/components/TopContactBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesStrip from '@/components/FeaturesStrip';
import TourPackagesSection from '@/components/TourPackagesSection';
import TrendingPackagesSection from '@/components/TrendingPackagesSection';
import TransportSection from '@/components/TransportSection';
import VehicleShowcase from '@/components/VehicleShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTABanner from '@/components/CTABanner';
import BookingSection from '@/components/BookingSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Page() {
  return (
    <main className="bg-[#FFF8F0]">
      <TopContactBar />
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesStrip />
      <TourPackagesSection />
      <TrendingPackagesSection />
      <TransportSection />
      <VehicleShowcase />
      <TestimonialsSection />
      <CTABanner />
      <BookingSection />
      <GallerySection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
