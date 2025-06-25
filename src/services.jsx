import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRegBuilding,
  FaMoneyBillAlt,
  FaShieldAlt,
  FaLightbulb,
  FaChartLine,
  FaUserShield,
} from "react-icons/fa";
import {
  BsBoxSeam,
  BsRocketTakeoff,
  BsGraphUp,
  BsBriefcase,
  BsFileBarGraph,
} from "react-icons/bs";
import { VscGraphLine } from "react-icons/vsc";

import Header from "./header";
import Footer from "./footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const growthItemAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("setup");

  const businessSetupServices = [
    {
      name: "Company Registration",
      icon: FaRegBuilding,
    },
    {
      name: "Partnership Formation",
      icon: BsBoxSeam,
    },
    {
      name: "GeM Registration",
      icon: FaRegBuilding,
    },
    { name: "MSME Certification", icon: FaLightbulb },
    { name: "Startup India", icon: BsRocketTakeoff },
    { name: "Tax Benefits", icon: FaMoneyBillAlt },
  ];

  const businessGrowthServices = [
    { name: "Government Grants", icon: BsGraphUp },
    { name: "Government Loans", icon: BsBriefcase },
    { name: "NBFC Financing", icon: BsFileBarGraph },
    { name: "Equity Funding", icon: FaChartLine },
    { name: "Mentorship Program", icon: FaUserShield },
    { name: "Pitch Deck Development", icon: VscGraphLine },
  ];

  const businessProtectionServices = [
    { name: "Legal & Compliance", icon: FaShieldAlt },
    { name: "Data Privacy", icon: FaUserShield },
    { name: "Trademark Registration", icon: FaRegBuilding },
    { name: "Patent Filing", icon: FaRegBuilding },
    { name: "Cyber Security", icon: FaShieldAlt },
    { name: "Insurance Solutions", icon: FaShieldAlt },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}{" "}
        <motion.section
          className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light">
            We provide comprehensive solutions to support your business at every
            stage.
          </p>
        </motion.section>
        {/* Services Section */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            {" "}
            <motion.div
              className={`px-8 py-4 text-lg font-medium cursor-pointer transition-colors duration-300 ${
                activeTab === "setup"
                  ? "bg-gray-900 text-white rounded-l-md"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}
              onClick={() => handleTabClick("setup")}
              {...fadeIn}
            >
              Business Setup
            </motion.div>{" "}
            <motion.div
              className={`px-8 py-4 text-lg font-medium cursor-pointer transition-colors duration-300 ${
                activeTab === "growth"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}
              onClick={() => handleTabClick("growth")}
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              Business Growth
            </motion.div>{" "}
            <motion.div
              className={`px-8 py-4 text-lg font-medium cursor-pointer transition-colors duration-300 rounded-r-md ${
                activeTab === "protection"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}
              onClick={() => handleTabClick("protection")}
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              Business Protection
            </motion.div>
          </div>

          {/* Services Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {activeTab === "setup" &&
              businessSetupServices.map((service) => (
                <motion.div key={service.name} {...fadeIn}>
                  <div className="p-6 bg-white shadow-xl rounded-2xl transform hover:scale-105 transition-transform duration-300 h-full">
                    <div className="flex items-center mb-4">
                      <service.icon className="text-gray-900 h-10 w-10 mr-4" />
                      <h3 className="text-2xl font-bold">{service.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      We handle all the paperwork and legalities to get your
                      business set up quickly and efficiently.
                    </p>
                  </div>
                </motion.div>
              ))}{" "}
            {activeTab === "growth" &&
              businessGrowthServices.map((service) => (
                <motion.div key={service.name} {...growthItemAnimation}>
                  <div className="p-6 bg-white shadow-xl rounded-2xl transform hover:scale-105 transition-transform duration-300 h-full">
                    <div className="flex items-center mb-4">
                      <service.icon className="text-gray-900 h-10 w-10 mr-4" />
                      <h3 className="text-2xl font-bold">{service.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Unlock new growth opportunities with our curated funding,
                      mentorship, and business strategy solutions.
                    </p>
                  </div>
                </motion.div>
              ))}{" "}
            {activeTab === "protection" &&
              businessProtectionServices.map((service) => (
                <motion.div key={service.name} {...fadeIn}>
                  <div className="p-6 bg-white shadow-xl rounded-2xl transform hover:scale-105 transition-transform duration-300 h-full">
                    <div className="flex items-center mb-4">
                      <service.icon className="text-gray-900 h-10 w-10 mr-4" />
                      <h3 className="text-2xl font-bold">{service.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Safeguard your business with our comprehensive legal,
                      compliance, and security solutions.
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>
        {/* Get Started Button */}
        <div className="py-8 bg-white text-center">
          {" "}
          <motion.div className="mb-8" {...fadeIn} transition={{ delay: 0.6 }}>
            <a
              href="/contactus"
              className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-md hover:bg-yellow-500 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesSection;
