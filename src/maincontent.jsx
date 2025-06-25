import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const MainContent = () => (
  <div className="bg-white -mt-12">
    {" "}
    {/* Negative margin to reduce gap */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Your Complete Business Solution Partner
        </h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          QuickBizSetup Solutions is your one-stop platform for all
          business-related services, simplifying the process of company
          registration, GST compliance, and legal documentation. Whether you're
          starting a new venture or managing an existing business, we provide
          end-to-end solutions, including:
        </p>{" "}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {" "}
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <CheckCircle className="text-yellow-500 w-5 h-5 flex-shrink-0" />
              <Link
                to="/services"
                className="text-gray-800 hover:text-gray-600 hover:underline transition-colors duration-200 flex items-center group"
              >
                <span>Company Incorporation (Private Limited, LLP)</span>
                <ArrowRight className="ml-2 w-4 h-4 text-yellow-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="text-yellow-500 w-5 h-5 flex-shrink-0" />
              <Link
                to="/services"
                className="text-gray-800 hover:text-gray-600 hover:underline transition-colors duration-200 flex items-center group"
              >
                <span>GST Registration and Filing</span>
                <ArrowRight className="ml-2 w-4 h-4 text-yellow-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="text-yellow-500 w-5 h-5 flex-shrink-0" />
              <Link
                to="/services"
                className="text-gray-800 hover:text-gray-600 hover:underline transition-colors duration-200 flex items-center group"
              >
                <span>Trademark Registration</span>
                <ArrowRight className="ml-2 w-4 h-4 text-yellow-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            </li>
          </ul>{" "}
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <CheckCircle className="text-yellow-500 w-5 h-5 flex-shrink-0" />
              <Link
                to="/services"
                className="text-gray-800 hover:text-gray-600 hover:underline transition-colors duration-200 flex items-center group"
              >
                <span>Tax Filing Services</span>
                <ArrowRight className="ml-2 w-4 h-4 text-yellow-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="text-yellow-500 w-5 h-5 flex-shrink-0" />
              <Link
                to="/services"
                className="text-gray-800 hover:text-gray-600 hover:underline transition-colors duration-200 flex items-center group"
              >
                <span>Legal Documentation</span>
                <ArrowRight className="ml-2 w-4 h-4 text-yellow-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="text-yellow-500 w-5 h-5 flex-shrink-0" />
              <Link
                to="/services"
                className="text-gray-800 hover:text-gray-600 hover:underline transition-colors duration-200 flex items-center group"
              >
                <span>Compliance Management</span>
                <ArrowRight className="ml-2 w-4 h-4 text-yellow-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-gray-800 text-lg leading-relaxed mt-6">
          Our expert team ensures that your business stays compliant with all
          regulatory requirements, while you focus on growing your business.
          With QuickBizSetup Solutions, you get the convenience of managing all
          your legal and financial needs online, saving you time and effort.
        </p>
      </div>
    </div>
  </div>
);

export default MainContent;
