import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import ServicesSection from "./services.jsx";
import { motion } from "framer-motion";
import {
  Users,
  Clock,
  PiggyBank,
  Briefcase,
  TrendingUp,
  HeartHandshake,
  Award,
  ShieldCheck,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const AboutUs = () => {
  const milestones = [
    { year: 2018, text: "Founded with a team of 5 visionaries" },
    { year: 2020, text: "Expanded services & opened Ahmedabad office" },
    { year: 2022, text: "Reached 500+ business clients" },
    { year: 2024, text: "Growing team of 750+ experts" },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Government Schemes",
      desc: "Leverage grants and loans for MSMEs",
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      desc: "Stay ahead with detailed analysis",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      desc: "Round-the-clock expert assistance",
    },
    {
      icon: Award,
      title: "Expert Team",
      desc: "750+ growth specialists",
    },
    {
      icon: PiggyBank,
      title: "Affordable Services",
      desc: "Cost-effective solutions for all business sizes",
    },
    {
      icon: ShieldCheck,
      title: "Data Security",
      desc: "Your information is protected with advanced security",
    },
    {
      icon: Briefcase,
      title: "Diverse Expertise",
      desc: "Comprehensive support across various industries",
    },
    {
      icon: HeartHandshake,
      title: "Client-Centric Approach",
      desc: "Focused on building long-lasting partnerships",
    },
  ];

  const coreValues = [
    {
      title: "Integrity",
      description: "Upholding transparency and trust in every interaction.",
    },
    {
      title: "Client-Centric",
      description: "Our clients' success is our ultimate priority.",
    },
    {
      title: "Innovation",
      description: "Constantly improving services to meet client needs.",
    },
  ];

  return (
    <div>
      <Header />
      <div className="bg-white">
        {" "}
        {/* Hero Section */}
        <motion.section
          className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {" "}
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4 background-animate bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
              {...fadeIn}
            >
              Your Dedicated Partners in Business Growth
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              Experts in Taxes, Funding, and Marketing Success
            </motion.p>
          </div>
        </motion.section>
        {/* About Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="max-w-4xl mx-auto text-center" {...fadeIn}>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                About QuickBizSetup Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                QuickBizSetup Solutions streamlines business setup and
                management, offering services like company registration, GST
                filing, and compliance management. Our platform caters to
                startups and small businesses, helping them grow without getting
                bogged down by legal and financial complexities.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                From expert guidance on business incorporation to managing
                ongoing compliance, we simplify the administrative tasks so you
                can focus on scaling your business.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Core Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {coreValues.map((value) => (
                <motion.div
                  key={value.title}
                  className="p-6 rounded-xl bg-white shadow-md text-center"
                  {...fadeIn}
                >
                  {" "}
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Why Businesses Prefer Us */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-gray-900"
              {...fadeIn}
            >
              Why Businesses Prefer Us
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  {...fadeIn}
                  transition={{ delay: index * 0.2 }}
                  className="group p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {" "}
                  <div className="text-center">
                    <div className="inline-block p-3 rounded-full bg-yellow-50 group-hover:bg-yellow-100 transition-colors duration-300 mb-4">
                      <benefit.icon className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      {/* <ServicesSection /> */}
    </div>
  );
};

export default AboutUs;
