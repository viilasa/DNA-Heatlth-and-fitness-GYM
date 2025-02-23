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

 const filteredStories = successStories.filter(story => {
    const matchesSearch = story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.testimonial.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || story.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleShare = (story: SuccessStory) => {
    if (navigator.share) {
      navigator.share({
        title: `${story.name}'s Transformation Story`,
        text: `Check out ${story.name}'s amazing transformation with Abhijit Fitness!`,
        url: window.location.href
      });
    }
  };

  return (
    <div className="pt-20 bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_960_720.jpg"
            alt="Success Stories"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              REAL PEOPLE <span className="text-orange-500">REAL RESULTS</span>
            </h1>
            <p className="text-xl text-gray-300">
              Join hundreds of successful transformations
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform transition-all hover:scale-105">
                <div className="bg-black rounded-full w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
                  {stat.icon}
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full md:w-auto">
              <input
                ref={searchRef}
                type="text"
                placeholder="Search success stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-80 px-4 py-3 pl-12 bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm md:text-base ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-zinc-900 text-gray-300 hover:bg-zinc-800'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <div key={story.id} className="bg-zinc-900 rounded-lg overflow-hidden transform transition-all hover:scale-105">
                <div className="relative">
                  <div className="flex">
                    <div className="w-1/2 aspect-square">
                      <img 
                        src={story.beforeImage} 
                        alt={`${story.name} Before`}
                        className="w-full h-full object-cover"
                        loading="lazy"
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
                        loading="lazy"
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
                    <button
                      onClick={() => handleShare(story)}
                      className="p-2 hover:bg-zinc-800 rounded-full transition-colors"
                      aria-label="Share story"
                    >
                      <Share2 className="w-5 h-5 text-gray-400" />
                    </button>
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
                  
                  <p className="text-gray-300 italic mb-4">"{story.testimonial}"</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-zinc-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                      ))}
                    </div>
                    <button className="flex items-center text-orange-500 hover:text-orange-400 transition-colors">
                      <span className="mr-2">Read Full Story</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Write Your Success Story?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our next 30-day transformation challenge and begin your journey to a healthier, stronger you.
          </p>
          <Link
            to="/challenge"
            className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 min-w-[200px]"
          >
            Start Your Transformation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SuccessStoriesPage;
