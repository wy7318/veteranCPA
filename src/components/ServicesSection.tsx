import React, { useEffect, useRef, useState } from 'react';
import { services } from '../data';
import { BarChart, Briefcase, PiggyBank, LineChart, ChevronDown } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  BarChart: <BarChart size={40} className="text-gold-500" />,
  Briefcase: <Briefcase size={40} className="text-gold-500" />,
  PiggyBank: <PiggyBank size={40} className="text-gold-500" />,
  LineChart: <LineChart size={40} className="text-gold-500" />,
};

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
  isOpen: boolean;
  onToggle: () => void;
  transitionDelay: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isOpen, onToggle, transitionDelay }) => {
  return (
    <div 
      className="animate-on-scroll bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300"
      style={{ transitionDelay }}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
      >
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            {iconMap[service.icon]}
          </div>
          <h3 className="text-xl font-semibold text-navy-800 text-left">{service.title}</h3>
        </div>
        <ChevronDown 
          size={24} 
          className={`text-navy-800 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      <div 
        className={`transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-6 border-t border-gray-100">
          <p className="text-gray-600 leading-relaxed">{service.description}</p>
          
          <div className="mt-4 space-y-2">
            <h4 className="font-medium text-navy-800">Key Features:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-600">
                <span className="text-gold-500">•</span>
                Comprehensive analysis and planning
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <span className="text-gold-500">•</span>
                Regular strategy reviews and updates
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <span className="text-gold-500">•</span>
                Expert guidance and support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openService, setOpenService] = useState<number | null>(0);
  
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

  const handleToggle = (serviceId: number) => {
    setOpenService(openService === serviceId ? null : serviceId);
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50" id="services">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">Our Services</h2>
          <p className="section-subtitle animate-on-scroll">
            Comprehensive financial solutions tailored to your unique needs.
          </p>
        </div>
        
        <div className="space-y-4 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              isOpen={openService === service.id}
              onToggle={() => handleToggle(service.id)}
              transitionDelay={`${index * 0.1}s`}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="/services" className="btn-primary animate-on-scroll">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;