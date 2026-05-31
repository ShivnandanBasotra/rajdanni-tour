export default function FeaturesStrip() {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-[#1A1A1A] text-white border-b-2 border-[#FBBF24]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-8 md:space-y-12">
        {/* Top Features */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row items-center justify-center gap-4 md:gap-8 text-center">
          <div className="flex-1">
            <p className="font-bold text-sm md:text-base lg:text-lg">24/7 Support</p>
          </div>
          <div className="w-1 h-8 bg-[#FBBF24] hidden lg:block"></div>
          <div className="flex-1">
            <p className="font-bold text-sm md:text-base lg:text-lg">Custom Itineraries</p>
          </div>
          <div className="w-1 h-8 bg-[#FBBF24] hidden lg:block"></div>
          <div className="flex-1">
            <p className="font-bold text-sm md:text-base lg:text-lg">Local Expertise</p>
          </div>
          <div className="w-1 h-8 bg-[#FBBF24] hidden lg:block"></div>
          <div className="flex-1">
            <p className="font-bold text-sm md:text-base lg:text-lg">Affordable Pricing</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4 md:space-y-6 border-t-2 border-[#FBBF24] pt-8 md:pt-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FBBF24] leading-tight text-balance">
            Rajdani Tour Packages
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl">
            Embark on an unforgettable journey with Rajdani Travels&apos; thoughtfully crafted tour packages.
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl">
            From serene weekend escapes to immersive cultural holidays and thrilling road adventures, our curated collection of tours invites you to discover the world beyond the ordinary. At Rajdani Travels, we blend comfort, adventure, and local insight to bring you travel experiences that leave lasting memories.
          </p>
        </div>
      </div>
    </section>
  );
}
