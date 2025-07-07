import { motion } from 'framer-motion';
import Image from 'next/image';

export const DanceOfferings = () => {
   const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Custom SVG icons for each category
  const ClassicalIcon = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 text-pink-600">
      <path fill="currentColor" d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </svg>
  );

  const FolkIcon = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 text-pink-600">
      <path fill="currentColor" d="M12 3c-4.97 0-9 2.18-9 4.95v9.9C3 19.72 7.03 22 12 22s9-2.28 9-5.15v-9.9C21 5.18 16.97 3 12 3zm0 2c3.86 0 7 1.29 7 2.95v1.1c-1.9-1.37-4.39-2.15-7-2.15s-5.1.78-7 2.15v-1.1C5 6.29 8.14 5 12 5zm0 12c-3.86 0-7-1.29-7-2.95v-1.1c1.9 1.37 4.39 2.15 7 2.15s5.1-.78 7-2.15v1.1c0 1.66-3.14 2.95-7 2.95z"/>
    </svg>
  );

  const TherapyIcon = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 text-pink-600">
      <path fill="currentColor" d="M12 6.5c1.38 0 2.5 1.12 2.5 2.5 0 .74-.33 1.39-.83 1.85l3.22 3.22c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0l-3.22-3.22c-.46.5-1.11.83-1.85.83-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5zm0-2C9.46 4.5 7.5 6.46 7.5 9c0 1.79.88 3.37 2.22 4.35l-4.36 4.36c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.36-4.36C10.63 15.62 12.21 16.5 14 16.5c2.54 0 4.5-2.46 4.5-5s-2.46-5-4.5-5z"/>
    </svg>
  );

  return (
    <>
     <div className="w-full">
      <Image
        src="/pt7.png" // public folder image path
        alt="Full width image"
        width={1200}            // Required
        height={600}            // Required
        className="w-full h-auto object-cover"
      />
    </div>
    <section className="relative  overflow-hidden bg-amber-50">
     

      <div className="max-w-6xl mx-auto py-10 px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-[#A3004C] mb-4"
            style={{ fontFamily: 'var(--font-quintessential)' }}
            variants={itemVariants}
          >
            Our Dance Offerings
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-pink-600 mx-auto"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Classical Dance Card */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 relative overflow-hidden group"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <ClassicalIcon />
              </div>
              <h3 className="text-xl font-bold text-center text-[#A3004C] mb-4">Classical Dance Forms</h3>
              <ul className="space-y-2 text-gray-700">
                {["Shankar Style (Specialty)", "Rabindrik & Nazrul Nritya", "Odissi & Bharatnatyam"].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-amber-600 mr-2">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Folk Dance Card */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 relative overflow-hidden group"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ delay: 0.1 }}
          >
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <FolkIcon />
              </div>
              <h3 className="text-xl font-bold text-center text-[#A3004C] mb-4">Folk & Creative Dance</h3>
              <ul className="space-y-2 text-gray-700">
                {["Various Indian Folk Dances", "Creative Movement", "Fusion Choreography"].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-amber-600 mr-2">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Therapeutic Programs Card */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 relative overflow-hidden group"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <TherapyIcon />
              </div>
              <h3 className="text-xl font-bold text-center text-[#A3004C] mb-4">Therapeutic Programs</h3>
              <ul className="space-y-2 text-gray-700">
                {["Body & Mind Therapy", "Senior Citizen Programs", "Working Professionals"].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-amber-600 mr-2">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    <div className="w-full">
      <Image
        src="/pt8.png" // public folder image path
        alt="Full width image"
        width={1200}            // Required
        height={600}            // Required
        className="w-full h-auto object-cover"
      />
    </div>
    </>
  );
};