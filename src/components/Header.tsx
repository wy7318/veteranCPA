import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-navy-900/95 py-5'
        }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="relative z-10">
          <Logo variant={scrolled ? 'default' : 'light'} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className={`font-medium transition-colors duration-200 ${scrolled ? 'text-gray-700 hover:text-navy-800' : 'text-gray-100 hover:text-white'
                }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-t border-gray-200 shadow-lg">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-gray-700 hover:text-navy-800 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/contact"
              className="btn-primary text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;