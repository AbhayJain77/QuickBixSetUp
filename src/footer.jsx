import React from "react";
import { Phone, Mail, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gradient-to-br from-gray-900 to-gray-700 py-12 text-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-50">Quick Biz Setup</h3>
        <p className="mb-4 text-gray-200">
          We help entrepreneurs like you start and grow your businesses with
          confidence.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-200 hover:text-yellow-400 transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-gray-200 hover:text-yellow-400 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>{" "}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-50">Contact Us</h3>
        <div className="flex items-center mb-2">
          <Phone className="h-5 w-5 mr-2 text-gray-200" />
          <a
            href="tel:+911234567890"
            className="text-gray-200 hover:text-yellow-400"
          >
            +91 9625031973
          </a>
        </div>
        <div className="flex items-center">
          <Mail className="h-5 w-5 mr-2 text-gray-200" />
          <a
            href="mailto:contact@operation@qbsgov.com"
            className="text-gray-200 hover:text-yellow-400"
          >
            operation@qbsgov.com
          </a>
        </div>
        <div className="flex items-center">
          <Mail className="h-5 w-5 mr-2 text-gray-200" />
          <a
            href="mailto:contact@support@qbsgov.com"
            className="text-gray-200 hover:text-yellow-400"
          >
            support@qbsgov.com
          </a>
        </div>
      </div>{" "}
      <div>
        {" "}
        <h3 className="text-xl font-bold mb-4 text-gray-50">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="text-gray-200 hover:text-yellow-400 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-200 hover:text-yellow-400 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-gray-200 hover:text-yellow-400 transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className="text-gray-200 hover:text-yellow-400 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>{" "}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-50">
          Subscribe to our Newsletter
        </h3>
        <p className="mb-4 text-gray-200">
          Get the latest updates and tips for your business growth.
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-gray-800 border-none px-4 py-2 rounded-l-md text-gray-100 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-r-md hover:bg-yellow-500 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-sm text-gray-200">
      &copy; 2023 Quick Biz Setup. All rights reserved.
    </div>
  </footer>
);

export default Footer;
