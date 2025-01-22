import React from 'react';
import PricingCard from './PricingCard';
import { pricingPlans } from './PricingData';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-500 mb-4">OUR PLANS</h3>
          <h2 className="text-4xl font-bold text-white">CHOOSE YOUR PRICING PLAN</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;