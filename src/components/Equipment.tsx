import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Equipment = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="equipment" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
              Our Equipment
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            State of the art fully digitized recording studio. We use Studio One as our primary Digital Audio Workstation.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 rounded-lg overflow-hidden p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-red-500">Studio One</h3>
            <p className="text-gray-400 text-lg">
              Our studio is equipped with the latest version of Studio One, a professional-grade Digital Audio Workstation that provides industry-standard tools for recording, mixing, and mastering. This powerful software ensures that your music is produced with the highest quality and precision.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Equipment;