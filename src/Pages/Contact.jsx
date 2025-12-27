import React, { useState } from 'react';
import { FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaClock } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            If you have any questions or inquiries, feel free to reach out to us! We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-3xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-purple-100">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition duration-300"
                    placeholder="Tell us about your inquiry..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-3xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-3 border-b-2 border-purple-100">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-purple-100 p-4 rounded-2xl group-hover:bg-purple-200 transition duration-300">
                      <FaEnvelope className="text-2xl text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">info@cakesvilla.com</p>
                      <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-pink-100 p-4 rounded-2xl group-hover:bg-pink-200 transition duration-300">
                      <FaPhone className="text-2xl text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri from 8am to 8pm</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-blue-100 p-4 rounded-2xl group-hover:bg-blue-200 transition duration-300">
                      <FaMapMarkerAlt className="text-2xl text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Location</h3>
                      <p className="text-gray-600">123 Bakery Street, Sweet City</p>
                      <p className="text-sm text-gray-500 mt-1">Visit our bakery</p>
                    </div>
                  </div>

                  {/* Instagram Link */}
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-400 p-4 rounded-2xl group-hover:shadow-lg transition duration-300">
                      <FaInstagram className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Follow Us</h3>
                      <a 
                        href="https://www.instagram.com/cakes_villa002" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent hover:from-purple-700 hover:to-pink-600 transition duration-300 block"
                      >
                        @cakes_villa002
                      </a>
                      <p className="text-sm text-gray-500 mt-1">See our latest cake creations!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl shadow-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <FaClock className="text-2xl" />
                  <h3 className="text-2xl font-bold">Business Hours</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="font-semibold">10:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="font-medium">Saturday</span>
                    <span className="font-semibold">10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday</span>
                    <span className="font-semibold">4:00 PM - 11:00 PM</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-center text-white/80">Walk-ins welcome! Pre-orders recommended for custom cakes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Cake Villa?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4">
                  <div className="text-purple-600 font-bold text-lg mb-2">🎂 Fresh Daily</div>
                  <p className="text-gray-600">All our cakes are baked fresh every day with premium ingredients</p>
                </div>
                <div className="p-4">
                  <div className="text-purple-600 font-bold text-lg mb-2">✨ Custom Designs</div>
                  <p className="text-gray-600">Customize your cake exactly how you want it</p>
                </div>
                <div className="p-4">
                  <div className="text-purple-600 font-bold text-lg mb-2">🚚 Free Delivery</div>
                  <p className="text-gray-600">Free delivery on orders over $50 within city limits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;