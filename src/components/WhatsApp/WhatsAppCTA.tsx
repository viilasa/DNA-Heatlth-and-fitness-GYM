import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  buttonText?: string; // New prop to customize button text
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message = "Hello, I would like to know more about your products.",
  className = "",
  buttonText = "Chat on WhatsApp" // Default button text
}) => {
  const handleWhatsAppClick = () => {
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center ${className}`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      {buttonText} {/* Dynamically updating button text */}
    </button>
  );
};

export default WhatsAppButton;
