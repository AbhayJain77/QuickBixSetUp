import React, { useState, useEffect } from "react";
import { Users, Clock, Shield, PiggyBank, Award } from "lucide-react";

const AnimatedCounter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startValue = 0;
    const endNum = parseInt(endValue.replace(/[^0-9]/g, ""));
    const step = Math.ceil(endNum / (duration / 16));
    const timer = setInterval(() => {
      startValue += step;
      if (startValue > endNum) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(startValue + "+");
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endValue]);

  return <span>{count}</span>;
};

export const StatsWithAnimation = () => {
  const stats = [
    { number: "15000+", label: "Clients Served" },
    { number: "8500+", label: "Companies Incorporated" },
    { number: "12000+", label: "GST Registrations" },
    { number: "100+", label: "Funds Raised (₹ in Crs)" },
  ];
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Achievements
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                <AnimatedCounter endValue={stat.number} />
              </h3>
              <p className="text-sm text-yellow-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const WhyChooseUs = () => {
  const features = [
    {
      title: "Professional Team",
      description: "Expert CAs, CSs & MBAs under one roof",
      icon: <Users className="w-8 h-8" />,
      bgColor: "from-gray-700 via-gray-800 to-gray-900",
      shadowColor: "shadow-gray-500/25",
      borderColor: "border-gray-300",
    },
    {
      title: "Timely Execution",
      description: "Defined timeline guaranteed",
      icon: <Clock className="w-8 h-8" />,
      bgColor: "from-yellow-500 via-yellow-400 to-yellow-600",
      shadowColor: "shadow-yellow-500/25",
      borderColor: "border-yellow-300",
    },
    {
      title: "Honest Advice",
      description: "Transparent guidance always",
      icon: <Shield className="w-8 h-8" />,
      bgColor: "from-gray-600 via-gray-700 to-gray-800",
      shadowColor: "shadow-gray-500/25",
      borderColor: "border-gray-300",
    },
    {
      title: "Clear Pricing",
      description: "No hidden charges ever",
      icon: <PiggyBank className="w-8 h-8" />,
      bgColor: "from-yellow-400 via-yellow-500 to-yellow-600",
      shadowColor: "shadow-yellow-500/25",
      borderColor: "border-yellow-300",
    },
    {
      title: "Best Quality",
      description: "Global standards followed",
      icon: <Award className="w-8 h-8" />,
      bgColor: "from-gray-800 via-gray-900 to-gray-700",
      shadowColor: "shadow-gray-500/25",
      borderColor: "border-gray-300",
    },
  ];
  return (
    <div className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {" "}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 bg-clip-text text-transparent">
            Why Choose <span className="text-yellow-500">QuickBizSetup</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience excellence with our comprehensive business solutions
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect background */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${feature.bgColor} rounded-2xl blur opacity-0 group-hover:opacity-75 transition-all duration-500 group-hover:duration-200`}
              ></div>

              {/* Main card */}
              <div
                className={`relative bg-white/80 backdrop-blur-sm border-2 ${feature.borderColor} rounded-2xl p-8 h-full transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-4 ${feature.shadowColor} shadow-lg group-hover:shadow-2xl group-hover:bg-white/95`}
              >
                {/* Icon container with animated background */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`relative p-4 rounded-2xl bg-gradient-to-br ${feature.bgColor} transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 shadow-lg group-hover:shadow-xl`}
                  >
                    <div className="text-white transform transition-transform duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>

                    {/* Pulse animation */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-30 animate-ping`}
                    ></div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-gray-800 transform transition-all duration-300 group-hover:scale-105 group-hover:text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed transform transition-all duration-300 group-hover:text-gray-700">
                    {feature.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>

                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:-translate-y-8 transition-all duration-1000 delay-200"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:-translate-y-12 transition-all duration-1200 delay-400"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
