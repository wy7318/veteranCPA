import React from 'react';
import { navItems } from '../data';
import { Phone, MapPin, Mail, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="mb-8 md:mb-0">
            <Logo color="white" />
            <p className="mt-4 text-gray-300 leading-relaxed">
              Since 2016, VETERAN has been dedicated to advising small business owners with personalized service and expert financial guidance.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.path} 
                    className="text-gray-300 hover:text-gold-500 transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight size={16} className="mr-2" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-gray-300 hover:text-gold-500 transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Tax Planning
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-gold-500 transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Business Consulting
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-gold-500 transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Retirement Planning
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-gold-500 transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Financial Analysis
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  3030 N Central Ave STE 700, Phoenix, AZ 85012
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gold-500 mr-3 flex-shrink-0" />
                <a href="tel:4808315260" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">
                  480-831-5260
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gold-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@veterancpa.com" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">
                  info@veterancpa.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Veteran CPA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;