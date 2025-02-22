import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#203644] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1739898963/wefindhome.pdf_4_qg1a2q.svg"
              alt="We Find Homes Logo"
              className="h-16 md:h-24"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#why" className="text-[#C5A572] hover:text-[#D4B683] transition-colors">Why Us</a>
            <a href="#how" className="text-[#C5A572] hover:text-[#D4B683] transition-colors">How We Work</a>
            <a href="#contact" className="text-[#C5A572] hover:text-[#D4B683] transition-colors">Contact</a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-[#C5A572] hover:text-[#D4B683] transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`
          fixed inset-0 top-20 bg-[#203644] z-40 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}
      >
        <div className="flex flex-col space-y-4 p-6">
          <a
            href="#why"
            onClick={closeMenu}
            className="text-[#C5A572] hover:text-[#D4B683] transition-colors py-2 text-lg font-medium border-b border-[#C5A572]/20"
          >
            Why Us
          </a>
          <a
            href="#how"
            onClick={closeMenu}
            className="text-[#C5A572] hover:text-[#D4B683] transition-colors py-2 text-lg font-medium border-b border-[#C5A572]/20"
          >
            How We Work
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-[#C5A572] hover:text-[#D4B683] transition-colors py-2 text-lg font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}