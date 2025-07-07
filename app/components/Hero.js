import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export const HeroSection = () => {
  const bgImages = ['/bgSweet.png'];
  const sliderTexts = [
    "Preserving Classical Dance Traditions",
    "Nurturing Talent Since 2011",
    "Where Movement Becomes Art"
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Auto-rotate background images
  useEffect(() => {
    if (!isMounted) return;
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isMounted]);

  // Auto-rotate text slider
  useEffect(() => {
    if (!isMounted) return;
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % sliderTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isMounted]);

  return (
    <section className="relative h-screen overflow-hidden" style={{ pointerEvents: 'none' }}>
      {/* Background container with pointer-events-none */}
      <div className="absolute inset-0" style={{ zIndex: 0, pointerEvents: 'none' }}>
        {isMounted && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBgIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
              style={{ pointerEvents: 'none' }}
            >
              <Image
                src={bgImages[currentBgIndex]}
                alt="Dance Academy Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="opacity-90"
                style={{ pointerEvents: 'none' }}
                priority
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-pink-900/30 via-pink-900/10 to-transparent"
                style={{ pointerEvents: 'none' }}
              ></div>
              <div 
                className="absolute bottom-0 left-0 right-0 h-1/6 bg-gradient-to-t from-white via-pink-50/90 to-transparent"
                style={{ pointerEvents: 'none' }}
              ></div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Content with pointer-events-auto for interactive elements */}
      {isMounted && (
        <div 
          className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center pt-16"
          style={{ pointerEvents: 'auto' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-quintessential)' }}
            >
              Krondoshi Dance Academy
            </h1>
          </motion.div>

          {/* Text Slider at Bottom */}
          <div className="absolute bottom-20 left-0 right-0">
            <div className="max-w-2xl mx-auto px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl text-pink-800 font-medium bg-white/90 backdrop-blur-sm py-3 px-6 rounded-full inline-block shadow-lg"
                >
                  {sliderTexts[currentTextIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};