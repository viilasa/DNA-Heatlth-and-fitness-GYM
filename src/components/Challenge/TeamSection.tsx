import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

interface TeamMember {
  image: string;
  name: string;
  role: string;
  bio: string;
  social: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    image: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739448080/Untitled_design_4_azvieo.png",
    name: "Abhijit Naik",
    role: "Head Coach & Founder",
    bio: "Certified fitness trainer with 6+ years of experience. Transformed over 100+ lives through personalized training and challenges.",
    social: {
      instagram: "https://instagram.com/fitnesswithabhijit07",
      facebook: "#",
      twitter: "#"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    name: "dt. Richa Shet Talaunlikar",
    role: "Nutrition Specialist",
    bio: "Expert nutritionist helping you achieve your fitness goals through personalized diet plans and nutrition guidance.",
    social: {
      instagram: "#",
      facebook: "#"
    }
  }
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-500 mb-4">MEET YOUR TRAINERS</h3>
          <h2 className="text-4xl font-bold text-white">EXPERT GUIDANCE</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-orange-500 mb-4">{member.role}</p>
                <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.bio}
                </p>
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.social.instagram && (
                    <a 
                      href={member.social.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-orange-500 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.facebook && (
                    <a 
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-white hover:text-orange-500 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-white hover:text-orange-500 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;