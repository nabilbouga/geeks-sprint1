import React, { useRef } from "react";
function BenefitCard({ benefit, index }) {
  const cardRef = useRef(null);

   const handleMouseMove = (e, cardRef) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    cardRef.current.style.transition = 'transform 0.05s ease-out';
  };

  const handleMouseLeave = (cardRef) => {
    cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
    cardRef.current.style.transition = 'transform 0.3s ease-in-out';
  };
  return (
    <>
    <div
      key={index}
      ref={cardRef}
      className={`text-center p-8 rounded-2xl bg-gradient-to-br ${benefit.gradient} border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300`}
      onMouseMove={(e) => handleMouseMove(e, cardRef)}
      onMouseLeave={() => handleMouseLeave(cardRef)}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className={`w-20 h-20 bg-gradient-to-br ${benefit.iconGradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-md`}
      >
        <benefit.icon className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
    </div>
    
    </>
  );
}

export default BenefitCard;
