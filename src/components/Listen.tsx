import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2 } from 'lucide-react';

const audioSamples = [
  {
    title: "Summer Vibes",
    artist: "The Groove Collective",
    genre: "Pop",
    duration: "3:45",
    url: "https://example.com/audio/summer-vibes.mp3",
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=800"
  },
  {
    title: "Urban Night",
    artist: "Metro Beats",
    genre: "Hip Hop",
    duration: "4:20",
    url: "https://example.com/audio/urban-night.mp3",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800"
  },
  {
    title: "Acoustic Dreams",
    artist: "Sarah Waters",
    genre: "Folk",
    duration: "3:30",
    url: "https://example.com/audio/acoustic-dreams.mp3",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800"
  }
];

const Listen = () => {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section id="listen" className="py-20 bg-black">
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
              Listen to Our Work
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sample tracks produced and mastered in our studio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audioSamples.map((sample, index) => (
            <motion.div
              key={sample.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={sample.image}
                  alt={sample.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setPlaying(playing === sample.title ? null : sample.title)}
                    className="bg-red-500 p-4 rounded-full hover:bg-red-600 transition-colors"
                  >
                    {playing === sample.title ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{sample.title}</h3>
                  <span className="text-red-500">{sample.duration}</span>
                </div>
                <p className="text-gray-400 mb-2">{sample.artist}</p>
                <div className="flex items-center">
                  <Volume2 className="w-4 h-4 text-gray-500 mr-2" />
                  <div className="h-1 flex-1 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-red-500 transition-all duration-300 ${
                        playing === sample.title ? 'w-3/4' : 'w-0'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listen;