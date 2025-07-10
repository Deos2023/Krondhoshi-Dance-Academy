"use client"
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GalleryPage = () => {
  // Image gallery data
  const images = Array.from({ length: 62 }, (_, i) => ({
    src: `/img/1 (${i + 1}).jpeg`,
    type: 'image',
    alt: `Gallery image ${i + 1}`
  }));

  // Video gallery data (replace with your actual video data)
  const videos = [
    {
      id: 'video1',
      title: 'Kobiguru Rabindra Nath Tagore Anniversary',
      thumbnail: '/video-thumbnails/tagore.jpg',
      youtubeId: 'your-youtube-id-1',
      year: '2018',
      location: 'Rabindra Bhaban, Patna'
    },
    {
      id: 'video2',
      title: 'Khadki Kali Bari Durga Puja',
      thumbnail: '/video-thumbnails/durga-puja.jpg',
      youtubeId: 'your-youtube-id-2',
      year: '2022',
      location: 'Pune'
    },
    {
      id: 'video3',
      title: 'Vashi Cultural Association',
      thumbnail: '/video-thumbnails/vashi.jpg',
      youtubeId: 'your-youtube-id-3',
      year: '2022',
      location: 'Navi Mumbai'
    },
    // Add more videos as needed
  ];

  const [selectedTab, setSelectedTab] = useState('images');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openImage = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
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

  const openVideo = (video) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
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

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setSelectedTab('images')}
            className={`px-6 py-3 font-medium text-lg ${selectedTab === 'images' ? 'text-pink-600 border-b-2 border-pink-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Images
          </button>
          <button
            onClick={() => setSelectedTab('videos')}
            className={`px-6 py-3 font-medium text-lg ${selectedTab === 'videos' ? 'text-pink-600 border-b-2 border-pink-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Performance Videos
          </button>
        </div>
      </div>

      {/* Images Gallery */}
      {selectedTab === 'images' && (
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {images.map((image, index) => (
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
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Videos Gallery */}
      {selectedTab === 'videos' && (
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div 
                  className="relative aspect-video cursor-pointer"
                  onClick={() => openVideo(video)}
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-pink-800 mb-2">{video.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {video.location} • {video.year}
                  </div>
                  <button
                    onClick={() => openVideo(video)}
                    className="text-pink-600 hover:text-pink-800 font-medium flex items-center"
                  >
                    Watch Video
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Image Lightbox */}
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
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
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

      {/* Video Lightbox */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button 
            onClick={closeVideo}
            className="absolute top-6 right-6 text-white hover:text-pink-300 transition-colors duration-300 z-50"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative w-full max-w-6xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center">
            <h3 className="text-xl font-bold mb-1">{selectedVideo.title}</h3>
            <p className="text-sm">{selectedVideo.location} • {selectedVideo.year}</p>
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