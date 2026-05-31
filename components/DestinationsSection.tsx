'use client';

import { ArrowRight } from 'lucide-react';

const sendToWhatsApp = (message: string) => {
  const phoneNumber = '919149511328';
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};

export default function DestinationsSection() {
  const destinations = [
    {
      name: 'Paris',
      country: 'France',
      image: '🗼',
      price: '$1,299',
      rating: 4.8,
    },
    {
      name: 'Tokyo',
      country: 'Japan',
      image: '🗾',
      price: '$1,599',
      rating: 4.9,
    },
    {
      name: 'Bali',
      country: 'Indonesia',
      image: '🏝️',
      price: '$899',
      rating: 4.7,
    },
    {
      name: 'New York',
      country: 'USA',
      image: '🗽',
      price: '$1,199',
      rating: 4.6,
    },
    {
      name: 'Dubai',
      country: 'UAE',
      image: '🏙️',
      price: '$1,399',
      rating: 4.8,
    },
    {
      name: 'Maldives',
      country: 'Maldives',
      image: '🌊',
      price: '$1,899',
      rating: 5.0,
    },
  ];

  return (
    <section className="bg-[#FFF8F0] px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block rounded-full bg-[#FBBF24] px-4 py-2 text-sm font-semibold text-[#1A1A1A] border border-[#1A1A1A] mb-6">
            Popular Destinations
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-4">
            Trending Packages
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl">
            Explore our most popular destinations and curated travel experiences
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-white border-2 border-[#1A1A1A] overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]"
            >
              {/* Image Area */}
              <div className="relative h-48 bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] flex items-center justify-center overflow-hidden">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {destination.image}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-[#1A1A1A]">
                    {destination.name}
                  </h3>
                  <p className="text-[#666666]">{destination.country}</p>
                </div>

                {/* Rating */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-[#FBBF24]"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-[#1A1A1A]">
                    {destination.rating}
                  </span>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#666666]">From</p>
                    <p className="text-2xl font-bold text-[#1A1A1A]">
                      {destination.price}
                    </p>
                  </div>
                  <button 
                    onClick={() => sendToWhatsApp(`Hey Rajdani Travels! I'm interested in visiting ${destination.name}, ${destination.country}.`)}
                    className="rounded-full bg-[#FBBF24] p-3 text-[#1A1A1A] hover:bg-[#F59E0B] transition-colors border-2 border-[#1A1A1A] cursor-pointer"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
