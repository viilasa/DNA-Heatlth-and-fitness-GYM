import React from 'react';
import TeamCard from './TeamCard';
import { teamMembers } from './TeamData';

const Team: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-500 mb-4">MEET THE EXPERTS</h3>
          <h2 className="text-4xl font-bold text-white">YOUR TRANSFORMATION TEAM</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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