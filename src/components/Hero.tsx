import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-navy-800 text-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      
      <div className="container-custom relative z-10 h-full pt-32 pb-16 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tax Planning and Strategy <span className="text-gold-500">You Can Rely On</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Supporting Small Business Success with personalized service and expert financial guidance since 2016.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="btn-primary">
                Get Started
              </a>
              <a href="/services" className="btn-secondary">
                Our Services <ChevronRight size={18} className="inline-block ml-1" />
              </a>
            </div>
          </div>

          <div className="hidden md:block relative">
            <img 
              src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Financial Planning" 
              className="relative z-10 w-full h-[500px] object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-navy-800/10 rounded-lg z-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;