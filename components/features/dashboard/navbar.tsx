import Image from "next/image";
import Link from "next/link";

// Navbar component
export const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 fixed left-0 right-0 top-0 z-10 lg:pl-64">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-start items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <form action="#" method="GET" className="hidden md:block md:pl-2">
            <label htmlFor="topbar-search" className="sr-only">Search</label>
            <div className="relative md:w-64 md:w-96">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                name="email"
                id="topbar-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5"
                placeholder="Search"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center space-x-6">
          {/* Notifications */}
          <button className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          {/* Messages */}
          <button className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </button>

          {/* User profile dropdown */}
          <div className="flex items-center ml-3">
            <div className="relative">
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
              >
                <span className="sr-only">Open user menu</span>
                <Image
                  className="w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                  alt="User photo"
                  width={32}
                  height={32}
                />
              </button>

              {/* Dropdown menu */}
              <div
                className="hidden absolute right-0 z-50 w-48 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow"
                id="dropdown"
              >
                <div className="py-3 px-4">
                  <span className="block text-sm font-semibold text-gray-900">John Doe</span>
                  <span className="block text-sm text-gray-500 truncate">john.doe@company.com</span>
                </div>
                <ul className="py-1" aria-labelledby="dropdown">
                  <li>
                    <Link href="/dashboard/profile" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/settings" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/billing" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Billing</Link>
                  </li>
                </ul>
                <ul className="py-1">
                  <li>
                    <Link href="/logout" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Sign out</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};