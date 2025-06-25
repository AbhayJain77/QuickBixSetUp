import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import {
  Mail,
  User,
  Building2,
  Smartphone,
  MessageSquare,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header /> {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get a Free Consultation Today
          </h1>
          <p className="text-xl mb-8">
            Start your journey with us and transform your business
          </p>
        </div>
      </div>
      {/* Contact Form Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get started with QuickBizSetup today
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a question or ready to take your business to the next level?
              Fill out the form below and our experts will get back to you
              within 24 hours.
            </p>
          </div>
          {/* Simplified Contact Form */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className={`pl-10 w-full rounded-lg border ${
                      focusedField === "name"
                        ? "border-yellow-500 ring-2 ring-yellow-200"
                        : "border-gray-300"
                    } py-3 px-4 text-gray-900 focus:outline-none`}
                  />
                </div>
              </div>

              {/* Contact Info Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={`pl-10 w-full rounded-lg border ${
                        focusedField === "email"
                          ? "border-yellow-500 ring-2 ring-yellow-200"
                          : "border-gray-300"
                      } py-3 px-4 text-gray-900 focus:outline-none`}
                    />
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className={`pl-10 w-full rounded-lg border ${
                        focusedField === "phone"
                          ? "border-yellow-500 ring-2 ring-yellow-200"
                          : "border-gray-300"
                      } py-3 px-4 text-gray-900 focus:outline-none`}
                    />
                  </div>
                </div>
              </div>

              {/* Company Field */}
              <div className="relative">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company Name
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("company")}
                    onBlur={() => setFocusedField(null)}
                    className={`pl-10 w-full rounded-lg border ${
                      focusedField === "company"
                        ? "border-yellow-500 ring-2 ring-yellow-200"
                        : "border-gray-300"
                    } py-3 px-4 text-gray-900 focus:outline-none`}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  How can we help you?
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`pl-10 w-full rounded-lg border ${
                      focusedField === "message"
                        ? "border-yellow-500 ring-2 ring-yellow-200"
                        : "border-gray-300"
                    } py-3 px-4 text-gray-900 focus:outline-none`}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-center space-y-4">
                {" "}
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Additional Contact Information Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Other Ways to Reach Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the most convenient way to get in touch with our team
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {" "}
            {/* Email Contact */}
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="flex justify-center mb-4">
                <Mail className="h-12 w-12 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Email Us
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600">General Inquiries:</p>
                <p className="text-gray-900 font-medium">
                  operation@qbsgov.com
                </p>
                <p className="text-gray-600">Support:</p>
                <p className="text-gray-900 font-medium">support@qbsgov.com</p>
              </div>
            </div>
            {/* Phone Contact */}
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="flex justify-center mb-4">
                <Phone className="h-12 w-12 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Call Us
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600">Main Office:</p>
                <p className="text-gray-900 font-medium">+91 9625031973</p>
                <p className="text-gray-600">Support Hotline:</p>
                <p className="text-gray-900 font-medium">+91 9625031973</p>
              </div>
            </div>
            {/* Office Location */}
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="h-12 w-12 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Visit Us
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600">Main Office:</p>
                <p className="text-gray-900 font-medium">
                  Saket, New Delhi
                  <br />
                  Landmark -Saket Metro Station
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contactus;
