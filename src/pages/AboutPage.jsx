import React from 'react';
import Most from '../assets/img/meknes.jpg';
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-64 pt-16" style={{ backgroundImage: 'url(/path/to/your/morocco-image.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/70 to-purple-600/70"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white text-center">THE REASON BEHIND THIS BLOG</h1>
        </div>
      </div>

      {/* Main Content Section with Padding */}
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Left Column: Paragraphs */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-base text-gray-800 leading-relaxed mb-6">
              Morocco is a land of incredible diversity, offering a rich tapestry of experiences that captivate travelers from all corners of the globe. From the bustling souks and ancient medinas of imperial cities like Marrakech, Fes, and Rabat, where history comes alive in intricate architecture and vibrant street life, to the serene beauty of the Sahara Desert with its vast dunes and starry nights, the contrast is simply stunning.
            </p>
            <p className="text-base text-gray-800 leading-relaxed mb-6">
              The majestic Atlas Mountains provide a dramatic backdrop and offer fantastic opportunities for hiking, trekking, and discovering traditional Berber villages perched on hillsides. Along the coast, cities like Essaouira and Taghazout beckon with their relaxed beach vibes, fresh seafood, and water sports.
            </p>
            <p className="text-base text-gray-800 leading-relaxed mb-6">
              Morocco's cultural diversity is equally compelling, a blend of Arab, Berber, and European influences reflected in its language, music, art, and of course, its world-renowned cuisine. Travelers can savor everything from fragrant tagines and couscous to delicious pastries and refreshing mint tea.
            </p>
            <p className="text-base text-gray-800 leading-relaxed">
              This unique mix of landscapes, cultures, and historical treasures makes Morocco a destination that truly offers something for every type of traveler, from the adventurous explorer to the culture enthusiast and the relaxation seeker.
            </p>
          </div>

          {/* Right Column: Images */}
          <div className="md:w-1/2 flex flex-col gap-8 items-center justify-center">
            <img
              src={Most} // Placeholder for sidebar image 1
              alt="Beautiful Moroccan landscape 1"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
             
          </div>
        </div>

        {/* Paragraph about the blog's creation reason - below the two columns */}
        <div className="mt-8">
          <p className="text-base text-gray-800 leading-relaxed text-center">
            The reason we created this blog is to share the wonders of Morocco, especially with the excitement building around the upcoming World Cup in 2030, which will be hosted in Morocco. We aim to provide valuable information and inspiration for travelers planning to visit during this exciting time and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
