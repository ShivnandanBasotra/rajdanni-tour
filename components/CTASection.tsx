'use client';

import { ArrowRight } from 'lucide-react';

const sendToWhatsApp = (message: string) => {
  const phoneNumber = '919149511328';
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#1A1A1A] px-4 md:px-6 py-12 md:py-20 lg:py-32">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 h-64 md:h-96 w-64 md:w-96 rounded-full bg-[#FBBF24]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 md:items-center">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight text-balance">
              Ready to Travel?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              Join thousands of travelers who&apos;ve discovered unforgettable experiences with Rajdani Travels. Start your adventure today.
            </p>
            <div className="pt-2 md:pt-4">
              <button 
                onClick={() => sendToWhatsApp('Hey Rajdani Travels! I want to book a tour package.')}
                className="inline-flex items-center gap-2 rounded-full bg-[#FBBF24] px-6 md:px-8 py-2 md:py-4 text-sm md:text-base lg:text-lg font-bold text-[#1A1A1A] hover:bg-[#F59E0B] transition-colors border-2 border-white cursor-pointer"
              >
                Book Now <ArrowRight size={18} className="hidden sm:inline" />
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
            <div className="rounded-2xl bg-white bg-opacity-10 backdrop-blur p-4 md:p-6 border border-white border-opacity-20">
              <div className="mb-2 md:mb-3 text-2xl md:text-3xl">🌍</div>
              <h3 className="mb-1 md:mb-2 text-sm md:text-lg font-bold text-white">500+ Destinations</h3>
              <p className="text-xs md:text-sm text-gray-300">Explore countries around the world</p>
            </div>
            <div className="rounded-2xl bg-white bg-opacity-10 backdrop-blur p-4 md:p-6 border border-white border-opacity-20">
              <div className="mb-2 md:mb-3 text-2xl md:text-3xl">💎</div>
              <h3 className="mb-1 md:mb-2 text-sm md:text-lg font-bold text-white">Luxury Hotels</h3>
              <p className="text-xs md:text-sm text-gray-300">Stay in premium properties</p>
            </div>
            <div className="rounded-2xl bg-white bg-opacity-10 backdrop-blur p-4 md:p-6 border border-white border-opacity-20">
              <div className="mb-2 md:mb-3 text-2xl md:text-3xl">👥</div>
              <h3 className="mb-1 md:mb-2 text-sm md:text-lg font-bold text-white">Expert Team</h3>
              <p className="text-xs md:text-sm text-gray-300">15+ years of experience</p>
            </div>
            <div className="rounded-2xl bg-white bg-opacity-10 backdrop-blur p-4 md:p-6 border border-white border-opacity-20">
              <div className="mb-2 md:mb-3 text-2xl md:text-3xl">🎯</div>
              <h3 className="mb-1 md:mb-2 text-sm md:text-lg font-bold text-white">Custom Plans</h3>
              <p className="text-xs md:text-sm text-gray-300">Personalized itineraries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
