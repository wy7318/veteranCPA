// import React from 'react';
// import { ChevronRight, CheckCircle, Award, Shield } from 'lucide-react';

// const Hero = () => {
//   return (
//     <div className="relative bg-white text-black overflow-hidden min-h-screen flex items-center">
//       {/* Full background video with light overlay */}
//       <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
//         <video
//           src="https://jaytpfztifhtzcruxguj.supabase.co/storage/v1/object/public/Sumiland%20Design/videos/cno-1-bottom-cta%20(1).mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="min-w-full min-h-full w-auto h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover opacity-40"
//           style={{ minWidth: '100%', minHeight: '100%' }}
//         ></video>
//         {/* Light overlay */}
//         <div className="absolute inset-0 bg-white/90"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10 w-full">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="max-w-2xl">
//             {/* Small badge/pill */}
//             <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-amber-700 text-sm font-medium mb-8">
//               <Award size={14} className="mr-2" />
//               <span>Professional Financial Expertise</span>
//             </div>

//             <h1 className="mb-8 leading-tight">
//               <span className="text-6xl md:text-7xl xl:text-8xl font-bold text-black block mb-2">Strategic Tax</span>
//               <span className="text-5xl md:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">Planning & Advisory</span>
//             </h1>

//             <p className="text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
//               Our comprehensive approach combines tax expertise, retirement planning, and business advisory services to optimize your financial future.
//             </p>

//             <div className="flex flex-wrap gap-4 mb-14">
//               <a href="/contact" className="bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-500 hover:to-amber-400 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-xl">
//                 Schedule Consultation
//               </a>

//               <a href="/services" className="px-8 py-4 rounded-lg border border-gray-300 hover:bg-gray-100 text-black font-medium flex items-center space-x-3 transition-all duration-200 text-xl">
//                 <span>Explore Services</span>
//                 <ChevronRight size={20} />
//               </a>
//             </div>

//             {/* Trust indicators */}
//             <div className="flex flex-wrap items-center gap-x-10 gap-y-5 text-base text-gray-600">
//               <div className="flex items-center">
//                 <CheckCircle size={22} className="mr-2 text-amber-500" />
//                 <span>Certified Professionals</span>
//               </div>
//               <div className="flex items-center">
//                 <CheckCircle size={22} className="mr-2 text-amber-500" />
//                 <span>Trusted Since 2016</span>
//               </div>
//               <div className="flex items-center">
//                 <CheckCircle size={22} className="mr-2 text-amber-500" />
//                 <span>Personalized Strategies</span>
//               </div>
//             </div>
//           </div>

//           <div className="relative hidden lg:flex justify-end">
//             {/* 3D golden cube design inspired by the screenshot */}
//             <div className="relative w-96 h-96">
//               <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-amber-400 rounded-xl transform rotate-12 shadow-xl"></div>
//               <div className="absolute inset-4 bg-gradient-to-br from-amber-400 to-amber-300 rounded-xl transform rotate-6 shadow-lg"></div>
//               <div className="absolute inset-8 bg-gradient-to-br from-amber-300 to-amber-200 rounded-xl"></div>

//               {/* Client-Focused info on the cube */}
//               <div className="absolute inset-0 flex items-center justify-center p-8">
//                 <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 text-center">
//                   <div className="flex justify-center mb-4">
//                     <Shield size={36} className="text-amber-600" />
//                   </div>
//                   <h3 className="text-xl font-bold text-black mb-2">Client-Focused Approach</h3>
//                   <p className="text-amber-800 text-sm">Tailored solutions for your unique financial needs</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


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

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200 leading-tight mb-6">
              Strategic Tax.
            </div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200 leading-tight">
              Planning & Advisory
            </div>
          </h1>
          <p className="text-3xl md:text-4xl lg:text-5xl text-gray-400 font-light mt-12">
            Optimize Your Financial Future
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-lg font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Schedule Consultation
            </a>
            <a
              href="#services"
              className="px-8 py-4 border-2 border-purple-300 hover:border-pink-200 text-purple-300 hover:text-pink-200 text-lg font-medium rounded-lg transition-all duration-300 w-full sm:w-auto"
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