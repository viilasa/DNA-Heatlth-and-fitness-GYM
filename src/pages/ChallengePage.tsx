import React, { useState } from 'react';
import { Calendar, Dumbbell, Salad, Instagram, Phone, CreditCard } from 'lucide-react';
import TimeTable from '../components/Challenge/TimeTable';
import EnrollmentForm from '../components/Enrollment/EnrollmentForm';
import TeamSection from '../components/Challenge/TeamSection';

const ChallengePage: React.FC = () => {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  
  const workoutPrograms = [
    "Upper Body Workouts",
    "Lower Body Workouts",
    "Abdominal & Core Strengthening",
    "Strength Training Routines",
    "TABATA Sessions",
    "HIIT & Cardio Programs",
    "CrossFit Workouts",
    "Combat Training",
    "EMOM (Every Minute on the Minute)"
  ];

  const dietPrograms = [
    "Fat Loss Programs",
    "Weight Gain Plans",
    "Muscle Building Diets",
    "PCOD/PCOS Management",
    "Hemoglobin Control Plans",
    "Kidney Stone Prevention",
    "Thyroid Management"
  ];

  return (
    <div className="pt-20 bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
            alt="Challenge Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              30 DAY <span className="text-orange-500">TRANSFORMATION</span> CHALLENGE
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join our Instagram Live Fitness Classes and transform your life
            </p>
            <div className="space-y-4">
              <div className="inline-block bg-orange-500/50 px-6 py-3 rounded-full text-white backdrop-blur-sm">
                <span className="font-bold">Early Bird Special:</span> ₹999/- (till 4th Aug)
              </div>
              <div className="block">
                <span className="text-gray-300 px-6 py-3">Regular Fee:</span> ₹1,499/- (after 4th Aug)
              </div>
              <div className="block mt-8">
                <button
                  onClick={() => setIsEnrollmentOpen(true)}
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Workout Programs */}
            <div className="bg-zinc-900 p-8 rounded-lg">
              <div className="flex items-center space-x-4 mb-6">
                <Dumbbell className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-bold text-white">Workout Programs</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workoutPrograms.map((program, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-300">
                    <span className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span>{program}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Diet Programs */}
            <div className="bg-zinc-900 p-8 rounded-lg">
              <div className="flex items-center space-x-4 mb-6">
                <Salad className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-bold text-white">Diet Programs</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dietPrograms.map((program, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-300">
                    <span className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span>{program}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Schedule Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">LIVE CLASS SCHEDULE</h2>
            <p className="text-gray-300">
              Join our live fitness classes on Instagram from Monday to Saturday at 9:00 PM
            </p>
          </div>
          <TimeTable />
          <div className="mt-8 text-center text-gray-400">
            * Time table will be updated weekly
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">3 EASY STEPS TO JOIN</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">1. Pay the Fees</h3>
              <p className="text-gray-400">Choose your payment plan and complete the payment</p>
            </div>
            
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">2. Take a Screenshot</h3>
              <p className="text-gray-400">Save the payment confirmation screenshot</p>
            </div>
            
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">3. Send Screenshot</h3>
              <p className="text-gray-400">Share it with us on Instagram or WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">CONTACT US</h2>
            <div className="space-y-6">
              <div>
                <p className="text-gray-300 mb-2">Instagram</p>
                <a href="https://instagram.com/fitnesswithabhijit2" 
                   className="text-orange-500 font-semibold text-xl hover:text-orange-600 transition-colors">
                  @fitnesswithabhijit4
                </a>
              </div>
              
              <div>
                <p className="text-gray-300 mb-2">Phone/WhatsApp</p>
                <a href="tel:7798032404" 
                   className="text-orange-500 font-semibold text-xl hover:text-orange-600 transition-colors">
                  779 803 2404
                </a>
              </div>
              <div>
                <p className="text-gray-300 mb-2">Account Name: ALKESH GOPI NAIK </p>
                
                <p className="text-gray-300 mb-2">Account Number </p>
                <a href="" 
                   className="text-orange-500 font-semibold text-xl hover:text-orange-600 transition-colors">
                  5292101000679
                </a>
                <p className="text-gray-300 mb-2">Ifsc Code </p>
                <a href="" 
                   className="text-orange-500 font-semibold text-xl hover:text-orange-600 transition-colors">
                  CNRB0005292
                </a>
              </div>
              
              <div className="pt-8">
                <p className="text-gray-400 italic">
                  Note: We'll verify your payment and grant you access to the program.
                </p>
                <p className="text-gray-400 mt-2">
                  All live sessions will be available on IGTV for 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <EnrollmentForm
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
      />
    </div>
  );
};

export default ChallengePage;
