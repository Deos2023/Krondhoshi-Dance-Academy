import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const AboutSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariantsRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="py-20 px-4 relative bg-white"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Decorative floral pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M30,50 Q40,30 50,50 Q60,70 50,50 Q40,30 30,50" 
            fill="none" 
            stroke="#ec4899" 
            strokeWidth="0.5"
            transform="rotate(0, 50, 50)"
          />
          <path 
            d="M30,50 Q40,30 50,50 Q60,70 50,50 Q40,30 30,50" 
            fill="none" 
            stroke="#ec4899" 
            strokeWidth="0.5"
            transform="rotate(45, 50, 50)"
          />
          <path 
            d="M30,50 Q40,30 50,50 Q60,70 50,50 Q40,30 30,50" 
            fill="none" 
            stroke="#ec4899" 
            strokeWidth="0.5"
            transform="rotate(90, 50, 50)"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image section with overlapping images */}
        <div className="relative h-96">
          <motion.div 
            className="absolute top-0 left-0 w-3/4 h-4/5 border-4 border-white shadow-2xl z-10"
            variants={imageVariants}
          >
            <Image 
              src="/img/1 (2).jpeg"
              alt="Dance performance at Krondoshi"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 right-0 w-3/4 h-4/5 border-4 border-white shadow-2xl"
            variants={imageVariantsRight}
            transition={{ delay: 0.3 }}
          >
            <Image 
              src="/img/1 (1).jpeg"
              alt="Students learning at Krondoshi"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-600 rounded-full flex items-center justify-center shadow-lg z-20"
            variants={itemVariants}
            transition={{ delay: 0.6 }}
          >
            <span className="text-white text-4xl">10+</span>
          </motion.div>
          
          <motion.div 
            className="absolute -top-4 -right-4 w-20 h-20 bg-fuchsia-500 rounded-full flex items-center justify-center shadow-lg z-20"
            variants={itemVariants}
            transition={{ delay: 0.8 }}
          >
            <span className="text-white text-2xl">200+</span>
          </motion.div>
        </div>

        {/* Text section */}
        <motion.div variants={containerVariants}>
          <motion.h2 
            className="text-4xl font-bold text-pink-800 mb-6 font-serif" 
            style={{ fontFamily: 'var(--font-quintessential)' }}
            variants={itemVariants}
          >
            Our Dance Journey
          </motion.h2>
          
          <motion.p className="text-lg text-gray-700 mb-4" variants={itemVariants}>
            Established in 2011, Krondoshi Dance Academy has been a beacon of classical Indian dance in Howrah, nurturing talents from age 3 to 60+.
          </motion.p>
          
          <motion.p className="text-lg text-gray-700 mb-6" variants={itemVariants}>
            We specialize in Shankar style while embracing the diversity of Rabindrik, Nazrul Nritya, Folk, Odissi, and Bharatnatyam. Our unique approach combines traditional techniques with innovative teaching methodologies.
          </motion.p>
          
          <motion.div className="space-y-3" variants={containerVariants}>
            <motion.div className="flex items-start" variants={itemVariants}>
              <div className="text-pink-600 mr-3 mt-1">✓</div>
              <p className="text-gray-700">Comprehensive curriculum from basic to advanced levels</p>
            </motion.div>
            
            <motion.div className="flex items-start" variants={itemVariants}>
              <div className="text-pink-600 mr-3 mt-1">✓</div>
              <p className="text-gray-700">Body and mind therapy through dance for working professionals</p>
            </motion.div>
            
            <motion.div className="flex items-start" variants={itemVariants}>
              <div className="text-pink-600 mr-3 mt-1">✓</div>
              <p className="text-gray-700">Performance wing for talented students</p>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} transition={{ delay: 0.4 }}>
            <Link href="/about" className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white rounded-full hover:from-pink-700 hover:to-fuchsia-700 transition duration-300 shadow-lg shadow-pink-200">
              Learn More About Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};