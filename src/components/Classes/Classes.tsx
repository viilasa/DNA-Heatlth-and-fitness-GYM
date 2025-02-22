import React from 'react';
import ClassCard from './ClassCard';
import { classesData } from './ClassesData';

const Classes: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-500 mb-4">OUR CLASSES</h3>
          <h2 className="text-4xl font-bold text-white">WHAT WE CAN OFFER</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classesData.map((classItem, index) => (
            <ClassCard
              key={index}
              {...classItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;