import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface BackgroundAudioProps {
  audioUrl: string;
}

const BackgroundAudio: React.FC<BackgroundAudioProps> = ({ audioUrl }) => {
  const [isMuted, setIsMuted] = useState(true); // Start muted by default
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const heroSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Find the hero section
    heroSectionRef.current = document.querySelector('section.h-screen');

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

  return null; // We don't need this component to render anything since we're using the mute button in the hero section
};

export default BackgroundAudio;
