
import React from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-12 md:aspect-h-10">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Team collaboration"
                  width={600}
                  height={450}
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-700">5,000+</div>
                  <div className="text-sm text-gray-600 mt-1">Active Developers</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-50"></div>
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-4">
              <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                About Our Platform
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Built for developers, <span className="text-blue-600">by developers</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We help developers and teams build powerful applications faster. With modern tech
              stacks and elegant UI, our goal is to save you time and let you focus on innovation.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-blue-100 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Modern Stack</h4>
                  <p className="text-gray-600 text-sm">Next.js, Tailwind, TypeScript</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-blue-100 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fully Responsive</h4>
                  <p className="text-gray-600 text-sm">Works on all devices</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-blue-100 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Customizable</h4>
                  <p className="text-gray-600 text-sm">Easy to modify and extend</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-blue-100 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Well Documented</h4>
                  <p className="text-gray-600 text-sm">Comprehensive guides</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Learn More
              </button>

              <button className="border border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-700 font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                <span>View Demo</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;