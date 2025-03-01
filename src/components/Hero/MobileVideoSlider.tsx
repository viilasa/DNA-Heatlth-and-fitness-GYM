import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { slides } from './SlideData';

interface MobileVideoSliderProps {
  videoUrl: string;
}

const MobileVideoSlider: React.FC<MobileVideoSliderProps> = ({ videoUrl }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle slide navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (slides.length + 1)); // +1 for video slide
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length : prev - 1));
  };

  // Video controls
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Show controls temporarily when user interacts with the video
  const showControlsTemporarily = () => {
    setShowControls(true);
    
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  // Handle video loading events
  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
        setIsPlaying(false);
      });
    }
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  // Auto-advance slides
  useEffect(() => {
    // Only auto-advance for non-video slides
    if (currentSlide !== 0) {
      const timer = setTimeout(nextSlide, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide]);

  return (
    <section className="relative h-screen md:hidden">
      {/* Video Slide (first slide) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
      >
        <div className="relative h-full w-full overflow-hidden">
          {/* Video */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            autoPlay
            muted={isMuted}
            loop
            onLoadedData={handleVideoLoaded}
            onClick={() => {
              showControlsTemporarily();
            }}
            onTouchStart={() => {
              showControlsTemporarily();
            }}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Fallback if video fails to load */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <div className="text-white text-center p-4">
                <p className="mb-2">Video is loading...</p>
                <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
              </div>
            </div>
          )}

          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Video Controls */}
          <div 
            className={`absolute bottom-8 left-0 right-0 flex justify-center items-center transition-opacity duration-300 ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="bg-black/60 backdrop-blur-sm rounded-full p-2 flex items-center space-x-4">
              <button 
                onClick={togglePlay}
                className="w-10 h-10 flex items-center justify-center text-white bg-orange-500 rounded-full"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button 
                onClick={toggleMute}
                className="w-10 h-10 flex items-center justify-center text-white bg-zinc-800 rounded-full"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Start Your Journey Button - Positioned at bottom left */}
          <div className="absolute bottom-8 left-6 z-20">
            <button className="bg-orange-500 text-white px-6 py-3 text-lg font-semibold hover:bg-orange-600 transition-colors animate-fadeInUp animation-delay-400 shadow-lg">
              START YOUR JOURNEY
            </button>
          </div>
        </div>
      </div>

      {/* Regular Image Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index + 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
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
                <h2 className="text-white text-xl mb-4 animate-fadeInUp">
                  {slide.subtitle}
                </h2>
                <h1 className="text-4xl font-bold text-white mb-6 animate-fadeInUp animation-delay-200">
                  {slide.title}
                </h1>
                <p className="text-gray-200 text-lg mb-8 animate-fadeInUp animation-delay-300">
                  {slide.description}
                </p>
                <button className="bg-orange-500 text-white px-6 py-3 text-lg font-semibold hover:bg-orange-600 transition-colors animate-fadeInUp animation-delay-400">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        <button
          onClick={() => setCurrentSlide(0)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentSlide === 0 ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/80'
          }`}
        />
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index + 1)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index + 1 ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default MobileVideoSlider;