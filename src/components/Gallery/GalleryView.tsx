import React, { useState } from 'react';
import GalleryThumbnails from './GalleryThumbnails';
import GalleryControls from './GalleryControls';
import { galleryData } from './GalleryData';

const GalleryView: React.FC = () => {
  const [activeView, setActiveView] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const handleViewChange = (index: number) => {
    setIsRotating(true);
    setActiveView(index);
    setTimeout(() => setIsRotating(false), 1000);
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-500 mb-4">VIRTUAL TOUR</h3>
          <h2 className="text-4xl font-bold text-white">EXPLORE OUR FACILITY</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main View */}
          <div className="relative aspect-[16/9] mb-4">
            <div className={`relative w-full h-full rounded-lg overflow-hidden ${isRotating ? 'transition-transform duration-1000' : ''}`}>
              <img
                src={galleryData[activeView].image}
                alt={galleryData[activeView].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                {galleryData[activeView].title}
              </div>
              <GalleryControls onPrevious={() => handleViewChange((activeView - 1 + galleryData.length) % galleryData.length)} 
                              onNext={() => handleViewChange((activeView + 1) % galleryData.length)} />
            </div>
          </div>

          {/* Thumbnails */}
          <GalleryThumbnails
            items={galleryData}
            activeIndex={activeView}
            onSelect={handleViewChange}
          />
        </div>
      </div>
    </section>
  );
};

export default GalleryView;