import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import IndustriesSection from '../components/IndustriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PartnersSection from '../components/PartnersSection';
import InsightsSection from '../components/InsightsSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Veteran CPA | Supporting Small Business Success';
  }, []);

  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <PartnersSection />
      <InsightsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;