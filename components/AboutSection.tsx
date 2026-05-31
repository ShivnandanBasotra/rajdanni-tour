export default function AboutSection() {
  return (
    <section id="about" className="py-4 md:py-8 lg:py-12 bg-white border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
          {/* Left - Image */}
          <div className="flex items-center justify-center h-auto">
            <img 
              src="/images/rahdanni-bus.png" 
              alt="Rahdanni Travels Bus" 
              className="w-full h-auto object-contain md:scale-90 md:origin-center"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-2 md:space-y-3 flex flex-col justify-center">
            <p className="text-[#FBBF24] font-bold text-sm sm:text-lg">Where to Next? Let&apos;s find out together.</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight text-balance">
              Explore the World with Rajdani Travels
            </h1>

            <div className="space-y-1.5 md:space-y-2 text-base sm:text-base md:text-lg text-[#666666] leading-relaxed">
              <p>
                At <strong className="text-[#1A1A1A]">Rajdhani Travel</strong>, we specialize in crafting <strong className="text-[#1A1A1A]">Customized Travel Experiences</strong> that fulfill the unique dreams and desires of our valued clients.
              </p>
              
              <p>
                <strong className="text-[#1A1A1A]">Founded In Jammu</strong>, our strong roots in the tourism-rich region of Jammu &amp; Kashmir empower us to offer <strong className="text-[#1A1A1A]">Deeply Personalized And Innovative Travel Solutions</strong>—whether you&apos;re exploring the beauty of India or traveling across the globe.
              </p>
              
              <p>
                From <strong className="text-[#1A1A1A]">Scenic Domestic Escapes</strong> to <strong className="text-[#1A1A1A]">Adventurous International Tours</strong>, Rajdhani Travel is your <strong className="text-[#1A1A1A]">Reliable Travel Partner</strong>.
              </p>
              
              <p>
                Our unwavering commitment to <strong className="text-[#1A1A1A]">Quality Service, Attention To Detail</strong>, and the <strong className="text-[#1A1A1A]">Spirit Of Discovery</strong> sets us apart.
              </p>
              
              <p>
                Choose <strong className="text-[#1A1A1A]">Rajdhani Travel</strong> for a journey that&apos;s more than just a trip—it&apos;s an experience curated with care, passion, and expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
