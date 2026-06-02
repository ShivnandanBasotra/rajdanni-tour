const galleryImages = [
  {
    image: '/images/4.jpeg',
    title: 'Festival Celebration',
  },
  {
    image: '/images/3.jpeg',
    title: 'Heritage Visit',
  },
  {
    image: '/images/2.jpeg',
    title: 'Pahalgam Valley',
  },
  {
    image: '/images/1.jpeg',
    title: 'Bus Journey',
  },
  {
    image: '/images/6.jpeg',
    title: 'kashmir',
  },
  {
    image: '/images/5.jpeg',
    title: 'Friends',
  },
  {
    image: '/images/7.jpeg',
    title: 'Friends',
  },
  {
    image: '/images/8.jpeg',
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
