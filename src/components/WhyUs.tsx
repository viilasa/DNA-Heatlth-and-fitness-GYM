import React from 'react';
import { Star, Heart, Shield } from 'lucide-react';

export default function WhyUs() {
  return (
    <section id="why" className="py-20 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--text-primary)] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--text-primary)] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
            WHY DO WE DO THIS
          </h2>
          <div className="w-24 h-1 bg-[var(--text-primary)] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[var(--bg-primary)] p-6 rounded-lg shadow-lg border-2 border-[var(--text-primary)] transform hover:-translate-y-1 transition-all duration-300">
            <Star className="w-8 h-8 text-[var(--text-primary)] mb-4" />
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Excellence</h3>
            <p className="text-[var(--text-primary)] opacity-90">
              We strive for perfection in every home search, ensuring no detail is overlooked.
            </p>
          </div>

          <div className="bg-[var(--bg-primary)] p-6 rounded-lg shadow-lg border-2 border-[var(--text-primary)] transform hover:-translate-y-1 transition-all duration-300">
            <Heart className="w-8 h-8 text-[var(--text-primary)] mb-4" />
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Passion</h3>
            <p className="text-[var(--text-primary)] opacity-90">
              Finding your perfect home is not just our job—it's our passion.
            </p>
          </div>

          <div className="bg-[var(--bg-primary)] p-6 rounded-lg shadow-lg border-2 border-[var(--text-primary)] transform hover:-translate-y-1 transition-all duration-300">
            <Shield className="w-8 h-8 text-[var(--text-primary)] mb-4" />
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Trust</h3>
            <p className="text-[var(--text-primary)] opacity-90">
              Zero commission, complete transparency, and unwavering commitment to your needs.
            </p>
          </div>
        </div>

        <div className="space-y-8 text-[var(--text-primary)] opacity-90 bg-[var(--bg-primary)] p-8 rounded-lg shadow-lg border-2 border-[var(--text-primary)]">
          <p className="text-base md:text-lg leading-relaxed">
            Buying a home is one of the biggest moments of one's life, and we believe it should be exciting, not overwhelming.
          </p>
          
          <div className="w-16 h-0.5 bg-[var(--text-primary)] opacity-50"></div>
          
          <p className="text-base md:text-lg leading-relaxed">
            Our goal is to listen to you, understand your vision, and gather every detail to curate and find the perfect home—without you lifting a finger. We step into your shoes, ensuring every aspect of your dream home is met with precision and care.
          </p>
          
          <div className="w-16 h-0.5 bg-[var(--text-primary)] opacity-50"></div>
          
          <p className="text-base md:text-lg leading-relaxed">
            From expert guidance to handpicked listings and seamless closings, we take care of everything so you can simply enjoy the journey. And the best part? We charge zero commission—just a small, fixed fee—offering complete transparency with no hidden costs.
          </p>
          
          <div className="w-16 h-0.5 bg-[var(--text-primary)] opacity-50"></div>
          
          <p className="text-base md:text-lg leading-relaxed font-medium text-[var(--text-primary)]">
            Because finding your dream home should be a joyful experience, not a stressful one.
          </p>
        </div>
      </div>
    </section>
  );
}