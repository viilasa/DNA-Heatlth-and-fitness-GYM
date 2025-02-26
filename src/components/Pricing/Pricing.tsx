import React from 'react';
import PricingCard from './PricingCard';
import { pricingPlans } from './PricingData';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-black" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-500 mb-4">MEMBERSHIP PLANS</h3>
          <h2 className="text-4xl font-bold text-white mb-4">CHOOSE YOUR PACKAGE</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select from our range of membership options designed to fit your fitness goals and budget.
            Join now and start your transformation journey with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            * All prices are inclusive of taxes. Student ID required for student packages.
            <br />
            Terms and conditions apply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;