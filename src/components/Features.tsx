import React from 'react';
import { Dumbbell, Apple, Users, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Dumbbell className="w-12 h-12 text-orange-500" />,
      title: "Modern equipment",
      description: "State-of-the-art fitness equipment for optimal training results"
    },
    {
      icon: <Apple className="w-12 h-12 text-orange-500" />,
      title: "Healthy nutrition plan",
      description: "Customized nutrition plans to support your fitness goals"
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Professional training plan",
      description: "Expert trainers creating personalized workout programs"
    },
    {
      icon: <Heart className="w-12 h-12 text-orange-500" />,
      title: "Unique to your needs",
      description: "Training adapted to your specific fitness objectives"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-500 mb-4">WHY CHOOSE US?</h3>
          <h2 className="text-4xl font-bold text-white">PUSH YOUR LIMITS FORWARD</h2>
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