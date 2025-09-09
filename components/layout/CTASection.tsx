
import React from "react";

const CTASection: React.FC = () => {
  return (
    <div className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to get started?
        </h2>

        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of developers building modern apps with Next.js and Tailwind CSS.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative bg-white text-indigo-700 font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 min-w-[200px]">
            <span className="relative z-10">Sign Up Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 min-w-[200px]">
            <span className="relative">View Demo</span>
            <span className="ml-2">→</span>
          </button>
        </div>

        {/* Additional info */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-blue-100">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>No credit card required</span>
          </div>

          <div className="hidden sm:block w-px h-6 bg-blue-400/50"></div>

          <div className="flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Free 14-day trial</span>
          </div>

          <div className="hidden sm:block w-px h-6 bg-blue-400/50"></div>

          <div className="flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>24/7 support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;