import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-white text-xl mb-4">SHAPE YOUR BODY</h2>
            <h1 className="text-6xl font-bold text-white mb-6">
              BE <span className="text-orange-500">STRONG</span>
              <br />
              TRAINING HARD
            </h1>
            <button className="bg-orange-500 text-white px-8 py-3 text-lg font-semibold hover:bg-orange-600 transition-colors">
              GET INFO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;