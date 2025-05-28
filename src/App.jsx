import React from 'react';
import HowItWorks from './components/sections/HowItWorks';
import HeroSection from './components/sections/HeroSection';
import TopDestinations from './components/sections/TopDestinations';
import Benefits from './components/sections/Benefits';
import Footer from './components/sections/Footer';
import MoroccoTravelBlog from './components/sections/UserReviews';

function App() {
  return (
    <div>
       <HeroSection />
       <TopDestinations />
       <HowItWorks />
       <MoroccoTravelBlog />
       <Benefits />
       <Footer />
    </div>
  );
}

export default App;