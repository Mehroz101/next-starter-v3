import Link from 'next/link';

export default function DashboardNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-9xl font-bold text-gray-300">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Page Not Found</h1>
          <p className="text-gray-600 mt-2 max-w-md mx-auto">
            Sorry, we couldn't find the dashboard page you're looking for.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Possible reasons:</h2>
            <ul className="text-gray-600 text-left list-disc list-inside space-y-1">
              <li>The page may have been moved or deleted</li>
              <li>You may have entered the wrong URL</li>
              <li>The page might be temporarily unavailable</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Go to Dashboard
            </Link>

            <button
              onClick={() => window.history.back()}
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Go Back
            </button>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          Need help? <Link href="/support" className="text-blue-600 hover:text-blue-500">Contact support</Link>
        </div>
      </div>
    </div>
  );
}