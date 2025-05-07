// import React from 'react';
// import { Smile, Calculator, DollarSign, BarChart } from 'lucide-react';

// const LoadingPage: React.FC = () => {
//     return (
//         <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 animate-fadeOut">
//             <div className="mb-12">
//                 <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
//                     Veteran CPA
//                 </h1>
//                 <p className="text-gray-600 text-center mt-3 text-lg">Supporting Small Business Success</p>
//             </div>

//             <div className="flex items-center justify-center mb-12">
//                 <div className="loading-icons-container">
//                     {/* Rotating icons around a central point */}
//                     <div className="loading-icon-orbit">
//                         <Calculator className="w-12 h-12 text-blue-600 absolute loading-icon" style={{ '--rotation-delay': '0s' } as React.CSSProperties} />
//                         <DollarSign className="w-12 h-12 text-green-600 absolute loading-icon" style={{ '--rotation-delay': '1s' } as React.CSSProperties} />
//                         <BarChart className="w-12 h-12 text-indigo-600 absolute loading-icon" style={{ '--rotation-delay': '2s' } as React.CSSProperties} />
//                         <Smile className="w-12 h-12 text-orange-500 absolute loading-icon" style={{ '--rotation-delay': '3s' } as React.CSSProperties} />
//                     </div>
//                 </div>
//             </div>

//             <div className="loading-bar-container">
//                 <div className="loading-bar"></div>
//             </div>

//             <p className="text-gray-500 mt-6 text-base">Loading your financial solutions...</p>
//         </div>
//     );
// };

// export default LoadingPage;


import React from 'react';

const LoadingPage: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50 animate-fadeOut">
            <div className="loading-lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    );
};

export default LoadingPage;