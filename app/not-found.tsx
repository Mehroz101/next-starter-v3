
const Custom404 = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center
     justify-center px-4 py-16 pt-30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated 404 number */}
        <div className="relative mb-8">
          <div className="text-9xl md:text-[12rem] font-bold text-gray-800 opacity-10">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl md:text-[10rem] font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              404
            </div>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Page Not Found
        </h1>

        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. The page might have been moved, deleted, or the URL might be incorrect.
        </p>

        {/* Illustration */}
        <div className="mb-12 max-w-md mx-auto">
          <svg
            viewBox="0 0 500 300"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="250" cy="150" r="120" fill="#EFF6FF" />
            <circle cx="250" cy="150" r="100" fill="#DBEAFE" />
            <circle cx="250" cy="150" r="80" fill="#BFDBFE" />
            <circle cx="250" cy="150" r="60" fill="#93C5FD" />
            <circle cx="250" cy="150" r="40" fill="#60A5FA" />
            <circle cx="250" cy="150" r="20" fill="#3B82F6" />
            <g transform="translate(200, 120)">
              <path
                d="M50,30 C70,10 90,10 110,30 C130,50 130,70 110,90 C90,110 70,110 50,90 C30,70 30,50 50,30 Z"
                fill="#1E40AF"
                opacity="0.2"
              />
            </g>
          </svg>
        </div>

        {/* Action buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.back()}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Go Back
          </button>

          <Link
            href="/"
            className="border-2 border-gray-300 hover:border-indigo-400 text-gray-700 hover:text-indigo-700 font-semibold py-3 px-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center"
          >
            Return Home
          </Link>
        </div> */}

      </div>
    </div>
  );
};

export default Custom404;