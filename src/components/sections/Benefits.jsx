import { Shield, Users, TrendingUp } from "lucide-react";
import BenefitCard from "../abdo-rcompo/benifit-card";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Authentic Reviews",
      description:
        "Every review is verified and comes from real travelers who've actually visited these destinations.",
      gradient: "from-white to-blue-50",
      iconGradient: "from-pink-500 via-purple-500 to-blue-500",
    },
    {
      icon: Users,
      title: "Trusted Community",
      description:
        "Connect with millions of passionate travelers who share honest experiences and helpful tips.",
      gradient: "from-white to-purple-50",
      iconGradient: "from-fuchsia-500 via-violet-500 to-indigo-500",
    },
    {
      icon: TrendingUp,
      title: "Travel Insights",
      description:
        "Get detailed insights, best times to visit, budget tips, and local recommendations for every destination.",
      gradient: "from-white to-green-50",
      iconGradient: "from-cyan-500 via-teal-500 to-green-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-indigo-500">TripReview</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the most trusted community of travelers and unlock authentic
            travel insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 perspective-1000">
          {benefits.map((benefit, index) => {
            return (
              <>
                <BenefitCard benefit={benefit} index={index} />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
