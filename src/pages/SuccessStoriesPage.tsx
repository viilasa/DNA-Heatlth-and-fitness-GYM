import React, { useState, useEffect } from 'react';
import successStoriesData from '../data/successStories.json';
import { Star, Users, Award, Clock, Dumbbell } from 'lucide-react';

// Define TypeScript interfaces for structured data
type SuccessStory = {
  id: number;
  name: string;
  age: number;
  duration: string;
  weightLoss: string;
  testimonial: string;
  rating: number;
  beforeImage?: string;
  afterImage: string;
};

type Stat = {
  icon: JSX.Element;
  value: string;
  label: string;
};

const DetailedCard = ({ story }: { story: SuccessStory }) => (
  <div className="bg-zinc-900 rounded-lg overflow-hidden transform transition-all hover:scale-105">
    <div className="relative flex">
      <div className="w-1/2 aspect-square">
        <img src={story.beforeImage} alt={`${story.name} Before`} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm backdrop-blur-sm">
          Before
        </div>
      </div>
      <div className="w-1/2 aspect-square">
        <img src={story.afterImage} alt={`${story.name} After`} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-orange-500/50 px-3 py-1 rounded-full text-white text-sm backdrop-blur-sm">
          After
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white">{story.name}</h3>
      <p className="text-gray-300 italic">"{story.testimonial}"</p>
    </div>
  </div>
);

const SimpleCard = ({ story }: { story: SuccessStory }) => (
  <div className="bg-zinc-900 rounded-lg overflow-hidden transform transition-all hover:scale-105 w-[500px] h-[500px] flex flex-col">
    <div className="relative h-[350px] overflow-hidden">
      <img src={story.afterImage} alt={story.name} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 flex-1 flex flex-col justify-between">
      <h3 className="text-xl font-bold text-white">{story.name}</h3>
    </div>
  </div>
);

const SuccessStoriesPage: React.FC = () => {
  const [successStories, setSuccessStories] = useState<SuccessStory[]>([]);
  const [isDetailedView, setIsDetailedView] = useState<boolean>(true);

  useEffect(() => {
    setSuccessStories(successStoriesData as SuccessStory[]);
  }, []);

  return (
    <div className="pt-20 bg-black min-h-screen">
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src="https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_960_720.jpg" alt="Success Stories" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">REAL PEOPLE <span className="text-orange-500">REAL RESULTS</span></h1>
        </div>
      </section>

      <section className="py-20 bg-zinc-900 text-center">
        <button onClick={() => setIsDetailedView(!isDetailedView)} className="bg-orange-500 text-white px-6 py-2 rounded-full text-lg font-bold">
          Toggle {isDetailedView ? 'Simple' : 'Detailed'} View
        </button>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div key={story.id}>
              {isDetailedView ? <DetailedCard story={story} /> : <SimpleCard story={story} />}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SuccessStoriesPage;
