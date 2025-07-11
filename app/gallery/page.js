"use client"
import { useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GalleryPage = () => {
  // Image gallery data
  const images = Array.from({ length: 174 }, (_, i) => ({
    id: `img-${i + 1}`,
    src: `/img/1 (${i + 1}).jpeg`,
    type: 'image',
    alt: `Gallery image ${i + 1}`
  }));

  // Video gallery data (16 videos)
  const videos = Array.from({ length: 16 }, (_, i) => ({
    id: `video-${i + 1}`,
    src: `/vid/1 (${i + 1}).mp4`,
    type: 'video',
    alt: `Performance video ${i + 1}`,
    title: `Performance ${i + 1}`,
    year: `${2020 + (i % 3)}`,
    location: ['Kolkata', 'Mumbai', 'Delhi', 'Pune'][i % 4]
  }));

  const [selectedTab, setSelectedTab] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  // Combine media for "all" tab
  const allMedia = [...images, ...videos];

  // Get current media based on selected tab
  const currentMedia = selectedTab === 'all' 
    ? allMedia 
    : selectedTab === 'images' 
      ? images 
      : videos;

  const openItem = (item, index) => {
    setSelectedItem(item);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeItem = () => {
    if (selectedItem?.type === 'video' && videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  const navigateItem = (direction) => {
    setCurrentIndex((prev) => {
      let newIndex = direction === 'prev' ? prev - 1 : prev + 1;
      
      if (newIndex < 0) newIndex = currentMedia.length - 1;
      if (newIndex >= currentMedia.length) newIndex = 0;
      
      if (selectedItem?.type === 'video' && videoRef.current) {
        videoRef.current.pause();
      }
      
      setSelectedItem(currentMedia[newIndex]);
      return newIndex;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Gallery | Krondoshi Dance Academy</title>
        <meta name="description" content="Explore our collection of dance performances, classes, and events at Krondoshi Dance Academy." />
      </Head>

      {/* Hero Section - No background color */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-pink-800 mb-4 font-serif"
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

      {/* Tabs - No background color */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setSelectedTab('all')}
            className={`px-6 py-3 font-medium text-lg ${selectedTab === 'all' ? 'text-pink-600 border-b-2 border-pink-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            All Media
          </button>
          <button
            onClick={() => setSelectedTab('images')}
            className={`px-6 py-3 font-medium text-lg ${selectedTab === 'images' ? 'text-pink-600 border-b-2 border-pink-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Images ({images.length})
          </button>
          <button
            onClick={() => setSelectedTab('videos')}
            className={`px-6 py-3 font-medium text-lg ${selectedTab === 'videos' ? 'text-pink-600 border-b-2 border-pink-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Videos ({videos.length})
          </button>
        </div>
      </div>

      {/* Gallery Grid - No background color */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {currentMedia.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.5 }}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer relative"
              onClick={() => openItem(item, index)}
            >
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full">
                  <video
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    preload="metadata"
                    disablePictureInPicture
                    disableRemotePlayback
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button 
            onClick={closeItem}
            className="absolute top-6 right-6 text-white hover:text-pink-300 transition-colors duration-300 z-50"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button 
            onClick={() => navigateItem('prev')}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-300 transition-colors duration-300 z-50 p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex items-center justify-center">
            {selectedItem.type === 'image' ? (
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                fill
                className="object-contain"
                priority
              />
            ) : (
              <div className="w-full aspect-video">
                <video
                  ref={videoRef}
                  controls
                  autoPlay
                  className="w-full h-full rounded-lg"
                >
                  <source src={selectedItem.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>

          <button 
            onClick={() => navigateItem('next')}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-300 transition-colors duration-300 z-50 p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center">
            {selectedItem.type === 'video' && (
              <>
                <h3 className="text-xl font-bold mb-1">{selectedItem.title}</h3>
                <p className="text-sm">{selectedItem.location} • {selectedItem.year}</p>
              </>
            )}
            <div className="mt-2">
              {currentIndex + 1} / {currentMedia.length}
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA - No background color */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-800 mb-6 font-serif">
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
      </section>
    </div>
  );
};

export default GalleryPage;