import React from 'react';
import { ChevronRight, CheckCircle, Award, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-navy-900 to-navy-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(60deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.1) 75%, rgba(255, 255, 255, 0.1)), linear-gradient(120deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.1) 75%, rgba(255, 255, 255, 0.1))',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-48 right-0 w-96 h-96 rounded-full bg-blue-500 filter blur-3xl opacity-10 transform rotate-45" />
      <div className="absolute top-24 -left-24 w-64 h-64 rounded-full bg-gold-500 filter blur-3xl opacity-10" />

      <div className="container-custom relative z-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            {/* Small badge/pill */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-900/30 rounded-full text-blue-200 text-sm font-medium backdrop-blur-sm mb-6">
              <Award size={14} className="mr-2" />
              <span>Professional Financial Expertise</span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              {/* Fixed: Changed first line to white for better visibility */}
              <span className="text-white">Strategic Tax</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-300">Planning & Advisory</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Our comprehensive approach combines tax expertise, retirement planning, and business advisory services to optimize your financial future.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="/contact" className="btn-primary bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-navy-900 font-semibold shadow-lg shadow-gold-500/20 border-0 px-6 py-3 rounded-full transition-all duration-200">
                Schedule Consultation
              </a>

              {/* Fixed: Redesigned secondary button with proper styling */}
              <a href="/services" className="px-6 py-3 rounded-full border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white font-medium flex items-center space-x-2 transition-all duration-200">
                <span>Explore Services</span>
                <ChevronRight size={18} />
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-blue-200">
              <div className="flex items-center">
                <CheckCircle size={18} className="mr-2 text-gold-400" />
                <span>Certified Professionals</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={18} className="mr-2 text-gold-400" />
                <span>Trusted Since 2016</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={18} className="mr-2 text-gold-400" />
                <span>Personalized Strategies</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            {/* Image container with decorative elements */}
            <div className="relative">
              {/* Gold accent shape behind image */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-gold-400/20 to-gold-500/10 rounded-full"></div>

              {/* Main image */}
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Strategic Tax Planning"
                  className="w-full h-[550px] object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>

                {/* Floating badge */}
                <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-lg rounded-lg p-5 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-500/20 backdrop-blur-sm rounded-full">
                      <Shield size={24} className="text-blue-100" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Client-Focused Approach</h3>
                      <p className="text-blue-200 text-sm">Tailored solutions for your unique financial needs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blue accent shape */}
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-gradient-to-tr from-blue-600/20 to-blue-500/5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;