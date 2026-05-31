'use client';

import { useState } from 'react';

const sendToWhatsApp = (message: string) => {
  const phoneNumber = '919149511328';
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};

const indianPackages = [
  { id: 1, name: 'Kashmir Tour Package', emoji: '🏔️', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-30%20at%209.02.25%20PM-5DQK6XmC0mdckZY2fRf90GdM5POFqN.jpeg' },
  { id: 2, name: 'Himachal Tour Package', emoji: '🏞️', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-30%20at%209.01.56%20PM-woC1M7Mq7CCM59a99qFIrHjSFfmOjE.jpeg' },
  { id: 3, name: 'Masoori Tour Package', emoji: '⛰️', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the-mall-road-mussoorie-tourism-header-QjRrgEsGBoBWFkd6mIXDe6ac1sEzZD.jpg' },
  { id: 4, name: 'Uttarakhand Tour Package', emoji: '🌲', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-30%20at%209.16.13%20PM-xqDIpF3KDKSP8zHPnscuo9VqD3MrTH.jpeg' },
  { id: 5, name: 'Delhi | Agra Tour Package', emoji: '🕌', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-30%20at%209.11.49%20PM-mb7XMxXaNfs6JCEXKZKRI7Tr61eKTU.jpeg' },
  { id: 6, name: 'Goa Tour Package', emoji: '🏖️', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-30%20at%209.08.03%20PM-t17xBweRwrQHlfgSO5tkbQCd1TjxYt.jpeg' },
  { id: 7, name: 'Rajasthan Tour Package', emoji: '🏰', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-30%20at%209.12.54%20PM-DKCq1gotaLh9z95dKQ5dBI5ON30x6B.jpeg' },
  { id: 8, name: 'Leh Ladakh Tour Package', emoji: '🗻', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-30%20at%209.16.52%20PM-zsJha3WDeQZokbtdipNPfFFSMB5TKr.jpeg' },
  { id: 9, name: 'Kerala Tour Package', emoji: '🌴', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/64518-rLYwfKGGUMelrBZ8BQHeyPi3PVokty.webp' },
];

const spiritualPackages = [
  { id: 1, name: 'Char Dham Tour Package', emoji: '⛩️', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-30%20at%209.18.22%20PM-XtMGyLvuw4r3z442iXE3CwjaW4prw3.jpeg' },
  { id: 2, name: 'Shirdi Tour Package', emoji: '🕉️', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sai-Baba-Samadhi-Mandir-t6BGiKnHtW36jf6Hdu9bGjhjaF3G82.jpg' },
  { id: 3, name: 'Vaishno Devi Tour Package', emoji: '🙏', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-30%20at%209.53.11%20PM-MsA5vWowA9foKOxpbHC0ggkbx0FB94.jpeg' },
  { id: 4, name: 'Amarnath Tour Package', emoji: '⛩️', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-30%20at%209.51.52%20PM-HLAJ2iQnNknCkWPev6jE16Vv8vXVve.jpeg' },
  { id: 5, name: 'Haridwar Tour Package', emoji: '🌊', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-30%20at%209.53.47%20PM-XSdDcUtI2KKNWKaSbdc8XW7fjIYuk0.jpeg' },
  { id: 6, name: 'Varanasi Tour Package', emoji: '🕯️', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Early-Morning-Boat-Ride-in-Varansi-51tX9BGSacUe5nlAGwFW8ZzUkTDAib.webp' },
];

export default function TourPackagesSection() {
  const [activeTab, setActiveTab] = useState('indian');

  const packages = activeTab === 'indian' ? indianPackages : spiritualPackages;

  return (
    <section id="packages" className="py-8 md:py-16 lg:py-24 bg-[#FFF8F0] border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 md:space-y-6 mb-8 md:mb-12 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">
            Rajdani Tour Packages
          </h2>
          <p className="text-base sm:text-base md:text-lg text-[#666666] leading-relaxed">
            Embark on an unforgettable journey with Rajdani Travels&apos; thoughtfully crafted tour packages. From serene weekend escapes to immersive cultural holidays and thrilling road adventures, our curated collection of tours invites you to discover the world beyond the ordinary. At Rajdani Travels, we blend comfort, adventure, and local insight to bring you travel experiences that leave lasting memories.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-2 md:gap-4 mb-8 md:mb-12 justify-center">
          <button
            onClick={() => setActiveTab('indian')}
            className={`px-4 md:px-6 py-2 md:py-3 font-bold rounded-full border-2 border-[#1A1A1A] transition text-sm md:text-base ${
              activeTab === 'indian'
                ? 'bg-[#FBBF24] text-[#1A1A1A]'
                : 'bg-white text-[#1A1A1A] hover:bg-[#FBBF24]'
            }`}
          >
            Indian Tour Packages
          </button>
          <button
            onClick={() => setActiveTab('spiritual')}
            className={`px-4 md:px-6 py-2 md:py-3 font-bold rounded-full border-2 border-[#1A1A1A] transition text-sm md:text-base ${
              activeTab === 'spiritual'
                ? 'bg-[#FBBF24] text-[#1A1A1A]'
                : 'bg-white text-[#1A1A1A] hover:bg-[#FBBF24]'
            }`}
          >
            Spiritual Tour Packages
          </button>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg border-2 border-[#1A1A1A] overflow-hidden hover:shadow-xl hover:scale-105 transition-all"
            >
              {/* Image */}
              <div className="w-full h-40 sm:h-48 border-b-2 border-[#1A1A1A] overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <h3 className="text-base md:text-xl font-bold text-[#1A1A1A] text-balance">{pkg.name}</h3>
                <p className="text-sm md:text-base text-[#666666]">Contact For More Details</p>
                
                <button 
                  onClick={() => sendToWhatsApp(`Hey Rajdani Travels! I want to book ${pkg.name}.`)}
                  className="w-full px-4 md:px-6 py-2 bg-[#FBBF24] text-[#1A1A1A] font-bold rounded-full border-2 border-[#1A1A1A] hover:bg-[#F59E0B] transition text-sm md:text-base cursor-pointer"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
