import React from "react";
import Header from "./header.jsx";
import Maincontent from "./maincontent";
import Footer from "./footer.jsx";
import Slideshow from "./slideshow.jsx";
import { StatsWithAnimation, WhyChooseUs } from "./animation.jsx";
import AboutUs from "./AboutUS.jsx";
import ContactPopup from "./ContactPopup.jsx";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />{" "}
      <div className="pt-16">
        <Slideshow />
        <div className="bg-gradient-to-b from-blue-900 to-white">
          <StatsWithAnimation />
        </div>
        <Maincontent />
        <WhyChooseUs />
        <Footer />
      </div>
      <ContactPopup />
    </div>
  );
};

export default HomePage;
