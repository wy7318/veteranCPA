import React, { useRef, useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';
import ReCAPTCHA from 'react-google-recaptcha';

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [formProgress, setFormProgress] = useState(0);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const captcha_key = import.meta.env.VITE_YOUR_RECAPTCHA_SITE_KEY;

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

  // Calculate form progress
  useEffect(() => {
    const filledFields = Object.values(formState).filter(val => val.trim() !== '').length;
    const requiredFields = 4; // name, email, company, message
    const progress = Math.min(100, Math.round((filledFields / requiredFields) * 100));
    setFormProgress(progress);
  }, [formState]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (!captchaToken) {
        setError('Please verify you are human.');
        setLoading(false);
        return;
      }

      const nameParts = formState.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const { data: orgData, error: orgError } = await supabase
        .from('organizations')
        .select('id')
        .eq('name', 'Veteran CPA')
        .single();

      if (orgError) throw orgError;
      if (!orgData?.id) throw new Error('Organization not found');

      const { error: leadError } = await supabase
        .from('leads')
        .insert([{
          organization_id: orgData.id,
          first_name: firstName,
          last_name: lastName,
          email: formState.email,
          company: formState.company,
          phone: formState.phone || null,
          description: formState.message,
          status: 'New',
          lead_source: 'web',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }]);

      if (leadError) throw leadError;

      setSuccess(true);
      setFormState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while submitting the form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50" id="contact">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">Contact Us</h2>
          <p className="section-subtitle animate-on-scroll">
            Reach out to us for personalized financial guidance and support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-navy-800">Get in Touch</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="text-gold-500 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-navy-800">Address</h4>
                    <p className="text-gray-600">3030 N Central Ave STE 700, Phoenix, AZ 85012</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-gold-500 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-navy-800">Phone</h4>
                    <a href="tel:4808315260" className="text-gray-600 hover:text-navy-800 transition-colors duration-300">
                      480-831-5260
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-gold-500 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-navy-800">Email</h4>
                    <a href="mailto:info@veterancpa.com" className="text-gray-600 hover:text-navy-800 transition-colors duration-300">
                      info@veterancpa.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-gold-500 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-navy-800">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-navy-800">Send Us a Message</h3>
                {formProgress > 0 && (
                  <span className="text-sm bg-navy-50 text-navy-800 px-3 py-1 rounded-full">
                    {formProgress}% Complete
                  </span>
                )}
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-600">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  {error}
                </div>
              )}

              {success ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-500 mb-6">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-navy-800 mb-3">Thank You!</h4>
                  <p className="text-gray-600 mb-8">
                    Your message has been sent successfully. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                        placeholder="Company Name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>

                  <div className="my-4">
                    <ReCAPTCHA
                      sitekey={captcha_key}
                      onChange={(token) => setCaptchaToken(token)}
                      onExpired={() => setCaptchaToken(null)}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin h-5 w-5" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;