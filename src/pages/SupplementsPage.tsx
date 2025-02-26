import React from 'react';
import { MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react';
import NucleusBanner from '../components/Partners/NucleusBanner';

const SupplementsPage: React.FC = () => {
  const featuredProducts = [
    {
      name: "Nucleus Pro Whey",
      image: "https://nucleusnutrition.com/cdn/shop/files/519oJE24UkL._SX679.jpg?v=1713336256&width=533?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: "Premium whey protein for muscle recovery and growth",
      benefits: ["24g protein per serving", "Fast absorption", "Great taste"]
    },
    {
      name: "Creatine",
      image: "https://nucleusnutrition.com/cdn/shop/files/oncreatine250gm.jpg?v=1714824750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description: "Enhanced energy and focus for intense workouts",
      benefits: ["Increased energy", "Mental focus", "Muscle pump"]
    },
    {
      name: "BCAA Recovery",
      image: "https://nucleusnutrition.com/cdn/shop/files/onbcaafruitpunch250g.jpg?v=1714826173",
      description: "Essential amino acids for muscle recovery",
      benefits: ["Reduces muscle soreness", "Supports recovery", "Prevents muscle breakdown"]
    }
  ];

  const storeAmenities = [
    "Expert supplement consultation",
    "Product sampling",
    "Personalized recommendations",
    "Fitness goal assessment",
    "Nutrition planning support",
    "Bulk order options"
  ];

  return (
    <div className="pt-20 bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1739446361/photo-6363_iq3kpa.jpg"
            alt="Store Front"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              VISIT OUR <span className="text-orange-500">STORE</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Official partner of Nucleus Supplements in Margao, Goa
            </p>
            <button 
              onClick={() => window.location.href = '#contact'}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all"
            >
              Get Directions
            </button>
          </div>
        </div>
      </section>

       {/* Add Nucleus Banner right after hero */}
       <NucleusBanner />

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">FEATURED PRODUCTS</h2>
            <p className="text-gray-300">Premium supplements available at our store</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-zinc-900 rounded-lg overflow-hidden group">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-xl mb-2">{product.name}</h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Information */}
      <section className="py-20 bg-zinc-900" id="contact">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">VISIT OUR STORE</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Location</h3>
                    <p className="text-gray-300">DNA Building, Rawanfond Cir, Madgaon, Davorlim, Goa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Store Hours</h3>
                    <ul className="text-gray-300 space-y-1">
                      <li>Monday - Friday: 9:00 AM - 9:00 PM</li>
                      <li>Saturday: 9:00 AM - 8:00 PM</li>
                      <li>Sunday: 10:00 AM - 6:00 PM</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Contact</h3>
                    <p className="text-gray-300">+91 779 803 2404</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Email</h3>
                    <p className="text-gray-300">abhijitfitnessgoa@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-white font-semibold mb-4">Store Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {storeAmenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span className="text-gray-300">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.7098800928785!2d73.95715661484943!3d15.422893989276364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336bf1d%3A0x9a2f26e3be69f1eb!2sDNA%20Health%20%26%20Fitness!5e0!3m2!1sen!2sin!4v1646436435889!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Want Expert Supplement Guidance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Visit our store for personalized recommendations and exclusive deals
          </p>
          <a 
            href="https://nucleusnutrition.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all"
          >
            Visit Nucleus Store
            <ExternalLink className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default SupplementsPage;