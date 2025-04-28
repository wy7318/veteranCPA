import React, { useEffect, useRef } from 'react';
import { partners } from '../data';

const PartnersSection: React.FC = () => {
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
    <section ref={sectionRef} className="py-16 bg-gray-50" id="partners">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title animate-on-scroll">Our Partners</h2>
          <p className="section-subtitle animate-on-scroll">
            Proud to work with organizations that support our veterans and community.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="animate-on-scroll flex items-center justify-center p-4"
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
    </section>
  );
};

export default PartnersSection;