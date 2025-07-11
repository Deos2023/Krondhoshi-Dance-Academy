"use client"
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const ProgramsPage = () => {
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

  // Function to extract YouTube ID from URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Function to get YouTube thumbnail URL
  const getYouTubeThumbnail = (url, quality = 'hqdefault') => {
    const videoId = getYouTubeId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/${quality}.jpg` : '/default-thumbnail.jpg';
  };

  // Performance videos data
  const performances = [
    {
      title: "Kobiguru Rabindra Nath Tagore's 157th Birth Anniversary",
      year: "2018",
      location: "Rabindra Bhaban, Patna",
      organizer: "Rabindra Parishad, Patna",
      description: "A special tribute performance celebrating Tagore's legacy through dance and music.",
      videoUrl: "https://youtu.be/3NcRWuTUdgM?si=28sag2waXTpTplW3",
      thumbnail: "/performances/tagore-tribute.jpg"
    },
    {
      title: "Khadki Kali Bari Durga Puja",
      year: "2022",
      location: "Pune",
      organizer: "Khadki Kali Bari",
      description: "Traditional Durga Puja celebrations featuring classical and folk dance performances.",
      videoUrl: "https://youtu.be/5SLxIbI6pak?si=Hrf70hzqybLPtQnO",
      thumbnail: "/performances/durga-puja.jpg"
    },
    {
      title: "Punyanagari Bangya Samaj Performance",
      year: "2022",
      location: "Pune",
      organizer: "Punyanagari Bangya Samaj",
      description: "Cultural evening showcasing Bengali traditions through dance.",
      videoUrl: "https://youtu.be/CTBPuHBn13s?si=n0CpO7Nf-2otBQqo",
      thumbnail: "/performances/bangya-samaj.jpg"
    },
    {
      title: "Vashi Cultural Association Event",
      year: "2022",
      location: "Vashi, Navi Mumbai",
      organizer: "Vashi Cultural Association",
      description: "An evening of classical dance performances for the Bengali community.",
      videoUrl: "https://youtu.be/gJoUPOzqyAM?si=4E96B7Tap1bT7yVY",
      thumbnail: "/performances/vashi-cultural.jpg"
    },
    {
      title: "Basanti Puja Show at Khadki Kalibari",
      year: "2023",
      location: "Pune",
      organizer: "Khadki Kalibari",
      description: "Spring festival celebrations with traditional dance performances.",
      videoUrl: "https://youtu.be/L3T06YB1vNM?si=AdqYQZDml1pffbS_",
      thumbnail: "/performances/basanti-puja.jpg"
    },
    {
      title: "Sarbojonin Durgapuja at Karandighi",
      year: "2023",
      location: "Uttardinajpur, NB",
      organizer: "Local Community",
      description: "Community Durga Puja celebrations featuring our dance troupe.",
      videoUrl: "https://youtu.be/SBZ_GkcedXA?si=J2MwXNR-zwd6TSj-",
      thumbnail: "/performances/karandighi.jpg"
    },
    {
      title: "Banga Maitri Sansad Performance",
      year: "2023",
      location: "Santracruiz (East) Mumbai",
      organizer: "Banga Maitri Sansad",
      description: "Cultural program for the Bengali community in Mumbai.",
      videoUrl: "https://youtu.be/2pcY2mlfxTk?si=Oy6TyHlaR9NHmurx",
      thumbnail: "/performances/banga-maitri.jpg"
    },
    {
      title: "Goa Banga Samiti Event",
      year: "2023",
      location: "Goa",
      organizer: "Goa Banga Samiti",
      description: "Dance performance showcasing Bengali culture in Goa.",
      videoUrl: "https://youtu.be/3NcRWuTUdgM?si=28sag2waXTpTplW3",
      thumbnail: "/performances/goa-banga.jpg"
    },
    {
      title: "Vivada Cruise Performance",
      year: "2023",
      location: "Kolkata",
      organizer: "Bank of India",
      description: "Special performance aboard Vivada Cruise for Bank of India event.",
      videoUrl: "https://youtu.be/5SLxIbI6pak?si=Hrf70hzqybLPtQnO",
      thumbnail: "/performances/vivada-cruise.jpg"
    },
    {
      title: "Kalipuja Show at Alipurduar",
      year: "2023",
      location: "Alipurduar",
      organizer: "NE Railways",
      description: "Traditional Kali Puja celebrations with dance performances.",
      videoUrl: "https://youtu.be/CTBPuHBn13s?si=n0CpO7Nf-2otBQqo",
      thumbnail: "/performances/kalipuja.jpg"
    },
    {
      title: "Ras Utsav, Coach Behar",
      year: "2023",
      location: "NB",
      organizer: "Local Community",
      description: "Cultural festival featuring our dance ensemble.",
      videoUrl: "https://youtu.be/CTBPuHBn13s?si=n0CpO7Nf-2otBQqo",
      thumbnail: "/performances/ras-utsav.jpg"
    },
    {
      title: "Dhanadhanya Auditorium Show",
      year: "2024",
      location: "Kolkata",
      organizer: "Bank of India",
      description: "Special performance at prestigious Dhanadhanya Auditorium.",
      videoUrl: "https://youtu.be/L3T06YB1vNM?si=AdqYQZDml1pffbS_",
      thumbnail: "/performances/dhanadhanya.jpg"
    },
    {
      title: "Mahalaya Show at SBBLA",
      year: "2024",
      location: "Jabalpur, MP",
      organizer: "City Bengali Club",
      description: "Mahalaya celebrations with traditional dance and music.",
      videoUrl: "https://youtu.be/SBZ_GkcedXA?si=J2MwXNR-zwd6TSj-",
      thumbnail: "/performances/mahalaya.jpg"
    },
    {
      title: "Bangiya Sanskrit Parkshad",
      year: "2024",
      location: "Jayant, Singrauli, MP",
      organizer: "Local Cultural Association",
      description: "Cultural evening promoting Bengali arts and traditions.",
      videoUrl: "https://youtu.be/SBZ_GkcedXA?si=J2MwXNR-zwd6TSj-",
      thumbnail: "/performances/sanskrit-parkshad.jpg"
    },
    {
      title: "Durgapuja at Army Cantonment",
      year: "2024",
      location: "Whow",
      organizer: "Army Cantonment",
      description: "Special Durga Puja celebrations for armed forces community.",
      videoUrl: "https://youtu.be/SBZ_GkcedXA?si=J2MwXNR-zwd6TSj-",
      thumbnail: "/performances/army-puja.jpg"
    },
    {
      title: "Bengali Cultural Association Event",
      year: "2024",
      location: "Bhopal (TT Nagar Kalibari), MP",
      organizer: "Bengali Cultural Association",
      description: "Traditional dance performances for the Bengali community.",
      videoUrl: "https://www.youtube.com/embed/example16",
      thumbnail: "/performances/bhopal-cultural.jpg"
    },
    {
      title: "Bangiya Sanskritik Samiti",
      year: "2024",
      location: "BHEL, Bhopal, MP",
      organizer: "Bangiya Sanskritik Samiti",
      description: "Cultural program for BHEL employees and families.",
      videoUrl: "https://www.youtube.com/embed/example17",
      thumbnail: "/performances/bhel-bhopal.jpg"
    },
    {
      title: "Sasan Power Plant Performance",
      year: "2024",
      location: "Reliance, Singrauli, MP",
      organizer: "Sasan Power Plant",
      description: "Corporate event featuring our cultural performances.",
      videoUrl: "https://www.youtube.com/embed/example18",
      thumbnail: "/performances/sasan-power.jpg"
    },
    {
      title: "Bharat Sevashram Sangha",
      year: "2024",
      location: "Varanasi",
      organizer: "Bharat Sevashram Sangha",
      description: "Spiritual and cultural program in the holy city.",
      videoUrl: "https://www.youtube.com/embed/example19",
      thumbnail: "/performances/varanasi.jpg"
    },
    {
      title: "International Engineering & Techno Fair",
      year: "2017",
      location: "Delhi",
      organizer: "International Fair Committee",
      description: "Performance showcasing Indian classical dance at international event.",
      videoUrl: "https://www.youtube.com/embed/example20",
      thumbnail: "/performances/techno-fair.jpg"
    },
    {
      title: "Corporate Show in Ahmedabad",
      year: "2017",
      location: "Ahmedabad",
      organizer: "Corporate Client",
      description: "Special performance for corporate event.",
      videoUrl: "https://www.youtube.com/embed/example21",
      thumbnail: "/performances/ahmedabad-corporate.jpg"
    },
    {
      title: "Dwarka Kalibari Performance",
      year: "2017",
      location: "Dwarka",
      organizer: "Dwarka Kalibari",
      description: "Traditional dance performance at temple celebrations.",
      videoUrl: "https://www.youtube.com/embed/example22",
      thumbnail: "/performances/dwarka-kalibari.jpg"
    },
    {
      title: "Air Force Naval Officers Enclave",
      year: "2017",
      location: "Dwarka (AFNOE)",
      organizer: "Armed Forces",
      description: "Performance for armed forces personnel and families.",
      videoUrl: "https://youtu.be/gJoUPOzqyAM?si=4E96B7Tap1bT7yVY",
      thumbnail: "/performances/afnoe.jpg"
    },
    {
      title: "Dashashwamedh Ghat Dance Festival",
      year: "2018",
      location: "Varanasi",
      organizer: "Varanasi Cultural Association",
      description: "Performance at the famous ghat during cultural festival.",
      videoUrl: "https://youtu.be/gJoUPOzqyAM?si=4E96B7Tap1bT7yVY",
      thumbnail: "/performances/dashashwamedh.jpg"
    },
    {
      title: "US Consulate General Kolkata",
      year: "2018",
      location: "Kolkata",
      organizer: "US Consulate",
      description: "Cultural diplomacy performance representing Indian arts.",
      videoUrl: "https://youtu.be/5SLxIbI6pak?si=Hrf70hzqybLPtQnO",
      thumbnail: "/performances/us-consulate.jpg"
    }
  ].map(performance => ({
    ...performance,
    thumbnail: getYouTubeThumbnail(performance.videoUrl)
  }));

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Performances | Krondoshi Dance Academy</title>
        <meta name="description" content="Watch our performances across India and internationally, showcasing classical and contemporary dance forms." />
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
            Our Performances
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Captivating audiences across India with our blend of classical and contemporary dance
          </p>
        </motion.div>
      </section>

      {/* Performance Grid */}
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
            Performance Archive
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our performances from cultural festivals to corporate events across India
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {performances.map((performance, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="relative h-48">
                <Image 
                  src={performance.thumbnail}
                  alt={performance.title}
                  layout="fill"
                  objectFit="cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-quintessential)' }}>{performance.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-pink-600 font-medium">{performance.year}</span>
                  <span className="text-sm text-gray-600">{performance.location}</span>
                </div>
                <p className="text-gray-700 mb-4" >{performance.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Organized by: {performance.organizer}</span>
                  <Link 
                    href={performance.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 font-medium text-sm flex items-center"
                  >
                    Watch Video
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Performances */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-pink-800 mb-4 font-serif" style={{ fontFamily: 'var(--font-quintessential)' }}>
              Featured Performances
            </h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Highlights from our most notable performances
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {performances.slice(0, 3).map((performance, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="w-full md:w-1/2 h-80 rounded-xl overflow-hidden shadow-lg relative">
                  <Image
                    src={performance.thumbnail}
                    alt={performance.title}
                    layout="fill"
                    objectFit="cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Link 
                      href={performance.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition duration-300"
                    >
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-pink-800 mb-2" style={{ fontFamily: 'var(--font-quintessential)' }}>{performance.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {performance.location} • {performance.year}
                  </div>
                  <p className="text-gray-700 mb-4">{performance.description}</p>
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">Organized by:</span> {performance.organizer}
                  </p>
                  <Link 
                    href={performance.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-300"
                  >
                    Watch Full Performance
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
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
            <h2 className="text-3xl font-bold mb-6 font-serif">
              Book a Performance
            </h2>
            <p className="text-xl mb-8">Interested in having us perform at your event? Get in touch to discuss possibilities.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-white text-pink-800 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg font-bold inline-block"
                >
                  Contact Us
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/productions" 
                  className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition duration-300 shadow-lg font-bold inline-block"
                >
                  View Productions
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;