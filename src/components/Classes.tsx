import React from 'react';
import { ArrowRight } from 'lucide-react';

const Classes = () => {
  const classes = [
    {
      image: "https://images.unsplash.com/photo-1534368420009-621bfab424a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      category: "STRENGTH",
      title: "WEIGHTLIFTING"
    },
    {
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      category: "CARDIO",
      title: "INDOOR CYCLING"
    },
    {
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      category: "STRENGTH",
      title: "KETTLEBELL POWER"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-500 mb-4">OUR CLASSES</h3>
          <h2 className="text-4xl font-bold text-white">WHAT WE CAN OFFER</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <div key={index} className="group relative overflow-hidden">
              <img 
                src={classItem.image} 
                alt={classItem.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
                <span className="text-orange-500 mb-2">{classItem.category}</span>
                <h3 className="text-white text-2xl font-bold mb-4">{classItem.title}</h3>
                <button className="flex items-center space-x-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;