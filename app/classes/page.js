"use client";
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const ClassesPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const classCategories = [
    {
      title: "Children's Programs (2.6 to 8 years)",
      description: "Fun-filled beginner classes introducing rhythm, movement, and storytelling.",
      classes: [
        {
          name: "Toddlers",
          description: "Early introduction to dance for kids aged 2.6+ years.",
          schedule: "Monday & Tuesday (5:30 PM – 6:30 PM)",
          image: "/img/1 (23).jpeg"
        },
        {
          name: "Little Girls",
          description: "Developing grace and coordination with guided movement.",
          schedule: "Saturday (7:30 PM – 8:30 PM)",
          image: "/img/1 (24).jpeg"
        }
      ]
    },
    {
      title: "Pre-Junior Group (8 to 12 years)",
      description: "Structured classical foundation with creative choreography.",
      classes: [
        {
          name: "Pre-Juniors",
          description: "For young dancers developing their basic skillset and performance abilities.",
          schedule: "Wednesday (5:30 PM – 6:30 PM), Wednesday (6:30 PM – 7:30 PM), Saturday (6:30 PM – 7:30 PM)",
          image: "/img/1 (50).jpeg"
        }
      ]
    },
    {
      title: "Youth Group (13 to 18 years)",
      description: "Advanced training with a focus on style, expression, and stage readiness.",
      classes: [
        {
          name: "Junior 3rd Year",
          description: "Higher-level youth dance training with performance prep.",
          schedule: "Saturday (10:00 AM – 11:00 AM)",
          image: "/img/1 (140).jpeg"
        },
        {
          name: "Transition 1st Year",
          description: "Skill transition classes for students graduating to higher levels.",
          schedule: "Sunday (10:30 AM – 11:30 AM)",
          image: "/img/1 (143).jpeg"
        },
        {
          name: "Transition 3rd Year",
          description: "Advanced training module for senior youth students.",
          schedule: "Saturday (5:30 PM – 6:30 PM)",
          image: "/img/1 (103).jpeg"
        }
      ]
    },
    {
      title: "Adult Programs (18+ years)",
      description: "Classes for homemakers and working professionals looking to connect with dance.",
      classes: [
        {
          name: "Homemakers & Working Ladies",
          description: "Dance sessions tailored for adult learners with or without prior experience.",
          schedule: "Sunday (9:30 AM – 10:30 AM)",
          image: "/img/1 (87).jpeg"
        }
      ]
    },
    {
      title: "Senior Citizen Special Classes",
      description: "Wellness and dance movement sessions for seniors.",
      classes: [
        {
          name: "Senior Special Therapy",
          description: "Gentle movement & rhythm classes for senior citizens.",
          schedule: "Tuesday (5:00 PM – 6:00 PM), Thursday (5:00 PM – 7:00 PM)",
          image: "/img/1 (73).jpeg"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Class Schedule | Krondoshi Academy</title>
        <meta name="description" content="Explore the latest class schedule for all age groups at Krondoshi Academy of Performing Arts." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-pink-600/30"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-5xl font-bold text-white mb-4 font-serif" style={{ fontFamily: 'var(--font-quintessential)' }}>Class Schedule</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">Check the latest timings and offerings for all age groups.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6"
          >
            <Link href="#class-categories" className="px-8 py-3 bg-white text-pink-800 rounded-full hover:bg-pink-100 transition duration-300 font-bold">Explore Schedule</Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Class Categories */}
      <section id="class-categories" className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pink-800 mb-4 font-serif"
          style={{ fontFamily: 'var(--font-quintessential)' }}>Dance for Every Stage</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">Classes are thoughtfully designed for toddlers, youth, adults, and senior citizens.</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-20">
          {classCategories.map((category, index) => (
            <motion.div key={index} variants={fadeInUp} className="rounded-xl p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-pink-800 mb-2 font-serif"
                style={{ fontFamily: 'var(--font-quintessential)' }}>{category.title}</h3>
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
                      <div className="text-sm text-gray-500 mb-4 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {classItem.schedule}
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/contact" className="inline-block px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-300 text-sm">Enquire Now</Link>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default ClassesPage;
