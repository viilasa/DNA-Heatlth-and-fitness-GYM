import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface BackgroundAudioProps {
  audioUrl: string;
}

const BackgroundAudio: React.FC<BackgroundAudioProps> = ({ audioUrl }) => {
  const [isMuted, setIsMuted] = useState(true); // Start muted by default
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio(audioUrl);
    audio.loop = true;
    audio.muted = true; // Start muted to comply with autoplay policies
    audio.volume = 0;
    audioRef.current = audio;

    // Set up event listeners
    audio.addEventListener('canplaythrough', () => {
      setIsLoaded(true);
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
  }, [audioUrl]);

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

  if (!isLoaded) return null;

  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-5 left-5 z-50 w-6 h-6 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 md:hidden"
      aria-label={isMuted ? "Unmute background music" : "Mute background music"}
    >
      {isMuted ? (
        <VolumeX className="w-4 h-4 text-white" />
      ) : (
        <Volume2 className="w-4 h-4 text-white" />
      )}
    </button>
  );
};

export default BackgroundAudio;