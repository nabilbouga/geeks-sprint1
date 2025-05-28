import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const MoroccoTravelBlog = () => {
  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      location: "Toronto, Canada",
      rating: 5,
      comment: "The Sahara Desert experience was magical! Riding camels at sunset and sleeping under the stars in a luxury camp was unforgettable. The local guides were incredibly knowledgeable.",
      date: "2023-04-15",
      trip: "3-Day Sahara Tour"
    },
    {
      id: 2,
      name: "Ahmed El-Masri",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      location: "Cairo, Egypt",
      rating: 4,
      comment: "Marrakech's medina is like stepping back in time. The colors, smells, and sounds are overwhelming in the best way. Don't miss the Bahia Palace and the secret gardens!",
      date: "2023-03-22",
      trip: "Marrakech Explorer"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      location: "Madrid, Spain",
      rating: 5,
      comment: "Chefchaouen, the Blue Pearl of Morocco, was everything I hoped for and more. Wandering the blue-washed streets and hiking in the Rif Mountains were highlights of my trip.",
      date: "2023-05-10",
      trip: "Northern Morocco Adventure"
    }
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <StarIcon 
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-amber-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-800 mb-3">Morocco Travel Experiences</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read what fellow travelers say about their adventures in Morocco's vibrant cities, deserts, and mountains.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-amber-100"
            >
              <div className="p-6">
                {/* User Info */}
                <div className="flex items-center mb-4">
                  <img 
                    className="h-12 w-12 rounded-full object-cover border-2 border-amber-200" 
                    src={review.avatar} 
                    alt={review.name}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                    <p className="text-amber-600 text-sm">{review.location}</p>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex mb-3">
                  {renderStars(review.rating)}
                </div>
                
                {/* Review Text */}
                <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    {new Date(review.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                    {review.trip}
                  </span>
                </div>
              </div>
              
              {/* Moroccan-style decorative element */}
              <div className="h-2 bg-gradient-to-r from-blue-500 via-amber-500 to-red-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">Have you visited Morocco?</h2>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors duration-300">
            Share Your Experience
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoroccoTravelBlog;