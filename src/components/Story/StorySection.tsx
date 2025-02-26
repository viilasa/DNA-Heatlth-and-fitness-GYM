import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import useCountUp from '../../hooks/useCountUp';

const StorySection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const yearsCount = useCountUp({
    end: 12,
    suffix: '+',
    duration: 2000,
    start: isVisible ? 0 : 6
  });

  const livesCount = useCountUp({
    end: 3000,
    suffix: '+',
    duration: 2000,
    start: isVisible ? 0 : 100
  });

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
          <img 
            src="https://images.unsplash.com/photo-1571019613914-85f342c6a11e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gym Story"
            className="w-full h-full object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1434682705430-390b9de53750?q=80&w=2005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gym Community"
            className="w-full h-full object-cover hidden md:block"
          />
          <img 
            src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Training Session"
            className="w-full h-full object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1581122584612-713f89daa8eb?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Transformation"
            className="w-full h-full object-cover hidden md:block"
          />
        </div>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-orange-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">Our Story</h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto" />
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1739447025/DSC_7264_gtyalh.jpg"
                  alt="Founder"
                  className="rounded-lg shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                />
                <div className="mt-6 bg-black/30 backdrop-blur-sm p-4 rounded-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <p className="text-orange-500 font-semibold text-center">
                    "Transforming lives through fitness"
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  We began this gym out of sheer passion, not profits. Fitness has transformed our lives, and we wanted to provide a place where others—whether experienced fitness buffs or total newbies—could have the same support and encouragement.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We aim to create a community where everyone feels empowered to begin, develop, and challenge themselves. This is not a gym; it's a place where you belong.
                </p>
                <div id="stats-section" className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105">
                    <p className="text-2xl font-bold text-orange-500">{yearsCount}</p>
                    <p className="text-gray-300">Years of Passion</p>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105">
                    <p className="text-2xl font-bold text-orange-500">{livesCount}</p>
                    <p className="text-gray-300">Lives Changed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;