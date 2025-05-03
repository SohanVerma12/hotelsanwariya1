"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/919993794283?text=Hi,%20I'm%20interested%20in%20booking%20at%20Hotel%20Sanwariya%20Sehore.",
      "_blank"
    );
  };

  const handlePhoneClick = () => {
    window.open("tel:+919993794283", "_blank");
  };

  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-3 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="text-white" size={24} />
      </button>
      <button
        onClick={handlePhoneClick}
        className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center shadow-lg hover:bg-blue-800 transition-colors duration-300"
        aria-label="Call us"
      >
        <Phone className="text-white" size={24} />
      </button>
    </div>
  );
}
