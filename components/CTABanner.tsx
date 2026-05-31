export default function CTABanner() {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-[#1A1A1A] border-b-2 border-[#FBBF24] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center space-y-4 md:space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FBBF24] text-balance">
          Ready For Your Next Adventure?
        </h2>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Book your dream vacation with Rajdani Travels and explore unforgettable destinations with comfort and confidence.
        </p>

        <button className="px-6 sm:px-8 md:px-12 py-2 md:py-4 bg-[#FBBF24] text-[#1A1A1A] font-bold text-sm md:text-base lg:text-lg rounded-full border-2 border-[#FBBF24] hover:bg-[#F59E0B] transition">
          Contact Us
        </button>
      </div>
    </section>
  );
}
