import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PaymentSectionProps {
  onBack: () => void;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ onBack }) => {
  const upiId = "test02@oksbi";
  const qrCodeUrl = "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739439614/qr_code_yiesst.jpg"; // Replace with actual QR code URL

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
          <img
            src={qrCodeUrl}
            alt="Payment QR Code"
            className="w-48 h-48"
          />
        </div>
        <p className="text-gray-300 mb-2">Scan QR code or use UPI ID</p>
        <p className="text-orange-500 font-semibold mb-4">{upiId}</p>
        <div className="text-gray-300">
          <p>Contact us after payment:</p>
          <p className="text-orange-500 font-semibold">+91 779 803 2404</p>
        </div>
      </div>

      

      <p className="text-gray-400 text-sm text-center">
        After payment, please take a screenshot and send it to us on WhatsApp or Instagram
      </p>
    </div>
  );
};

export default PaymentSection;
