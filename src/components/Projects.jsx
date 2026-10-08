import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Projets & <span className="gold-gradient-text">Réalisations</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base">
            Une sélection de mes projets récents, de l'application SaaS complète avec Laravel & React jusqu'aux applications frontend haut de gamme.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                filter === cat
                  ? 'bg-amber-500 text-zinc-950 border-amber-400 shadow-lg shadow-amber-500/20'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat === 'All' ? 'Tous les Projets' : cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="glass-panel rounded-3xl border border-zinc-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Hover Overlay */}
                  <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden bg-zinc-950/80 flex items-center justify-center p-3 border-b border-zinc-800/80">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-xs">
                      <motion.button
                        whileHover={{ scale: 1.15 }}
                        onClick={() => setSelectedProject(project)}
                        className="p-3.5 rounded-full bg-amber-500 text-zinc-950 font-bold shadow-lg"
                        title="Aperçu des détails"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                      <motion.a
                        whileHover={{ scale: 1.15 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3.5 rounded-full bg-zinc-900 text-white hover:text-amber-400 border border-zinc-700 shadow-lg"
                        title="Voir Code Source"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </motion.a>
                    </div>
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-amber-400 text-xs font-mono font-bold border border-zinc-800">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="p-6 pt-4 flex items-center justify-between border-t border-zinc-800/80 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-amber-400 text-xs font-mono flex items-center gap-2 font-semibold transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" /> Code Source GitHub
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Detail Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}


