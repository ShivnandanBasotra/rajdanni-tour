'use client';

import { useState } from 'react';

const sendToWhatsApp = (message: string) => {
  const phoneNumber = '919149511328';
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    date: '',
    travelers: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create personalized message with form data
    const enquiryMessage = `Hey Rajdani Travels! I want to book a tour package.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Destination: ${formData.destination}
Travel Date: ${formData.date}
Number of Travelers: ${formData.travelers}
Message: ${formData.message}`;

    sendToWhatsApp(enquiryMessage);
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      destination: '',
      date: '',
      travelers: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-8 md:py-16 lg:py-24 bg-white border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left - Form */}
          <div className="space-y-4 md:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">
              Plan Your Journey With Us
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label className="block text-[#1A1A1A] font-semibold mb-1.5 md:mb-2 text-base md:text-base">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24] text-sm md:text-base cursor-text"
                  placeholder="Your Name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-[#1A1A1A] font-semibold mb-1.5 md:mb-2 text-base md:text-base">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24] text-sm md:text-base"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-[#1A1A1A] font-semibold mb-1.5 md:mb-2 text-base md:text-base">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24] text-sm md:text-base"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#1A1A1A] font-semibold mb-1.5 md:mb-2 text-base md:text-base">Destination</label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24] text-sm md:text-base"
                >
                  <option>Select a destination</option>
                  <option>Kashmir</option>
                  <option>Himachal</option>
                  <option>Goa</option>
                  <option>Kerala</option>
                  <option>Rajasthan</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-[#1A1A1A] font-semibold mb-1.5 md:mb-2 text-base md:text-base">Travel Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24] text-sm md:text-base"
                  />
                </div>
                <div>
                  <label className="block text-[#1A1A1A] font-semibold mb-1.5 md:mb-2 text-base md:text-base">Travelers</label>
                  <input
                    type="number"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24] text-sm md:text-base"
                    placeholder="Number of travelers"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#1A1A1A] font-semibold mb-1.5 md:mb-2 text-base md:text-base">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-[#1A1A1A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24] text-sm md:text-base"
                  placeholder="Tell us more about your trip..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 md:px-8 py-2 md:py-3 bg-[#FBBF24] text-[#1A1A1A] font-bold rounded-full border-2 border-[#1A1A1A] hover:bg-[#F59E0B] transition text-base md:text-base cursor-pointer"
              >
                Send Enquiry
              </button>
            </form>
          </div>

          {/* Right - Info */}
          <div className="space-y-4 md:space-y-8">
            <div>
              <p className="text-[#FBBF24] font-bold text-sm md:text-base lg:text-lg mb-2 md:mb-4">Plan Your Journey With Us</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 md:mb-6 text-balance">
                Let&apos;s Create Your Perfect Travel Experience
              </h2>
            </div>

            <div className="space-y-3 md:space-y-6">
              <div className="bg-[#FFF8F0] rounded-lg border-2 border-[#1A1A1A] p-4 md:p-6">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#1A1A1A] mb-2 md:mb-3">Customized Trips</h3>
                <p className="text-sm md:text-base lg:text-base text-[#666666]">We create personalized itineraries tailored to your preferences and interests.</p>
              </div>

              <div className="bg-[#FFF8F0] rounded-lg border-2 border-[#1A1A1A] p-4 md:p-6">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#1A1A1A] mb-2 md:mb-3">Easy Booking</h3>
                <p className="text-sm md:text-base lg:text-base text-[#666666]">Simple and straightforward booking process with flexible payment options.</p>
              </div>

              <div className="bg-[#FFF8F0] rounded-lg border-2 border-[#1A1A1A] p-4 md:p-6">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#1A1A1A] mb-2 md:mb-3">Dedicated Support</h3>
                <p className="text-sm md:text-base lg:text-base text-[#666666]">24/7 customer support to assist you before, during, and after your trip.</p>
              </div>

              <div className="bg-[#FFF8F0] rounded-lg border-2 border-[#1A1A1A] p-4 md:p-6">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#1A1A1A] mb-2 md:mb-3">Memorable Experiences</h3>
                <p className="text-sm md:text-base lg:text-base text-[#666666]">Create unforgettable memories with our expertly planned travel experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
