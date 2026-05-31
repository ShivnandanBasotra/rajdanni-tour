const vehicles = [
  // Top row - 4 vehicles
  { id: 1, name: '5 Seater | Etios', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2031%2C%202026%2C%2002_34_00%20PM-itCtwKpsRri8aw4IvnbBoUdn85v6XU.png' },
  { id: 2, name: '7 Seater | Ertiga', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2031%2C%202026%2C%2002_32_35%20PM-Hg1JkXoECtGjZd4wWjoNJgArASHLXk.png' },
  { id: 3, name: '7 Seater | Innova', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2031%2C%202026%2C%2002_31_22%20PM-MYfh6A6YVUZBdgyb9emOLc6Oeh4UoL.png' },
  { id: 4, name: '20+ Seater | Force', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%202.23.03%20PM%20%281%29-CLgwmrs12ZwB4dCzwSiwJJkP7NUKWu.jpeg' },
  // Bottom row - 3 vehicles
  { id: 5, name: '30 Seater | Bus', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%202.23.02%20PM%20%282%29-3vhdxIU1qyEaRZukUeWC3FycdAEp6T.jpeg' },
  { id: 6, name: '27 Seater | Bus', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%202.23.02%20PM%20%281%29-YN8bvuHryHBNbZuXNVExYiNaisUjp7.jpeg' },
  { id: 7, name: '12 Seater | Force', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%202.23.03%20PM-a8UZfyFIqh6M6wAQtqD9RGCAIZlRJZ.jpeg' },
];

export default function VehicleShowcase() {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-white border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Centered heading and description */}
        <div className="text-center space-y-3 md:space-y-6 mb-8 md:mb-12 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] text-balance">
            Transport Services by Rajdani Travels
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#1A1A1A] leading-relaxed">
            At <strong>Rajdani Travels</strong>, We Don&apos;t Just Plan Your Tours—We Ensure You <strong>Travel Comfortably And Safely</strong> Every Step Of The Way. Whether You&apos;re Heading To The Airport, Exploring A Tourist Destination, Or Traveling Between Cities, Our <strong>Reliable And Affordable Transport Services</strong> Have You Covered.
          </p>
        </div>

        {/* Vehicle Grid - Top row 4 items, bottom row 3 items centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center lg:justify-items-start">
          {/* Top 4 vehicles */}
          {vehicles.slice(0, 4).map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white border-2 border-[#1A1A1A] rounded-lg overflow-hidden flex flex-col w-full"
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 md:h-56 lg:h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Card Content */}
              <div className="p-3 md:p-4 lg:p-6 flex flex-col items-center justify-center flex-1 space-y-2 md:space-y-4">
                <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#1A1A1A] text-center text-balance">{vehicle.name}</h3>
                <button className="px-4 md:px-6 py-1.5 md:py-2 bg-[#FBBF24] text-[#1A1A1A] font-bold rounded border-2 border-[#1A1A1A] hover:bg-[#F59E0B] transition text-xs md:text-sm">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row - 3 vehicles centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mt-6 md:mt-8">
          {vehicles.slice(4).map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white border-2 border-[#1A1A1A] rounded-lg overflow-hidden flex flex-col w-full"
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 md:h-56 lg:h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Card Content */}
              <div className="p-3 md:p-4 lg:p-6 flex flex-col items-center justify-center flex-1 space-y-2 md:space-y-4">
                <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#1A1A1A] text-center text-balance">{vehicle.name}</h3>
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
