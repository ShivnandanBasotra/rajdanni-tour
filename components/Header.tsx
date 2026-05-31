'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8F0] border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between py-2">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2025%2C%202026%2C%2004_41_58%20PM-yUV7spJZVqv5MDGzV3mc92O12MAsHZ.png"
            alt="Rajdani Travels"
            width={200}
            height={80}
            className="h-12 md:h-14 w-auto"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="#home"
            className="text-sm lg:text-base text-[#1A1A1A] font-semibold hover:text-[#FBBF24] transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm lg:text-base text-[#1A1A1A] font-semibold hover:text-[#FBBF24] transition"
          >
            About Us
          </a>

          <a
            href="#packages"
            className="text-sm lg:text-base text-[#1A1A1A] font-semibold hover:text-[#FBBF24] transition"
          >
            Packages
          </a>

          <a
            href="#transport"
            className="text-sm lg:text-base text-[#1A1A1A] font-semibold hover:text-[#FBBF24] transition"
          >
            Transportation
          </a>

          <a
            href="#contact"
            className="text-sm lg:text-base text-[#1A1A1A] font-semibold hover:text-[#FBBF24] transition"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1 w-6 h-6 cursor-pointer"
        >
          <div
            className={`w-full h-0.5 bg-[#1A1A1A] transition-all ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></div>

          <div
            className={`w-full h-0.5 bg-[#1A1A1A] transition-all ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></div>

          <div
            className={`w-full h-0.5 bg-[#1A1A1A] transition-all ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#FFFFFF] border-t-2 border-[#1A1A1A] flex flex-col gap-3 p-4">
          <a href="#home" className="text-sm text-[#1A1A1A] font-semibold">
            Home
          </a>

          <a href="#about" className="text-sm text-[#1A1A1A] font-semibold">
            About Us
          </a>

          <a href="#packages" className="text-sm text-[#1A1A1A] font-semibold">
            Packages
          </a>

          <a
            href="#transport"
            className="text-sm text-[#1A1A1A] font-semibold"
          >
            Transportation
          </a>

          <a href="#contact" className="text-sm text-[#1A1A1A] font-semibold">
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
}
