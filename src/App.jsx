import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Auth/Login';
import HowItWorks from './components/sections/HowItWorks';
import HeroSection from './components/sections/HeroSection';
import TopDestinations from './components/sections/TopDestinations';
import Benefits from './components/sections/Benefits';
import Footer from './components/sections/Footer';
import MoroccoTravelBlog from './components/sections/UserReviews';
import AllBlogs from './components/sections/AllBlogs';
import BlogsPage from './pages/BlogsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <div className="App">
      {/* Navbar is fixed and rendered here, outside of Routes, to appear on all pages */}
      <Navbar onLoginClick={handleLoginClick} />

      {/* Navbar is fixed and rendered here, outside of Routes, to appear on all pages */}
      <Navbar onLoginClick={handleLoginClick} />

      <Routes>
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={
          <main className="pt-0">
            <HeroSection />
            <TopDestinations />
            <HowItWorks />
            <MoroccoTravelBlog />
            <Benefits />
            <Footer />
          </main>
        } />
      </Routes>

      {/* Login Modal rendered at the root level to ensure proper stacking */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[999] overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75 z-[998]" onClick={handleCloseLogin}></div>
            </div>
            <div className="inline-block align-bottom bg-gray-50 rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
              <Login onClose={handleCloseLogin} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;