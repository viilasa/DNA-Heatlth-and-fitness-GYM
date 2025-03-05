import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/challenge", label: "30 DAY CHALLENGE" },
    { to: "/gym", label: "OUR GYM" },
    { to: "/success-stories", label: "SUCCESS STORIES" },
    { to: "/about", label: "ABOUT ME" },
    { to: "/supplements", label: "SUPPLEMENTS" }
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/90 text-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1739374295/1logo_Abhi_tqfmuu.png" 
              alt="Abhijit Fitness Logo" 
              className="h-12 md:h-20 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-orange-500 transition-colors text-sm lg:text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <button 
            className="md:hidden text-white z-50"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black/50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-black transform transition-transform duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col pt-20 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-white hover:text-orange-500 transition-colors py-2 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
