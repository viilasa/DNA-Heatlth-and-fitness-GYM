import React, { useState, useEffect } from 'react';
import { Dumbbell, Users, Shield, Timer, Star, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import GalleryView from '../components/Gallery/GalleryView';
import Pricing from '../components/Pricing/Pricing'
import Ourstory from '../components/Story/StorySection'
import GymTeam from '../components/Team/GymTeam';
import WhatsAppCTA from '../components/WhatsApp/WhatsAppCTA';
import useLoadingAnimation from '../hooks/useLoadingAnimation';


const GymPage: React.FC = () => {
  const [classCapacity, setClassCapacity] = useState({
    morning: 85,
    afternoon: 60,
    evening: 92
  });
  
  // Use our custom loading animation hook
  const { isAnimating, style } = useLoadingAnimation({ 
    initialDelay: 500, // Slightly longer delay for better UX
    duration: 1800 // Slightly longer animation for smoother effect
  });

  const facilities = [
    {
      icon: <Dumbbell className="w-12 h-12 text-orange-500" />,
      title: "Elite CrossFit Equipment",
      description: "State-of-the-art rigs, Olympic weights, and functional training gear"
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Expert CrossFit Coaches",
      description: "Level 2 certified trainers with competitive experience"
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-500" />,
      title: "Safe Training Environment",
      description: "Structured classes with proper form emphasis"
    },
    {
      icon: <Timer className="w-12 h-12 text-orange-500" />,
      title: "Flexible Class Schedule",
      description: "Multiple WOD times to fit your schedule"
    }
  ];

  const benefits = [
    "Personalized scaling for all fitness levels",
    "Daily workout tracking and PRs",
    "Nutrition guidance and meal planning",
    "Supportive community environment",
    "Regular fitness assessments",
    "Access to specialty programs"
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
      quote: "Lost 30kg and found a new family. The coaches here truly care about your success.",
      achievement: "From beginner to competing athlete"
    },
    {
      name: "Mike R.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
      quote: "The community here pushed me to achieve things I never thought possible.",
      achievement: "Completed first CrossFit competition"
    }
  ];

  return (
    <div className="pt-20 bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <img 
              src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1744970489/hero2_carbrw.svg"
              alt="CrossFit Training"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
          </div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              TRANSFORM YOUR LIFE WITH
              <span className="text-orange-500 block mt-2">CROSSFIT TRAINING</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join the fastest-growing fitness community in Goa. Limited spots available for new members.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              
              <WhatsAppCTA
                phoneNumber="919022701531" 
                message="Hello, I would like to know more about your gym and fitness programs."
                buttonText="Start Your Fitness Journey Today" // Custom button text
              />
            
              
            </div>
          </div>
        </div>
      </section>

       {/* Live Class Status */}
      <section className="py-10 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(classCapacity).map(([time, capacity]) => (
              <div key={time} className="bg-black p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-white font-semibold capitalize">{time} Class</h3>
                  <Clock className="w-5 h-5 text-orange-500" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Capacity</span>
                    <span className="text-white">{capacity}%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-orange-500 transition-all ease-out"
                      style={{ 
                        width: isAnimating ? `${capacity}%` : '0%',
                        transitionDuration: style.transitionDuration
                      }}
                    />
                  </div>
                  {capacity > 80 && (
                    <p className="text-orange-500 text-sm">Almost full - Book now!</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CrossFit Benefits */}
       {/* CrossFit Benefits */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Logo */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1740478053/30days_ntuivv.png"
            alt="30 Days Challenge Logo"
            className="absolute w-full md:w-2/3 lg:w-1/2 h-auto opacity-10 right-0 top-1/2 -translate-y-1/2 object-contain"
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h3 className="text-orange-500 mb-4">WHY CHOOSE CROSSFIT</h3>
            <h2 className="text-4xl font-bold text-white">UNLOCK YOUR POTENTIAL</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1744971293/Untitled_design_5_sc2hqy.png"
                alt="CrossFit Training"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all w-full sm:w-auto">
                Dont miss out!
              </button>
            </div>
          </div>
        </div>
      </section>

       {/* Pricing Section */}
       <Pricing />

      {/* Testimonials */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-orange-500 mb-4">SUCCESS STORIES</h3>
            <h2 className="text-4xl font-bold text-white">REAL PEOPLE, REAL RESULTS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black p-6 rounded-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-orange-500 text-sm">{testimonial.achievement}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Team Section */}
       <GymTeam />

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
      <GalleryView />
      <Ourstory />

      {/* Call to Action */}
     <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Limited-time offer: Join now and get your first week free!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            <WhatsAppCTA 
              
              phoneNumber="919022701531" 
              message="Hello,  Please provide more detailsa about memberships."
              buttonText="Ask About Memberships" // Custom button text
              className="px-12"
            />
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            * Offer valid for new members only. Terms and conditions apply.
          </p>
        </div>
      </section>
    </div>
  );
};

export default GymPage;
