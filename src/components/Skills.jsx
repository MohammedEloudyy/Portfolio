import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code, Layers, Database, Wrench, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'Toutes les compétences', icon: Cpu },
    { id: 'langages', label: 'Langages de dev', icon: Code },
    { id: 'frameworks', label: 'Frameworks & Libs', icon: Layers },
    { id: 'backendDb', label: 'Backend & BD', icon: Database },
    { id: 'tools', label: 'Outils & Environnement', icon: Wrench },
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'langages') return skillsData.langages;
    if (activeTab === 'frameworks') return skillsData.frameworks;
    if (activeTab === 'backendDb') return skillsData.backendDb;
    if (activeTab === 'tools') return skillsData.tools;
    return [
      ...skillsData.langages,
      ...skillsData.frameworks,
      ...skillsData.backendDb,
      ...skillsData.tools
    ];
  };

  return (
    <section id="skills" className="py-24 relative">
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
            <Cpu className="w-3.5 h-3.5" /> Compétences Techniques
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Stack Technique & <span className="gold-gradient-text">Environnement</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base">
            Compétences techniques structurées : langages de programmation, frameworks modernes, modélisation de bases de données et outils de développement.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                  isActive
                    ? 'bg-amber-500 text-zinc-950 border-amber-400 shadow-lg shadow-amber-500/20 scale-105'
                    : 'bg-zinc-900/80 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </motion.button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {getFilteredSkills().map((skill, index) => (
              <motion.div
                key={`${activeTab}-${skill.name}`}
                layout
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="glass-panel p-6 rounded-2xl border border-zinc-800/80 hover:border-amber-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-xs text-zinc-400 font-mono">Maîtrise</span>
                    </div>
                  </div>
                  <span className="text-sm font-mono font-bold text-amber-400">{skill.level}%</span>
                </div>

                {/* Progress Bar Animation */}
                <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/60">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: 0.1 + (index * 0.03), ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Technical Capabilities Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 glass-panel p-8 rounded-3xl border border-zinc-800 text-center max-w-4xl mx-auto space-y-4"
        >
          <h3 className="text-xl font-bold text-white">
            Architecture Web Full Stack (Laravel & React.js)
          </h3>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            De la modélisation des besoins avec <strong>UML & MySQL</strong>, jusqu'à la création d'<strong>APIs REST sécurisées</strong> avec Laravel Sanctum et d'interfaces web dynamiques avec <strong>React.js & Tailwind CSS</strong>.
          </p>
        </motion.div>

      </div>
    </section>
  );
}



