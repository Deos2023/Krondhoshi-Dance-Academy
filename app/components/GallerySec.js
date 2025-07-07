'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ✅ Move galleryImages outside the component to prevent re-creation on every render
const galleryImages = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  src: `/img/1 (${i + 1}).jpeg`, // Adjust to your actual path structure
  alt: `Gallery image ${i + 1}`
}));

export const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleImages, setVisibleImages] = useState([]);

  const imagesPerSlide = 5;

  // ✅ Update visible images only when currentSlide changes
  useEffect(() => {
    const startIndex = currentSlide * imagesPerSlide;
    setVisibleImages(galleryImages.slice(startIndex, startIndex + imagesPerSlide));
  }, [currentSlide]);

  // ✅ Auto-advance every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        (prev + 1) % Math.ceil(galleryImages.length / imagesPerSlide)
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-pink-800 mb-4"
            style={{ fontFamily: 'var(--font-quintessential)' }}
          >
            Glimpses of Krondoshi
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
        </div>

        {/* Gallery Grid Slider */}
        <div className="relative h-auto mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {visibleImages.map((image) => (
                <motion.div
                  key={image.id}
                  whileHover={{ scale: 1.03 }}
                  className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">View</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={() =>
              setCurrentSlide((prev) =>
                (prev - 1 + Math.ceil(galleryImages.length / imagesPerSlide)) %
                Math.ceil(galleryImages.length / imagesPerSlide)
              )
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-pink-100 transition-colors"
          >
            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) =>
                (prev + 1) % Math.ceil(galleryImages.length / imagesPerSlide)
              )
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-pink-100 transition-colors"
          >
            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {Array.from({ length: Math.ceil(galleryImages.length / imagesPerSlide) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentSlide ? 'bg-pink-600' : 'bg-pink-200'
              }`}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            className="inline-block px-6 py-3 border-2 border-pink-600 text-pink-600 rounded-full hover:bg-pink-50 transition duration-300 shadow-lg"
            href="/gallery"
          >
            Explore Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};
