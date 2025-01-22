import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const SlideButton: React.FC<SlideButtonProps> = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm z-10"
      style={{ [direction]: '2rem' }}
    >
      {direction === 'left' ? (
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      ) : (
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      )}
    </button>
  );
};

export default SlideButton;