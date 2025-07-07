"use client"
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    interest: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendWhatsAppMessage = () => {
    const { name, phone, email, message, interest } = formData;
    const text = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AInterest: ${interest}%0AMessage: ${message}`;
    window.open(`https://wa.me/917980930874?text=${text}`, '_blank');
  };

  const classSchedules = [
    {
      category: "Children (3-12 years)",
      classes: [
        { name: "Little Dancers", time: "Mon & Wed, 4-5 PM" },
        { name: "Junior Classical", time: "Tue & Thu, 4-5:30 PM" }
      ]
    },
    {
      category: "Youth (13-25 years)",
      classes: [
        { name: "Shankar Style Intensive", time: "Mon, Wed, Fri 5-7 PM" },
        { name: "Performance Wing", time: "Sat, 2-5 PM" }
      ]
    },
    {
      category: "Adults (25+ years)",
      classes: [
        { name: "Classical Beginners", time: "Mon & Wed, 7-8:30 PM" },
        { name: "Dance Therapy", time: "Sat, 8-9:30 AM" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>Contact Us | Krondoshi Dance Academy</title>
        <meta name="description" content="Get in touch with Krondoshi Dance Academy for class information, location details, and inquiries." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        <div className="absolute inset-0 z-0">
         
          <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-pink-600/30"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif"
            style={{ fontFamily: 'var(--font-quintessential)' }}
          >
            Connect With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-white max-w-2xl mx-auto"
          >
            Reach out for class information, performances, or any questions
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Information */}
          <div>
            {/* Class Schedule */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
              }}
              className="mb-12 bg-pink-50 rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-pink-800 mb-6 font-serif"
                style={{ fontFamily: 'var(--font-quintessential)' }}>
                Class Schedule
              </h2>
              
              <div className="space-y-6">
                {classSchedules.map((schedule, index) => (
                  <div key={index} className="border-l-4 border-pink-500 pl-4">
                    <h3 className="text-xl font-bold text-pink-700 mb-3">{schedule.category}</h3>
                    <ul className="space-y-3">
                      {schedule.classes.map((cls, clsIndex) => (
                        <li key={clsIndex} className="flex justify-between items-baseline">
                          <span className="text-gray-800 font-medium">{cls.name}</span>
                          <span className="text-pink-600 text-sm bg-pink-100 px-2 py-1 rounded-full">
                            {cls.time}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.6 } }
              }}
              className="bg-white rounded-xl p-6 shadow-lg border border-pink-100"
            >
              <h2 className="text-3xl font-bold text-pink-800 mb-6 font-serif"
                style={{ fontFamily: 'var(--font-quintessential)' }}>
                Contact Details
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-pink-600 mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Our Studio</h3>
                    <p className="text-gray-600">Ambika Kundu Lane, Ramrajatala</p>
                    <p className="text-gray-600">Howrah - 711104, West Bengal</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-pink-600 mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Phone Numbers</h3>
                    <p className="text-gray-600">Rumi Chatterjee: +91 79809 30874 / +91 90079 59733</p>
                    <p className="text-gray-600">Koushik Chatterjee: +91 98300 62112</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-pink-600 mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Email Us</h3>
                    <p className="text-gray-600">krondoshi.kolkata@gmail.com</p>
                    <p className="text-gray-600">rumikrondoshi@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-pink-600 mr-4 mt-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">WhatsApp</h3>
                    <p className="text-gray-600">Message us directly for quick response</p>
                    <a 
                      href="https://wa.me/919007959733" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300 text-sm"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form & Map */}
          <div className="space-y-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
              }}
              className="bg-white p-6 rounded-xl shadow-xl border border-pink-100"
            >
              <h2 className="text-3xl font-bold text-pink-800 mb-6 font-serif"
                style={{ fontFamily: 'var(--font-quintessential)' }}>
                Send Us a Message
              </h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-gray-700 mb-2">Interest</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="">Select an option</option>
                    <option value="Children Classes">Children Classes</option>
                    <option value="Youth Programs">Youth Programs</option>
                    <option value="Adult Classes">Adult Classes</option>
                    <option value="Performance Opportunities">Performance Opportunities</option>
                    <option value="Workshop Inquiry">Workshop Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Tell us about your interest in dance..."
                  ></textarea>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <motion.button
                    type="button"
                    onClick={sendWhatsAppMessage}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 shadow-lg flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send via WhatsApp
                  </motion.button>
                  
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition duration-300 shadow-lg"
                  >
                    Send Email
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }
              }}
              className="rounded-xl overflow-hidden shadow-xl border border-pink-100 h-96"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3683.7889856683255!2d88.296344!3d22.5869942!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027949659067b1%3A0xf4914224192d2170!2sKRONDOSHI%20DANCE%20ACADEMY%20entertenment!5e0!3m2!1sen!2sin!4v1751889257400!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Krondoshi Dance Academy Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;