"use client"
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { DanceOfferings } from '../components/ServiceSec';

const ClassesPage = () => {
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

  // Class offerings data
  const classCategories = [
    {
      title: "Children's Programs (3-12 years)",
      description: "Foundational training in classical dance forms with a focus on fun, creativity, and discipline.",
      classes: [
        {
          name: "Little Dancers (3-5 yrs)",
          description: "Introduction to rhythm, movement, and basic dance postures through games and stories.",
          schedule: "Mon & Wed, 4-5 PM",
          image: "/img/1 (45).jpeg"
        },
        {
          name: "Junior Classical (6-9 yrs)",
          description: "Basic techniques of Shankar style and other classical forms with age-appropriate choreography.",
          schedule: "Tue & Thu, 4-5:30 PM",
          image: "/img/1 (57).jpeg"
        },
        {
          name: "Pre-Teen Ensemble (10-12 yrs)",
          description: "More advanced training with performance opportunities in school events and local festivals.",
          schedule: "Sat, 10 AM-12 PM",
          image: "/img/1 (53).jpeg"
        }
      ]
    },
    {
      title: "Youth Programs (13-25 years)",
      description: "Comprehensive training for serious students with performance wing opportunities.",
      classes: [
        {
          name: "Shankar Style Intensive",
          description: "In-depth study of the Shankar technique under the guidance of Rumi Chatterjee.",
          schedule: "Mon, Wed, Fri 5-7 PM",
          image: "/img/1 (43).jpeg"
        },
        {
          name: "Rabindrik & Nazrul Nritya",
          description: "Exploring the lyrical dance forms inspired by Tagore and Nazrul's works.",
          schedule: "Tue & Thu, 5-7 PM",
          image: "/img/1 (60).jpeg"
        },
        {
          name: "Performance Wing",
          description: "For advanced students to participate in professional productions and tours.",
          schedule: "Sat, 2-5 PM",
          image: "/img/1 (61).jpeg"
        }
      ]
    },
    {
      title: "Adult Programs (25+ years)",
      description: "Classes designed for working professionals and dance enthusiasts.",
      classes: [
        {
          name: "Classical Dance for Beginners",
          description: "Learn Odissi or Bharatnatyam fundamentals at your own pace.",
          schedule: "Mon & Wed, 7-8:30 PM",
          image: "/img/1 (21).jpeg"
        },
        {
          name: "Dance Therapy",
          description: "Combining movement with mindfulness for stress relief and wellness.",
          schedule: "Sat, 8-9:30 AM",
          image: "/img/1 (25).jpeg"
        },
        {
          name: "Weekend Workshop Series",
          description: "Monthly intensive workshops on specific dance forms or techniques.",
          schedule: "1st Sunday of month, 10 AM-2 PM",
          image: "/img/1 (39).jpeg"
        }
      ]
    },
    {
      title: "Senior Citizen Programs",
      description: "Gentle movement classes focusing on health, flexibility, and cultural connection.",
      classes: [
        {
          name: "Silver Swans",
          description: "Adapted classical movements for mobility and cognitive health.",
          schedule: "Tue & Thu, 9-10 AM",
          image: "/img/1 (10).jpeg"
        }
      ]
    },
    {
      title: "Corporate & Group Workshops",
      description: "Custom programs for team building and cultural enrichment.",
      classes: [
        {
          name: "Team Rhythm",
          description: "Folk dance workshops emphasizing coordination and teamwork.",
          schedule: "Custom scheduling",
          image: "/img/1 (9).jpeg"
        },
        {
          name: "Festival Specials",
          description: "Seasonal workshops preparing groups for Durga Puja or other celebrations.",
          schedule: "Seasonal",
          image: "/img/1 (6).jpeg"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Dance Classes | Krondoshi Academy of Performing Arts</title>
        <meta name="description" content="Explore our diverse dance programs from classical to contemporary for all ages and skill levels at Krondoshi." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">


        <div className="absolute inset-0 z-0">
         
          <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-pink-600/30"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif"
            style={{ fontFamily: 'var(--font-quintessential)' }}>
            Our Dance Programs
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            From classical foundations to contemporary expressions, discover the perfect dance journey for every age and skill level.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <Link 
              href="#class-categories"
              className="px-8 py-3 bg-white text-pink-800 rounded-full hover:bg-pink-100 transition duration-300 shadow-lg font-bold inline-block"
            >
              Explore Classes
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <DanceOfferings />

      {/* Class Categories */}
      <section id="class-categories" className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-pink-800 mb-4 font-serif"
            style={{ fontFamily: 'var(--font-quintessential)' }}>
            Dance for Every Stage of Life
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            At Krondoshi, we believe dance is for everyone. Our programs are carefully designed to meet the needs of students at different ages and skill levels.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-20"
        >
          {classCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className=" rounded-xl p-8 "
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-pink-800 mb-2 font-serif"
                  style={{ fontFamily: 'var(--font-quintessential)' }}>
                  {category.title}
                </h3>
                <p className="text-gray-700">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.classes.map((classItem, classIndex) => (
                  <motion.div
                    key={classIndex}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                  >
                    <div className="relative h-48">
                      <Image 
                        src={classItem.image}
                        alt={classItem.name}
                        layout="fill"
                        objectFit="cover"
                        className="hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-pink-800 mb-2">{classItem.name}</h4>
                      <p className="text-gray-600 mb-4">{classItem.description}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {classItem.schedule}
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link 
                          href="/contact"
                          className="inline-block px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-300 text-sm"
                        >
                          Enquire Now
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Krondoshi */}
      <section className="py-20 bg-pink-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 font-serif"
              style={{ fontFamily: 'var(--font-quintessential)' }}>
              Why Train With Us
            </h2>
            <div className="w-24 h-1 bg-pink-300 mx-auto"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Guru-Shishya Tradition</h3>
              <p className="text-center">Learn in the authentic Indian tradition with personalized attention from experienced gurus.</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Performance Opportunities</h3>
              <p className="text-center">Regular stage performances at prestigious venues and festivals across India.</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Holistic Development</h3>
              <p className="text-center">We nurture not just technique but also creativity, discipline, and artistic expression.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-pink-800 mb-4 font-serif"
            style={{ fontFamily: 'var(--font-quintessential)' }}>
            What Our Students Say
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              name: "Priya Sharma",
              role: "Student (5 years)",
              content: "Krondoshi has transformed my understanding of classical dance. The teachers are exceptional and patient.",
              image: "/testimonials/1.jpg"
            },
            {
              name: "Arjun Banerjee",
              role: "Parent",
              content: "My daughter has blossomed under their guidance. The academy's approach to teaching traditional dance forms is remarkable.",
              image: "/testimonials/2.jpg"
            },
            {
              name: "Mitali Sen",
              role: "Working Professional",
              content: "The body and mind therapy through dance has been life-changing. I look forward to every session.",
              image: "/testimonials/3.jpg"
            }
          ].map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image 
                    src={testimonial.image}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-pink-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-gray-700 mb-4">"{testimonial.content}"</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 font-serif"
              style={{ fontFamily: 'var(--font-quintessential)' }}>
              Begin Your Dance Journey Today
            </h2>
            <p className="text-xl mb-8">Whether you're 3 or 60+, it's never too early or too late to experience the joy of classical dance.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-white text-pink-800 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg font-bold inline-block"
                >
                  Book a Trial Class
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition duration-300 shadow-lg font-bold inline-block"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ClassesPage;