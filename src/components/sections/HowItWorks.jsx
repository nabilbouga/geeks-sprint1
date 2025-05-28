import React from 'react';
import { Camera, Users, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      number: '01',
      title: 'Share Your Journey',
      description: 'Upload photos and write detailed reviews about your travel experiences, from hidden gems to popular attractions.',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Users,
      number: '02',
      title: 'Connect & Engage',
      description: 'Interact with fellow travelers, ask questions, and get personalized recommendations from the community.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: TrendingUp,
      number: '03',
      title: 'Discover & Plan',
      description: 'Use authentic reviews and ratings to plan your perfect trip and discover experiences you\'ll never forget.',
      gradient: 'from-pink-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share your travel experiences and discover authentic insights in three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <div className={`bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent text-6xl font-bold mb-4`}>
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;