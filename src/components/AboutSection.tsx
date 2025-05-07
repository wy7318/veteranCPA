import React, { useEffect, useRef } from 'react';
import { Shield, Users, Target, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
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

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-24 md:py-32 bg-black text-white"
      id="about"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-on-scroll">
            <span className="text-white">About</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-8 animate-on-scroll"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-on-scroll">
            At VETERAN, we prioritize your <span className="text-2xl font-semibold text-white">goals</span>, your <span className="text-2xl font-semibold text-white">future</span>, and your <span className="text-2xl font-semibold text-white">peace of mind</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="animate-on-scroll bg-black/30 p-8 rounded-lg border border-gray-800 backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-6 text-white">Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200">Are</span></h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our team of <span className="text-white font-semibold">professionals</span> offers personalized financial guidance focused on <span className="text-white font-semibold">integrity</span> and <span className="text-white font-semibold">trust</span>. We simplify complex tax strategies, ensuring you can focus on what <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200">matters most</span> to you.
            </p>
          </div>

          <div className="animate-on-scroll bg-black/30 p-8 rounded-lg border border-gray-800 backdrop-blur-sm" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold mb-6 text-white">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200">Mission</span></h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To provide <span className="text-white font-semibold">expert guidance</span> with transparency and understanding of your goals. As veterans, we bring a unique <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200">commitment to service</span>, empowering you to achieve both short and long-term financial success.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Shield,
              title: "Integrity",
              description: "Highest standards of professional ethics and transparency.",
              delay: "0s"
            },
            {
              icon: Users,
              title: "Expertise",
              description: "Decades of experience across diverse financial sectors.",
              delay: "0.2s"
            },
            {
              icon: Target,
              title: "Precision",
              description: "Accuracy and detail in every aspect of our services.",
              delay: "0.4s"
            },
            {
              icon: Heart,
              title: "Commitment",
              description: "Dedicated to our clients' success and community service.",
              delay: "0.6s"
            }
          ].map((value, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-gray-800 hover:border-pink-500 text-center animate-on-scroll transition-all duration-300 hover:bg-black/40"
              style={{ transitionDelay: value.delay }}
            >
              <div className="w-16 h-16 bg-purple-400/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-pink-400/20 transition-all duration-300">
                <value.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-200 transition-all duration-300">{value.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-all duration-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;