"use client";
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header Section */}
      <div className="bg-[#126539] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Contact Us
          </h1>
          <p className="text-center text-[#fcb51c] text-lg max-w-2xl mx-auto">
            We're here to help and answer any questions you might have. We look forward to hearing from you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Address Card */}
          <div className="bg-white border-t-4 border-[#126539] rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <div className="bg-[#fcb51c]/20 p-4 rounded-full">
                <MapPin className="w-8 h-8 text-[#126539]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Address</h3>
            <p className="text-center text-gray-700">
              Plot No - 622/623/624, Nafed Building, Market Yard Gultekdi, Pune Maharashtra - 411037
            </p>
          </div>

          {/* Hours Card */}
          <div className="bg-white border-t-4 border-[#d37e39] rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <div className="bg-[#d37e39]/20 p-4 rounded-full">
                <Clock className="w-8 h-8 text-[#d37e39]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Opening Hours</h3>
            <p className="text-center text-gray-700">
              Monday - Saturday<br />10:00 AM - 06:00 PM
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white border-t-4 border-[#fcb51c] rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <div className="bg-[#fcb51c]/20 p-4 rounded-full">
                <Phone className="w-8 h-8 text-[#fcb51c]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Call Us Now</h3>
            <div className="text-center text-gray-700">
              <p><strong>Tel:</strong> +91 20 2427 2827</p>
              <p><strong>Mob:</strong> 89567 01753</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white border-t-4 border-[#126539] rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <div className="bg-[#126539]/20 p-4 rounded-full">
                <Mail className="w-8 h-8 text-[#126539]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Email Us</h3>
            <p className="text-center text-gray-700">
              mahafpc@gmail.com<br />mahafpc@mahafpc.org
            </p>
          </div>
        </div>

        {/* Form + Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-[#126539]/30">
            <h2 className="text-3xl font-bold text-[#126539] mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-[#126539]">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#126539] outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-[#126539]">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#126539] outline-none"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1 text-[#126539]">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 12345 67890"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#126539] outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-[#126539]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#126539] outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#126539] text-white font-semibold py-3 rounded-lg hover:bg-[#0f5330] transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map / Info */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-[#d37e39]/30">
            <h2 className="text-3xl font-bold text-[#d37e39] mb-6">Visit Our Office</h2>
            <div className="bg-[#fcb51c]/10 rounded-lg h-64 flex items-center justify-center mb-6">
              <div className="text-center text-[#d37e39]">
                <MapPin className="w-16 h-16 mx-auto mb-3" />
                <p className="text-sm">Map Integration Area</p>
                <p className="text-xs">Google Maps Integration</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 bg-[#fcb51c]/20 p-4 rounded-lg">
                <MapPin className="w-6 h-6 text-[#126539]" />
                <div>
                  <h4 className="font-semibold text-[#126539]">Location</h4>
                  <p className="text-sm text-black">Gultekdi, Pune — Easy to reach via public transport</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-[#d37e39]/10 p-4 rounded-lg">
                <Clock className="w-6 h-6 text-[#d37e39]" />
                <div>
                  <h4 className="font-semibold text-[#d37e39]">Business Hours</h4>
                  <p className="text-sm text-black">Mon–Sat, 10 AM – 6 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
