import React, { useEffect, useState } from 'react';

const NucleusBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('nucleus-banner');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section 
      id="nucleus-banner"
      className={`bg-[#8ad703] py-1 rounded-2xl relative overflow-hidden transition-all duration-700 transform font-[\'Playfair Display\', serif]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Pattern */}
      <div 
        className={`absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iI2ZmZiIgZmlsLWxvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] 
        opacity-50 transition-transform duration-1000 ${isHovered ? 'scale-110' : 'scale-100'}`}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4">
          {/* Partner Text */}
          <h2 className={`text-lg md:text-2xl font-bold text-white text-center 
            drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)] font-[\'Playfair Display\', serif]
            transition-all duration-500 transform
            ${isHovered ? 'scale-105' : 'scale-100'}`}
          >
            PARTNERED WITH
          </h2>

          {/* Logo Container */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className={`absolute inset-0 bg-white/20 rounded-2xl blur-xl transition-opacity duration-500
              ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Logo */}
            <div className={`relative transition-transform duration-500 transform
              ${isHovered ? 'scale-105' : 'scale-100'}`}
            >
              <img 
                src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1740569118/Untitled_design_6_gfrwjh.svg"
                alt="Nucleus Logo"
                className="h-40 md:h-48 lg:h-56 w-auto max-w-full rounded-2xl
                  transition-all duration-500 font-[\'Playfair Display\', serif]
                  hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Touch Ripple Effect */}
      <div className="md:hidden absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 bg-white/10 rounded-full transform scale-0 transition-transform duration-1000
          ${isHovered ? 'scale-100 opacity-0' : 'scale-0 opacity-100'}`}
        />
      </div>
    </section>
  );
};

export default NucleusBanner;
