import React from 'react';
import TeamCard from './TeamCard';
import { teamMembers } from './TeamData';

const Team: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-500 mb-4">OUR TRAINERS</h3>
          <h2 className="text-4xl font-bold text-white">EXPERT INSTRUCTORS</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              {...member}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;