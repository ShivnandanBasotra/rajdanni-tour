'use client';

import { Zap } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: '✈️',
      title: 'Best Prices',
      description: 'Get the most competitive rates on flights and accommodations',
    },
    {
      icon: '🏨',
      title: 'Premium Hotels',
      description: 'Stay in carefully selected luxury properties worldwide',
    },
    {
      icon: '🎯',
      title: 'Custom Itineraries',
      description: 'Personalized travel plans tailored to your preferences',
    },
    {
      icon: '🛡️',
      title: '24/7 Support',
      description: 'Round-the-clock customer service during your travels',
    },
  ];

  return (
    <section className="bg-white px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block rounded-full bg-[#FBBF24] px-4 py-2 text-sm font-semibold text-[#1A1A1A] border border-[#1A1A1A] mb-6">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-4">
            Premium Travel Experience
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            We provide everything you need for an unforgettable journey
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#FFF8F0] p-8 border-2 border-[#1A1A1A] hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-[#1A1A1A]">
                {feature.title}
              </h3>
              <p className="text-[#666666]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
