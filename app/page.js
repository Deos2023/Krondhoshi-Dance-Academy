

"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { AboutSection } from './components/AboutSec';
import { DanceOfferings } from './components/ServiceSec';
import { GallerySection } from './components/GallerySec';
import { HeroSection } from './components/Hero';
import { ChoreographerSection } from './components/ChoreoGrapher';
import { ProductionsSection } from './components/ProductionSection';
import { PerformancesSection } from './components/Performence';
import { AchievementSection } from './components/Achievement';

const Home = () => {
  // Hero section dancer images
  const dancerImages = [
    '/dancers/dancer (1).png',
    '/dancers/dancer (2).png',
    '/dancers/dancer (3).png',
    '/dancers/dancer (4).png',
    '/dancers/dancer (5).png',
    '/dancers/dancer (6).png',
  ];

  const [currentLeftImage, setCurrentLeftImage] = useState(0);
  const [currentRightImage, setCurrentRightImage] = useState(2);

  // Gallery images
  const galleryImages = Array.from({ length: 10 }, (_, i) => `/img/1 (${i + 1}).jpeg`);

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Student (5 years)",
      content: "Krondoshi has transformed my understanding of classical dance. The teachers are exceptional and patient.",
    },
    {
      id: 2,
      name: "Arjun Banerjee",
      role: "Parent",
      content: "My daughter has blossomed under their guidance. The academy's approach to teaching traditional dance forms is remarkable.",
    },
    {
      id: 3,
      name: "Mitali Sen",
      role: "Working Professional",
      content: "The body and mind therapy through dance has been life-changing. I look forward to every session.",
    },
  ];

  // Rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLeftImage((prev) => (prev + 1) % 3);
      setCurrentRightImage((prev) => (prev + 1) % 3 + 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Krondoshi Dance Academy | Classical Dance School in Howrah</title>
        <meta name="description" content="Krondoshi Dance Academy teaches classical Indian dance forms including Shankar style, Rabindrik, Nazrul Nritya, Folk, Odissi, and Bharatnatyam for all ages 3+ to 60+." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
<HeroSection />

      {/* About Us Section */}
    
      <AboutSection />

      {/* Services Section */}
    
<DanceOfferings />
     
<ChoreographerSection />
<ProductionsSection />
<PerformancesSection />
<AchievementSection />

      <GallerySection/>
     <div className="relative w-full max-w-[700px] h-auto aspect-[800/700] mx-auto">
  <Image
    src="/frame.png"
    alt="Hero Background"
    width={700}
    height={600}
    className="w-full h-full object-contain"
    priority
  />
</div>



      {/* Testimonials Section */}
      <section className="relative py-20 bg-pink-800 text-white overflow-hidden ">
  {/* Top White Blend */}
  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-pink-800 z-0" />

  {/* Bottom White Blend */}
  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-pink-800 z-0" />

  {/* Actual content with higher z-index */}
  <div className="relative z-10 max-w-6xl mx-auto px-10 py-20">
    <div className="text-center mb-16">
      <h2
        className="text-4xl font-bold mb-4 font-serif"
        style={{ fontFamily: 'var(--font-quintessential)' }}
      >
        Voices of Our Dancers
      </h2>
      <div className="w-24 h-1 bg-pink-300 mx-auto"></div>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center text-pink-800 font-bold mr-4">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold">{testimonial.name}</h4>
              <p className="text-pink-200 text-sm">{testimonial.role}</p>
            </div>
          </div>
          <p className="italic">"{testimonial.content}"</p>
          <div className="flex mt-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-5 h-5 text-pink-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text section */}
          <div>
            <h2 className="text-4xl font-bold text-pink-800 mb-6 font-serif" 
             style={{
          fontFamily: 'var(--font-quintessential)',
        
        }}>Connect With Us</h2>
            <p className="text-lg text-gray-700 mb-6">
              Ready to begin your dance journey? Reach out to us for class schedules, fees, or any questions you may have.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-pink-600 mr-4 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Our Address</h4>
                  <p className="text-gray-600">Ambika Kundu Lane, Ramrajatala, Howrah - 711104</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-pink-600 mr-4 mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Contact Numbers</h4>
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
                  <h4 className="font-bold text-gray-800">Email Us</h4>
                  <p className="text-gray-600">krondoshi.kolkata@gmail.com</p>
                  <p className="text-gray-600">rumikrondoshi@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-pink-100">
            <h3 className="text-2xl font-bold text-pink-800 mb-6"
             style={{
          fontFamily: 'var(--font-quintessential)',
        
        }}>Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Tell us about your interest in dance..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6 font-serif" 
           style={{
          fontFamily: 'var(--font-quintessential)',
        
        }}>Begin Your Dance Journey Today</h2>
          <p className="text-xl mb-8">Whether you're 3 or 60+, it's never too early or too late to experience the joy of classical dance.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link className="px-8 py-3 bg-white text-pink-800 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg font-bold" href="/classes">
              
                View Class Schedule
              
            </Link>
            <Link  href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition duration-300 shadow-lg font-bold">
            
                Book a Trial Class
            
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-pink-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="w-20 h-20 relative mb-4">
              <Image 
                src="/logo-white.png" 
                alt="Krondoshi Dance Academy Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-pink-200">Preserving the rich heritage of Indian classical dance since 2011.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-pink-200 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-pink-200 hover:text-white">About Us</Link></li>
              <li><Link href="/classes" className="text-pink-200 hover:text-white">Classes</Link></li>
              <li><Link href="/gallery" className="text-pink-200 hover:text-white">Gallery</Link></li>
              <li><Link href="/contact" className="text-pink-200 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Dance Forms</h4>
            <ul className="space-y-2">
              <li><span className="text-pink-200">Shankar Style</span></li>
              <li><span className="text-pink-200">Rabindrik Nritya</span></li>
              <li><span className="text-pink-200">Nazrul Nritya</span></li>
              <li><span className="text-pink-200">Odissi</span></li>
              <li><span className="text-pink-200">Bharatnatyam</span></li>
              <li><span className="text-pink-200">Folk Dances</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="w-10 h-10 bg-pink-800 rounded-full flex items-center justify-center hover:bg-pink-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-800 rounded-full flex items-center justify-center hover:bg-pink-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748 1.857.344.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-800 rounded-full flex items-center justify-center hover:bg-pink-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-800 rounded-full flex items-center justify-center hover:bg-pink-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
            <p className="text-pink-200">© 2011-{new Date().getFullYear()} Krondoshi Dance Academy. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;