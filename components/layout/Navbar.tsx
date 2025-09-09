"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center px-4 sm:px-6 lg:px-8 fixed top-4 z-50">
      <div className="w-full max-w-6xl bg-white/95 backdrop-blur-sm border border-gray-200 rounded-[50px] px-6 py-4 lg:px-8 lg:py-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-between">

          {/* Left menu - hidden on mobile, visible on md screens and up */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <NavLink href="/spend">Spend</NavLink>
            <NavLink href="/save">Save</NavLink>
            <NavLink href="/invest">Invest</NavLink>
            <NavLink href="/advance">Advance</NavLink>
          </div>

          {/* Mobile menu button - visible only on small screens */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Center logo - positioned differently based on screen size */}
          <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <Link
              href="/"
              className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              current
            </Link>
          </div>

          {/* Right menu + button - hidden on small screens */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-6">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/help">Help</NavLink>
            <Link href="/login" className={`bg-black hover:bg-gray-800 text-white font-semibold py-2 px-6
               rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}>Login</Link>

          </div>

          {/* Get started button visible on mobile */}
          <div className="sm:hidden">
            <CustomButton mobile>
              Start
            </CustomButton>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col gap-3">
              <MobileNavLink href="/spend" onClick={() => setIsMenuOpen(false)}>Spend</MobileNavLink>
              <MobileNavLink href="/save" onClick={() => setIsMenuOpen(false)}>Save</MobileNavLink>
              <MobileNavLink href="/invest" onClick={() => setIsMenuOpen(false)}>Invest</MobileNavLink>
              <MobileNavLink href="/advance" onClick={() => setIsMenuOpen(false)}>Advance</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="/help" onClick={() => setIsMenuOpen(false)}>Help</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Custom button component
const CustomButton: React.FC<{
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}> = ({ children, mobile = false, onClick }) => (
  <button
    className={`bg-black hover:bg-gray-800 text-white font-semibold py-2 ${mobile ? 'px-4 text-sm' : 'px-6'
      } rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
    onClick={onClick}
  >
    {children}
  </button>
);

// Reusable NavLink component
const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-black font-semibold transition-colors duration-200 relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

// Mobile NavLink component
const MobileNavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}> = ({ href, children, onClick }) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-black font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 block"
  >
    {children}
  </Link>
);

export default Navbar;