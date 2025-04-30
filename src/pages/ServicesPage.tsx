import React, { useEffect, useState } from 'react';
import {
  BarChart, Briefcase, PiggyBank, LineChart, ChevronRight,
  Shield, TrendingUp, Users, Layers, AlertCircle, DollarSign,
  CheckCircle, ArrowRight, Award, Star, Clock, FileText,
  Receipt, Calculator, Building, UserCheck, FileSpreadsheet
} from 'lucide-react';
import { insightTopics } from '../data';

// Fallback data in case import fails
const fallbackInsights = [
  {
    id: 1,
    title: "Tax Deduction Strategies",
    description: "Maximize your returns with our expert strategies on identifying often-overlooked deductions and credits specific to your situation."
  },
  {
    id: 2,
    title: "Retirement Account Optimization",
    description: "Learn how to structure your retirement accounts to minimize tax impact and maximize growth potential throughout your career."
  },
  {
    id: 3,
    title: "Business Entity Selection",
    description: "Different business structures have significant tax implications. We'll help you understand which entity type is most advantageous for your situation."
  },
  {
    id: 4,
    title: "Tax Law Changes",
    description: "Stay informed about recent and upcoming tax law changes that may impact your financial planning and tax strategies."
  }
];

const ServicesPage: React.FC = () => {
  // State for animations and interactions
  const [activeTab, setActiveTab] = useState<string>('individuals');
  const [visibleSection, setVisibleSection] = useState<string>('');
  const [highlightedService, setHighlightedService] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState<number>(0);

  // Get insights data from props or use fallback
  const insights = Array.isArray(insightTopics) && insightTopics.length > 0
    ? insightTopics
    : fallbackInsights;

  useEffect(() => {
    document.title = 'Professional Services | Veteran CPA';

    // Scroll position effect for parallax and animations
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for section animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Log when tab changes for analytics or other purposes
  useEffect(() => {
    console.log(`Tab changed to: ${activeTab}`);
    // You could add analytics tracking here
  }, [activeTab]);

  // Dynamic background style with parallax effect
  const heroBackgroundStyle = {
    transform: `translateY(${scrollY * 0.2}px)`,
    opacity: 1 - (scrollY * 0.001)
  };

  return (
    <div className="bg-gray-50 overflow-hidden">
      {/* Hero Section with Dynamic Background */}
      <div className="relative bg-gradient-to-r from-navy-900 to-navy-800 pt-32 pb-24 lg:pb-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-full h-full"
            style={{
              backgroundImage: 'linear-gradient(60deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%, transparent 75%, rgba(59, 130, 246, 0.1) 75%, rgba(59, 130, 246, 0.1)), linear-gradient(120deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%, transparent 75%, rgba(59, 130, 246, 0.1) 75%, rgba(59, 130, 246, 0.1))',
              backgroundSize: '60px 60px',
              opacity: 0.4,
              ...heroBackgroundStyle
            }}
          />
          <div className="absolute -bottom-48 right-0 w-96 h-96 rounded-full bg-blue-500 filter blur-3xl opacity-10 transform rotate-45" />
          <div className="absolute top-24 -left-24 w-64 h-64 rounded-full bg-gold-500 filter blur-3xl opacity-10" />
        </div>

        <div className="container-custom relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-blue-900/30 rounded-full text-blue-200 text-sm font-medium backdrop-blur-sm mb-6">
            <Shield size={14} className="mr-2" />
            <span>Professional Financial Expertise</span>
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Strategic Financial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-300">Solutions & Services</span>
          </h1>

          <p className="text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed">
            Our comprehensive approach combines tax expertise, retirement planning, and business advisory services to optimize your financial future.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="btn-primary bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-navy-900 font-semibold shadow-lg shadow-gold-500/20 border-0">
              Explore Services
            </a>
            <a href="/contact" className="btn-outline text-white border-white/30 hover:bg-white/10">
              Schedule Consultation
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-12 text-sm text-blue-200">
            <div className="flex items-center">
              <CheckCircle size={18} className="mr-2 text-gold-400" />
              <span>Certified Professionals</span>
            </div>
            <div className="flex items-center">
              <CheckCircle size={18} className="mr-2 text-gold-400" />
              <span>Veteran Owned</span>
            </div>
            <div className="flex items-center">
              <CheckCircle size={18} className="mr-2 text-gold-400" />
              <span>Personalized Strategies</span>
            </div>
            <div className="flex items-center">
              <CheckCircle size={18} className="mr-2 text-gold-400" />
              <span>Comprehensive Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Client Type Selection Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex overflow-x-auto scrollbar-hide">
            <button
              className={`px-6 py-4 font-medium text-lg border-b-2 transition-colors ${activeTab === 'individuals'
                  ? 'border-gold-500 text-navy-800'
                  : 'border-transparent text-gray-500 hover:text-navy-800'
                }`}
              onClick={() => setActiveTab('individuals')}
              aria-label="Show services for individuals"
            >
              For Individuals
            </button>
            <button
              className={`px-6 py-4 font-medium text-lg border-b-2 transition-colors ${activeTab === 'businesses'
                ? 'border-gold-500 text-navy-800'
                : 'border-transparent text-gray-500 hover:text-navy-800'
                }`}
              onClick={() => setActiveTab('businesses')}
              aria-label="Show services for businesses"
            >
              For Businesses
            </button>
            <button
              className={`px-6 py-4 font-medium text-lg border-b-2 transition-colors ${activeTab === 'specialized'
                ? 'border-gold-500 text-navy-800'
                : 'border-transparent text-gray-500 hover:text-navy-800'
                }`}
              onClick={() => setActiveTab('specialized')}
              aria-label="Show specialized services"
            >
              Specialized Services
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="py-16 lg:py-24">
        <div className="container-custom">
          {/* Tab-specific content containers */}

          {/* === TAB INDICATOR SECTION === */}
          {activeTab === 'individuals' && (
            <div className="bg-blue-50 rounded-lg p-4 mb-12 border border-blue-100 flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Users size={20} className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-blue-800">Individual Services</h2>
                <p className="text-blue-700">Personalized financial solutions for your unique needs</p>
              </div>
            </div>
          )}

          {activeTab === 'businesses' && (
            <div className="bg-emerald-50 rounded-lg p-4 mb-12 border border-emerald-100 flex items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                <Building size={20} className="text-emerald-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-emerald-800">Business Services</h2>
                <p className="text-emerald-700">Strategic solutions to help your business thrive and grow</p>
              </div>
            </div>
          )}

          {activeTab === 'specialized' && (
            <div className="bg-purple-50 rounded-lg p-4 mb-12 border border-purple-100 flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                <Star size={20} className="text-purple-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-purple-800">Specialized Services</h2>
                <p className="text-purple-700">Advanced solutions for complex financial situations</p>
              </div>
            </div>
          )}

          {/* Philosophy & Approach Section - Shown on all tabs */}
          <section id="approach" className={`transition-all duration-500 ${visibleSection === 'approach' ? 'opacity-100' : 'opacity-80'}`}>
            <div className="max-w-3xl mx-auto mb-16">
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-gold-500 rounded-full mr-4"></div>
                <h2 className="text-lg font-semibold text-blue-600">Our Approach</h2>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-navy-800">
                Tax Planning and Strategy <span className="text-gold-500">You Can Rely On</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Our firm specializes in retirement and tax strategy and planning services for individuals and small businesses, with a particular focus on helping small businesses grow and succeed. We provide comprehensive tax planning, offering detailed comparisons and analysis to optimize tax efficiency and ensure long-term financial success.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col items-center text-center transform transition-transform hover:scale-105 hover:shadow-md">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <TrendingUp size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Strategic Planning</h3>
                  <p className="text-gray-600">Proactive approach to minimize tax liabilities and maximize financial growth</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col items-center text-center transform transition-transform hover:scale-105 hover:shadow-md">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <Users size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Personalized Service</h3>
                  <p className="text-gray-600">Tailored financial solutions based on your unique situation and goals</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col items-center text-center transform transition-transform hover:scale-105 hover:shadow-md">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <Layers size={24} className="text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Comprehensive Support</h3>
                  <p className="text-gray-600">Year-round guidance and expertise beyond tax season</p>
                </div>
              </div>
            </div>
          </section>

          {/* === TAB-SPECIFIC PRIMARY CONTENT SECTIONS === */}

          {/* === INDIVIDUALS TAB CONTENT === */}
          {activeTab === 'individuals' && (
            <div style={{ position: 'relative', zIndex: 10 }}>
              {/* Tab indicator */}
              {/* <div style={{
                background: '#EFF6FF',
                padding: '16px',
                marginBottom: '48px',
                borderRadius: '8px',
                border: '1px solid #DBEAFE',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                zIndex: 10
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#DBEAFE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '16px'
                }}>
                  <Users size={20} color="#2563EB" />
                </div>
                <div>
                  <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#1E40AF', margin: 0 }}>Individual Services</h2>
                  <p style={{ color: '#3B82F6', margin: '4px 0 0 0' }}>Personalized financial solutions for your unique needs</p>
                </div>
              </div> */}

              {/* Content grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
                marginBottom: '48px'
              }}>
                {/* Tax Planning Card */}
                <div style={{
                  background: 'white',
                  padding: '32px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  border: '1px solid #E5E7EB'
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'linear-gradient(to right, #3B82F6, #2563EB)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    boxShadow: '0 4px 6px rgba(37, 99, 235, 0.2)'
                  }}>
                    <BarChart size={32} color="white" />
                  </div>

                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#0F172A', marginBottom: '16px' }}>
                    Tax Planning & Strategy
                  </h3>

                  <p style={{ color: '#4B5563', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
                    We provide comprehensive tax planning services tailored to your unique situation,
                    focusing on long-term strategies that align with your financial goals.
                  </p>

                  <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      padding: '12px',
                      background: '#EFF6FF',
                      borderRadius: '8px',
                      border: '1px solid #DBEAFE'
                    }}>
                      <div style={{
                        padding: '4px',
                        background: '#DBEAFE',
                        borderRadius: '50%',
                        marginRight: '12px',
                        marginTop: '2px'
                      }}>
                        <ChevronRight size={16} color="#2563EB" />
                      </div>
                      <p style={{ color: '#4B5563', margin: 0 }}>
                        Strategic tax planning to minimize current and future liabilities
                      </p>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      padding: '12px',
                      background: '#EFF6FF',
                      borderRadius: '8px',
                      border: '1px solid #DBEAFE'
                    }}>
                      <div style={{
                        padding: '4px',
                        background: '#DBEAFE',
                        borderRadius: '50%',
                        marginRight: '12px',
                        marginTop: '2px'
                      }}>
                        <ChevronRight size={16} color="#2563EB" />
                      </div>
                      <p style={{ color: '#4B5563', margin: 0 }}>
                        Year-round tax guidance and support beyond tax season
                      </p>
                    </div>
                  </div>

                  <a
                    href="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: '#2563EB',
                      fontWeight: 500,
                      textDecoration: 'none'
                    }}
                  >
                    Learn more about our tax services
                    <ArrowRight size={16} style={{ marginLeft: '4px' }} />
                  </a>
                </div>

                {/* Retirement Planning Card */}
                <div style={{
                  background: 'white',
                  padding: '32px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  border: '1px solid #E5E7EB'
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'linear-gradient(to right, #10B981, #059669)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    boxShadow: '0 4px 6px rgba(5, 150, 105, 0.2)'
                  }}>
                    <PiggyBank size={32} color="white" />
                  </div>

                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#0F172A', marginBottom: '16px' }}>
                    Retirement Planning
                  </h3>

                  <p style={{ color: '#4B5563', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
                    We help you prepare for a secure financial future with comprehensive retirement
                    planning services that maximize tax efficiency and growth potential.
                  </p>

                  <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      padding: '12px',
                      background: '#ECFDF5',
                      borderRadius: '8px',
                      border: '1px solid #D1FAE5'
                    }}>
                      <div style={{
                        padding: '4px',
                        background: '#D1FAE5',
                        borderRadius: '50%',
                        marginRight: '12px',
                        marginTop: '2px'
                      }}>
                        <ChevronRight size={16} color="#059669" />
                      </div>
                      <p style={{ color: '#4B5563', margin: 0 }}>
                        Customized retirement strategies aligned with your lifestyle goals
                      </p>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      padding: '12px',
                      background: '#ECFDF5',
                      borderRadius: '8px',
                      border: '1px solid #D1FAE5'
                    }}>
                      <div style={{
                        padding: '4px',
                        background: '#D1FAE5',
                        borderRadius: '50%',
                        marginRight: '12px',
                        marginTop: '2px'
                      }}>
                        <ChevronRight size={16} color="#059669" />
                      </div>
                      <p style={{ color: '#4B5563', margin: 0 }}>
                        Tax-advantaged retirement account optimization and management
                      </p>
                    </div>
                  </div>

                  <a
                    href="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: '#059669',
                      fontWeight: 500,
                      textDecoration: 'none'
                    }}
                  >
                    Learn more about retirement planning
                    <ArrowRight size={16} style={{ marginLeft: '4px' }} />
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <div style={{ textAlign: 'center', marginTop: '32px' }}>
                <a
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '12px 24px',
                    background: '#2563EB',
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight: 500,
                    textDecoration: 'none'
                  }}
                >
                  Schedule a Personal Consultation
                  <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                </a>
              </div>
            </div>
          )}

          {/* BUSINESSES TAB CONTENT */}
          {activeTab === 'businesses' && (
            <section id="business-services" className={`mb-24 transition-all duration-500 ${visibleSection === 'business-services' ? 'opacity-100' : 'opacity-80'}`}>
              {/* Business Consulting Services */}
              <div className="mb-12 text-center">
                <div className="inline-flex items-center px-4 py-1.5 bg-gold-100 rounded-full text-gold-800 text-sm font-medium mb-4">
                  <Briefcase size={14} className="mr-2" />
                  <span>Comprehensive Business Solutions</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-navy-800">Professional Consulting Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Strategic guidance to help your business navigate financial challenges and capitalize on opportunities at every stage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow group">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                    <TrendingUp size={28} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-navy-800 group-hover:text-blue-600 transition-colors">Business Start-up</h3>
                  <p className="text-gray-600 mb-6">
                    Starting a new business can be a confusing process. We'll help you navigate entity selection, licenses, and tax requirements to get your business operational while avoiding potential tax traps.
                  </p>

                  <div className="mt-auto">
                    <a href="/contact" className="text-blue-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                      Learn more
                      <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow group">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center mb-6 shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
                    <Layers size={28} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-navy-800 group-hover:text-emerald-600 transition-colors">Business Planning</h3>
                  <p className="text-gray-600 mb-6">
                    We provide guidance on critical business decisions like vehicle purchases, employee classification, and financing options to help your business thrive and overcome challenges.
                  </p>

                  <div className="mt-auto">
                    <a href="/contact" className="text-emerald-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                      Learn more
                      <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow group">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center mb-6 shadow-lg shadow-amber-200 group-hover:scale-110 transition-transform">
                    <Briefcase size={28} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-navy-800 group-hover:text-amber-600 transition-colors">Disposition of Business</h3>
                  <p className="text-gray-600 mb-6">
                    When it's time to sell your business or pass it to your children, we'll ensure the process is structured to minimize your tax burden and protect your hard-earned assets.
                  </p>

                  <div className="mt-auto">
                    <a href="/contact" className="text-amber-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                      Learn more
                      <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional business services */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex">
                  <div className="w-16 h-16 rounded-lg bg-blue-100 flex-shrink-0 flex items-center justify-center mr-5">
                    <FileSpreadsheet size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-navy-800">Business Tax Strategy</h3>
                    <p className="text-gray-600 mb-3">
                      Comprehensive tax planning tailored to your business structure and goals to minimize tax burden and improve profitability.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight size={18} className="text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">Strategic tax planning</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight size={18} className="text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">Tax credit identification</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex">
                  <div className="w-16 h-16 rounded-lg bg-emerald-100 flex-shrink-0 flex items-center justify-center mr-5">
                    <Calculator size={24} className="text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-navy-800">Financial Reporting</h3>
                    <p className="text-gray-600 mb-3">
                      Clear, accurate financial statements and reports to help you make informed business decisions with confidence.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight size={18} className="text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">Monthly financial statements</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight size={18} className="text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">Cash flow projections</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Business-specific CTA */}
              <div className="text-center mt-12">
                <a href="/contact" className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                  Schedule a Business Consultation
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </section>
          )}

          {/* SPECIALIZED SERVICES TAB CONTENT */}
          {activeTab === 'specialized' && (
            <section id="specialized-services" className={`mb-24 transition-all duration-500 ${visibleSection === 'specialized-services' ? 'opacity-100' : 'opacity-80'}`}>
              <div className="max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-6 text-navy-800">Advanced Financial Solutions</h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  Our specialized services address complex financial situations that require expertise beyond
                  standard tax and financial planning. These solutions are designed for clients with specific
                  needs or circumstances that require advanced strategies.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center mr-4">
                      <Receipt size={28} className="text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-800">Estate Planning</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Comprehensive estate planning services to protect and transfer your wealth efficiently.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <ChevronRight size={20} className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Strategic estate tax minimization</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight size={20} className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Trust design and implementation</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight size={20} className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Business succession planning</span>
                    </li>
                  </ul>
                  <a href="/contact" className="inline-flex items-center font-medium text-purple-600 hover:text-purple-800 transition-colors">
                    Learn more about estate planning
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center mr-4">
                      <UserCheck size={28} className="text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-800">IRS Resolution Services</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Expert assistance in resolving tax issues and disputes with tax authorities.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <ChevronRight size={20} className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">IRS audit representation</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight size={20} className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Tax lien and levy assistance</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight size={20} className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Offer in compromise and payment plans</span>
                    </li>
                  </ul>
                  <a href="/contact" className="inline-flex items-center font-medium text-purple-600 hover:text-purple-800 transition-colors">
                    Learn more about IRS resolution
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>

              {/* Specialized-specific CTA */}
              <div className="text-center">
                <a href="/contact" className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  Schedule a Specialized Consultation
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </section>
          )}
         

          {/* Testimonial Section - Shown on all tabs */}
          <section id="testimonials" className="mt-16 mb-24 bg-gradient-to-br from-navy-50 to-blue-50 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gold-100/50 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <div className="text-center mb-12">
                <div className="inline-flex mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} size={24} fill="#F59E0B" className="text-amber-500" />
                  ))}
                </div>
                <h2 className="text-3xl font-bold text-navy-800 mb-2">What Our Clients Say</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Trusted by businesses and individuals for over 20 years.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 max-w-3xl mx-auto relative">
                <div className="absolute -top-5 left-10 text-gold-500 text-7xl">"</div>
                <p className="text-gray-600 text-lg mb-6 relative z-10">
                  Our CPA has been an essential partner in our business growth. Their strategic tax planning saved us over $50,000 last year, and their proactive advice has helped us make informed decisions that positioned our company for long-term success.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center text-navy-600 font-bold text-xl mr-4">JD</div>
                  <div>
                    <h4 className="text-navy-800 font-semibold">James Donovan</h4>
                    <p className="text-gray-500">Small Business Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section - Shown on all tabs */}
          <section id="cta" className="text-center rounded-2xl bg-gradient-to-r from-navy-800 to-navy-900 p-12 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full" />
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-gold-500/10 rounded-full" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Optimize Your Financial Future?</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our services can help you achieve your financial goals with confidence and clarity.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="btn-primary bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-navy-900 font-semibold shadow-lg shadow-gold-500/20 border-0 px-8 py-3"
                >
                  Schedule a Consultation
                </a>
                <a
                  href="tel:+14808315260"
                  className="btn-outline text-white border-white/30 hover:bg-white/10 px-8 py-3"
                >
                  Call (480) 831-5260
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;