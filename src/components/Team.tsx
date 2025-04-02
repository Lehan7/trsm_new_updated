import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Music2, Award, Clock, Users } from 'lucide-react';

const Team = () => {
  const [showModal, setShowModal] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="team" className="py-20 bg-gradient-to-r from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-800 rounded-full filter blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
              Meet Antonio
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-xl max-w-2xl mx-auto">
            Our lead audio engineer with a passion for perfection
          </motion.p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer shadow-lg transform hover:scale-105 transition-transform duration-300"
            onClick={() => setShowModal(true)}
          >
            <div className="aspect-w-1 aspect-h-1">
              <motion.img
                src="./photos/antonio.jpg"
                alt="Audio Engineer Antonio"
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Antonio</h3>
              <p className="text-red-500 mb-2">Lead Audio Engineer</p>
              <p className="text-gray-400">
                Over 30 years of experience in the music industry
              </p>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
        {showModal && (
          <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-start md:items-center justify-center p-2 sm:p-4 z-[100] overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
                className="bg-gray-900 p-4 sm:p-8 rounded-lg w-full max-w-4xl shadow-2xl relative overflow-visible mt-16 md:mt-0 mb-4 sm:my-8"
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
            >
                {/* Responsive Close Button */}
                <motion.button
                  className="absolute -top-6 -right-6 p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl transition-all duration-300 z-10 flex items-center justify-center"
                  onClick={() => setShowModal(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-8 h-8 sm:w-10 sm:h-10" />
                </motion.button>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-full md:w-1/3"
                  >
                    <div className="relative">
                      <motion.img
                        src="./photos/antonio.jpg"
                        alt="Antonio"
                        className="w-full h-auto rounded-lg shadow-xl"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="w-full md:w-2/3 space-y-4 sm:space-y-6"
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">About Antonio</h3>
                    
                    <div className="space-y-4 sm:space-y-6">
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-300 leading-relaxed text-base"
                      >
                        Antonio is an audio engineer with over 30 years of experience in the music industry. Learning music at the young age of 13, he has been in music all his life. His experience over the years comes from playing live, being a studio musician, writing music, and finally launching his own studio. He brings a wealth of knowledge and expertise to every project.
                      </motion.p>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-300 leading-relaxed text-base"
                      >
                        Antonio founded The Recording Shop Montreal with a clear mission: to provide high-quality recording services at reasonable prices. He understands that many talented artists struggle to afford professional studio time, which is why he's committed to offering affordable rates without compromising on quality. His goal is to make professional recording accessible to artists of all levels, ensuring that financial constraints don't stand in the way of artistic expression.
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-8"
                      >
                        <motion.div 
                          className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Music2 className="w-6 h-6 text-red-500 mx-auto mb-2" />
                          <p className="text-sm text-gray-300">Music Production</p>
                        </motion.div>
                        <motion.div 
                          className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Award className="w-6 h-6 text-red-500 mx-auto mb-2" />
                          <p className="text-sm text-gray-300">30+ Years Experience</p>
                        </motion.div>
                        <motion.div 
                          className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Clock className="w-6 h-6 text-red-500 mx-auto mb-2" />
                          <p className="text-sm text-gray-300">24/7 Available</p>
                        </motion.div>
                        <motion.div 
                          className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Users className="w-6 h-6 text-red-500 mx-auto mb-2" />
                          <p className="text-sm text-gray-300">200+ Artists</p>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Team;