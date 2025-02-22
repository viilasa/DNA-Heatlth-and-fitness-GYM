import React from 'react';
import { GalleryItem } from './GalleryData';

interface GalleryThumbnailsProps {
  items: GalleryItem[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

const GalleryThumbnails: React.FC<GalleryThumbnailsProps> = ({ items, activeIndex, onSelect }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`relative aspect-[16/9] rounded-lg overflow-hidden ${
            activeIndex === index ? 'ring-2 ring-orange-500' : ''
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="text-white text-sm font-medium">{item.title}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default GalleryThumbnails;