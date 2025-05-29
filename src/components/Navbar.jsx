import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLoginClick, isAuthenticated, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-indigo-600">
              Travel Explorer
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
              Home
            </Link>
            {isAuthenticated && (
              <Link to="/blogs" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                Blogs
              </Link>
            )}
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
              Contact
            </Link>
            {isAuthenticated ? (
              <button
                onClick={onLogout}
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={onLoginClick}
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200">
              Home
            </Link>
            {isAuthenticated && (
              <Link to="/blogs" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                Blogs
              </Link>
            )}
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200">
              About
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200">
              Contact
            </Link>
            {isAuthenticated ? (
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onLogout();
                }}
                className="w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onLoginClick();
                }}
                className="w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 