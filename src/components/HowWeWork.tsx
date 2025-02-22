import React, { useEffect, useRef } from 'react';
import { ArrowRight, ClipboardCheck, Search, Home } from 'lucide-react';

export default function HowWeWork() {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-slide');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  const steps = [
    {
      number: '01',
      icon: ClipboardCheck,
      title: "TELL US WHAT YOU'RE LOOKING FOR",
      description: [
        "We are here to listen. Our goal is to understand your vision completely.",
        "We will ask in-depth questions about your budget, preferred location, and style, along with any specific features or requirements you have in mind.",
        "By diving into every detail, we ensure that we fully grasp your needs, making the journey of finding your dream home seamless and stress-free."
      ]
    },
    {
      number: '02',
      icon: Search,
      title: "WE CURATE THE PERFECT OPTIONS",
      description: [
        "Our local experts will scout the entire state to find your dream home. From our existing listings to handpicked options that perfectly match your needs, we provide at least five tailored choices.",
        "Each option comes with in-depth information, covering every detail of the villa and project with extreme precision.",
        "Additionally, we curate Personalized brochures, Photos and Videos with comprehensive insights, ensuring you have a complete understanding even before visiting."
      ]
    },
    {
      number: '03',
      icon: Home,
      title: "SEE & SECURE YOUR DREAM HOME",
      description: [
        "Once you've selected your top choices, our team will arrange personalized property tours, allowing you to explore each option and find the one that feels just right.",
        "When you've made your final decision, we take care of everything from negotiations and paperwork to legal formalities—ensuring a smooth and stress-free closing process."
      ]
    }
  ];

  return (
    <section id="how" className="py-20 bg-[var(--bg-primary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[var(--text-primary)] mb-16 fade-in-slide">HOW WE WORK</h2>
        
        <div className="relative">
          <div className="absolute left-[42px] top-[120px] bottom-[120px] w-0.5 bg-gradient-to-b from-[var(--text-primary)] to-[var(--text-primary)] opacity-50 hidden md:block"></div>
          
          <div className="space-y-8 md:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => stepsRef.current[index] = el}
                className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
              >
                <div className="group relative bg-[var(--bg-secondary)] p-6 md:p-8 md:pl-24 border-l-4 border-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all duration-300">
                  <div className="absolute left-[-16px] md:left-[-28px] top-6 md:top-8 w-12 md:w-14 h-12 md:h-14 bg-[var(--bg-secondary)] border-4 border-[var(--text-primary)] group-hover:border-[var(--text-primary)] rounded-full flex items-center justify-center transition-all duration-300">
                    <step.icon className="w-5 h-5 md:w-6 md:h-6 text-[var(--text-primary)] group-hover:text-[var(--text-primary)] transition-colors duration-300" />
                  </div>
                  
                  <div className="absolute top-6 md:top-8 left-8 md:left-12 text-3xl md:text-4xl font-bold text-[var(--text-primary)] opacity-10 group-hover:opacity-20 transition-colors duration-300">
                    {step.number}
                  </div>
                  
                  <div className="relative pl-4 md:pl-0">
                    <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)] mb-4 md:mb-6 group-hover:text-[var(--text-primary)] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <div className="space-y-3 md:space-y-4 text-[var(--text-primary)] opacity-90">
                      {step.description.map((text, i) => (
                        <p key={i} className="relative pl-6 text-sm md:text-base">
                          <ArrowRight className="absolute left-0 top-1 w-4 h-4 text-[var(--text-primary)] group-hover:text-[var(--text-primary)] transition-colors duration-300" />
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}