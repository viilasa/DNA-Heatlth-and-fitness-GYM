import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features';
import Team from '../components/Team/Team';
import BookingForm from '../components/Booking/BookingForm';
import { Link } from 'react-router-dom';
import { Star, Dumbbell, Users, ShoppingBag, Trophy } from 'lucide-react';

const Home: React.FC = () => {
  const gridItems = [
    {
      title: "30 Day Online Challenge",
      description: "Transform your body with our signature program",
      icon: <Trophy className="w-8 h-8 md:w-12 md:h-12" />,
      image: "https://assets.entrepreneur.com/content/3x2/2000/20171108215301-GettyImages-512891759.jpeg",
      link: "/challenge"
    },
    {
      title: "DNA - Gym",
      description: "State-of-the-art facility and equipment",
      icon: <Dumbbell className="w-8 h-8 md:w-12 md:h-12" />,
      image: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739446329/photo-6324_m8iils.jpg",
      link: "/gym"
    },
    {
      title: "Personal Training",
      description: "Real transformations from real people",
      icon: <Users className="w-8 h-8 md:w-12 md:h-12" />,
      image: "https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_960_720.jpg",
      link: "/success-stories"
    },
    {
      title: "Supplement and Nutrition",
      description: "Premium fitness gear and supplements",
      icon: <ShoppingBag className="w-8 h-8 md:w-12 md:h-12" />,
      image: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739446459/photo-6364_zjtyp3.jpg",
      link: "/supplements"
    }
  ];

  return (
    <>
      <Hero />
      
      {/* Grid Section */}
      <section className="py-12 md:py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          {/* Title Section */}
          <div className="text-center mb-8 md:mb-16">
            <h3 className="text-orange-500 mb-2 md:mb-4 uppercase tracking-wider text-sm md:text-base">
              Explore Our Services
            </h3>
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-3 md:mb-6">
              Transform Your Life With Us
            </h2>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto px-4">
              Choose your path to fitness excellence with our comprehensive programs and facilities designed to help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {gridItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group relative overflow-hidden rounded-lg aspect-square transform transition-all duration-300 hover:scale-105"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Content */}
                <div className="relative h-full p-4 md:p-6 flex flex-col justify-between">
                  <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm inline-block border border-white/20 transition-all duration-300 group-hover:bg-white/20">
                    {item.icon}
                  </div>
                  
                  <div className="transform transition-all duration-300 group-hover:translate-y-0 translate-y-4">
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BookingForm />
    </>
  );
};

export default Home;
