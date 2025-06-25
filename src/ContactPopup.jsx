import React, { useState, useEffect } from "react";
import { X, Phone, Mail, MapPin, Send } from "lucide-react";

const ContactPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    // Show popup after 7 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you soon.");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom duration-500">
        {" "}
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-6 rounded-t-2xl relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-3">
              Get Your Business Started Today
            </h2>{" "}
            <p className="text-gray-200">
              Fill out the form below and let us help you with your business
              needs
            </p>
          </div>
        </div>{" "}
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>{" "}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>{" "}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>{" "}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>{" "}
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>{" "}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>{" "}
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>{" "}
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              {/* Phone */}{" "}
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">
                    Phone Numbers
                  </h4>
                  <div className="space-y-1">
                    <p className="text-gray-600 text-sm">
                      {" "}
                      <a
                        href="tel:+91 9625031973"
                        className="hover:text-yellow-600 transition-colors duration-200"
                      >
                        +91 9625031973
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* Email */}{" "}
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="bg-gray-200 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">
                    Email Addresses
                  </h4>
                  <div className="space-y-1">
                    {" "}
                    <p className="text-gray-600 text-sm">
                      <a
                        href="mailto:operation@qbsgov.com"
                        className="hover:text-yellow-600 transition-colors duration-200"
                      >
                        operation@qbsgov.com
                      </a>
                    </p>
                    <p className="text-gray-600 text-sm">
                      <a
                        href="mailto:support@qbsgov.com"
                        className="hover:text-yellow-600 transition-colors duration-200"
                      >
                        support@qbsgov.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* Office Address */}{" "}
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="bg-gray-200 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">
                    Office Address
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Saket, New Delhi
                    <br />
                    Landmark -Saket Metro Station
                  </p>
                </div>
              </div>
              {/* Business Hours */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">
                  Business Hours
                </h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
