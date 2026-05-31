const sendToWhatsApp = (message: string) => {
  const phoneNumber = '919149511328';
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};

export default function HeroSection() {
  return (
    <section id="home" className="py-8 md:py-16 lg:py-24 bg-[#FFF8F0] border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
          {/* Content - Centered */}
          <p className="text-[#FBBF24] font-bold text-sm md:text-base lg:text-lg">Where to Next? Let&apos;s find out together.</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight text-balance">
            Explore the World with Rajdani Travels
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1A1A1A]">Book Your Next Adventure Today!</h2>
          
          <p className="text-sm sm:text-base md:text-lg text-[#666666] leading-relaxed max-w-3xl">
            Whether you&apos;re an adventure enthusiast, a culture lover, or simply in need of a peaceful escape, Rajdani Travels has the perfect journey for you.
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-[#666666] leading-relaxed max-w-3xl">
            Our personalized tour packages empower you to craft a vacation that truly reflects your style.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 justify-center">
            <button 
              onClick={() => sendToWhatsApp('Hey Rajdani Travels! I want to plan my next trip.')}
              className="px-6 md:px-8 py-2 md:py-3 bg-[#FBBF24] text-[#1A1A1A] font-bold rounded-full border-2 border-[#1A1A1A] hover:bg-[#F59E0B] transition text-sm md:text-base cursor-pointer"
            >
              Plan Your Trip
            </button>
            <button 
              onClick={() => sendToWhatsApp('Hey Rajdani Travels! I would like to explore your tour packages.')}
              className="px-6 md:px-8 py-2 md:py-3 bg-white text-[#1A1A1A] font-bold rounded-full border-2 border-[#1A1A1A] hover:bg-[#FFF8F0] transition text-sm md:text-base cursor-pointer"
            >
              Explore Packages
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
