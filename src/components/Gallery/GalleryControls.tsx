import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryControlsProps {
  onPrevious: () => void;
  onNext: () => void;
}

const GalleryControls: React.FC<GalleryControlsProps> = ({ onPrevious, onNext }) => {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  );
};

export default GalleryControls;