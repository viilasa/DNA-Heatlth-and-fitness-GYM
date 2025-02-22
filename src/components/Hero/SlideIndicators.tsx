import React from 'react';

interface SlideIndicatorsProps {
  total: number;
  current: number;
  onClick: (index: number) => void;
}

const SlideIndicators: React.FC<SlideIndicatorsProps> = ({ total, current, onClick }) => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            current === index ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/80'
          }`}
        />
      ))}
    </div>
  );
}

export default SlideIndicators;