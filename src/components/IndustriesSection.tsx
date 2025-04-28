import React, { useEffect, useRef } from 'react';
import { industries } from '../data';
import { 
  Building, Stethoscope, HeartPulse, Utensils, 
  Fuel, Scale, Factory, Home, Wheat
} from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  Building: <Building size={36} className="text-navy-800 mb-3" />,
  Stethoscope: <Stethoscope size={36} className="text-navy-800 mb-3" />,
  HeartPulse: <HeartPulse size={36} className="text-navy-800 mb-3" />,
  Utensils: <Utensils size={36} className="text-navy-800 mb-3" />,
  Fuel: <Fuel size={36} className="text-navy-800 mb-3" />,
  Scale: <Scale size={36} className="text-navy-800 mb-3" />,
  Factory: <Factory size={36} className="text-navy-800 mb-3" />,
  Home: <Home size={36} className="text-navy-800 mb-3" />,
  Wheat: <Wheat size={36} className="text-navy-800 mb-3" />,
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-white" id="industries">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">Industries We Serve</h2>
          <p className="section-subtitle animate-on-scroll">
            Our specialized knowledge has helped many professionals thrive, and we're ready to help you too.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <div 
              key={industry.id}
              className="industry-card animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {iconMap[industry.icon]}
              <h3 className="text-lg font-medium text-navy-800">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;