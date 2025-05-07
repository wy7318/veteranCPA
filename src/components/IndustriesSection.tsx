import React, { useEffect, useRef } from 'react';
import { industries, partners } from '../data';
import {
  Building, Stethoscope, HeartPulse, Utensils,
  Fuel, Scale, Factory, Home, Wheat
} from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  Building: <Building size={36} className="text-white mb-4" />,
  Stethoscope: <Stethoscope size={36} className="text-white mb-4" />,
  HeartPulse: <HeartPulse size={36} className="text-white mb-4" />,
  Utensils: <Utensils size={36} className="text-white mb-4" />,
  Fuel: <Fuel size={36} className="text-white mb-4" />,
  Scale: <Scale size={36} className="text-white mb-4" />,
  Factory: <Factory size={36} className="text-white mb-4" />,
  Home: <Home size={36} className="text-white mb-4" />,
  Wheat: <Wheat size={36} className="text-white mb-4" />
};

const IndustriesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el) => {
              el.classList.add('is-visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white" id="industries-partners">
      <div className="container mx-auto px-4 md:px-6">
        {/* Industries Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-on-scroll">
              <span className="text-white">Industries</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200">We Serve</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                className="group bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 text-center hover:border-pink-500 transition-all duration-300 animate-on-scroll"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-purple-900/20 to-pink-900/20">
                    {iconMap[industry.icon]}
                  </div>
                  <h3 className="text-xl font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-200 transition-colors duration-300">
                    {industry.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-16"></div>

        {/* Partners Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-on-scroll">
              <span className="text-white">Our</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200">Partners</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-on-scroll">
              Proud to work with organizations that support our veterans and community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                className="animate-on-scroll bg-gray-900/30 border border-gray-800 rounded-lg p-8 flex items-center justify-center hover:border-pink-500 transition-all duration-300"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;