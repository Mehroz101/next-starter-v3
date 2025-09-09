
import Link from "next/link";
import React from "react";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Performance",
      description: "Optimized with Next.js SSR and modern tooling for blazing speed.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Secure by Default",
      description: "Enterprise-ready security built into every layer of your application.",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Scalable Architecture",
      description: "Flexible setup that grows with your product and user base.",
    },
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Power up your workflow with features designed for modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100 relative overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              <div className="relative z-10">
                {/* Icon container */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-100 group-hover:bg-blue-200 text-blue-600 rounded-2xl transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>

                {/* Learn more link */}
                <div className="mt-6 text-center">
                  <Link href="#" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                    Learn more
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 opacity-5 group-hover:opacity-10 transition-opacity duration-300 transform rotate-45 translate-x-16 -translate-y-16"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Need more information?</h3>
              <p className="text-gray-600">Explore our documentation or contact our team.</p>
            </div>
            <div className="flex items-center justify-center sm:justify-end">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;