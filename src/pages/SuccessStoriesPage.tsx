import React, { useState, useEffect } from 'react';
import successStories from '../assets/successStories.json'; // ✅ Import JSON directly
import { Star, Users, Award, Clock, Dumbbell } from 'lucide-react';

const SuccessStoriesPage = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setStories(successStories); // ✅ Load JSON data directly
  }, []);

  return (
    <div className="pt-20 bg-black">
      <h1 className="text-4xl text-white text-center mb-10">
        Success Stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <div key={story.id} className="bg-zinc-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-white mb-2">{story.name}</h3>
            <p className="text-gray-300 italic mb-4">"{story.testimonial}"</p>
            <div className="flex space-x-2">
              {[...Array(story.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

      {/* Stats Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">OUR IMPACT</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We've helped hundreds of people transform their lives through dedicated fitness coaching and support
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
              <div key={story.id} className="bg-zinc-900 rounded-lg overflow-hidden transform transition-all hover:scale-105">
                <div className="relative flex">
                  <div className="w-1/2 aspect-square">
                    {story.beforeImage ? (
                      <img src={story.beforeImage} alt={`${story.name} Before`} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400">No Image</div>
                    )}
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
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">{story.name}</h3>
                    <div className="flex">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">Age</p>
                      <p className="text-white font-bold">{story.age}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">Duration</p>
                      <p className="text-white font-bold">{story.duration}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">Lost</p>
                      <p className="text-white font-bold">{story.weightLoss}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 italic">"{story.testimonial}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStoriesPage;
