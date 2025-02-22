import React from 'react';

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, isPopular }) => {
  return (
    <div className={`relative bg-zinc-900 rounded-lg p-8 ${isPopular ? 'border-2 border-orange-500' : ''}`}>
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-5xl font-bold text-orange-500">${price}</span>
        <span className="text-gray-400">/month</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-300 flex items-center">
            <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;