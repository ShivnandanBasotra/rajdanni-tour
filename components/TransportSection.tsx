const sendToWhatsApp = (message: string) => {
  const phoneNumber = '919149511328';
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};

export default function TransportSection() {
  const transportServices = [
    'Airport / Railway Station Pick & Drop',
    'Outstation Cab Services (One-Way & Roundtrip)',
    'Local Sightseeing Cabs (Hourly Or Full-Day)',
    'Tempo Traveller & Bus Rentals For Groups',
    'Luxury Cars For Weddings, VIP Events & Business Travel',
    'Transport For Religious Tours (Vaishno Devi, Kedarnath, Amarnath Yatra, Etc.)',
  ];

  return (
    <section id="transport" className="py-8 md:py-16 lg:py-24 bg-white border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-4 md:space-y-8 flex flex-col items-center md:items-start justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight text-center md:text-left text-balance">
              Transport Services by Rajdani Travels
            </h2>

            <button 
              onClick={() => sendToWhatsApp('Hey Rajdani Travels! I need transportation services.')}
              className="w-full md:w-auto px-6 md:px-8 py-2 md:py-3 bg-[#1A1A1A] text-white font-bold rounded hover:bg-[#333333] transition text-sm md:text-base cursor-pointer"
            >
              Book Now
            </button>
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:space-y-8">
            {/* Services List */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A]">Our Transport Services Include</h3>
              <ol className="space-y-2 md:space-y-3 list-decimal list-inside">
                {transportServices.map((service, idx) => (
                  <li key={idx} className="text-[#1A1A1A] text-sm sm:text-base md:text-base leading-relaxed">
                    {service}
                  </li>
                ))}
              </ol>
            </div>

            {/* Contact Section */}
            <div className="space-y-3 md:space-y-4">
              <div>
                <h4 className="text-base md:text-lg font-bold text-[#1A1A1A] mb-2">Need A Cab?</h4>
                <p className="text-[#1A1A1A] text-sm sm:text-base md:text-base leading-relaxed">
                  Call Or WhatsApp Us At <strong className="break-all">+91- 91495 11328, +91 97967 55550</strong> To Book Your Ride Instantly.
                </p>
              </div>

              <p className="text-[#1A1A1A] text-sm sm:text-base md:text-base">
                Or Simply Mention Your Transport Requirements In Our Tour Enquiry Form!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
