import React from 'react';
import { motion } from 'framer-motion';
import { Mic2, Sliders, Music2, Radio, Mic, Film, Music } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Service {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Mic2 className="w-8 h-8" />,
    name: "Recording",
    description: "Professional studio recording with state-of-the-art equipment"
  },
  {
    icon: <Sliders className="w-8 h-8" />,
    name: "Mixing",
    description: "Expert mixing to perfect your sound"
  },
  {
    icon: <Music2 className="w-8 h-8" />,
    name: "Mastering",
    description: "Final touch to make your music industry-ready"
  },
  {
    icon: <Radio className="w-8 h-8" />,
    name: "Podcast Production",
    description: "Complete podcast recording and production services"
  },
  {
    icon: <Mic className="w-8 h-8" />,
    name: "Voice-over Recording",
    description: "Professional voice-over services for any project"
  },
  {
    icon: <Film className="w-8 h-8" />,
    name: "Audio Restoration",
    description: "Restore and enhance old recordings"
  },
  {
    icon: <Music className="w-8 h-8" />,
    name: "Commercial Audio",
    description: "Audio production for commercials and ads"
  }
];

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-1"
    >
      <div className="text-red-500 mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
      <p className="text-gray-400">{service.description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-black">
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
              Services We Provide
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional audio services tailored to your needs, delivered with expertise and precision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;