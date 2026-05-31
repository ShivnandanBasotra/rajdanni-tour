'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Khatri',
    location: 'Kathua',
    rating: 5,
    review: 'Traveling Solo Can Be Stressful, But Rajadni Travels Made It Absolutely Smooth. I Booked A Kashmir Package, And They Handled Everything From Airport Pickup To Daily Sightseeing. The Local Guide Was Very Helpful, And I Felt Safe Throughout The Journey. Super Happy With The Service!',
  },
  {
    id: 2,
    name: 'Payal Manhas',
    location: 'Jammu',
    rating: 5,
    review: 'Rajadni Travels Planned Our Himachal Tour So Beautifully. As A Family With Kids And Elders, We Had Specific Needs—And Everything Was Taken Care Of. The Hotels Were Clean, The Driver Was Very Polite, And The Sightseeing Was Exactly As Promised. It Felt Like A Personal Trip, Not A Commercial Package. Thank You, Team!',
  },
  {
    id: 3,
    name: 'Amit Patel',
    location: 'Ahmedabad, India',
    rating: 5,
    review: 'Affordable pricing with zero compromise on comfort. Rajdani Travels offers the best value for money tours in India.',
  },
  {
    id: 4,
    name: 'Deepika Singh',
    location: 'Bangalore, India',
    rating: 5,
    review: 'Very professional team and excellent customer support. They handled all our queries promptly and made our experience memorable!',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-[#FFF8F0] border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 md:mb-12 text-center text-balance">
          What Our Customers Say
        </h2>

        {/* Testimonial Carousel */}
        <div className="relative max-w-2xl mx-auto">
          <div className="bg-white rounded-lg border-2 border-[#1A1A1A] p-4 md:p-8 lg:p-12 min-h-56 md:min-h-64 flex flex-col justify-between">
            {/* Stars */}
            <div className="flex gap-1 mb-3 md:mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <span key={i} className="text-lg md:text-2xl text-[#FBBF24]">★</span>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-sm sm:text-base md:text-base lg:text-lg text-[#666666] leading-relaxed mb-4 md:mb-6 italic">
              &quot;{testimonials[current].review}&quot;
            </p>

            {/* Customer Info */}
            <div>
              <h4 className="text-base md:text-lg lg:text-xl font-bold text-[#1A1A1A]">{testimonials[current].name}</h4>
              <p className="text-[#FBBF24] font-semibold text-sm md:text-base">{testimonials[current].location}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-6 md:mt-8">
            <button
              onClick={prev}
              className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-[#1A1A1A] text-white font-bold text-lg md:text-xl hover:bg-[#FBBF24] transition border-2 border-[#1A1A1A]"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-1 md:gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition border-2 border-[#1A1A1A] ${
                    idx === current ? 'bg-[#FBBF24]' : 'bg-white'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-[#1A1A1A] text-white font-bold text-lg md:text-xl hover:bg-[#FBBF24] transition border-2 border-[#1A1A1A]"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
