import React, { useState } from 'react';
import { X } from 'lucide-react';
import PaymentSection from './PaymentSection';
import toast, { Toaster } from 'react-hot-toast';

const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScDlYZJJQiona_gadhvfsJ7Rb53xnsx3LUY2aAG2Np4bq6WWQ/formResponse';

interface EnrollmentFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  instagram: string;
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    instagram: ''
  });

  const [showPayment, setShowPayment] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = () => {
    return formData.name && formData.phone && formData.email && formData.instagram;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append('entry.776718825', formData.name);
    formDataToSend.append('entry.1752394193', formData.phone);
    formDataToSend.append('entry.2091018902', formData.email);
    formDataToSend.append('entry.1310142972', formData.instagram);
    

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors',
      });

      toast.success('Enrollment information saved successfully!');
      setShowPayment(true);
    } catch (error) {
      toast.error('Failed to save enrollment information. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-zinc-900 rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        {!showPayment ? (
          <>
            <h2 className="text-2xl font-bold text-white mb-6">Enroll Now</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="instagram" className="block text-gray-300 mb-2">
                  Instagram ID
                </label>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full bg-black text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  isFormValid() && !isSubmitting
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                }`}
                disabled={!isFormValid() || isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
              </button>
            </form>
          </>
        ) : (
          <PaymentSection onBack={() => setShowPayment(false)} />
        )}
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default EnrollmentForm;
