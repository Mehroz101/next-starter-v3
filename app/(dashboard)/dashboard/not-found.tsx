'use client'

import Link from 'next/link';

export default function DashboardNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-9xl font-bold text-gray-300">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Page Not Found</h1>
          <p className="text-gray-600 mt-2 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the dashboard page you&apos;re looking for.
          </p>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          Need help? <Link href="/support" className="text-blue-600 hover:text-blue-500">Contact support</Link>
        </div>

      </div>
    </div>
  );
}