import React from 'react';
import { Calendar, Clock, Salad, Dumbbell, Users, Trophy } from 'lucide-react';

const ChallengePage: React.FC = () => {
  const nextChallengeDate = "March 15, 2024";
  
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
              Join the next challenge starting {nextChallengeDate}
            </p>
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105">
              Enroll Now - ₹4,999
            </button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-lg transform transition-all hover:scale-105">
              <Calendar className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Program Schedule</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• 30 days of structured workouts</li>
                <li>• Monday to Saturday training</li>
                <li>• Sunday recovery sessions</li>
                <li>• 45-60 minutes per session</li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg transform transition-all hover:scale-105">
              <Salad className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Nutrition Plan</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Personalized meal plans</li>
                <li>• Grocery shopping guides</li>
                <li>• Supplement recommendations</li>
                <li>• Recipe collection</li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg transform transition-all hover:scale-105">
              <Users className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Support System</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• WhatsApp support group</li>
                <li>• Weekly progress check-ins</li>
                <li>• Live Q&A sessions</li>
                <li>• 24/7 email support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">DAILY SCHEDULE</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-black p-6 rounded-lg flex items-center space-x-6">
              <Clock className="w-12 h-12 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Morning Workout</h3>
                <p className="text-gray-400">6:00 AM - Live workout session with Abhijit</p>
              </div>
            </div>
            
            <div className="bg-black p-6 rounded-lg flex items-center space-x-6">
              <Salad className="w-12 h-12 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Meal Planning</h3>
                <p className="text-gray-400">Daily nutrition tips and meal tracking</p>
              </div>
            </div>
            
            <div className="bg-black p-6 rounded-lg flex items-center space-x-6">
              <Dumbbell className="w-12 h-12 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Evening Session</h3>
                <p className="text-gray-400">6:00 PM - Alternative workout session</p>
              </div>
            </div>
            
            <div className="bg-black p-6 rounded-lg flex items-center space-x-6">
              <Trophy className="w-12 h-12 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Progress Tracking</h3>
                <p className="text-gray-400">Daily check-ins and measurements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">HOW TO JOIN</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">1</div>
                <h3 className="text-xl font-bold text-white mb-4">Register</h3>
                <p className="text-gray-400">Complete the enrollment form and make the payment</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">2</div>
                <h3 className="text-xl font-bold text-white mb-4">Onboarding</h3>
                <p className="text-gray-400">Get added to the support group and receive your welcome package</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold text-white mb-4">Begin</h3>
                <p className="text-gray-400">Start your transformation journey with the group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the next challenge starting {nextChallengeDate}. Limited spots available!
          </p>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105">
            Secure Your Spot Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ChallengePage;