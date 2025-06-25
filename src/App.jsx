import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home.jsx";
import AboutUs from "./AboutUs.jsx";
import Header from "./header.jsx";
import ServicesSection from "./services.jsx";
import Contactus from "./contactus.jsx";
import Blog from "./blog.jsx";
// import AboutUs from "./aboutus.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
