import React from 'react';
import { Home, Search, Key, FileText } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Property Search',
    description: 'Access our extensive database of properties tailored to your needs'
  },
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Expert handling of all necessary paperwork and legal documents'
  },
  {
    icon: Key,
    title: 'Property Management',
    description: 'Comprehensive property management services for landlords'
  },
  {
    icon: Home,
    title: 'Home Evaluation',
    description: "Professional assessment of your property's market value"
  }
];

export default function Services() {
  return (
    <div className="bg-[#FAF7F2] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#2C1810] mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-[#D62828] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#2C1810]">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}