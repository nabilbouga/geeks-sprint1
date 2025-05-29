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
      <Routes>
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/" element={
          <div>
            <nav className="bg-blue-600 text-white py-4 px-6">
              <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">Travel Explorer</div>
                <div className="space-x-6">
                  <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
                  <Link to="/blogs" className="hover:text-blue-200 transition-colors">Blogs</Link>
                </div>
              </div>
            </nav>
           <Navbar onLoginClick={handleLoginClick} />
      <main className="pt-16">
        <HeroSection />
             <TopDestinations />
             <HowItWorks />
             <MoroccoTravelBlog />
             <Benefits />
             <Footer />
          </div>
        } />
      </Routes>
      </main>

      {/* Login Modal rendered at the root level */}
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