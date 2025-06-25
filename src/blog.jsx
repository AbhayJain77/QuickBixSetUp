import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
  FaUser,
  FaCalendar,
  FaArrowRight,
} from "react-icons/fa";
import Header from "./header";
import Footer from "./footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const cardAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Blog = () => {
  const [activeTab, setActiveTab] = useState("stories");

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      rating: 5,
      text: "QuickBizSetup transformed our startup journey. Their guidance on GeM registration and MSME certification was invaluable. We've seen 300% growth since working with them!",
      industry: "Technology",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Green Earth Manufacturing",
      rating: 5,
      text: "The business protection services, especially the trademark registration support, gave us the security we needed to expand confidently into new markets.",
      industry: "Manufacturing",
    },
    {
      id: 3,
      name: "Priya Patel",
      company: "HealthTech Innovations",
      rating: 5,
      text: "Their mentorship program and funding assistance helped us secure Series A funding. The team's expertise in pitch deck development was game-changing.",
      industry: "Healthcare",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Steps to Register Your Startup in India",
      excerpt:
        "A comprehensive guide to navigating the registration process and securing essential certifications for your startup in India.",
      date: "Nov 10, 2024",
      author: "Raj Kumar",
      category: "Business Setup",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
    },
    {
      id: 2,
      title: "Unlocking Government Grants: A Complete Guide",
      excerpt:
        "Discover the various government schemes and grants available for startups and how to effectively apply for them.",
      date: "Nov 8, 2024",
      author: "Anjali Singh",
      category: "Funding",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt:
        "Learn how to protect your business from cyber threats with these essential security measures and compliance guidelines.",
      date: "Nov 5, 2024",
      author: "Alex Thompson",
      category: "Security",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header /> {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Success Stories & Insights
        </h1>{" "}
        <p className="text-xl md:text-2xl text-gray-200 font-light">
          Discover how we've helped businesses grow and learn from our expertise
        </p>
      </motion.section>
      {/* Main Content Section */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <motion.div
            className={`px-8 py-4 text-lg font-medium cursor-pointer transition-colors duration-300 ${
              activeTab === "stories"
                ? "bg-gray-900 text-white rounded-l-md"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("stories")}
            {...fadeIn}
          >
            Success Stories
          </motion.div>
          <motion.div
            className={`px-8 py-4 text-lg font-medium cursor-pointer transition-colors duration-300 rounded-r-md ${
              activeTab === "blog"
                ? "bg-gray-900 text-white"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("blog")}
            {...fadeIn}
          >
            Blog & Insights
          </motion.div>
        </div>
        {/* Success Stories Content */}
        {activeTab === "stories" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} {...cardAnimation}>
                <div className="bg-white p-6 rounded-2xl shadow-xl h-full flex flex-col">
                  {" "}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-700">{testimonial.company}</p>
                    <div className="flex mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                      ))}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <FaQuoteLeft className="text-gray-400 w-8 h-8 mb-4 opacity-40" />
                    <p className="text-gray-600">{testimonial.text}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500">
                      Industry: {testimonial.industry}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        {/* Blog Content */}
        {activeTab === "blog" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div key={post.id} {...cardAnimation}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex-grow">
                    {" "}
                    <div className="flex items-center mb-4">
                      <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="ml-auto text-sm text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="mt-auto">
                      <div className="flex items-center text-sm text-gray-500">
                        <FaUser className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                        <FaCalendar className="w-4 h-4 ml-4 mr-2" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="px-6 pb-6">
                    <button className="w-full mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors duration-300">
                      Read More <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
      {/* Call to Action Section */}{" "}
      <section className="bg-gray-50 py-16">
        <motion.div className="max-w-4xl mx-auto text-center px-4" {...fadeIn}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-gray-600 mb-8">
            Join hundreds of businesses that have transformed their journey with
            QuickBizSetup
          </p>
          <motion.div {...fadeIn} transition={{ delay: 0.6 }}>
            <a
              href="/contactus"
              className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-md hover:bg-yellow-500 shadow-lg inline-block transform hover:scale-105 transition-transform duration-300"
            >
              Start Your Journey
            </a>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
