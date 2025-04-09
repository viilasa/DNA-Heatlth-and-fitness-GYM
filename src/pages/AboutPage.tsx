import React from 'react';
import { Award, Users, Clock, Medal, Globe } from 'lucide-react';
import useCountUp from '../hooks/useCountUp';
//import CertificationSection from '../components/About/CertificationSection';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const achievements = [
    {
      icon: <Award className="w-12 h-12 text-orange-500" />,
      value: useCountUp({
        end: 12,
        suffix: '+',
        duration: 2000,
        start: isVisible ? 0 : 6
      }),
      label: "Years Experience"
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      value: useCountUp({
        end: 3000,
        suffix: '+',
        duration: 2000,
        start: isVisible ? 0 : 100
      }),
      label: "Clients Transformed"
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      value: useCountUp({
        end: 150000,
        suffix: '+',
        duration: 2000,
        start: isVisible ? 0 : 15000
      }),
      label: "Training Hours"
    },
    {
      icon: <Globe className="w-12 h-12 text-orange-500" />,
      value: useCountUp({
        end: 4,
        duration: 2000,
        start: isVisible ? 0 : 4
      }),
      label: "Continents Transformed"
    }
  ];

  return (
    <div className="pt-20 bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1739446361/photo-6363_iq3kpa.jpg"
            alt="Abhijit Naik"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              MEET YOUR <span className="text-orange-500">TRAINER</span>
            </h1>
            <p className="text-xl text-gray-300">
              Dedicated to transforming lives through fitness and wellness
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1739448080/Untitled_design_4_azvieo.png"
                alt="Abhijit Naik Profile"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 p-6 rounded-lg">
                <p className="text-4xl font-bold text-white">12+</p>
                <p className="text-white">Years Experience</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Hi, I'm Abhijit Naik
              </h2>
              <p className="text-gray-300 mb-6">
                With over a decade of experience in fitness training, I've dedicated my life to helping people achieve their health and fitness goals. My journey began as a personal transformation story, and it evolved into a passion for transforming others' lives.
              </p>
              <p className="text-gray-300 mb-6">
                I believe in a holistic approach to fitness that combines effective workouts, proper nutrition, and mental wellness. My training philosophy focuses on sustainable results through consistent effort and proper guidance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900 p-4 rounded-lg">
                  <p className="text-orange-500 font-bold mb-2">Specialization</p>
                  <p className="text-white">Weight Management</p>
                </div>
                <div className="bg-zinc-900 p-4 rounded-lg">
                  <p className="text-orange-500 font-bold mb-2">Approach</p>
                  <p className="text-white">Holistic Fitness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="stats-section" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center transform transition-all hover:scale-105">
                <div className="bg-black rounded-full w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
                  {achievement.icon}
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{achievement.value}</p>
                <p className="text-sm md:text-base text-gray-400">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">My Training Philosophy</h2>
            <p className="text-gray-300 mb-8">
              "Fitness is not about being better than someone else. It's about being better than you used to be. I believe in sustainable transformations through dedication, proper guidance, and a balanced approach to health and fitness."
            </p>
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
