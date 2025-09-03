'use client'
import { useState } from 'react';
import { Navbar } from '@/components/features/dashboard/navbar';
import { Sidebar } from '@/components/features/dashboard/sidebar';
import "@/app/globals.css"
export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-gray-100">
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

          <div className="flex flex-col flex-1 lg:ml-64">
            <Navbar toggleSidebar={toggleSidebar} />

            <main className="pt-16 h-full overflow-y-auto">
              <div className="px-4 py-6 mx-auto max-w-7xl">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}