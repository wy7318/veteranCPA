import React, { useRef, useEffect } from 'react';
import { BarChart, Briefcase, PiggyBank, LineChart } from 'lucide-react';

const ServicesSection = () => {
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

  const SERVICES_DATA = [
    {
      id: 1,
      title: "Tax Strategy",
      subtitle: "& planning",
      description: "Achieve optimal financial outcomes with tailored tax strategies specific to your business and personal financial goals by our team of expert CPAs",
      icon: <BarChart size={36} className="text-gray-900" />
    },
    {
      id: 2,
      title: "Business Accounting",
      subtitle: "& advisory",
      description: "Comprehensive accounting services to help your business maintain accurate financial records and make informed decisions for sustainable growth",
      icon: <Briefcase size={36} className="text-gray-900" />
    },
    {
      id: 3,
      title: "Retirement Planning",
      subtitle: "& wealth management",
      description: "Holistic financial planning to help you achieve your short and long-term retirement goals with confidence and clarity",
      icon: <PiggyBank size={36} className="text-gray-900" />
    },
    {
      id: 4,
      title: "Tax Management",
      subtitle: "platform",
      description: "Stay informed and in control of your business and household tax situations with our integrated digital platform",
      icon: <LineChart size={36} className="text-gray-900" />
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white text-black" id="services">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-on-scroll opacity-0">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-8 animate-on-scroll opacity-0" style={{ transitionDelay: '0.2s' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll opacity-0" style={{ transitionDelay: '0.3s' }}>
            Comprehensive financial solutions designed to optimize your tax strategy,
            business operations, and long-term financial health
          </p>
        </div>

        {/* Services Layout - More compact, no large whitespaces */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="flex flex-col h-full animate-on-scroll opacity-0"
              style={{ transitionDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-100 to-pink-50 mr-4">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    {service.subtitle}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-lg mb-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional service highlights section */}
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 mt-16 animate-on-scroll opacity-0" style={{ transitionDelay: '0.6s' }}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Services</h3>
              <p className="text-gray-600">
                Our experienced team provides tailored solutions with a focus on maximizing your financial outcomes and minimizing tax burden.
              </p>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  "Expert CPAs",
                  "Personalized Approach",
                  "Modern Technology",
                  "Transparent Pricing",
                  "Proactive Planning",
                  "Ongoing Support"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 animate-on-scroll opacity-0"
                    style={{ transitionDelay: `${0.7 + (index * 0.1)}s` }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mb-3"></div>
                    <div className="font-medium text-gray-900">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;