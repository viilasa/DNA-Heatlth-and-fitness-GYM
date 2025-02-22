import React from 'react';

interface ChallengeProgressProps {
  currentDay: number;
  totalDays: number;
}

const ChallengeProgress: React.FC<ChallengeProgressProps> = ({ currentDay, totalDays }) => {
  const progress = (currentDay / totalDays) * 100;

  return (
    <div className="mb-12">
      <div className="flex justify-between text-white mb-2">
        <span>Progress</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-orange-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between text-gray-400 mt-2">
        <span>Day {currentDay}</span>
        <span>Day {totalDays}</span>
      </div>
    </div>
  );
};

export default ChallengeProgress;