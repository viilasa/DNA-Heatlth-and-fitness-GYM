import React, { useState } from 'react';
import { Check } from 'lucide-react';
import type { PricingPlan } from './PricingData';

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const [selectedDurationIndex, setSelectedDurationIndex] = useState(0);
  const selectedDuration = plan.durations[selectedDurationIndex];

  return (
    <div className="bg-zinc-900 rounded-lg p-6 relative">
      {plan.tag && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
          {plan.tag}
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
        <p className="text-gray-400">{plan.description}</p>
      </div>

      {/* Duration Selector */}
      <div className="mb-6">
        <div className="grid grid-cols-2 gap-2 mb-4">
          {plan.durations.map((duration, index) => (
            <button
              key={duration.duration}
              onClick={() => setSelectedDurationIndex(index)}
              className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                selectedDurationIndex === index
                  ? 'bg-orange-500 text-white'
                  : 'bg-black/30 text-gray-400 hover:bg-black/50'
              }`}
            >
              {duration.duration}
            </button>
          ))}
        </div>

        {/* Price Display */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2">
            <span className="text-gray-400 line-through">₹{selectedDuration.regularPrice}</span>
            <span className="text-3xl font-bold text-white">₹{selectedDuration.salePrice}</span>
          </div>
          <span className="text-orange-500 text-sm">Save ₹{selectedDuration.regularPrice - selectedDuration.salePrice}</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

     
    </div>
  );
};

export default PricingCard;