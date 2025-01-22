import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

interface TeamCardProps {
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

const TeamCard: React.FC<TeamCardProps> = ({ image, name, role, bio, social }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img 
        src={image} 
        alt={name}
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform">
        <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
        <p className="text-orange-500 mb-4">{role}</p>
        <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
          {bio}
        </p>
        <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
          {social.instagram && (
            <a href={social.instagram} className="text-white hover:text-orange-500">
              <Instagram className="w-5 h-5" />
            </a>
          )}
          {social.facebook && (
            <a href={social.facebook} className="text-white hover:text-orange-500">
              <Facebook className="w-5 h-5" />
            </a>
          )}
          {social.twitter && (
            <a href={social.twitter} className="text-white hover:text-orange-500">
              <Twitter className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;