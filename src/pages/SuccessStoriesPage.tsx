import React, { useState, useEffect } from 'react';
import successStoriesData from '../data/successStories.json';
import { Users, Award, Clock, Dumbbell } from 'lucide-react';
import useCountUp from '../hooks/useCountUp';

interface SuccessStory {
  id: string;
  name: string;
  age: number;
  duration: string;
  weightLoss: string;
  beforeImage: string;
  afterImage: string;
  testimonial: string;
  rating: number;
}

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface SuccessStoriesPageProps {
  format?: 'simple' | 'detailed';
}

const SuccessStoriesPage: React.FC<SuccessStoriesPageProps> = ({ format = 'simple' }) => {
  const [successStories, setSuccessStories] = useState<SuccessStory[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setSuccessStories(successStoriesData as SuccessStory[]);
  }, []);

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

  const stats: Stat[] = [
    {
      icon: <Users className="w-8 h-8 md:w-12 md:h-12 text-orange-500" />,
      value: useCountUp({
        end: 3000,
        suffix: '+',
        duration: 2000,
        start: isVisible ? 0 : 100
      }),
      label: "Transformations"
    },
    {
      icon: <Award className="w-8 h-8 md:w-12 md:h-12 text-orange-500" />,
      value: useCountUp({
        end: 96,
        suffix: '%',
        duration: 2000,
        start: isVisible ? 0 : 95
      }),
      label: "Success Rate"
    },
    {
      icon: <Clock className="w-8 h-8 md:w-12 md:h-12 text-orange-500" />,
      value: useCountUp({
        end: 30,
        duration: 2000,
        start: isVisible ? 0 : 30
      }),
      label: "Day Challenge"
    },
    {
      icon: <Dumbbell className="w-8 h-8 md:w-12 md:h-12 text-orange-500" />,
      value: useCountUp({
        end: 12,
        suffix: '+',
        duration: 2000,
        start: isVisible ? 0 : 6
      }),
      label: "Years Experience"
    }
  ];

  return (
    <div className="pt-16 md:pt-20 bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_960_720.jpg"
            alt="Success Stories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4 px-4 text-center">
            REAL PEOPLE <span className="text-orange-500 block md:inline">REAL RESULTS</span>
          </h1>
          <p className="text-base md:text-xl text-gray-300 text-center">
            Inspiring transformations from our fitness community
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-12 md:py-20 bg-zinc-900">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">OUR IMPACT</h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            We've helped hundreds transform their lives through fitness coaching
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-6 md:mt-8">
            {stats.map((stat, index) => (
              <div key={index} className="p-4 md:p-6 text-center transform transition-all hover:scale-105">
                <div className="bg-black rounded-full w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 flex items-center justify-center">
                  {stat.icon}
                </div>
                <p className="text-2xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {successStories.map((story) => (
              format === 'detailed' ? (
                <DetailedCard key={story.id} story={story} />
              ) : (
                <SimpleCard key={story.id} story={story} />
              )
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Simple Card Component
const SimpleCard = ({ story }: { story: SuccessStory }) => (
  <div className="group bg-zinc-900 rounded-lg overflow-hidden transition-all hover:shadow-2xl h-full flex flex-col">
    <div className="relative aspect-square overflow-hidden">
      <img 
        src={story.afterImage} 
        alt={story.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-4 md:p-6 flex flex-col gap-2 flex-1">
      <h3 className="text-lg md:text-xl font-bold text-white">{story.name}</h3>
      <div className="grid grid-cols-3 gap-2 text-xs md:text-sm">
        <div className="text-center">
          <p className="text-gray-400">Age</p>
          <p className="text-white font-medium">{story.age}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400">Duration</p>
          <p className="text-white font-medium">{story.duration}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400">Lost</p>
          <p className="text-white font-medium">{story.weightLoss}</p>
        </div>
      </div>
    </div>
  </div>
);

// Detailed Card Component
const DetailedCard = ({ story }: { story: SuccessStory }) => (
  <div className="group bg-zinc-900 rounded-lg overflow-hidden transition-all hover:shadow-2xl h-full">
    <div className="relative flex aspect-[2/1]">
      <div className="w-1/2 relative overflow-hidden">
        {story.beforeImage ? (
          <img 
            src={story.beforeImage} 
            alt={`${story.name} Before`} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
        <div className="absolute top-2 left-2 bg-black/50 px-2 py-1 rounded-full text-white text-xs backdrop-blur-sm">
          Before
        </div>
      </div>
      <div className="w-1/2 relative overflow-hidden">
        <img 
          src={story.afterImage} 
          alt={`${story.name} After`} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-orange-500/50 px-2 py-1 rounded-full text-white text-xs backdrop-blur-sm">
          After
        </div>
      </div>
    </div>
    <div className="p-4 md:p-6">
      <h3 className="text-lg md:text-xl font-bold text-white mb-2">{story.name}</h3>
      <p className="text-gray-300 text-sm md:text-base italic">"{story.testimonial}"</p>
    </div>
  </div>
);

export default SuccessStoriesPage;