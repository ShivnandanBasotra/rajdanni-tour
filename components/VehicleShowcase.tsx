const vehicles = [
  // Top row - 4 vehicles
  { id: 1, name: '5 Seater | Etios', image: '/images/etios.png' },
  { id: 2, name: '7 Seater | Ertiga', image: '/images/eritrea.png' },
  { id: 3, name: '7 Seater | Innova', image: '/images/innova.png' },
  { id: 4, name: '20+ Seater | Force', image: '/images/forcelarge.jpeg' },
  // Bottom row - 3 vehicles
  { id: 5, name: '30 Seater | Bus', image: '/images/buslg.jpeg' },
  { id: 6, name: '27 Seater | Bus', image: '/images/bussh.jpeg' },
  { id: 7, name: '12 Seater | Force', image: '/images/forceshort.jpeg' },
];

export default function VehicleShowcase() {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-white border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Centered heading and description */}
        <div className="text-center space-y-3 md:space-y-6 mb-8 md:mb-12 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">
            Transport Services by Rajdanni Travels
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#1A1A1A] leading-relaxed">
            At <strong>Rajdanni Travels</strong>, We Don&apos;t Just Plan Your Tours—We Ensure You <strong>Travel Comfortably And Safely</strong> Every Step Of The Way. Whether You&apos;re Heading To The Airport, Exploring A Tourist Destination, Or Traveling Between Cities, Our <strong>Reliable And Affordable Transport Services</strong> Have You Covered.
          </p>
        </div>

        {/* Vehicle Grid - Top row 4 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center sm:justify-items-stretch">
          {vehicles.slice(0, 4).map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white border-2 border-[#1A1A1A] rounded-lg overflow-hidden flex flex-col w-full max-w-xs sm:max-w-none"
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-3 md:p-4 lg:p-5 flex flex-col items-center justify-center flex-1 space-y-2 md:space-y-3">
                <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#1A1A1A] text-center text-balance">
                  {vehicle.name}
                </h3>
                <button className="px-4 md:px-6 py-1.5 md:py-2 bg-[#FBBF24] text-[#1A1A1A] font-bold rounded border-2 border-[#1A1A1A] hover:bg-[#F59E0B] transition text-xs md:text-sm">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row - 3 vehicles centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mt-4 md:mt-6 justify-items-center sm:justify-items-stretch">
          {vehicles.slice(4).map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white border-2 border-[#1A1A1A] rounded-lg overflow-hidden flex flex-col w-full max-w-xs sm:max-w-none"
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-3 md:p-4 lg:p-5 flex flex-col items-center justify-center flex-1 space-y-2 md:space-y-3">
                <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#1A1A1A] text-center text-balance">
                  {vehicle.name}
                </h3>
                <button className="px-4 md:px-6 py-1.5 md:py-2 bg-[#FBBF24] text-[#1A1A1A] font-bold rounded border-2 border-[#1A1A1A] hover:bg-[#F59E0B] transition text-xs md:text-sm">
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