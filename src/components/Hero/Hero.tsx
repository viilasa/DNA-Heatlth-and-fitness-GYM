import React, { useState, useCallback, useEffect } from 'react';
import { slides } from './SlideData';
import SlideButton from './SlideButton';
import SlideIndicators from './SlideIndicators';
import MobileVideoSlider from './MobileVideoSlider';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoUrl = "https://res.cloudinary.com/ddhhlkyut/video/upload/v1740848814/vid_fexpdb.mp4";

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      {/* Mobile Video Slider - Only visible on mobile */}
      <MobileVideoSlider videoUrl={videoUrl} />

      {/* Desktop Slider - Hidden on mobile */}
      <section id="home" className="relative h-screen hidden md:block">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <h2 className="text-white text-xl md:text-2xl mb-4 animate-fadeInUp">
                    {slide.subtitle}
                  </h2>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeInUp animation-delay-200">
                    {slide.title}
                  </h1>
                  <p className="text-gray-200 text-lg mb-8 animate-fadeInUp animation-delay-300">
                    {slide.description}
                  </p>
                  <button className="bg-orange-500 text-white px-6 md:px-8 py-3 text-lg font-semibold hover:bg-orange-600 transition-colors animate-fadeInUp animation-delay-400">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <SlideButton direction="left" onClick={prevSlide} />
        <SlideButton direction="right" onClick={nextSlide} />
        <SlideIndicators
          total={slides.length}
          current={currentSlide}
          onClick={setCurrentSlide}
        />
      </section>
    </>
  );
};

export default Hero;