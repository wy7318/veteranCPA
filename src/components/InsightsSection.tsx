import React, { useEffect, useRef } from 'react';
import { insightTopics } from '../data';

const InsightsSection: React.FC = () => {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50" id="insights">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">Expert Insights</h2>
          <p className="section-subtitle animate-on-scroll">
            Stay informed with our latest tax planning strategies and financial advice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightTopics.map((topic, index) => (
            <div 
              key={topic.id}
              className="bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="h-3 bg-gold-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-navy-800">{topic.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{topic.description}</p>

              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="/services" className="btn-primary animate-on-scroll">
            View All Insights
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;









