import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

interface TeamMember {
  image: string;
  name: string;
  role: string;
  expertise: string[];
  social: {
    instagram?: string;
   

  };
}

const GymTeam: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      image: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739448080/Untitled_design_4_azvieo.png",
      name: "Abhijit Naik",
      role: "Head Coach & Founder",
      expertise: [
        "Weight Management",
        "Strength Training",
        "Nutrition Planning",
        "Personal Training"
      ],
      social: {
        instagram: "https://instagram.com/fitnesswithabhijit07",
        
        
      }
    },
    {
      image: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1741717197/1_phqkbv.svg?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Vijay Shankar Kumar Prasad",
      role: "Fitness Trainer",
      expertise: [
        "POSTURAL AND FITNESS ASSESSMENT",
        " MEAL PLANNING",
        "MUSCLE STRENGTHING AND CONDITIONING ",
        "HIIT TRAINING",
        "INJURY IDENTIFICATION AND REHAB  ( ACUTE/MINOR)"
      ],
      social: {
        instagram: "#",
       
      }
    },
     {
      image: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1742389690/4_dlbzc9.png?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Analisajaine Fernandes",
      role: "Nutrition Specialist",
      expertise: [
        "Fitness Training",
        "Strengthening and Muscle Conditioning Techniques",
        "High-Intensity Interval Training (HIIT)",
        "Basic Nutrition Guidance for Weight Management and Overall Health"
      ],
      social: {
        instagram: "https://www.instagram.com/analisajaine/",
      
      }
    },
    {
      image: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1741717592/2_oib0qw.png?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alex Flavio Colaco",
      role: "Fitness Coach",
      expertise: [
        "Weight Loss and Management",
        "Nutrition and Meal Planning",
        "Injury Rehabilitation and Prevention",
        "Senior Citizen Fitness and Wellness",
        "Explosive Power Training",
        "Strength and Endurance Athlete Training"
      ],
      social: {
        instagram: "https://www.instagram.com/thealexxc/",
        
      }
    },
    {
      image: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1741717592/3_merjue.png?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Relvia Sheena Fernandes",
      role: "Yoga Instructor",
      expertise: [
        "Strength and Conditioning ",
        "Weight/ Fat loss ",
        "Nutrition",
        "HIIT"
      ],
      social: {
        instagram: "https://www.instagram.com/relvia_02/",
        
      }
      },
      
      {
      image: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1742389689/5_abe15l.png?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Valanco Tereza",
      role: "Fitness Trainer",
      expertise: [
        "Strength Training and Conditioning",
        "CrossFit Methodologies and Programming",
        "High-Intensity Interval Training (HIIT) "
       
      ],
      social: {
        instagram: "#",
       
      }
    }
  ];

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-500 mb-4">MEET THE EXPERTS</h3>
          <h2 className="text-4xl font-bold text-white mb-6">OUR PROFESSIONAL TEAM</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our team of certified fitness professionals is dedicated to helping you achieve your fitness goals through expert guidance and personalized attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-black rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {member.social.instagram && (
                    <a 
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {member.social.facebook && (
                    <a 
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-orange-500 mb-4">{member.role}</p>
                <div className="space-y-2">
                  {member.expertise.map((skill, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GymTeam;
