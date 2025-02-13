import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PaymentSectionProps {
  onBack: () => void;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ onBack }) => {
  const upiId = "your-upi-id@upi";
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
          {/* Replace with actual QR code component or image */}
          <img
            src={qrCodeUrl}
            alt="Payment QR Code"
            className="w-48 h-48"
          />
        </div>
        <p className="text-gray-300 mb-2">Scan QR code or use UPI ID</p>
        <p className="text-orange-500 font-semibold">{upiId}</p>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => window.location.href = `upi://pay?pa=${upiId}&pn=AbhijitFitness&tn=30DayChallenge&am=999`}
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
        >
          Pay with UPI Apps
        </button>

        <button
          onClick={() => window.location.href = "https://pay.google.com/"}
          className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Pay with Google Pay
        </button>
      </div>

      <p className="text-gray-400 text-sm mt-6 text-center">
        After payment, please take a screenshot and send it to us on Instagram or WhatsApp
      </p>
    </div>
  );
};

export default PaymentSection;