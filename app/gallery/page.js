"use client"
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GalleryPage = () => {
  const images = Array.from({ length: 62 }, (_, i) => `/img/1 (${i + 1}).jpeg`);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    setSelectedImage((prev) => {
      if (direction === 'prev') {
        return prev === 0 ? images.length - 1 : prev - 1;
      } else {
        return prev === images.length - 1 ? 0 : prev + 1;
      }
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Gallery | Krondoshi Dance Academy</title>
        <meta name="description" content="Explore our collection of dance performances, classes, and events at Krondoshi Dance Academy." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden bg-gradient-to-b from-pink-100 to-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-pink-800 mb-4 font-serif"
            style={{ fontFamily: 'var(--font-quintessential)' }}
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-pink-700 max-w-2xl mx-auto"
          >
            Capturing moments of grace, passion, and artistic expression
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.5 }}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openImage(index)}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button 
            onClick={closeImage}
            className="absolute top-6 right-6 text-white hover:text-pink-300 transition-colors duration-300 z-50"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button 
            onClick={() => navigateImage('prev')}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-300 transition-colors duration-300 z-50 p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative w-full max-w-6xl h-full max-h-[90vh]">
            <Image
              src={images[selectedImage]}
              alt={`Gallery image ${selectedImage + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          <button 
            onClick={() => navigateImage('next')}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-300 transition-colors duration-300 z-50 p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-lg">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-pink-800 mb-6 font-serif"
            style={{ fontFamily: 'var(--font-quintessential)' }}>
            Experience the Art of Dance
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join us for classes or book a performance for your event
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/classes"
              className="px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-300 shadow-lg font-bold"
            >
              View Classes
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="px-8 py-3 border-2 border-pink-600 text-pink-600 rounded-full hover:bg-pink-50 transition duration-300 shadow-lg font-bold"
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;