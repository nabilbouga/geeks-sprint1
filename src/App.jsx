import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HowItWorks from './components/sections/HowItWorks';
import HeroSection from './components/sections/HeroSection';
import TopDestinations from './components/sections/TopDestinations';
import Benefits from './components/sections/Benefits';
import Footer from './components/sections/Footer';
import MoroccoTravelBlog from './components/sections/UserReviews';
import AllBlogs from './components/sections/AllBlogs';
import BlogsPage from './pages/BlogsPage';

function App() {
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
            <HeroSection />
            <TopDestinations />
            <HowItWorks />
            <MoroccoTravelBlog />
            <Benefits />
            <Footer />
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;