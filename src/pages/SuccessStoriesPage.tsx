import React from 'react';
import { Star } from 'lucide-react';

const SuccessStoriesPage: React.FC = () => {
  const successStories = [
    {
      name: "Rahul Sharma",
      age: 28,
      duration: "3 months",
      weightLoss: "15 KG",
      beforeImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
      afterImage: "https://cdn.pixabay.com/photo/2016/11/21/17/33/body-1846668_1280.jpg",
      testimonial: "The 30-day challenge was just the beginning. With Abhijit's guidance, I completely transformed my lifestyle and achieved results I never thought possible.",
      rating: 5
    },
    {
      name: "Priya Patel",
      age: 32,
      duration: "6 months",
      weightLoss: "20 KG",
      beforeImage: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5",
      afterImage: "https://cdn.pixabay.com/photo/2016/11/21/17/33/body-1846668_1280.jpg",
      testimonial: "Not just weight loss, but a complete transformation in energy levels and confidence. The personalized attention made all the difference.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      age: 35,
      duration: "4 months",
      weightLoss: "18 KG",
      beforeImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
      afterImage: "https://cdn.pixabay.com/photo/2016/11/21/17/33/body-1846668_1280.jpg",
      testimonial: "From being out of breath climbing stairs to completing a marathon - this journey has been life-changing. Thank you, Coach Abhijit!",
      rating: 5
    }
  ];

  return (
    <div className="pt-20 bg-black">
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
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              REAL PEOPLE <span className="text-orange-500">REAL RESULTS</span>
            </h1>
            <p className="text-xl text-gray-300">
              Inspiring transformations from our fitness community
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-zinc-900 rounded-lg overflow-hidden transform transition-all hover:scale-105">
                <div className="relative">
                  <div className="flex">
                    <div className="w-1/2 aspect-square">
                      <img 
                        src={story.beforeImage} 
                        alt={`${story.name} Before`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm backdrop-blur-sm">
                        Before
                      </div>
                    </div>
                    <div className="w-1/2 aspect-square">
                      <img 
                        src={story.afterImage} 
                        alt={`${story.name} After`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-orange-500/50 px-3 py-1 rounded-full text-white text-sm backdrop-blur-sm">
                        After
                      </div>
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

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our next 30-day transformation challenge and begin your journey to a healthier, stronger you.
          </p>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105">
            Start Your Transformation
          </button>
        </div>
      </section>
    </div>
  );
};

export default SuccessStoriesPage;