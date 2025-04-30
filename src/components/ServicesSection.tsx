import React, { useEffect, useState } from 'react';
import { BarChart, Briefcase, PiggyBank, LineChart, ChevronRight } from 'lucide-react';


// Simple, hardcoded services data to eliminate any data loading issues
const SERVICES_DATA = [
  {
    id: 1,
    title: "Tax Planning & Preparation",
    description: "Strategic tax planning and accurate preparation to minimize liabilities and ensure compliance with current regulations.",
    icon: "BarChart",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Business Accounting",
    description: "Comprehensive accounting services to help your business maintain accurate financial records and make informed decisions.",
    icon: "Briefcase",
    color: "bg-emerald-500"
  },
  {
    id: 3,
    title: "Financial Planning",
    description: "Holistic financial planning to help you achieve your short and long-term goals with confidence and clarity.",
    icon: "PiggyBank",
    color: "bg-amber-500"
  },
  {
    id: 4,
    title: "Audit & Assurance",
    description: "Independent audit and assurance services to enhance the reliability and credibility of your financial information.",
    icon: "LineChart",
    color: "bg-rose-500"
  }
];

// Simple icon mapping
const getIcon = (iconName) => {
  switch (iconName) {
    case 'BarChart': return <BarChart size={24} />;
    case 'Briefcase': return <Briefcase size={24} />;
    case 'PiggyBank': return <PiggyBank size={24} />;
    case 'LineChart': return <LineChart size={24} />;
    default: return <Briefcase size={24} />;
  }
};

// Simple debug panel to show component state
const DebugPanel = ({ isVisible, services }) => {
  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: 'rgba(255, 0, 0, 0.1)',
      border: '2px solid red',
      padding: '10px',
      zIndex: 9999,
      maxHeight: '300px',
      overflow: 'auto'
    }}>
      <h3>Debug Info:</h3>
      <div>Services count: {services.length}</div>
      <div>First service: {services[0]?.title || 'None'}</div>
      <button onClick={() => console.log('Debug services:', services)}>
        Log Services to Console
      </button>
    </div>
  );
};

// Simplified service card with inline styles for debugging
const SimpleServiceCard = ({ service }) => {
  // Using inline styles for maximum compatibility
  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px 0',
      background: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: service.color === 'bg-blue-500' ? '#3b82f6' :
            service.color === 'bg-emerald-500' ? '#10b981' :
              service.color === 'bg-amber-500' ? '#f59e0b' :
                service.color === 'bg-rose-500' ? '#f43f5e' : '#3b82f6',
          color: 'white',
          marginRight: '16px'
        }}>
          {getIcon(service.icon)}
        </div>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>{service.title}</h3>
      </div>

      <p style={{ color: '#4b5563', lineHeight: '1.5' }}>{service.description}</p>

      <div style={{ marginTop: '16px' }}>
        <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>Key Features:</div>
        <ul style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '4px' }}>Strategic planning and analysis</li>
          <li style={{ marginBottom: '4px' }}>Expert guidance and support</li>
          <li style={{ marginBottom: '4px' }}>Regular reviews and updates</li>
        </ul>
      </div>

      <div style={{
        marginTop: '16px',
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <a href="/services" className="text-amber-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
          <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '8px 16px',
            background: service.color === 'bg-blue-500' ? '#3b82f6' :
              service.color === 'bg-emerald-500' ? '#10b981' :
                service.color === 'bg-amber-500' ? '#f59e0b' :
                  service.color === 'bg-rose-500' ? '#f43f5e' : '#3b82f6',
            color: 'white',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer'
          }}>
            Learn More
            <ChevronRight size={16} style={{ marginLeft: '4px' }} />
          </button>
          </a>
      </div>
    </div>
  );
};

// Super simplified services section focusing on guaranteed rendering
const ServicesSection = () => {
  // Force component to update
  const [, forceUpdate] = useState({});
  const [isDebugVisible, setIsDebugVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Log on mount and force update after a delay
  useEffect(() => {
    console.log("ServicesSection mounted");

    // Force update after a short delay
    const timer = setTimeout(() => {
      setMounted(true);
      forceUpdate({});
      console.log("ServicesSection forced update");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Add keyboard shortcut to toggle debug mode - press 'd'
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'd') {
        setIsDebugVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  console.log("Rendering ServicesSection", { mounted, serviceCount: SERVICES_DATA.length });

  return (
    <section
      id="services-section"
      style={{
        padding: '40px 0',
        background: '#f9fafb',
        minHeight: '300px'
      }}
    >
      {/* Header section */}
      <div style={{ textAlign: 'center', marginBottom: '40px', padding: '0 20px' }}>
        <div style={{
          display: 'inline-block',
          padding: '6px 12px',
          background: '#eff6ff',
          color: '#3b82f6',
          borderRadius: '999px',
          fontSize: '14px',
          fontWeight: '500',
          marginBottom: '16px'
        }}>
          Professional Financial Services
        </div>

        <h2 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#111827',
          marginBottom: '16px'
        }}>
          Comprehensive Solutions for Your
          <div style={{
            background: 'linear-gradient(to right, #3b82f6, #4f46e5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            marginLeft: '8px'
          }}>
            Financial Success
          </div>
        </h2>

        <p style={{
          fontSize: '16px',
          color: '#4b5563',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Our expert team delivers tailored financial strategies to help you navigate
          complex challenges and achieve your long-term goals.
        </p>
      </div>

      {/* Container for service cards */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* Service cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {SERVICES_DATA.map(service => (
            <SimpleServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA button */}
        <div style={{
          marginTop: '40px',
          textAlign: 'center'
        }}>
          <a
            href="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 24px',
              background: 'linear-gradient(to right, #3b82f6, #4f46e5)',
              color: 'white',
              borderRadius: '999px',
              textDecoration: 'none',
              fontWeight: '500',
              boxShadow: '0 4px 6px rgba(59, 130, 246, 0.25)',
              transition: 'all 0.3s ease'
            }}
          >
            Explore All Services
            <ChevronRight size={18} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </div>


    </section>
  );
};

export default ServicesSection;

// export default ServicesSection;