import React, { useState } from 'react';
import ChallengeDay from './ChallengeDay';
import ChallengeProgress from './ChallengeProgress';
import { challengeData } from './ChallengeData';

const Challenge: React.FC = () => {
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const currentDay = completedDays.length + 1;

  const handleDayClick = (day: number) => {
    if (!completedDays.includes(day) && day <= currentDay) {
      setCompletedDays([...completedDays, day]);
    }
  };

  return (
    <section className="py-20 bg-black" id="challenge">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-500 mb-4">30 DAY CHALLENGE</h3>
          <h2 className="text-4xl font-bold text-white mb-6">TRANSFORM YOUR BODY & MIND</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our 30-day transformation challenge and experience a complete change in your fitness level.
            Each day brings new exercises, nutrition tips, and motivation to help you reach your goals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ChallengeProgress currentDay={currentDay} totalDays={30} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challengeData.map((day, index) => (
              <ChallengeDay
                key={index}
                day={index + 1}
                title={day.title}
                description={day.description}
                isCompleted={completedDays.includes(index + 1)}
                isLocked={index + 1 > currentDay}
                onClick={() => handleDayClick(index + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;