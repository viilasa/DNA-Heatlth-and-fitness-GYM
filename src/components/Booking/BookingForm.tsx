import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const GOOGLE_FORM_ACTION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScDlYZJJQiona_gadhvfsJ7Rb53xnsx3LUY2aAG2Np4bq6WWQ/formResponse';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append('entry.776718825', formData.name); // Replace with your actual entry IDs
    formDataToSend.append('entry.2091018902', formData.email);
    formDataToSend.append('entry.1752394193', formData.phone);
    formDataToSend.append('entry.1830412095', formData.message);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors', // Prevents CORS issues
      });

      // Assume success since Google Forms doesn't return a proper response
      toast.success('Message sent successfully!');

      // Clear form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      // Only catch actual request errors (e.g., network failure)
      toast.error('Failed to send message. Please check your internet connection and try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-zinc-900" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-500 mb-4">GET IN TOUCH</h3>
          <h2 className="text-4xl font-bold text-white">START YOUR TRANSFORMATION</h2>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
              disabled={isSubmitting}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
              disabled={isSubmitting}
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-6"
            required
            disabled={isSubmitting}
          />
          <textarea
            name="message"
            placeholder="Tell us about your fitness goals"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-6"
            required
            disabled={isSubmitting}
          ></textarea>
          <button
            type="submit"
            className={`w-full bg-orange-500 text-white py-3 rounded-lg font-semibold transition-colors ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600'
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <Toaster position="top-right" />
    </section>
  );
};

export default BookingForm;
