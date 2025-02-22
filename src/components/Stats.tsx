import React, { useEffect, useState } from 'react';
import { Home, Users, Award, Building } from 'lucide-react';

const stats = [
  { icon: Home, value: 1500, label: 'Properties Sold', suffix: '+' },
  { icon: Users, value: 2000, label: 'Happy Clients', suffix: '+' },
  { icon: Award, value: 15, label: 'Years Experience', suffix: '' },
  { icon: Building, value: 98, label: 'Success Rate', suffix: '%' },
];

export default function Stats() {
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
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div id="stats-section" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-[#D62828]" />
              <div className="text-4xl font-bold text-[#2C1810] mb-2">
                {isVisible ? stat.value : 0}{stat.suffix}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}