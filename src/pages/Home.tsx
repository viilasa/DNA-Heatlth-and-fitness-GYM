import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features';
import Team from '../components/Team/Team';
import BookingForm from '../components/Booking/BookingForm';
import { Link } from 'react-router-dom';
import { Star, Dumbbell, Users, ShoppingBag, Trophy } from 'lucide-react';

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

  const gridItems = [
    {
      title: "30 Day Online Challenge",
      description: "Transform your body with our signature program",
      icon: <Trophy className="w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
      link: "/challenge"
    },
    {
      title: "DNA - Gym",
      description: "State-of-the-art facility and equipment",
      icon: <Dumbbell className="w-12 h-12" />,
      image: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739446329/photo-6324_m8iils.jpg",
      link: "/gym"
    },
    {
      title: "Personal Training",
      description: "Real transformations from real people",
      icon: <Users className="w-12 h-12" />,
      image: "https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_960_720.jpg",
      link: "/success-stories"
    },
    {
      title: "Supplement and Nutrition",
      description: "Premium fitness gear and supplements",
      icon: <ShoppingBag className="w-12 h-12" />,
      link: "https://nucleus-store.com",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
    }
  ];

  return (
    <>
      <Hero />
      
      {/* Grid Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h3 className="text-orange-500 mb-4 uppercase tracking-wider">Explore Our Services</h3>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Life With Us
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose your path to fitness excellence with our comprehensive programs and facilities designed to help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

                {/* Glowing Border */}
                <div className="absolute inset-0 border-2 rounded-lg animate-border-glow" />

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm inline-block border border-white/20 transition-all duration-300 group-hover:bg-white/20">
                    {React.cloneElement(item.icon, { className: "text-white" })}
                  </div>
                  
                  <div className="transform transition-all duration-300 group-hover:translate-y-0 translate-y-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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