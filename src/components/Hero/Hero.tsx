import React, { useState, useCallback, useEffect, useRef } from 'react';
import { slides } from './SlideData';
import SlideButton from './SlideButton';
import SlideIndicators from './SlideIndicators';
import MobileVideoSlider from './MobileVideoSlider';
import { Volume2, VolumeX } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
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

  useEffect(() => {
    // Create audio element
    const audio = new Audio(videoUrl);
    audio.loop = true;
    audio.muted = true; // Start muted to comply with autoplay policies
    audio.volume = 0;
    audioRef.current = audio;

    // Set up event listeners
    audio.addEventListener('canplaythrough', () => {
      // Audio is ready to play
    });

    // Load the audio
    audio.load();

    // Try to play (will likely be blocked but we try anyway)
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Autoplay prevented initially, waiting for user interaction");
      });
    }

    // Handle user interaction to enable audio
    const handleUserInteraction = () => {
      if (audioRef.current) {
        // Try to play on user interaction
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Still couldn't play audio after user interaction");
          });
        }
      }
    };

    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });

    // Cleanup function
    return () => {
      audio.pause();
      audio.src = '';
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [videoUrl]);

  // Toggle mute/unmute
  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        // Unmute
        audioRef.current.muted = false;
        audioRef.current.volume = 0.5;
        
        // Try to play if it's not already playing
        if (audioRef.current.paused) {
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.log("Couldn't play audio on unmute");
              return;
            });
          }
        }
      } else {
        // Mute
        audioRef.current.volume = 0;
        audioRef.current.muted = true;
      }
      
      setIsMuted(!isMuted);
    }
  };

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
