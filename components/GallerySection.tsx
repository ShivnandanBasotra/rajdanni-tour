const galleryImages = [
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%202.22.08%20PM-BMJ0fA6X9OvWQK4qwemrBNsXc7eHp0.jpeg',
    title: 'Festival Celebration',
  },
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%202.22.07%20PM-iSK9JJmFtL9tcSG67RfuT9eZQ8u2tj.jpeg',
    title: 'Heritage Visit',
  },
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%202.22.07%20PM%20%282%29-bYj18vILEhSSiUgRR8XL7UmB8U4jRM.jpeg',
    title: 'Pahalgam Valley',
  },
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%202.22.07%20PM%20%281%29-Q6kWi9kkbjd09W5bFRDglfjFJWjRFM.jpeg',
    title: 'Bus Journey',
  },
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-28%20at%202.22.08%20PM%20%281%29-UXEQ5Hlg75JPpuReq0PevcF4KqdTVJ.jpeg',
    title: 'Friends',
  },
];

export default function GallerySection() {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-[#FFF8F0] border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 md:mb-12 text-center">
          Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              className="aspect-square rounded-lg border-2 border-[#1A1A1A] overflow-hidden group cursor-pointer hover:shadow-lg transition-all relative"
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4 pointer-events-none">
                <p className="font-bold text-white text-sm">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
