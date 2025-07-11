"use client"
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const PressReviewPage = () => {
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

  // Press articles data
  const pressArticles = [
    {
      id: 1,
      title: "Dance Drama Conveys Message of Love",
      excerpt: "Prabhat Khabar praised the dance drama 'Anurag' which conveyed the message of love through Rabindra Sangeet, earning appreciation from the audience.",
      date: "May 26, 2018",
      publication: "Prabhat Khabar",
      location: "Patna",
      image: "/press/1.jpeg",
      pdf: "/press/prabhat-khabar-1.pdf"
    },
    {
      id: 2,
      title: "Rabindra Sangeet Depicts True Form of Love",
      excerpt: "Through a blend of love and devotional songs, the artists introduced the audience to the true form of love via dance drama.",
      date: "May 26, 2018",
      publication: "Prabhat Khabar",
      location: "Patna",
      image: "/press/2.jpeg",
      pdf: "/press/prabhat-khabar-2.pdf"
    },
    {
      id: 3,
      title: "Performance Evokes Memories of Radha Rani",
      excerpt: "Kolkata's dance troupe Krondoshi won hearts with their dramatic presentation based on Rabindra Sangeet.",
      date: "May 26, 2018",
      publication: "Prabhat Khabar",
      location: "Patna",
      image: "/press/3.jpeg",
      pdf: "/press/prabhat-khabar-3.pdf"
    },
    {
      id: 4,
      title: "Jagjivan Ram Research Fellowship to Begin Soon: Education Minister",
      excerpt: "Hindustan newspaper highlighted glimpses of the event organized at Rabindra Bhavan.",
      date: "May 26, 2018",
      publication: "Hindustan",
      location: "Patna",
      image: "/press/4.jpeg",
      pdf: "/press/hindustan-1.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Press Review | Krondoshi Dance Academy</title>
        <meta name="description" content="Media coverage and press reviews of Krondoshi Dance Academy's performances across India." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/press/press-hero.jpg"
            alt="Newspaper clippings"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-pink-600/30"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: 'var(--font-quintessential)' }}>
            Press Clippings
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Newspaper coverage of our performances and events
          </p>
        </motion.div>
      </section>

      {/* Newspaper Clippings Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-pink-800 mb-4 "
          style={{ fontFamily: 'var(--font-quintessential)' }}>
            Featured Newspaper Articles
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Original press coverage from leading newspapers
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-16"
        >
          {pressArticles.map((article) => (
            <motion.div 
              key={article.id}
              variants={fadeInUp}
              className="bg-white rounded-xl overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Newspaper Image - Larger Display */}
                <div className="lg:w-2/3 relative group">
                  <div className="shadow-2xl rounded-lg overflow-hidden transform group-hover:scale-[1.02] transition duration-500">
                    <Image 
                      src={article.image}
                      alt={`${article.publication} article about Krondoshi`}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain"
                      quality={100}
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-md">
                    <span className="text-sm font-medium text-pink-800"
                    style={{ fontFamily: 'var(--font-quintessential)' }}>{article.publication}</span>
                  </div>
                </div>
                
                {/* Article Details */}
                <div className="lg:w-1/3 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-sm text-pink-600 font-medium">{article.date}</span>
                    <span className="text-sm text-gray-600 mx-2">•</span>
                    <span className="text-sm text-gray-600">{article.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-pink-800 mb-4"
                  style={{ fontFamily: 'var(--font-quintessential)' }}>{article.title}</h3>
                  <p className="text-gray-700 mb-6">{article.excerpt}</p>
                  <div className="flex space-x-3">
                    {article.pdf && (
                      <Link 
                        href={article.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full hover:bg-pink-200 transition duration-300 text-sm flex items-center"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        View Full PDF
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Press Mentions */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pink-800 mb-4 ">
              Featured Publications
            </h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Newspapers that have covered our performances
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { name: "Prabhat Khabar", logo: "/press/1.jpeg" },
              { name: "Hindustan", logo: "/press/2.jpeg" },
              { name: "The Telegraph", logo: "/press/3.jpeg" },
              { name: "The Hindu", logo: "/press/4.jpeg" }
            ].map((publication, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center h-32"
              >
                <div className="relative h-full w-full">
                  <Image 
                    src={publication.logo}
                    alt={publication.name}
                    layout="fill"
                    objectFit="contain"
                    className="opacity-80 hover:opacity-100 transition duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
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
            <h2 className="text-3xl font-bold mb-6 ">
              Want More Press Coverage?
            </h2>
            <p className="text-xl mb-8">Contact us for press kits and performance details</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-white text-pink-800 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg font-bold inline-block"
                >
                  Media Contact
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/gallery" 
                  className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition duration-300 shadow-lg font-bold inline-block"
                >
                  View Gallery
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PressReviewPage;