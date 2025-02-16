import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features';
import Team from '../components/Team/Team';
import BookingForm from '../components/Booking/BookingForm';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const Home: React.FC = () => {
  // Featured success story
  const featuredStory = {
    name: "Rahul Sharma",
    weightLoss: "15 KG",
    duration: "3 months",
    beforeImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    afterImage: "https://cdn.pixabay.com/photo/2016/11/21/17/33/body-1846668_1280.jpg",
    testimonial: "The 30-day challenge was just the beginning. With Abhijit's guidance, I completely transformed my lifestyle and achieved results I never thought possible. The personalized attention and constant motivation made all the difference in my fitness journey.",
    rating: 5
  };

  return (
    <>
      <Hero />
      <Features />
      <Team />
      
      {/* Visit Our Gym Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-orange-500 mb-4">OUR FACILITY</h3>
              <h2 className="text-4xl font-bold text-white mb-6">
                VISIT OUR WORLD CLASS GYM
              </h2>
              <p className="text-gray-300 mb-8">
                Experience training in our state-of-the-art facility equipped with the latest fitness equipment. 
                Our gym provides the perfect environment for your fitness journey, whether you're just starting 
                or are an experienced athlete.
              </p>
              
        
            </div>
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1739704804/DnaGymfeature_wwsrgu.png"
                alt="Our Gym Facility"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-orange-500 mb-4">SUCCESS STORY</h3>
            <h2 className="text-4xl font-bold text-white mb-6">
              REAL TRANSFORMATION
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              See how our members have transformed their lives through dedication and expert guidance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-zinc-900 rounded-lg overflow-hidden transform transition-all hover:scale-105">
              <div className="relative">
                <div className="flex">
                  <div className="w-1/2 aspect-square">
                    <img 
                      src={featuredStory.beforeImage} 
                      alt={`${featuredStory.name} Before`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm backdrop-blur-sm">
                      Before
                    </div>
                  </div>
                  <div className="w-1/2 aspect-square">
                    <img 
                      src={featuredStory.afterImage} 
                      alt={`${featuredStory.name} After`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-orange-500/50 px-3 py-1 rounded-full text-white text-sm backdrop-blur-sm">
                      After
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">{featuredStory.name}</h3>
                  <div className="flex">
                    {[...Array(featuredStory.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-8 mb-6">
                  <div className="text-center bg-black/30 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm mb-1">Weight Loss</p>
                    <p className="text-white text-xl font-bold">{featuredStory.weightLoss}</p>
                  </div>
                  <div className="text-center bg-black/30 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm mb-1">Duration</p>
                    <p className="text-white text-xl font-bold">{featuredStory.duration}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 italic text-lg mb-6">"{featuredStory.testimonial}"</p>

                <div className="text-center">
                  <Link 
                    to="/success-stories"
                    className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105"
                  >
                    View More Success Stories
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingForm />
    </>
  );
};

export default Home;
