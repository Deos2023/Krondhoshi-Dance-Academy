"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const DanceTroupeSection = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Troupe performance data
  const performances = [
    {
      id: 1,
      title: "US Consulate Cultural Event",
      year: "2018",
      description: "Represented Indian culture at an international diplomatic gathering in Kolkata",
      image: "/img/1 (169).jpeg"
    },
    {
      id: 2,
      title: "Rabindra Bhaban Performance",
      year: "2018",
      description: "Special dance drama based on Tagore's works in Patna",
      image: "/img/1 (170).jpeg"
    },
    {
      id: 3,
      title: "Durga Puja Celebrations",
      year: "2022",
      description: "Featured performance at Khadki Kali Bari in Pune",
      image: "/img/1 (174).jpeg"
    },
    {
      id: 4,
      title: "Cultural Festival in Navi Mumbai",
      year: "2022",
      description: "Fusion performance blending classical and contemporary styles",
      image: "/img/1 (172).jpeg"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-pink-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-pink-300 mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-purple-300 mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-pink-800 mb-4 font-serif"
          style={{ fontFamily: 'var(--font-quintessential)' }}>
            Krondoshi Dance Troupe
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our professional performance wing that brings Indian classical dance to prestigious stages across India
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/bgSweet.png"
              alt="Krondoshi Dance Troupe performing"
              width={600}
              height={400}
              className="w-full h-auto"
            />
            <div className="absolute inset-0  flex items-end p-6">
              <h3 className="text-2xl font-bold text-pink-600" style={{ fontFamily: 'var(--font-quintessential)' }}>Professional Group Performances</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-pink-800 mb-4"
            style={{ fontFamily: 'var(--font-quintessential)' }}>About the Troupe</h3>
            <p className="text-gray-700 mb-4">
              The Krondoshi Dance Troupe is the professional performance wing of our academy, 
              comprising our most advanced students and faculty members. Since its inception, 
              the troupe has:
            </p>
            <ul className="space-y-3 mb-6 text-neutral-600">
              <li className="flex items-start ">
                <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Performed at over 50 prestigious events across India</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Collaborated with cultural organizations and embassies</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Developed innovative productions blending traditional and contemporary styles</span>
              </li>
            </ul>
            <Link 
              href="/about" 
              className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-300 shadow-lg"
            >
              Learn More About the Troupe
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {performances.map((performance) => (
            <motion.div 
              key={performance.id}
              variants={fadeInUp}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="relative h-48">
                <Image 
                  src={performance.image}
                  alt={performance.title}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-pink-600 font-medium">{performance.year}</span>
                <h3 className="text-xl font-bold text-pink-800 mt-2 mb-3"
                style={{ fontFamily: 'var(--font-quintessential)' }}>{performance.title}</h3>
                <p className="text-gray-700 text-sm">{performance.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DanceTroupeSection;