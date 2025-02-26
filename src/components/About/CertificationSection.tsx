import React from 'react';

interface Certificate {
  image: string;
  title: string;
  issuedBy: string;
  year: string;
}

const CertificationSection: React.FC = () => {
  const certificates: Certificate[] = [
    {
      image: "https://cdn.pixabay.com/photo/2012/04/24/21/41/certificate-40983_1280.png", // Replace with actual certificate images
      title: "Certified Fitness Trainer",
      issuedBy: "International Sports Sciences Association",
      year: "2023"
    },
    {
      image: "https://cdn.pixabay.com/photo/2012/04/24/21/41/certificate-40983_1280.png",
      title: "Nutrition Specialist",
      issuedBy: "National Academy of Sports Medicine",
      year: "2022"
    },
    {
      image: "https://cdn.pixabay.com/photo/2012/04/24/21/41/certificate-40983_1280.png",
      title: "CrossFit Level 2 Trainer",
      issuedBy: "CrossFit Inc.",
      year: "2022"
    },
    {
      image: "https://cdn.pixabay.com/photo/2012/04/24/21/41/certificate-40983_1280.png",
      title: "Strength & Conditioning Coach",
      issuedBy: "National Strength and Conditioning Association",
      year: "2021"
    },
    {
      image: "https://cdn.pixabay.com/photo/2012/04/24/21/41/certificate-40983_1280.png",
      title: "Personal Training Certification",
      issuedBy: "American Council on Exercise",
      year: "2020"
    },
    {
      image: "https://cdn.pixabay.com/photo/2012/04/24/21/41/certificate-40983_1280.png",
      title: "Sports Nutrition Certification",
      issuedBy: "Precision Nutrition",
      year: "2020"
    }
  ];

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-500 mb-4">CERTIFICATIONS</h3>
          <h2 className="text-4xl font-bold text-white">PROFESSIONAL QUALIFICATIONS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="group bg-black rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-orange-500 mb-1">{cert.issuedBy}</p>
                <p className="text-gray-400 text-sm">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Continuously updating knowledge and skills through professional development and certifications
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;