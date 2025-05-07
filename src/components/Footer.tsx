import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <Logo variant="default" />
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Since 2016, VETERAN has been dedicated to advising small business owners with personalized service and expert financial guidance.
            </p>
            <div className="mt-8 flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <h3 className="text-xl font-bold mb-6 text-gray-800">Quick Links</h3>
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-600 hover:text-amber-500 transition-colors duration-300 text-lg">
                Home
              </a>
              <a href="#about" className="text-gray-600 hover:text-amber-500 transition-colors duration-300 text-lg">
                About
              </a>
              <a href="#services" className="text-gray-600 hover:text-amber-500 transition-colors duration-300 text-lg">
                Services
              </a>
              <a href="#industries" className="text-gray-600 hover:text-amber-500 transition-colors duration-300 text-lg">
                Industries
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-base mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Veteran CPA. All rights reserved.
            </p>
            <p className="text-gray-500 text-base">
              Designed by{' '}
              <a
                href="https://www.sumisubi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-600 font-medium"
              >
                Sumiland Design
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;