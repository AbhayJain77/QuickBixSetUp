import React, { useState, useEffect } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = [
    {
      title: "National Startup Awards",
      subtitle: "Award-Winning Startup Journey",
      description:
        "Startup banaye award-winning — National Startup Awards ka ticket yahin milega!",
      highlight: "Award-Winning",
    },
    {
      title: "Company Incorporation",
      subtitle: "Easy Company Setup",
      description:
        "Company Incorporation banaye aasan, startup ka pehla kadam humare saath!",
      highlight: "Easy Setup",
    },
    {
      title: "Startup India Recognition",
      subtitle: "Get Official Recognition",
      description:
        "Startup India ka tag chahiye? Recognition milega bina tension ke!",
      highlight: "Official Tag",
    },
    {
      title: "Need Funding",
      subtitle: "Investor Ready Pitch",
      description:
        "Funding chahiye? Investors ko karein impress, pitch banaye success!",
      highlight: "Funding Ready",
    },
    {
      title: "Tax Exemption",
      subtitle: "Save Money on Taxes",
      description: "Tax ka load hatao, exemption ke saath paisa bachao!",
      highlight: "Tax Savings",
    },
  ]; // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // Increased to 5 seconds for better user interaction
      return () => clearInterval(interval);
    }
  }, [slides.length, isPaused]);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      {" "}
      {/* Full screen background image with blur */}
      <img
        src="/bg.jpg"
        alt="QuickBiz Setup Services"
        className="w-full h-full object-cover filter blur-sm"
      />{" "}
      {/* Enhanced dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* Additional gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
      {/* Mobile Layout - Stacked Content */}
      <div className="md:hidden absolute inset-0 flex flex-col">
        {" "}
        {/* Mobile Hero Section - Top */}
        <div className="flex-1 flex items-center justify-center px-6 py-8">
          <div className="text-center max-w-sm bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h1 className="text-2xl font-extrabold text-white mb-4 leading-tight drop-shadow-2xl">
              Transform Your Business Vision Into Reality
            </h1>
            <p className="text-base text-gray-100 mb-6 drop-shadow-xl">
              Your trusted partner in business setup, compliance, and growth. We
              make complex business processes simple and efficient.
            </p>{" "}
            <Link to="/contactus">
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-500 transition-all w-full shadow-2xl mb-6 transform hover:scale-105">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
            <div className="grid grid-cols-1 gap-3 text-white">
              {[
                "Quick Company Registration",
                "GST & Tax Compliance",
                "Legal Documentation",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center justify-center space-x-2"
                >
                  <CheckCircle className="h-4 w-4 text-yellow-400 flex-shrink-0 drop-shadow-xl" />
                  <span className="text-sm drop-shadow-xl font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile Sliding Content - Bottom */}
        <div
          className="flex-1 flex items-center justify-center px-6 py-8"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="w-full max-w-sm">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    {" "}
                    <div className="space-y-4 text-center">
                      <div className="inline-block px-4 py-2 bg-yellow-400/90 text-gray-900 font-bold rounded-full text-sm backdrop-blur-sm">
                        {slide.highlight}
                      </div>
                      <h2 className="text-2xl font-bold text-white leading-tight drop-shadow-lg">
                        {slide.title}
                      </h2>
                      <h3 className="text-lg font-semibold text-yellow-300 drop-shadow-md">
                        {slide.subtitle}
                      </h3>
                      <p className="text-base text-gray-200 leading-relaxed drop-shadow-md">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Desktop Layout - Side by Side */}
      {/* Left side - Sliding text content */}
      <div
        className="hidden md:flex absolute inset-0 items-center justify-start"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* 🎯 LEFT SIDE WIDTH CONTROL: Change 'max-w-lg' to adjust left side width */}
        {/* max-w-sm = 384px, max-w-md = 448px, max-w-lg = 512px, max-w-xl = 576px, max-w-2xl = 672px */}
        {/* You can also change 'ml-16' (margin-left) to adjust left positioning */}
        <div className="px-8 py-12 ml-16 max-w-lg">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  {" "}
                  <div className="space-y-6">
                    <div className="inline-block px-5 py-3 bg-yellow-400/90 text-gray-900 font-bold rounded-full text-base backdrop-blur-sm">
                      {slide.highlight}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-lg">
                      {slide.title}
                    </h2>
                    <h3 className="text-xl font-semibold text-yellow-300 drop-shadow-md">
                      {slide.subtitle}
                    </h3>
                    <p className="text-lg text-gray-200 leading-relaxed drop-shadow-md">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>{" "}
          </div>
        </div>
      </div>{" "}
      {/* Right side - Hero section content overlaid on image (Desktop only) */}
      <div className="hidden md:flex absolute inset-0 items-center justify-end">
        {/* 🎯 RIGHT SIDE WIDTH CONTROL: Change 'max-w-lg' to adjust right side width */}
        {/* max-w-sm = 384px, max-w-md = 448px, max-w-lg = 512px, max-w-xl = 576px, max-w-2xl = 672px */}
        {/* You can also change 'mr-16' (margin-right) to adjust right positioning */}
        <div className="px-8 py-12 text-center max-w-lg mr-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Transform Your Business Vision Into Reality
          </h1>{" "}
          <p className="text-lg text-gray-200 mb-8 drop-shadow-md">
            Your trusted partner in business setup, compliance, and growth. We
            make complex business processes simple and efficient.
          </p>
          <div className="flex flex-col gap-4 mb-8">
            {" "}
            <Link to="/contactus">
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105 w-full shadow-lg">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 text-white">
            {[
              "Quick Company Registration",
              "GST & Tax Compliance",
              "Legal Documentation",
            ].map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 drop-shadow-md" />
                <span className="text-sm drop-shadow-md">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
