import React, { useEffect, useRef } from 'react';
import { Shield, Users, Target, Heart, Award, ChevronRight } from 'lucide-react';
import { team } from '../data';

const AboutPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'About Us | Veteran CPA';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      <div className="bg-navy-800 pt-32 pb-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Where precision meets sophistication in financial advisory. We transform complex challenges into elegant solutions.
          </p>
        </div>
      </div>

      <section id="discover" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="luxury-heading text-4xl md:text-5xl font-bold text-navy-900 mb-8">
              A Legacy of Excellence
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Since our inception, we've been more than financial advisors – we're architects of prosperity. Our approach combines time-tested wisdom with innovative strategies, ensuring your financial future is built on an unshakeable foundation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-gold-500 mb-2">10+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold-500 mb-2">500+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold-500 mb-2">100%</div>
                <div className="text-gray-600">Client Retention</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold-500 mb-2">50M+</div>
                <div className="text-gray-600">Assets Managed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="luxury-heading text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on principles that define not just who we are, but how we serve our clients with distinction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="luxury-card p-8 group">
              <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-navy-800" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-navy-800">Integrity</h3>
              <p className="text-gray-600">
                Unwavering commitment to ethical excellence and transparency in every interaction.
              </p>
            </div>
            
            <div className="luxury-card p-8 group">
              <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-navy-800" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-navy-800">Expertise</h3>
              <p className="text-gray-600">
                Decades of refined experience across the financial spectrum.
              </p>
            </div>
            
            <div className="luxury-card p-8 group">
              <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="text-navy-800" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-navy-800">Precision</h3>
              <p className="text-gray-600">
                Meticulous attention to detail in every financial strategy.
              </p>
            </div>
            
            <div className="luxury-card p-8 group">
              <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="text-navy-800" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-navy-800">Dedication</h3>
              <p className="text-gray-600">
                Passionate commitment to your financial success and prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="luxury-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visionaries who guide our firm with expertise and innovation.
            </p>
          </div>

          {team.map((member) => (
            <div key={member.id} className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 relative luxury-image">
                  <div className="aspect-w-3 aspect-h-4 lg:aspect-none lg:h-full">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-gold-500 font-medium text-lg mb-4">{member.title}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full flex items-center">
                        <Award size={16} className="mr-2" /> CPA
                      </span>
                      <span className="bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
                        IRS Enrolled Agent
                      </span>
                      <span className="bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
                        U.S. Army Veteran
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-8 p-8 text-gray-300">
                  <div className="prose prose-lg prose-invert max-w-none">
                    {member.bio.map((paragraph, index) => (
                      <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="luxury-heading text-4xl md:text-5xl font-bold text-navy-900 mb-8">
              Join Our Legacy
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              We're always seeking exceptional talent to join our team of distinguished professionals. If you share our commitment to excellence and client service, we'd love to hear from you.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white rounded-full hover:bg-navy-800 transition-colors duration-300 text-lg"
            >
              Connect With Us <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;