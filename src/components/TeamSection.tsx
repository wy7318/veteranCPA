import React, { useEffect, useRef } from 'react';
import { team } from '../data';

const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el) => {
              el.classList.add('slide-in-bottom');
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-white" id="team">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-on-scroll">Meet Our Team</h2>
          <p className="section-subtitle opacity-0 animate-on-scroll">
            Experienced professionals dedicated to your financial success.
          </p>
        </div>
        
        {team.map((member) => (
          <div key={member.id} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start opacity-0 animate-on-scroll">
            <div className="lg:col-span-1">
              <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-lg mb-6">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-navy-800 mb-1">{member.name}</h3>
                <p className="text-gold-600 font-medium mb-4">{member.title}</p>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-4">
              {member.bio.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;