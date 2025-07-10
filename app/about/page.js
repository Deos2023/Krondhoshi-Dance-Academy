"use client"
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
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

  const timelineItems = [
    {
      year: "2011",
      title: "Foundation of Krondoshi",
      description: "Rumi Chatterjee establishes Krondoshi as a center for performing arts in Howrah, West Bengal.",
      image: "/about/foundation.jpg"
    },
    {
      year: "2013",
      title: "First Major Production",
      description: "Premiere of 'Anurag', a dance drama based on Tagore's love songs, performed at Rabindra Bhaban, Patna.",
      image: "/about/first-production.jpg"
    },
    
    {
      year: "2018 & 2015 ",
      title: "National Tour",
      description: "Performances across multiple cities including Pune, Mumbai, Bangalore, and Hyderabad during Durga Puja celebrations. Performance at ADI VIMBA Festival organized by Eastern Zonal Cultural Centre, marking international exposure.",
      image: "/about/tour.jpg"
    },
    {
      year: "2022",
      title: "US Consulate Performance",
      description: "Honored to perform at the US Consulate General in Kolkata, representing Indian classical arts.",
      image: "/about/us-consulate.jpg"
    }
  ];

  const coreValues = [
    {
      title: "Preservation",
      description: "Maintaining the purity of classical dance forms while making them accessible to modern audiences.",
      icon: "/img/1 (2).jpeg"
    },
    {
      title: "Innovation",
      description: "Creating contemporary interpretations of traditional art forms without compromising their essence.",
      icon: "/img/1 (20).jpeg"
    },
    {
      title: "Inclusivity",
      description: "Welcoming students of all ages, backgrounds, and skill levels to experience the joy of dance.",
      icon: "/img/1 (6).jpeg"
    },
    {
      title: "Excellence",
      description: "Striving for the highest standards in training, performance, and artistic expression.",
      icon: "/img/1 (9).jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>About Krondoshi | Classical Dance Academy in Howrah</title>
        <meta name="description" content="Discover the story, mission, and values of Krondoshi Dance Academy, founded by Rumi Chatterjee to preserve and innovate Indian classical dance forms." />
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
            Our Dance Legacy
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Preserving tradition while innovating for contemporary audiences since 2011
          </p>
        </motion.div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp} className="relative h-96">
            <div className="absolute top-0 left-0 w-3/4 h-4/5 border-4 border-white shadow-2xl z-10">
              <Image 
                src="/img/1 (9).jpeg"
                alt="Rumi Chatterjee, Founder of Krondoshi"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-3/4 h-4/5 border-4 border-white shadow-2xl">
              <Image 
                src="/img/1 (37).jpeg"
                alt="Rumi Chatterjee performing"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center shadow-lg z-20">
              <span className="text-white text-4xl">10+</span>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-400 rounded-full flex items-center justify-center shadow-lg z-20">
              <span className="text-white text-2xl">50+</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-pink-800 mb-6 font-serif" 
              style={{ fontFamily: 'var(--font-quintessential)' }}>
              About Rumi Chatterjee
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Rumi Chatterjee, a distinguished performer and choreographer from India, is the founder and artistic director of Krondoshi. As a senior disciple of Mrs. Tanusree Shankar, she has earned recognition for her contributions to both creative and traditional dance forms of India.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With over two decades of experience, Rumi has developed a unique style that blends various classical movements, semi-classical styles, folk traditions, and gestures from daily life, demonstrating the excitement and creativity possible when these elements are reimagined in a contemporary context.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <div className="text-pink-600 mr-3 mt-1">✓</div>
                <p className="text-gray-700">Trained under legendary Tanusree Shankar</p>
              </div>
              <div className="flex items-start">
                <div className="text-pink-600 mr-3 mt-1">✓</div>
                <p className="text-gray-700">Created 10+ original dance productions</p>
              </div>
              <div className="flex items-start">
                <div className="text-pink-600 mr-3 mt-1">✓</div>
                <p className="text-gray-700">Performed at prestigious venues across India and internationally</p>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/productions"
                className="inline-block px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-300 shadow-lg"
              >
                View Productions
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Story Section */}
     <section className="py-20 bg-pink-50 relative overflow-hidden">
  {/* Decorative spiral elements - now more balanced */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full border-4 border-pink-200 opacity-20"></div>
    <div className="absolute top-1/2 right-1/4 w-60 h-60 rounded-full border-4 border-pink-200 opacity-20"></div>
    <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full border-4 border-pink-200 opacity-20"></div>
    <div className="absolute top-3/4 right-1/3 w-40 h-40 rounded-full border-4 border-pink-200 opacity-20"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-pink-800 mb-4 font-serif"
        style={{ fontFamily: 'var(--font-quintessential)' }}>
        Our Journey
      </h2>
      <div className="w-24 h-1 bg-pink-600 mx-auto mb-8"></div>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">
        Tracing our artistic evolution through the years
      </p>
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3
          }
        }
      }}
      className="relative"
    >
      {/* Dual spiral paths for better visual balance */}
      <svg 
        className="hidden md:block absolute left-1/2 top-0 h-full w-full -translate-x-1/2 pointer-events-none"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        {/* Main spiral */}
        <path 
          d="M500,50 C600,200 400,350 500,500 C600,650 400,800 500,950"
          fill="none" 
          stroke="url(#spiralGradient)" 
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          <animate 
            attributeName="stroke-dashoffset"
            from="1000" 
            to="0"
            dur="2s"
            begin="0.5s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.4 0 0.2 1"
          />
        </path>
        {/* Mirror spiral */}
        <path 
          d="M500,50 C400,200 600,350 500,500 C400,650 600,800 500,950"
          fill="none" 
          stroke="url(#spiralGradientReverse)" 
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          <animate 
            attributeName="stroke-dashoffset"
            from="1000" 
            to="0"
            dur="2s"
            begin="0.7s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.4 0 0.2 1"
          />
        </path>
        <defs>
          <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#db2777" />
            <stop offset="100%" stopColor="#7e22ce" />
          </linearGradient>
          <linearGradient id="spiralGradientReverse" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7e22ce" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>
        </defs>
      </svg>

      {/* Timeline items - now in a centered column with decorative elements on sides */}
      <div className="relative md:flex md:justify-center">
        {/* Left decorative elements */}
        <div className="hidden md:block absolute left-0 top-0 h-full w-1/4">
          {timelineItems.map((_, index) => (
            <motion.div
              key={`left-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 0.2, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
              className={`absolute left-10 ${index % 2 === 0 ? 'text-7xl' : 'text-5xl'} text-pink-200 font-serif`}
              style={{ top: `${(index / timelineItems.length) * 100}%` }}
            >
              {index % 2 === 0 ? '❀' : '✽'}
            </motion.div>
          ))}
        </div>

        {/* Center timeline content */}
        <div className="md:w-2/3 lg:w-1/2">
          {timelineItems.map((item, index) => {
            const iconRotation = index % 2 === 0 ? "rotate-6" : "-rotate-6";
            const iconColors = [
              "text-purple-600 bg-purple-100",
              "text-pink-600 bg-pink-100",
              "text-fuchsia-600 bg-fuchsia-100",
              "text-rose-600 bg-rose-100",
              "text-violet-600 bg-violet-100"
            ];
            const iconColor = iconColors[index % iconColors.length];
            
            return (
              <motion.div 
                key={index}
                variants={{
                  hidden: { 
                    opacity: 0,
                    y: 50,
                  },
                  visible: { 
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 10
                    }
                  }
                }}
                className="relative mb-16 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="w-full bg-white p-6 rounded-2xl shadow-xl backdrop-blur-sm bg-opacity-80 relative overflow-hidden"
                >
                  {/* Decorative corner */}
                  <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-16 h-16 overflow-hidden`}>
                    <div className={`absolute ${index % 2 === 0 ? '-right-8' : '-left-8'} -top-8 w-16 h-16 ${iconColor.replace('text-', 'bg-').split(' ')[0]} opacity-20 rounded-full`}></div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <div className={`flex-shrink-0 w-14 h-14 ${iconColor} rounded-xl flex items-center justify-center ${iconRotation} transition-all duration-300 group-hover:rotate-0 mr-4`}>
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-pink-800 mb-1">{item.title}</h3>
                      <span className={`inline-block px-3 py-1 ${iconColor.replace('bg-', 'text-').split(' ')[0]} ${iconColor} rounded-full text-xs font-medium mb-2`}>
                        {item.year}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.milestones?.map((milestone, i) => (
                      <span key={i} className="px-2 py-1 bg-pink-50 text-pink-600 rounded-full text-xs">
                        {milestone}
                      </span>
                    ))}
                  </div>
                  
                  {/* Connector line */}
                  {index < timelineItems.length - 1 && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-pink-300">
                      <motion.div 
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="origin-top w-full h-full bg-pink-500"
                      />
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Right decorative elements */}
        <div className="hidden md:block absolute right-0 top-0 h-full w-1/4">
          {timelineItems.map((_, index) => (
            <motion.div
              key={`right-${index}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 0.2, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
              className={`absolute right-10 ${index % 2 === 0 ? 'text-5xl' : 'text-7xl'} text-pink-200 font-serif`}
              style={{ top: `${(index / timelineItems.length) * 100}%` }}
            >
              {index % 2 === 0 ? '✽' : '❀'}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Final flourish */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring" }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 w-8 h-8 bg-pink-600 rounded-full border-4 border-white shadow-xl"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* Mission & Values */}
      <section className="relative py-20 px-4 max-w-7xl mx-auto overflow-hidden">
  {/* Top-left image */}
  <Image
    src="/pt3.png"
    alt="Top Left Decoration"
    width={150}
    height={150}
    className="absolute top-0 left-0 z-0 pointer-events-none opacity-80"
  />

  {/* Bottom-right image */}
  <Image
    src="/pt12.png"
    alt="Bottom Right Decoration"
    width={180}
    height={180}
    className="absolute bottom-0 right-0 z-0 pointer-events-none opacity-80"
  />

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="text-center mb-8 relative z-10"
  >
    <h2
      className="text-4xl font-bold text-pink-800 mb-4 font-serif"
      style={{ fontFamily: 'var(--font-quintessential)' }}
    >
      Our Philosophy
    </h2>
    <div className="w-24 h-1 bg-pink-600 mx-auto mb-2"></div>
    <p className=" text-gray-700 max-w-3xl mx-auto">
      Krondoshi is committed to engaging human instinct, intellect, and emotion through innovative productions that blend tradition with contemporary expression.
    </p>
  </motion.div>

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
  >
    {coreValues.map((value, index) => (
      <motion.div
        key={index}
        variants={fadeInUp}
        className=" p-8 rounded-lg  hover:shadow-xl transition duration-300 text-center"
      >
        <div className="w-20 h-20 mx-auto mb-6">
          <Image src={value.icon} alt={value.title} width={80} height={80} />
        </div>
        <h3 className="text-xl font-bold text-pink-800 mb-3">{value.title}</h3>
        <p className="text-gray-700">{value.description}</p>
      </motion.div>
    ))}
  </motion.div>
</section>


      {/* The Group Section */}
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
              The Krondoshi Ensemble
            </h2>
            <div className="w-24 h-1 bg-pink-300 mx-auto"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <p className="text-xl mb-6">
                Krondoshi was established and has since been led by Mrs. Rumi Chatterjee. Our core philosophy is to present captivating and engaging concepts to diverse audiences through live performances of dance, music, and song.
              </p>
              <p className="text-xl mb-8">
                Through these artistic expressions, Krondoshi aims not only to entertain but also to promote universal values of love, harmony, and peace, fulfilling its commitment to social responsibility.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link 
                  href="/performances"
                  className="px-6 py-3 bg-white text-pink-800 rounded-full hover:bg-pink-100 transition duration-300 shadow-lg font-bold"
                >
                  View Performances
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="relative h-48 rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src={`/about/ensemble-${item}.jpg`}
                    alt={`Krondoshi ensemble member ${item}`}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
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
            Recognition & Honors
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 rounded-lg shadow-lg border border-pink-100"
          >
            <h3 className="text-2xl font-bold text-pink-800 mb-4">Letter of Appreciation</h3>
            <p className="text-gray-700 mb-6 italic">
              &quot;On behalf of the Rabindra Parishad, Patna I would like to congratulate you and your team to provide us a wonderful evening with your dance performance &apos;ANURAG&apos; based on Rabindra Sangeet in Hindi, English & Bengali on 25th May 2018.&quot;
            </p>
            <p className="text-gray-700 mb-6">
              &quot;It was a spectacular and beautiful show! It was also wonderful to see the development of all your dancers and in particular your Performance. This is just one of the wonderful gifts you share as a teacher and as an artistic director. Congratulations!&quot;
            </p>
            <div className="text-right">
              <p className="font-bold text-pink-800">Sandip Kumar Roy</p>
              <p className="text-gray-600">Program Convenor & Executive Member, Rabindra Parishad</p>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 rounded-lg shadow-lg border border-pink-100"
          >
            <h3 className="text-2xl font-bold text-pink-800 mb-4">Notable Performances</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <div className="text-pink-600 mr-3 mt-1">•</div>
                <span>US Consulate General Kolkata</span>
              </li>
              <li className="flex items-start">
                <div className="text-pink-600 mr-3 mt-1">•</div>
                <span>Deputy High Commission of Bangladesh, Kolkata</span>
              </li>
              <li className="flex items-start">
                <div className="text-pink-600 mr-3 mt-1">•</div>
                <span>Dashashwamedh Ghat Dance Festival, Varanasi</span>
              </li>
              <li className="flex items-start">
                <div className="text-pink-600 mr-3 mt-1">•</div>
                <span>ADI VIMBA Festival, Jalpaiguri</span>
              </li>
              <li className="flex items-start">
                <div className="text-pink-600 mr-3 mt-1">•</div>
                <span>Corporate shows across Ahmedabad, Chamai, Bijoywada</span>
              </li>
              <li className="flex items-start">
                <div className="text-pink-600 mr-3 mt-1">•</div>
                <span>Multiple Durga Puja celebrations nationwide</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </section>








      <div className="relative w-full max-w-[700px] h-auto aspect-[800/700] mx-auto">
      <Image
        src="/frame.png"
        alt="Hero Background"
        width={700}
        height={600}
        className="w-full h-full object-contain"
        priority
      />
    </div>

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
              Experience the Krondoshi Difference
            </h2>
            <p className="text-xl mb-8">Join us in preserving and innovating India&apos;s rich dance heritage.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/classes" 
                  className="px-8 py-3 bg-white text-pink-800 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg font-bold inline-block"
                >
                  Explore Classes
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

      {/* Footer */}
      <footer className="bg-pink-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="w-20 h-20 relative mb-4">
              <Image 
                src="/logo-white.png" 
                alt="Krondoshi Dance Academy Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-pink-200">Preserving the rich heritage of Indian classical dance since 2011.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-pink-200 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-pink-200 hover:text-white">About Us</Link></li>
              <li><Link href="/classes" className="text-pink-200 hover:text-white">Classes</Link></li>
              <li><Link href="/gallery" className="text-pink-200 hover:text-white">Gallery</Link></li>
              <li><Link href="/contact" className="text-pink-200 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Dance Forms</h4>
            <ul className="space-y-2">
              <li><span className="text-pink-200">Shankar Style</span></li>
              <li><span className="text-pink-200">Rabindrik Nritya</span></li>
              <li><span className="text-pink-200">Nazrul Nritya</span></li>
              <li><span className="text-pink-200">Odissi</span></li>
              <li><span className="text-pink-200">Bharatnatyam</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="text-pink-200 mb-2">Ambika Kundu Lane, Ramrajatala, Howrah - 711104</p>
            <p className="text-pink-200 mb-2">+91 90079 59733 / +91 79809 30874</p>
            <p className="text-pink-200">krondoshi.kolkata@gmail.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-pink-200 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-pink-200 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className="text-pink-200 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-pink-800 text-center">
          <p className="text-pink-300">© 2011-{new Date().getFullYear()} Krondoshi Dance Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;