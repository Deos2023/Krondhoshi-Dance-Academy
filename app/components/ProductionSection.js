"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export const ProductionsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productions = [
    {
      title: "Piyasanglagi",
      description: "The 7 stages of love (in the context of Rabindranath & Sufi)",
      duration: "90 min",
      youtubeUrl: "https://youtu.be/Zi1f_xL1kQU?si=AqsNYfKoHEuWxwBK"
    },
    {
      title: "Nirvaya",
      description: "Woman Empowerment",
      duration: "45 min",
      youtubeUrl: "https://youtu.be/RQHh1ZRJemc?si=Fm2LBRL8jl3hgSRa"
    },
    {
      title: "Geetagovindam",
      description: "by Joydev Goswami",
      duration: "60 min",
      youtubeUrl: "https://youtu.be/q6XtFypn2uU?si=WfiNGs2LXdqOtzkY"
    },
    {
      title: "Rabi Thakurer Narira",
      description: "Celebrating womanhood through Tagore's works",
      duration: "60 min",
      youtubeUrl: "https://youtu.be/2pcY2mlfxTk?si=QgiKIXCG0UAxCvhR"
    },
    {
      title: "ANURAG",
      description: "Based on Rabindranath Tagore's lovesongs",
      duration: "60 min",
      youtubeUrl: "https://youtu.be/3NcRWuTUdgM?si=iG82wFqMLGNEHyjT"
    },
    {
      title: "Rituranga",
      description: "Celebration of seasons",
      duration: "60 min",
      youtubeUrl: "https://youtu.be/3NcRWuTUdgM?si=BBuiT5MtDDX6755G"
    }
  ];

  // Function to extract YouTube ID from URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const openVideo = (youtubeUrl) => {
    setSelectedVideo(getYouTubeId(youtubeUrl));
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  return (
   <section 
  className="relative py-20 px-4 bg-white overflow-hidden" 
  style={{ fontFamily: 'var(--font-quintessential)' }}
>
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

  <div className="relative z-10 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-pink-800 mb-4">
        Our Notable Productions
      </h2>
      <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {productions.map((production, index) => {
        const youtubeId = getYouTubeId(production.youtubeUrl);
        const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-pink-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group cursor-pointer"
            onClick={() => openVideo(production.youtubeUrl)}
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold text-pink-700 mb-2">{production.title}</h3>
              <p className="text-gray-700 mb-4">{production.description}</p>
              <div className="flex items-center text-pink-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{production.duration}</span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* Video Modal */}
    {isModalOpen && (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        onClick={closeModal}
      >
        <div 
          className="relative w-full max-w-4xl aspect-video bg-black"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={closeModal}
            className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors"
            aria-label="Close video"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {selectedVideo && (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
            ></iframe>
          )}
        </div>
      </div>
    )}
  </div>
</section>

  );
};