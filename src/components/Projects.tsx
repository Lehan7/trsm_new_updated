import React from 'react';
import { motion } from 'framer-motion';
import { Award, Music, Radio, Film } from 'lucide-react';

const projects = [
  {
    title: "Midnight Symphony",
    artist: "Luna Eclipse",
    type: "Album Production",
    image: "https://images.unsplash.com/photo-1571974096035-bc3568627608?auto=format&fit=crop&w=800",
    accolades: ["Platinum Record", "Grammy Nominated"],
    icon: <Music className="w-6 h-6" />
  },
  {
    title: "Tech Talk Daily",
    host: "Alex Rivera",
    type: "Podcast Series",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800",
    accolades: ["1M+ Downloads", "Featured on Spotify"],
    icon: <Radio className="w-6 h-6" />
  },
  {
    title: "Urban Stories",
    director: "Sarah Chen",
    type: "Film Score",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800",
    accolades: ["Film Festival Winner", "Best Original Score"],
    icon: <Film className="w-6 h-6" />
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing our best work and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-96">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-red-500 rounded-lg mr-3">
                      {project.icon}
                    </div>
                    <span className="text-sm text-red-400">{project.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">
                    {project.artist || project.host || project.director}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.accolades.map((accolade, i) => (
                      <div
                        key={i}
                        className="flex items-center bg-red-500/20 px-3 py-1 rounded-full"
                      >
                        <Award className="w-4 h-4 mr-1 text-red-500" />
                        <span className="text-sm">{accolade}</span>
                      </div>
                    ))}
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

export default Projects;