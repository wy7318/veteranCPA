import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-black overflow-hidden min-h-screen">
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          src="https://jaytpfztifhtzcruxguj.supabase.co/storage/v1/object/public/Sumiland%20Design/videos/clarity-stream%20(3).mp4"
          autoPlay
          loop
          muted
          playsInline
          className="min-w-full min-h-full w-auto h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
          style={{ minWidth: '100%', minHeight: '100%' }}
        ></video>
      </div>

      <div className="absolute inset-0 flex items-start justify-center z-10 pt-24 md:pt-32 lg:pt-40">
        <div className="text-center px-4 max-w-7xl">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200 leading-tight mb-4 md:mb-6 opacity-0 animate-slideDown" style={{ animationDelay: '0.3s' }}>
              Strategic Tax.
            </div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200 leading-tight opacity-0 animate-slideDown" style={{ animationDelay: '0.6s' }}>
              Planning & Advisory
            </div>
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-400 font-light mt-8 md:mt-12 opacity-0 animate-slideUp" style={{ animationDelay: '0.9s' }}>
            Optimize Your Financial Future
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-12 px-4 sm:px-0">
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-base sm:text-lg font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto opacity-0 animate-slideUp"
              style={{ animationDelay: '1.2s' }}
            >
              Schedule Consultation
            </a>
            <a
              href="#services"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-300 hover:border-pink-200 text-purple-300 hover:text-pink-200 text-base sm:text-lg font-medium rounded-lg transition-all duration-300 w-full sm:w-auto opacity-0 animate-slideUp"
              style={{ animationDelay: '1.4s' }}
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;