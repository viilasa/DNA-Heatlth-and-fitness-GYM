import { useState, useEffect } from 'react';

interface UseLoadingAnimationProps {
  initialDelay?: number;
  duration?: number;
}

/**
 * A hook to handle loading animations with configurable delay and duration
 * @param initialDelay - Delay in ms before animation starts (default: 300ms)
 * @param duration - Duration of the animation in ms (default: 1500ms)
 * @returns Object containing animation state and CSS classes
 */
const useLoadingAnimation = ({ 
  initialDelay = 300, 
  duration = 1500 
}: UseLoadingAnimationProps = {}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, initialDelay);
    
    return () => clearTimeout(timer);
  }, [initialDelay]);
  
  // Generate CSS classes for the animation
  const animationClass = `transition-all duration-${duration} ease-out`;
  
  return {
    isAnimating,
    animationClass,
    style: {
      transitionDuration: `${duration}ms`
    }
  };
};

export default useLoadingAnimation;