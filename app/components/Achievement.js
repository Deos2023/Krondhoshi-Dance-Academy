import { motion } from 'framer-motion';
import Image from 'next/image';

export const AchievementSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
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
            Our Achievements
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-pink-50 p-8 rounded-lg shadow-lg border-l-4 border-pink-600 grid md:grid-cols-2 gap-8 items-start"
        >
          {/* Achievement Certificate Image */}
          <div className="w-full h-auto relative rounded overflow-hidden shadow-md border border-pink-200">
            <Image 
              src="/certificate.png" // Replace with your actual path
              alt="Anurag Performance Appreciation Certificate"
              layout="responsive"
              width={600}
              height={800}
              className="rounded"
            />
          </div>

          {/* Text Content */}
          <div  style={{ fontFamily: 'var(--font-quintessential)' }}>
            <h3 className="text-2xl font-bold text-pink-700 mb-1"  style={{ fontFamily: 'var(--font-quintessential)' }}>RABINDRA PARISHAD</h3>
            <p className="text-sm text-gray-600 mb-2"  style={{ fontFamily: 'var(--font-quintessential)' }}>(Registered in order to receive Resentation Act, 1446)</p>
            <p className="text-gray-700 mb-1"  style={{ fontFamily: 'var(--font-quintessential)' }} >Rabindra Bhaban, Birchand Road, Patna – 800 001</p>
            <p className="text-gray-600 mb-4">Date: 30.5.13</p>

            <h4 className="text-xl font-bold text-pink-700 mb-3">Letter of Appreciation</h4>
            <p className="text-gray-700 mb-4">
              On behalf of the Rabindra Parishad, Patna I would like to congratulate you and your team for a wonderful evening with your dance performance <strong>"ANURAG"</strong> based on Rabindra Sangeet in Hindi, English & Bengali on 25th May 2018.
            </p>
            <p className="text-gray-700 mb-4">
              Thank you for creating such a beautiful performance. Guests from far distances were amazed by the quality and the scale of the show.
            </p>
            <p className="text-gray-700 mb-4">
              It was spectacular to witness the artistic direction and the development of all your dancers. This is a testament to your gifts as both teacher and choreographer. Congratulations!
            </p>
            <p className="text-gray-700 mb-6">I wish you continued success.</p>

            <p className="text-gray-700 font-bold">Lovely Kubar</p>
            <p className="text-gray-600">(Sandip Kumar Roy)</p>
            <p className="text-gray-600">Program Convenor & Executive Member</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
