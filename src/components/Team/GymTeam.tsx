import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

interface TeamMember {
  image: string;
  name: string;
  role: string;
  expertise: string[];
  social: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
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
        facebook: "#",
        twitter: "#"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "dt. Richa Shet Talaunlikar",
      role: "Nutrition Specialist",
      expertise: [
        "Diet Planning",
        "Nutrition Counseling",
        "Weight Management",
        "Sports Nutrition"
      ],
      social: {
        instagram: "#",
        facebook: "#"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1619361794061-d050a4f1c8a2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Rahul Kumar",
      role: "CrossFit Coach",
      expertise: [
        "CrossFit Training",
        "Olympic Lifting",
        "HIIT Workouts",
        "Group Classes"
      ],
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Priya Shah",
      role: "Yoga Instructor",
      expertise: [
        "Hatha Yoga",
        "Meditation",
        "Flexibility Training",
        "Mind-Body Balance"
      ],
      social: {
        instagram: "#",
        facebook: "#"
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