import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import IndustriesSection from '../components/IndustriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Veteran CPA | Supporting Small Business Success';

    // Handle anchor link smooth scrolling with offset for fixed header
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');

        if (element) {
          // Get header height
          const header = document.querySelector('header');
          const headerHeight = header ? header.offsetHeight : 0;

          // Calculate the element's position relative to the viewport
          const elementPosition = element.getBoundingClientRect().top;
          // Add current scroll position to get absolute position
          const offsetPosition = elementPosition + window.pageYOffset;

          // Scroll to element minus header height
          window.scrollTo({
            top: offsetPosition - headerHeight,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="w-full">
      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      <section id="about" className="min-h-screen">
        <AboutSection />
      </section>
      <section id="services" className="min-h-screen">
        <ServicesSection />
      </section>
      <section id="industries" className="min-h-screen">
        <IndustriesSection />
      </section>
      <section id="testimonials" className="min-h-screen">
        <TestimonialsSection />
      </section>
      <section id="contact" className="min-h-screen">
        <ContactSection />
      </section>
    </div>
  );
};

export default HomePage;