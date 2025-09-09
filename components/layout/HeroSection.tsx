import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 pb-30 pt-30">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Build Faster with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Next.js & Modern Tools
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Kickstart your project with a powerful stack. Modern UI components with elegant design,
              while Next.js powers blazing-fast apps with server-side rendering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Get Started
              </button>

              <button className="border-2 border-gray-300 hover:border-indigo-400 text-gray-700 hover:text-indigo-700 font-semibold py-4 px-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600">95%</div>
                <div className="text-sm text-gray-500 mt-1">Faster Development</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600">100%</div>
                <div className="text-sm text-gray-500 mt-1">Responsive Design</div>
              </div>
              <div className="text-center lg:text-left col-span-2 md:col-span-1 mx-auto md:mx-0">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600">4.9/5</div>
                <div className="text-sm text-gray-500 mt-1">User Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
              <Image
                src="https://www.geckoboard.com/uploads/Live-customer-support-dashboard-example.png"
                alt="Modern Dashboard Illustration"
                width={600}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;