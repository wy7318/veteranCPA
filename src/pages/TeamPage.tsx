import React, { useEffect } from 'react';
import { team } from '../data';
import { Award } from 'lucide-react';

const TeamPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Team | Veteran CPA';
  }, []);

  return (
    <div>
      <div className="bg-navy-800 pt-32 pb-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Meet our experienced professionals dedicated to your financial success.
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container-custom">
          {team.map((member) => (
            <div key={member.id} className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-lg mb-6">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-navy-800 mb-1">{member.name}</h2>
                    <p className="text-gold-600 font-medium mb-4">{member.title}</p>
                    
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                      <span className="bg-navy-50 text-navy-800 text-sm px-3 py-1 rounded-full flex items-center">
                        <Award size={16} className="mr-1" /> CPA
                      </span>
                      <span className="bg-navy-50 text-navy-800 text-sm px-3 py-1 rounded-full">IRS Enrolled Agent</span>
                      <span className="bg-navy-50 text-navy-800 text-sm px-3 py-1 rounded-full">U.S. Army Veteran</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2 space-y-4">
                  {member.bio.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-navy-800 text-center">Join Our Team</h2>
            <p className="text-gray-600 text-center mb-8">
              We're always looking for talented professionals who share our values and commitment to excellence.
            </p>
            <div className="text-center">
              <a href="/contact" className="btn-primary">Contact Us About Opportunities</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;