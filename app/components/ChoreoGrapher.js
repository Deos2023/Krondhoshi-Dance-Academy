import { motion } from 'framer-motion';
import Image from 'next/image';

export const ChoreographerSection = () => {
  return (
    <section className="py-20 px-4 bg-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl font-bold text-pink-800 mb-4"
            style={{ fontFamily: 'var(--font-quintessential)' }}
          >
            About Our Choreographer
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-96"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 left-0 w-3/4 h-4/5 border-4 border-white shadow-2xl z-10">
              <Image 
                src="/img/1 (9).jpeg" // Add your image
                alt="Rumi Chatterjee"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-3/4 h-4/5 border-4 border-white shadow-2xl">
              <Image 
                src="/img/1 (37).jpeg" // Add your image
                alt="Rumi Chatterjee performing"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 
              className="text-3xl font-bold text-pink-700 mb-6"
              style={{ fontFamily: 'var(--font-quintessential)' }}
            >
              Rumi Chatterjee
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              A distinguished performer and choreographer from India and a senior disciple of Mrs. Tanusree Shankar, 
              Rumi Chatterjee has earned recognition for her contributions to the creative and traditional dance forms of India.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              "KRONDOSHI" is committed to engaging human instinct, intellect, and emotion through innovative productions. 
              By blending various classical moves, semi-classical styles, folk traditions, rituals, and gestures from daily life, 
              our technique demonstrates the excitement and creativity possible when these elements are reimagined in a contemporary context.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};