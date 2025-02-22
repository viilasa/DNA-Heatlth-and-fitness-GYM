import React from 'react';
import { Check } from 'lucide-react';

interface ChallengeDayProps {
  day: number;
  title: string;
  description: string;
  isCompleted: boolean;
  isLocked: boolean;
  onClick: () => void;
}

const ChallengeDay: React.FC<ChallengeDayProps> = ({
  day,
  title,
  description,
  isCompleted,
  isLocked,
  onClick,
}) => {
  return (
    <div
      className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
        isLocked ? 'opacity-50' : ''
      }`}
      onClick={!isLocked ? onClick : undefined}
    >
      <div className={`bg-zinc-900 rounded-lg p-6 border-2 ${
        isCompleted ? 'border-orange-500' : 'border-zinc-800'
      }`}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-orange-500 font-bold">Day {day}</span>
          {isCompleted && (
            <div className="bg-orange-500 rounded-full p-1">
              <Check className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
        
        {isLocked && (
          <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
            <div className="bg-zinc-800 px-4 py-2 rounded-full text-sm text-white">
              Complete previous day to unlock
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengeDay;