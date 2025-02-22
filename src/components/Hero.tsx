import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80",
    alt: "Luxury Villa with Pool",
    title: "Discover Luxury Living",
    subtitle: "Experience the finest properties in Goa's most sought-after locations"
  },
  {
    url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80",
    alt: "Beachfront Property",
    title: "Beachfront Paradise",
    subtitle: "Wake up to stunning ocean views and pristine beaches"
  },
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    alt: "Modern Architecture",
    title: "Modern Elegance",
    subtitle: "Contemporary designs meeting timeless luxury"
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(goToNext, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, goToNext]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210";
    const message = "Hi! I'm interested in finding my dream home. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[var(--bg-secondary)]">
      {/* Carousel Container */}
      <div 
        className="relative h-full w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
              <img
                src={image.url}
                alt={image.alt}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col justify-center h-full pt-20 pb-12">
                <div className="max-w-3xl">
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-fade-slide-up"
                      style={{
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                        animation: 'fadeSlideUp 0.8s forwards'
                      }}>
                    {image.title}
                  </h1>
                  <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 opacity-0 animate-fade-slide-up"
                     style={{
                       textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                       animation: 'fadeSlideUp 0.8s 0.2s forwards'
                     }}>
                    {image.subtitle}
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-[var(--text-primary)] hover:bg-[var(--text-primary)]/90 text-[var(--bg-primary)] font-bold text-lg md:text-xl py-4 px-8 rounded-none transition-all duration-300 transform hover:scale-105 opacity-0 animate-fade-slide-up shadow-lg"
                    style={{animation: 'fadeSlideUp 0.8s 0.4s forwards'}}
                  >
                    Chat With Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Add animation keyframes to index.css */}
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-slide-up {
          opacity: 0;
          transform: translateY(20px);
        }
      `}</style>
    </div>
  );
}