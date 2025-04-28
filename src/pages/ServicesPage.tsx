import React, { useEffect } from 'react';
import { BarChart, Briefcase, PiggyBank, LineChart, ChevronRight } from 'lucide-react';
import { insightTopics } from '../data';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Services | Veteran CPA';
  }, []);

  return (
    <div>
      <div className="bg-navy-800 pt-32 pb-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive tax and financial solutions tailored to your unique needs.
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-navy-800">Tax Planning and Strategy You Can Rely On</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our firm specializes in retirement and tax strategy and planning services for individuals and small businesses, with a particular focus on helping small businesses grow and succeed. We provide comprehensive tax planning, offering detailed comparisons and analysis to optimize tax efficiency and ensure long-term financial success for both individuals and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="service-card">
              <div className="mb-4">
                <BarChart size={40} className="text-gold-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy-800">Tax Planning & Strategy</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We provide comprehensive tax planning services tailored to your unique situation. Our approach includes:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-gold-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Strategic tax planning to minimize liabilities</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-gold-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Detailed analysis of tax implications for major decisions</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-gold-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Year-round tax guidance and support</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-gold-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Tax-efficient investment strategies</span>
                </li>
              </ul>
            </div>

            <div className="service-card">
              <div className="mb-4">
                <PiggyBank size={40} className="text-gold-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy-800">Retirement Planning</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We help you prepare for a secure financial future with retirement planning services that include:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-gold-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Customized retirement strategies</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-gold-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Tax-advantaged retirement account management</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-gold-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Social Security optimization</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-gold-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Pension and 401(k) planning</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-navy-800">Consulting Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">Business Start-up</h3>
                <p className="text-gray-600 mb-4">
                  Starting a new business can be a confusing process. We'll help you navigate entity selection, licenses, and tax requirements to get your business operational while avoiding potential tax traps.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">Business Planning</h3>
                <p className="text-gray-600 mb-4">
                  We provide guidance on critical business decisions like vehicle purchases, employee classification, and financing options to help your business thrive and overcome challenges.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">Disposition of Business</h3>
                <p className="text-gray-600 mb-4">
                  When it's time to sell your business or pass it to your children, we'll ensure the process is structured to minimize your tax burden and protect your hard-earned assets.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-navy-800">Expert Tax Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {insightTopics.map((topic) => (
                <div key={topic.id} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3 text-navy-800">{topic.title}</h3>
                  <p className="text-gray-600">{topic.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-8 text-navy-800">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Contact us today to discuss how our services can help you achieve your financial goals.
            </p>
            <a href="/contact" className="btn-primary">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;