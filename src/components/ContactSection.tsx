import React, { useRef, useState, useEffect } from 'react';
import { Clock, Loader2, CheckCircle, AlertCircle, Send } from 'lucide-react';
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

  useEffect(() => {
    const filledFields = Object.values(formState).filter(val => val.trim() !== '').length;
    const requiredFields = 4;
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
          created_by: '9754b84d-c65c-45b8-8f51-a59a9a25edcd',
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
    <section ref={sectionRef} className="py-20 bg-white relative" id="contact">
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-purple-300 opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-pink-300 opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 animate-on-scroll">Contact Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-on-scroll">
            Ready to optimize your financial future? Reach out to us below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-on-scroll">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 border-b border-gray-100 flex items-center justify-center">
              <Clock className="text-gray-900 mr-3" size={20} />
              <p className="text-gray-700">
                <span className="font-medium">Business Hours:</span> Monday - Friday: 9:00 AM - 5:00 PM
                <span className="mx-2">|</span>
                Weekends: Closed
              </p>
            </div>

            <div className="p-8 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>

                {formProgress > 0 && (
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden mr-2">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full transition-all duration-500"
                        style={{ width: `${formProgress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{formProgress}%</span>
                  </div>
                )}
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg flex items-center text-red-600">
                  <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {success ? (
                <div className="py-12 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h4>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium rounded-lg transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-transparent group-focus-within:bg-clip-text group-focus-within:bg-gradient-to-r group-focus-within:from-purple-600 group-focus-within:to-pink-500 transition-colors">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:bg-white transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-transparent group-focus-within:bg-clip-text group-focus-within:bg-gradient-to-r group-focus-within:from-purple-600 group-focus-within:to-pink-500 transition-colors">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:bg-white transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-transparent group-focus-within:bg-clip-text group-focus-within:bg-gradient-to-r group-focus-within:from-purple-600 group-focus-within:to-pink-500 transition-colors">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:bg-white transition-all"
                        placeholder="Company Name"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-transparent group-focus-within:bg-clip-text group-focus-within:bg-gradient-to-r group-focus-within:from-purple-600 group-focus-within:to-pink-500 transition-colors">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:bg-white transition-all"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-transparent group-focus-within:bg-clip-text group-focus-within:bg-gradient-to-r group-focus-within:from-purple-600 group-focus-within:to-pink-500 transition-colors">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:bg-white transition-all"
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

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center shadow-md hover:shadow-lg"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin h-5 w-5 mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
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