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
  const observerRef = useRef<IntersectionObserver | null>(null);
  const wasPlayingRef = useRef(true);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  const safePlayVideo = async () => {
    if (videoRef.current) {
      try {
        playPromiseRef.current = videoRef.current.play();
        await playPromiseRef.current;
        setIsPlaying(true);
      } catch (error) {
        console.error("Video play failed:", error);
        setIsPlaying(false);
      }
    }
  };

  const safePauseVideo = () => {
    if (videoRef.current) {
      // Only pause if there's no pending play promise
      if (!playPromiseRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        // Wait for the play promise to resolve before pausing
        playPromiseRef.current
          .then(() => {
            videoRef.current?.pause();
            setIsPlaying(false);
          })
          .catch(() => {
            setIsPlaying(false);
          })
          .finally(() => {
            playPromiseRef.current = null;
          });
      }
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        safePauseVideo();
        wasPlayingRef.current = isPlaying;
      }
      return (prev + 1) % (slides.length + 1);
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        safePauseVideo();
        wasPlayingRef.current = isPlaying;
      }
      return prev === 0 ? slides.length : prev - 1;
    });
  };

  const togglePlay = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        safePauseVideo();
      } else {
        await safePlayVideo();
      }
      wasPlayingRef.current = !isPlaying;
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const showControlsTemporarily = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    if (currentSlide === 0) {
      safePlayVideo();
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (videoRef.current) {
          if (!entry.isIntersecting) {
            safePauseVideo();
            videoRef.current.muted = true;
            setIsMuted(true);
          } else if (currentSlide === 0 && wasPlayingRef.current) {
            safePlayVideo();
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    if (videoRef.current) {
      observerRef.current.observe(videoRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [currentSlide]);

  useEffect(() => {
    if (videoRef.current) {
      if (currentSlide === 0 && wasPlayingRef.current) {
        safePlayVideo();
      } else if (currentSlide !== 0) {
        safePauseVideo();
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  }, [currentSlide]);

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    if (currentSlide !== 0) {
      const timer = setTimeout(nextSlide, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide]);

  return (
    <section className="relative h-[100svh] md:hidden">
      {/* Video Slide */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
      >
        <div className="relative h-full w-full overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            autoPlay
            muted={isMuted}
            loop
            onLoadedData={handleVideoLoaded}
            onClick={showControlsTemporarily}
            onTouchStart={showControlsTemporarily}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <div className="text-white text-center p-4">
                <p className="mb-2">Video is loading...</p>
                <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
              </div>
            </div>
          )}

          <div className="absolute inset-0 bg-black/40"></div>

          <div 
            className={`absolute bottom-20 left-0 right-0 flex justify-center items-center transition-opacity duration-300 ${
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

          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 z-20 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </button>

          <div className="absolute bottom-8 left-4 z-20">
            <button className="bg-orange-500 text-white px-4 py-2 text-base font-semibold hover:bg-orange-600 transition-colors animate-fadeInUp animation-delay-400 shadow-lg rounded-lg">
              START YOUR JOURNEY
            </button>
          </div>
        </div>
      </div>

      {/* Image Slides */}
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
                <h2 className="text-white text-base mb-2 animate-fadeInUp">
                  {slide.subtitle}
                </h2>
                <h1 className="text-2xl font-bold text-white mb-4 animate-fadeInUp animation-delay-200">
                  {slide.title}
                </h1>
                <p className="text-gray-200 text-sm mb-6 animate-fadeInUp animation-delay-300">
                  {slide.description}
                </p>
                <button className="bg-orange-500 text-white px-4 py-2 text-base font-semibold hover:bg-orange-600 transition-colors animate-fadeInUp animation-delay-400 rounded-lg">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm z-20"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm z-20"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 z-20">
        <button
          onClick={() => setCurrentSlide(0)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            currentSlide === 0 ? 'bg-orange-500 w-6' : 'bg-white/50 hover:bg-white/80'
          }`}
        />
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index + 1)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index + 1 ? 'bg-orange-500 w-6' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default MobileVideoSlider;
