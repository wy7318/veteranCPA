import React, { useEffect, useRef } from 'react';
import { Shield, Users, Target, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-white" id="about">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">About Us</h2>
          <p className="section-subtitle animate-on-scroll">
            At VETERAN, we prioritize your goals, your future, and your peace of mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4 text-navy-800">Who We Are</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our team of professionals is committed to offering personalized financial guidance with a focus on integrity and trust. With backgrounds in both the private and public sectors, we simplify complex tax, business, and financial strategies, ensuring you can focus on what matters most—whether that's growing your business, securing a comfortable retirement, or protecting your wealth for future generations.
            </p>
          </div>
          
          <div className="animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <h3 className="text-2xl font-bold mb-4 text-navy-800">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our mission is to provide expert guidance through the complexities of tax and financial planning, with transparency and a deep understanding of your goals. As veterans, we bring a unique commitment to service and responsibility, ensuring that our solutions not only help you optimize your finances but also provide peace of mind. Our goal is to empower you to make informed decisions, achieving both short-term and long-term financial success.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center animate-on-scroll">
            <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-navy-800" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-navy-800">Integrity</h3>
            <p className="text-gray-600">
              We uphold the highest standards of professional ethics and transparency.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-navy-800" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-navy-800">Expertise</h3>
            <p className="text-gray-600">
              Our team brings decades of experience across diverse financial sectors.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center animate-on-scroll" style={{transitionDelay: '0.4s'}}>
            <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-navy-800" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-navy-800">Precision</h3>
            <p className="text-gray-600">
              We focus on accuracy and detail in every aspect of our financial services.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center animate-on-scroll" style={{transitionDelay: '0.6s'}}>
            <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-navy-800" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-navy-800">Commitment</h3>
            <p className="text-gray-600">
              We are deeply committed to our clients' success and community service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;