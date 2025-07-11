import { motion } from 'framer-motion';

export const PerformancesSection = () => {
  const performancesByYear = [
    {
      year: "2018",
      events: [
        "Kobiguru Rabindra Nath Tagore's 157th Birth Anniversary at Rabindra Bhaban, Patna (Organised by Rabindra Parishad)"
      ]
    },
    {
      year: "2022",
      events: [
        "Khadki Kali Bari Durga Puja, Pune",
        "Punyanagari Bangya Samaj, Pune",
        "Pimpri Bangabharati, Pune",
        "Vashi Cultural Association, Vashi, Navi Mumbai"
      ]
    },
    {
      year: "2023",
      events: [
        "Basanti Puja Show at Khadki Kalibari, Pune",
        "Sarbojonin Durgapuja at Karandighi, Uttar Dinajpur, North Bengal",
        "Banga Maitri Sansad, Santacruz (East), Mumbai",
        "Goa Banga Samiti, Goa",
        "Show at Vivada Cruise organised by Bank of India",
        "Kalipuja Show at Alipurduar (Organised by NE Railways)",
        "Ras Utsav, Cooch Behar, North Bengal"
      ]
    },
    {
      year: "2024",
      events: [
        "Show at Dhanadhanya Auditorium, Kolkata (Organised by Bank of India)",
        "Mahalaya Show at SBBLA (City Bengali Club), Jabalpur, Madhya Pradesh",
        "Bangiya Sanskritik Parishad, Jayant, Singrauli, MP",
        "Durgapuja Celebrations at Mhow, Army Cantonment",
        "Bengali Cultural Association, Bhopal (TT Nagar Kalibari), MP",
        "Bangiya Sanskritik Samiti, BHEL, Bhopal, MP",
        "Sasan Power Ltd., Reliance, Singrauli, MP"
      ]
    }
  ];

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
            Our Performances
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {performancesByYear.map((yearData, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-pink-700 mb-4">{yearData.year}</h3>
              <ul className="space-y-2">
                {yearData.events.map((event, eventIndex) => (
                  <li key={eventIndex} className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">{event}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
