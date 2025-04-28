import React, { useEffect, useRef, useState } from 'react';
import { testimonials } from '../data';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">Client Testimonials</h2>
          <p className="section-subtitle animate-on-scroll">
            Hear from our valued clients about their experience working with us.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="animate-on-scroll">
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-sm relative">
              <Quote className="text-gold-500 absolute top-6 left-6 opacity-20" size={48} />
              
              <div className="relative z-10">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {testimonials[currentIndex].content}
                </p>
                
                <div>
                  <p className="font-semibold text-navy-800">{testimonials[currentIndex].name}</p>
                  <p className="text-gold-600">{testimonials[currentIndex].title}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-gold-500 scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex justify-center mt-6 gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;