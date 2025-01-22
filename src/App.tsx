import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features';
import Classes from './components/Classes/Classes';
import Pricing from './components/Pricing/Pricing';
import Team from './components/Team/Team';
import Gallery from './components/Gallery/Gallery';
import BookingForm from './components/Booking/BookingForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Classes />
      <Pricing />
      <Team />
      <Gallery />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;