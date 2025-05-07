import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navItems = [
  { name: 'Home', path: 'home', isAnchor: true },
  { name: 'About', path: 'about', isAnchor: true },
  { name: 'Services', path: 'services', isAnchor: true },
  { name: 'Industries', path: 'industries', isAnchor: true },
  { name: 'Testimonials', path: 'testimonials', isAnchor: true },
  { name: 'News', path: '/news', isAnchor: false }
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isHomePage, setIsHomePage] = useState(true);
  const [isDarkSection, setIsDarkSection] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    setIsHomePage(path === '/' || path === '/index.html');

    const handleRouteChange = () => {
      const newPath = window.location.pathname;
      setIsHomePage(newPath === '/' || newPath === '/index.html');
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        const sections = document.querySelectorAll('section[id]');
        let currentSection = '';
        let isDark = true;

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionBottom = rect.bottom;
          const viewportHeight = window.innerHeight;

          if (sectionTop <= viewportHeight * 0.4 && sectionBottom >= viewportHeight * 0.3) {
            currentSection = section.id;
            console.log(currentSection);
            isDark = ['about', 'industries', 'home', 'industries-partners'].includes(currentSection);
          }
        });

        if (currentSection !== activeSection && currentSection) {
          setActiveSection(currentSection);
        }
        setIsDarkSection(isDark);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, isHomePage]);

  const handleNavClick = (e: React.MouseEvent, isAnchor: boolean, path: string) => {
    if (!isAnchor) return;

    e.preventDefault();
    setIsOpen(false);

    if (!isHomePage) {
      window.location.href = `/#${path}`;
      return;
    }

    const element = document.getElementById(path);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getHref = (path: string, isAnchor: boolean) => {
    if (!isAnchor) return path;
    return isHomePage ? `#${path}` : `/#${path}`;
  };

  return (
    <>
      {/* Mobile Header */}
      <header className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${isDarkSection ? 'bg-black shadow-md' : 'bg-white shadow-md'
        }`}>
        <div className="container-custom flex justify-between items-center h-16">
          <div className="relative z-10">
            <a href={isHomePage ? '#home' : '/#home'}>
              <Logo variant={isDarkSection ? "light" : "default"} />
            </a>
          </div>
          <button
            className={`md:hidden ${isDarkSection ? "text-white" : "text-gray-700"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={getHref(item.path, item.isAnchor)}
                className={`font-medium transition-colors duration-300 ${activeSection === item.path && item.isAnchor && isHomePage
                    ? isDarkSection
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200'
                      : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500'
                    : isDarkSection
                      ? 'text-gray-300 hover:text-purple-300'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                onClick={(e) => item.isAnchor && handleNavClick(e, item.isAnchor, item.path)}
              >
                {item.name}
              </a>
            ))}
            <a
              href={isHomePage ? '#contact' : '/#contact'}
              className={`bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-200`}
              onClick={(e) => handleNavClick(e, true, 'contact')}
            >
              Contact Us
            </a>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className={`md:hidden absolute top-full left-0 w-full border-t ${isDarkSection ? 'bg-black border-gray-700' : 'bg-white border-gray-200'
            } shadow-lg`}>
            <nav className="container-custom py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={getHref(item.path, item.isAnchor)}
                  className={`font-medium py-2 ${activeSection === item.path && item.isAnchor && isHomePage
                      ? isDarkSection
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200'
                        : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500'
                      : isDarkSection
                        ? 'text-gray-300 hover:text-purple-300'
                        : 'text-gray-700 hover:text-purple-600'
                    }`}
                  onClick={(e) => item.isAnchor && handleNavClick(e, item.isAnchor, item.path)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href={isHomePage ? '#contact' : '/#contact'}
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-200 text-center mt-4"
                onClick={(e) => handleNavClick(e, true, 'contact')}
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Header Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;