'use client';

import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface Hotel {
  name: string;
  location: string;
  images: string[];
  description: string;
}

const hotels: Hotel[] = [
  {
    name: 'Hotel Town Star',
    location: 'Srinagar',
    images: [
     '/images/Hotel-Town-Star_Srinagar1.jpeg',
     '/images/Hotel-Town-Star_Srinagar2.jpeg',
     '/images/Hotel-Town-Star_Srinagar3.jpeg',
    ],
    description: 'Luxury comfort in the heart of Kashmir',
  },
  {
    name: 'Hotel Tourist Palace',
    location: 'Pahalgam',
    images: [
     '/images/Hotel-Tourist-Palace_Pahalgam1.jpeg',
     '/images/Hotel-Tourist-Palace_Pahalgam2.jpeg',
     '/images/Hotel-Tourist-Palace_Pahalgam3.jpeg',
    ],
    description: 'Elegant retreat in the Valley of Flowers',
  },
  {
    name: 'The River-Side Camp',
    location: 'Kasol',
    images: [
      '/images/The River-Side-Camp_Kasol1.jpeg',
      '/images/The River-Side-Camp_Kasol2.jpeg',
      '/images/The River-Side-Camp_Kasol3.jpeg',
    ],
    description: 'Adventure camp by the pristine riverside',
  },
  {
    name: 'Hotel Aradhya Grand',
    location: 'Kangra',
    images: [
      '/images/Hotel-Aradhya-Grand_kangra1.jpeg',
      '/images/Hotel-Aradhya-Grand_kangra2.jpeg',
      '/images/Hotel-Aradhya-Grand_kangra3.jpeg',
    ],
    description: 'Modern elegance with heritage charm',
  },
  {
    name: 'Hotel North Side',
    location: 'Dalhousie',
    images: [
      '/images/Hotel-North-Side_Dalhousie1.jpeg',
      '/images/Hotel-North-Side_Dalhousie2.jpeg',
      '/images/Hotel-North-Side_Dalhousie3.jpeg',
    ],
    description: 'Scenic views in the misty mountains',
  },
  {
    name: 'Hotel Snow White Residency',
    location: 'Manali',
    images: [
      '/images/111.jpeg',
      '/images/222.jpeg',
      '/images/333.jpeg',
    ],
    description: 'Scenic views in the misty mountains',
  },
];

interface HotelCardProps {
  hotel: Hotel;
}

function HotelCard({ hotel }: HotelCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [hotel.images.length]);

  

  return (
    <div className="group cursor-pointer h-full">
      <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-[#1A1A1A] shadow-md">
        {/* Image Container with Transition */}
        <div className="relative w-full h-full">
          {hotel.images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`${hotel.name} - ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                idx === currentImageIndex
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
            />
          ))}
        </div>

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Image Counter */}
        <div className="absolute top-3 right-3 bg-[#FBBF24] text-[#1A1A1A] text-xs font-bold px-3 py-1 rounded-full">
          {currentImageIndex + 1}/{hotel.images.length}
        </div>

        {/* Indicator Dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          {hotel.images.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentImageIndex
                  ? 'w-6 bg-[#FBBF24]'
                  : 'w-2 bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Content - Hidden by default, visible on hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <h3 className="text-white font-bold text-lg md:text-xl mb-1">
            {hotel.name}
          </h3>
          <p className="text-white/90 text-sm mb-3">{hotel.location}</p>
          <p className="text-white/80 text-xs leading-relaxed">
            {hotel.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PropertiesSection() {
    const sendToWhatsApp = (message: string) => {
  const phoneNumber = '919149511328';
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-[#FFF8F0] border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-[#FBBF24] text-[#1A1A1A] px-4 py-2 rounded-full font-semibold text-sm">
              <span className="w-2 h-2 bg-[#1A1A1A] rounded-full" />
              Our Properties
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4 md:mb-6 max-w-4xl mx-auto">
            Explore Our Affiliated Hotels & Properties
          </h2>
          <p className="text-[#666666] text-base md:text-lg max-w-2xl mx-auto">
            Experience luxury and comfort across our premium properties in the most scenic destinations of Himachal Pradesh and Kashmir.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {hotels.map((hotel, idx) => (
            <HotelCard key={idx} hotel={hotel} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <button   onClick={() => sendToWhatsApp('Hey Rajdanni Travels! I want to plan my next trip.')} className="inline-flex cursor-pointer items-center gap-2 bg-[#1A1A1A] text-[#FFF8F0] px-8 py-4 rounded-lg font-bold text-base md:text-lg hover:bg-[#FBBF24] hover:text-[#1A1A1A] transition-all duration-300 shadow-md hover:shadow-lg">
            Explore All Properties
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
