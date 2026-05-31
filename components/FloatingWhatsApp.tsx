'use client';

import Image from 'next/image';

const sendToWhatsApp = (message: string) => {
  const phoneNumber = '919149511328';
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};

export default function FloatingWhatsApp() {


  const handleStartChat = () => {
    sendToWhatsApp('Hey Rajdani Travels! I want to know more about your tour packages.');
  };


  return (
    <div className="fixed bottom-3 right-3 md:bottom-4 md:right-4  z-50">

      {/* Floating Button */}
      <button
        onClick={handleStartChat}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E2%80%94Pngtree%E2%80%94whatsapp%20phone%20icon%20vector_8704826-7CFxK8Aq2cYzo2p7zu9cQS5Z7fENVF.png"
          alt="WhatsApp"
          width={32}
          height={32}
          className="w-14 h-14 sm:w-16 sm:h-16 hover:scale-110 cursor-pointer object-contain"
        />
      </button>
    </div>
  );
}
