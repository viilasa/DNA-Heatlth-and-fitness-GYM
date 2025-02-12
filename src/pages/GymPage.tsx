import React from 'react';
import { Dumbbell, Users, Shield, Timer } from 'lucide-react';
import GalleryView from '../components/Gallery/GalleryView';

const GymPage: React.FC = () => {
  const facilities = [
    {
      icon: <Dumbbell className="w-12 h-12 text-orange-500" />,
      title: "Premium Equipment",
      description: "State-of-the-art fitness equipment for all your training needs"
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Expert Trainers",
      description: "Certified professionals to guide your fitness journey"
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-500" />,
      title: "Safe Environment",
      description: "Clean, sanitized, and well-maintained training space"
    },
    {
      icon: <Timer className="w-12 h-12 text-orange-500" />,
      title: "Flexible Hours",
      description: "Open early morning to late night for your convenience"
    }
  ];

  return (
    <div className="pt-20 bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.pixabay.com/photo/2014/11/11/15/24/gym-526995_1280.jpg"
            alt="Gym Facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              VISIT <span className="text-orange-500">MY GYM</span>
            </h1>
            <p className="text-xl text-gray-300">
              Train in a premium environment with top-of-the-line equipment
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-orange-500 mb-4">OUR FACILITIES</h3>
            <h2 className="text-4xl font-bold text-white">EVERYTHING YOU NEED</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-zinc-900 p-8 rounded-lg transform transition-all hover:scale-105">
                <div className="mb-6">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{facility.title}</h3>
                <p className="text-gray-400">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-orange-500 mb-4">VIRTUAL TOUR</h3>
            <h2 className="text-4xl font-bold text-white">EXPLORE OUR GYM</h2>
          </div>
          <GalleryView />
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-zinc-900 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">OPERATING HOURS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-4">Weekdays</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Monday: 5:00 AM - 11:00 PM</li>
                  <li>Tuesday: 5:00 AM - 11:00 PM</li>
                  <li>Wednesday: 5:00 AM - 11:00 PM</li>
                  <li>Thursday: 5:00 AM - 11:00 PM</li>
                  <li>Friday: 5:00 AM - 11:00 PM</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-4">Weekends</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Saturday: 6:00 AM - 10:00 PM</li>
                  <li>Sunday: 6:00 AM - 8:00 PM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GymPage;