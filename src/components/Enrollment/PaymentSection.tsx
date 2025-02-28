import React from 'react';
import { ArrowLeft, Copy, ExternalLink } from 'lucide-react';

interface PaymentSectionProps {
  onBack: () => void;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ onBack }) => {
  const upiId = "test02@oksbi";
  const qrCodeUrl = "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739826406/Scan_the_code_kalv8o.png"; // Replace with actual QR code URL
  const phoneNumber = "+917798032404";
  

  const handleCopyUpiId = () => {
    navigator.clipboard.writeText(upiId);
    alert("UPI ID copied to clipboard!");
  };

  const handleUpiRedirect = () => {
    const upiUrl = `upi://pay?pa=suryanature02@oksbi&pn=SuryaNature&cu=INR`;
    window.location.href = upiUrl;
  };

  const handlePhoneRedirect = () => {
    const upiUrl = `upi://pay?pa=8767530469@upi&pn=SuryaNature&cu=INR`;
    window.location.href = phoneUpiUrl;;
  };

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center text-gray-400 hover:text-white mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Form
      </button>

      <h2 className="text-2xl font-bold text-white mb-6">Payment Details</h2>

      <div className="text-center mb-8">
        <div className="bg-white p-4 rounded-lg inline-block mb-4">
          <img src={qrCodeUrl} alt="Payment QR Code" className="w-48 h-48" />
        </div>
        <p className="text-gray-300 mb-2">Scan QR code or use UPI ID</p>
        
        <div className="flex items-center justify-center space-x-2 mb-4">
          <button 
            onClick={handleUpiRedirect}
            className="text-orange-500 font-semibold hover:underline flex items-center"
          >
            {upiId}
            <ExternalLink className="w-4 h-4 ml-1" />
          </button>
          <button 
            onClick={handleCopyUpiId}
            className="bg-zinc-800 p-1 rounded hover:bg-zinc-700 transition-colors"
            aria-label="Copy UPI ID"
          >
            <Copy className="w-4 h-4 text-gray-300" />
          </button>
        </div>
        
        <div className="text-gray-300 mb-2">
          <p>Contact us after payment:</p>
          <button
            onClick={handlePhoneRedirect}
            className="text-orange-500 font-semibold hover:underline flex items-center justify-center mx-auto"
          >
            +91 779 803 2404
            <ExternalLink className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      <p className="text-gray-400 text-sm text-center">
        After payment, please take a screenshot and send it to us on WhatsApp or Instagram
      </p>
    </div>
  );
};

export default PaymentSection;
