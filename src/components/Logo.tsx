import React from 'react';
import { Award } from 'lucide-react';

interface LogoProps {
  color?: 'navy' | 'white';
}

const Logo: React.FC<LogoProps> = ({ color = 'navy' }) => {
  const textColor = color === 'white' ? 'text-white' : 'text-navy-800';
  
  return (
    <a href="/" className="flex items-center">
      <Award className="text-gold-500 mr-2" size={28} />
      <span className={`text-xl font-bold ${textColor}`}>VETERAN <span className="text-gold-500">CPA</span></span>
    </a>
  );
};

export default Logo;