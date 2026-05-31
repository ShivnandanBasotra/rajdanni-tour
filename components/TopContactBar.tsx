export default function TopContactBar() {
  return (
    <div className="bg-[#1A1A1A] text-white py-2 md:py-3">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-center">
        <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-8 w-full justify-center">
          {/* First number - hidden on small screens */}
          <div className="hidden sm:flex items-center gap-2 text-sm md:text-base font-bold whitespace-nowrap">
            <span className="text-[#FBBF24]">📞</span> +91 91495 11328
          </div>
          {/* Second number - always visible */}
          <div className="flex items-center gap-2 text-sm md:text-base font-bold whitespace-nowrap">
            <span className="text-[#FBBF24]">📞</span> +91 9796755550
          </div>
        </div>
      </div>
    </div>
  );
}
