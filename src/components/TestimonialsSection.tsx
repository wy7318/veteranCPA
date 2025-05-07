import React, { useEffect, useRef, useState } from 'react';
import { testimonials } from '../data';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

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

  useEffect(() => {
    if (!scrollContainerRef.current || isPaused || testimonials.length < 2) return;

    const container = scrollContainerRef.current;

    if (!container.hasChildNodes()) {
      const initialTestimonials = [...testimonials];
      initialTestimonials.forEach((testimonial) => {
        const testimonialElement = createTestimonialElement(testimonial);
        container.appendChild(testimonialElement);
      });
    }

    const cardWidth = container.firstChild ? (container.firstChild as HTMLElement).offsetWidth + 24 : 0;
    if (cardWidth === 0) return;

    let scrollPosition = 0;
    let lastAddedId = -1;

    const scroll = () => {
      if (!scrollContainerRef.current || isPaused) return;

      scrollPosition += 0.5;
      container.style.transform = `translateX(-${scrollPosition}px)`;

      if (scrollPosition >= cardWidth) {
        const firstCard = container.firstChild as HTMLElement;
        const firstCardId = parseInt(firstCard.dataset.id || "-1");
        container.removeChild(firstCard);

        scrollPosition = scrollPosition - cardWidth;
        container.style.transform = `translateX(-${scrollPosition}px)`;

        const lastCard = container.lastChild as HTMLElement;
        const lastCardId = parseInt(lastCard.dataset.id || "-1");

        const availableTestimonials = testimonials.filter(t => t.id !== lastCardId);

        const nextTestimonial = availableTestimonials.length > 0
          ? availableTestimonials[Math.floor(Math.random() * availableTestimonials.length)]
          : testimonials[0];

        const newCard = createTestimonialElement(nextTestimonial);
        container.appendChild(newCard);

        lastAddedId = nextTestimonial.id;
      }

      requestAnimationFrame(scroll);
    };

    function createTestimonialElement(testimonial: any) {
      const div = document.createElement('div');
      div.className = 'testimonial-card flex-shrink-0 w-80 md:w-96';
      div.dataset.id = testimonial.id.toString();

      div.innerHTML = `
        <div class="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 h-full flex flex-col hover:border-pink-500 transition-all duration-300">
          <div class="flex items-start mb-4">
            <div class="text-gray-900 flex-shrink-0 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
              </svg>
            </div>
            <p class="text-gray-600 italic text-base leading-relaxed">
              "${testimonial.content}"
            </p>
          </div>
          
          <div class="mt-auto pt-4 border-t border-gray-100">
            <p class="font-semibold text-gray-900">${testimonial.name}</p>
            <p class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 text-sm">${testimonial.title}</p>
          </div>
        </div>
      `;

      return div;
    }

    const animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 bg-white overflow-hidden"
      id="testimonials"
    >
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 animate-on-scroll">What Our Clients Say</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-2"></div>
        </div>

        <div className="relative max-w-full animate-on-scroll">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div
            className="overflow-hidden py-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              ref={scrollContainerRef}
              className="flex space-x-6"
              style={{
                willChange: 'transform',
                width: 'fit-content'
              }}
            >
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-gray-500 animate-on-scroll">
          <p>Hover over testimonials to pause scrolling</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;