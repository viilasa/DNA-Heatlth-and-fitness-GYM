import React from 'react';
import { Trophy, Target, Users, Dumbbell } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Trophy className="w-12 h-12 text-orange-500" />,
      title: "30 Day Challenge",
      description: "Structured program with daily workouts and nutrition plans"
    },
    {
      icon: <Target className="w-12 h-12 text-orange-500" />,
      title: "Personal Coaching",
      description: "One-on-one guidance and support throughout your journey"
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Community Support",
      description: "Join a motivated group of challengers for mutual support"
    },
    {
      icon: <Dumbbell className="w-12 h-12 text-orange-500" />,
      title: "Premium Facility",
      description: "Access to our state-of-the-art gym equipment"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-500 mb-4">WHY CHOOSE MY PROGRAM?</h3>
          <h2 className="text-4xl font-bold text-white">TRANSFORM WITH CONFIDENCE</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-zinc-900 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;