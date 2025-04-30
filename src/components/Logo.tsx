import React from 'react';

interface LogoProps {
  variant?: 'default' | 'light';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  return (
    <a href="/" className="flex items-center">
      <img
        src="https://jaytpfztifhtzcruxguj.supabase.co/storage/v1/object/public/organization-logos/logos/MainLogo.png"
        alt="Veteran CPA Logo"
        className={`h-12 ${variant === 'light' ? 'brightness-0 invert' : ''}`}
        style={{ filter: variant === 'light' ? 'brightness(0) invert(1)' : 'none' }}
      />
    </a>
  );
};

export default Logo;