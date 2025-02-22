import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import SocialLink from './SocialLink';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Abhijit Fitness</h3>
            <p className="text-gray-400 mb-6">
              Transform your life through fitness. Join our community and achieve your health and fitness goals with expert guidance.
            </p>
            <div className="flex space-x-4">
              <SocialLink Icon={Facebook} href="#" label="Facebook" />
              <SocialLink Icon={Instagram} href="https://www.instagram.com/dnahealthandfitnessgoa/?hl=en" label="Instagram" />
              <SocialLink Icon={Twitter} href="#" label="Twitter" />
              <SocialLink Icon={Youtube} href="#" label="Youtube" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#classes" className="text-gray-400 hover:text-orange-500 transition-colors">Classes</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-orange-500 transition-colors">Our Team</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400">DNA Building, Rawanfond Cir, Madgaon, Davorlim, Goa</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400">+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400">abhijitfitnessgoa@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Monday - Friday: <span className="text-white">6:00 AM - 10:00 PM</span></li>
              <li className="text-gray-400">Saturday: <span className="text-white">6:00 AM - 10:00 PM</span></li>
              <li className="text-gray-400">Sunday: <span className="text-white">Close</span></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} GYMFIT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
