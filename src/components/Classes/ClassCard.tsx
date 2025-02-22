import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ClassCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
}

const ClassCard: React.FC<ClassCardProps> = ({ image, category, title, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img 
        src={image} 
        alt={title}
        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
        <span className="text-orange-500 mb-2">{category}</span>
        <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
          {description}
        </p>
        <button className="flex items-center space-x-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Learn More</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ClassCard;