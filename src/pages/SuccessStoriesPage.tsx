import React from 'react';
import { Star, Users, Award, Clock, Dumbbell } from 'lucide-react';

// Add format prop to control which card style to display (simple and detailed)
const SuccessStoriesPage = ({ format = 'simple' }) => {

  const stats = [
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      value: "100+",
      label: "Transformations"
    },
    {
      icon: <Award className="w-12 h-12 text-orange-500" />,
      value: "95%",
      label: "Success Rate"
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      value: "30",
      label: "Day Challenge"
    },
    {
      icon: <Dumbbell className="w-12 h-12 text-orange-500" />,
      value: "6+",
      label: "Years Experience"
    }
  ];


  const successStories = [
    {
      id:"1",
      name: " Priya Patel",
      age: 28,
      duration: "3 months",
      weightLoss: "15 KG",
      beforeImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
      afterImage: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739825021/1_jnccpb.png",
      testimonial: "The 30-day challenge was just the beginning. With Abhijit's guidance, I completely transformed my lifestyle and achieved results I never thought possible.",
      rating: 5
    },
    {
      id:"2",
      name: "Rahul Sharma ",
      age: 32,
      duration: "6 months",
      weightLoss: "20 KG",
      beforeImage: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739824860/2_wusrgc.png",
      afterImage: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739825022/2_vpsv6r.png",
      testimonial: "Not just weight loss, but a complete transformation in energy levels and confidence. The personalized attention made all the difference.",
      rating: 5
    },
    {
      id:"3",
      name: "Amit Kumar",
      age: 35,
      duration: "4 months",
      weightLoss: "18 KG",
      beforeImage: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739820289/6_o683tr.png",
      afterImage: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739825156/Untitled_design_5_mjlln9.png",
      testimonial: "From being out of breath climbing stairs to completing a marathon - this journey has been life-changing. Thank you, Coach Abhijit!",
      rating: 5
    },
    {
      id:"4",
      name: "Amy diaz",
      age: 23,
      duration: "4 months",
      weightLoss: "8 KG",
      beforeImage: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739820292/5_wb5dk7.png",
      afterImage: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739820294/3_kuginv.png",
      testimonial: "From being out of breath climbing stairs to completing a marathon - this journey has been life-changing. Thank you, Coach Abhijit!",
      rating: 5
    },
    {
      id:"5",
      name: "jake diaz",
      age: 23,
      duration: "4 months",
      weightLoss: "8 KG",
      beforeImage: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739820294/3_kuginv.png",
      afterImage: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739820292/5_wb5dk7.png",
      testimonial: "From being out of breath climbing stairs to completing a marathon - this journey has been life-changing. Thank you, Coach Abhijit!",
      rating: 5
    },

    {
      id:"6",
      name: "boyle diaz",
      age: 23,
      duration: "4 months",
      weightLoss: "8 KG",
      beforeImage: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739820294/3_kuginv.png",
      afterImage: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739827539/9_oyhiso.png",
      testimonial: "From being out of breath climbing stairs to completing a marathon - this journey has been life-changing. Thank you, Coach Abhijit!",
      rating: 5
    },

    {
      id:"7",
      name: "roza diaz",
      age: 23,
      duration: "4 months",
      weightLoss: "8 KG",
      beforeImage: "",
      afterImage: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739827536/10_gkkkyp.png",
      testimonial: "From being out of breath climbing stairs to completing a marathon - this journey has been life-changing. Thank you, Coach Abhijit!",
      rating: 5
    },

    {
      id:"8",
      name: "tery crews",
      age: 23,
      duration: "4 months",
      weightLoss: "8 KG",
      beforeImage: "",
      afterImage: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739827537/7_bovcpg.png",
      testimonial: "From being out of breath climbing stairs to completing a marathon - this journey has been life-changing. Thank you, Coach Abhijit!",
      rating: 5
    },

    {
      id:"9",
      name: "tery crews",
      age: 23,
      duration: "4 months",
      weightLoss: "8 KG",
      beforeImage: "",
      afterImage: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739828185/Scan_the_code_z4rgd0.png",
      testimonial: "From being out of breath climbing stairs to completing a marathon - this journey has been life-changing. Thank you, Coach Abhijit!",
      rating: 5
    },



    {
      id:"10",
      name: "Amy diaz",
      age: 23,
      duration: "4 months",
      weightLoss: "8 KG",
      beforeImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
      afterImage: "https://res.cloudinary.com/ddhhlkyut/image/upload/v1739824862/4_xdpmax.png",
      testimonial: "From being out of breath climbing stairs to completing a marathon - this journey has been life-changing. Thank you, Coach Abhijit!",
      rating: 5

    }

  ];

  const DetailedCard = ({ story }) => (
    <div className="bg-zinc-900 rounded-lg overflow-hidden transform transition-all hover:scale-105">
      <div className="relative">
        <div className="flex">
          <div className="w-1/2 aspect-square">
            <img 
              src={story.beforeImage} 
              alt={`${story.name} Before`}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm backdrop-blur-sm">
              Before
            </div>
          </div>
          <div className="w-1/2 aspect-square">
            <img 
              src={story.afterImage} 
              alt={`${story.name} After`}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-orange-500/50 px-3 py-1 rounded-full text-white text-sm backdrop-blur-sm">
              After
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">{story.name}</h3>
          <div className="flex">
            {[...Array(story.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <p className="text-gray-400 text-sm">Age</p>
            <p className="text-white font-bold">{story.age}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm">Duration</p>
            <p className="text-white font-bold">{story.duration}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm">Lost</p>
            <p className="text-white font-bold">{story.weightLoss}</p>
          </div>
        </div>
        
        <p className="text-gray-300 italic">"{story.testimonial}"</p>
      </div>
    </div>
  );

  const SimpleCard = ({ story }) => (
  <div className="bg-zinc-900 rounded-lg overflow-hidden transform transition-all hover:scale-105 w-[500px] h-[500px] flex flex-col">
    {/* Image Container */}
    <div className="relative h-[350px] overflow-hidden"> {/* Fixed height for image container */}
      <img 
        src={story.afterImage} 
        alt={story.name}
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Content Container */}
    <div className="p-4 flex-1 flex flex-col justify-between"> {/* Flex layout for content */}
      <h3 className="text-xl font-bold text-white mt-0">{story.name}</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-gray-400 text-sm">Age</p>
          <p className="text-white font-bold">{story.age}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-sm">Duration</p>
          <p className="text-white font-bold">{story.duration}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-sm">Lost</p>
          <p className="text-white font-bold">{story.weightLoss}</p>
        </div>
      </div>
    </div>
  </div>
);

  return (
    <div className="pt-20 bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_960_720.jpg"
            alt="Success Stories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              REAL PEOPLE <span className="text-orange-500">REAL RESULTS</span>
            </h1>
            <p className="text-xl text-gray-300">
              Inspiring transformations from our fitness community
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">OUR IMPACT</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We've helped hundreds of people transform their lives through dedicated fitness coaching and support
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform transition-all hover:scale-105">
                <div className="bg-black rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Success Stories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              format === 'simple' ? 
                <SimpleCard key={index} story={story} /> :
                <DetailedCard key={index} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our next 30-day transformation challenge and begin your journey to a healthier, stronger you.
          </p>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105">
            Start Your Transformation
          </button>
        </div>
      </section>
    </div>
  );
};

export default SuccessStoriesPage;