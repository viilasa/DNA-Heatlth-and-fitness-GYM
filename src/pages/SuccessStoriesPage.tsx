import React, { useState, useEffect } from 'react';
import successStoriesData from '../data/successStories.json';
import { Star, Users, Award, Clock, Dumbbell } from 'lucide-react';

// Define TypeScript interfaces
interface SuccessStory {
  id: number;
  name: string;
  age: number;
  duration: string;
  weightLoss: string;
  testimonial: string;
  rating: number;
  beforeImage?: string;
  afterImage: string;
}

interface Stat {
  icon: JSX.Element;
  value: string;
  label: string;
}

interface SuccessStoriesPageProps {
  format?: 'simple' | 'detailed';
}

const SuccessStoriesPage: React.FC<SuccessStoriesPageProps> = ({ format = 'detailed' }) => {
  const [successStories, setSuccessStories] = useState<SuccessStory[]>([]);

  useEffect(() => {
    setSuccessStories(successStoriesData as SuccessStory[]);
  }, []);

  const stats: Stat[] = [
    { icon: <Users className="w-12 h-12 text-orange-500" />, value: "100+", label: "Transformations" },
    { icon: <Award className="w-12 h-12 text-orange-500" />, value: "95%", label: "Success Rate" },
    { icon: <Clock className="w-12 h-12 text-orange-500" />, value: "30", label: "Day Challenge" },
    { icon: <Dumbbell className="w-12 h-12 text-orange-500" />, value: "6+", label: "Years Experience" }
  ];

  return (
    <div className="pt-20 bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_960_720.jpg"
            alt="Success Stories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            REAL PEOPLE <span className="text-orange-500">REAL RESULTS</span>
          </h1>
          <p className="text-xl text-gray-300">
            Inspiring transformations from our fitness community
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">OUR IMPACT</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We've helped hundreds of people transform their lives through dedicated fitness coaching and support.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform transition-all hover:scale-105">
                <div className="bg-black rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              format === 'detailed' ? (
                <div key={story.id} className="bg-zinc-900 rounded-lg overflow-hidden transform transition-all hover:scale-105">
                  <div className="relative flex">
                    <div className="w-1/2 aspect-square">
                      {story.beforeImage ? (
                        <img src={story.beforeImage} alt={`${story.name} Before`} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400">No Image</div>
                      )}
                      <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm backdrop-blur-sm">Before</div>
                    </div>
                    <div className="w-1/2 aspect-square">
                      <img src={story.afterImage} alt={`${story.name} After`} className="w-full h-full object-cover" />
                      <div className="absolute top-4 right-4 bg-orange-500/50 px-3 py-1 rounded-full text-white text-sm backdrop-blur-sm">After</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">{story.name}</h3>
                    <p className="text-gray-300 italic">"{story.testimonial}"</p>
                  </div>
                </div>
              ) : (
                <div key={story.id} className="bg-zinc-900 rounded-lg overflow-hidden transform transition-all hover:scale-105 w-[500px] h-[500px] flex flex-col">
                  <div className="relative h-[350px] overflow-hidden">
                    <img src={story.afterImage} alt={story.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <h3 className="text-xl font-bold text-white mt-0">{story.name}</h3>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStoriesPage;
