import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code, Layers, Database, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// ── Simple Icons (Si*) ──────────────────────────────────────────────────────
import {
  SiPhp, SiJavascript, SiHtml5, SiCss,
  SiMysql, SiLaravel, SiReact, SiReactrouter,
  SiTailwindcss, SiFramer, SiBootstrap,
  SiPostman, SiGit, SiFigma,
  SiVite, SiJira,
} from 'react-icons/si';
import { FaProjectDiagram, FaCode } from 'react-icons/fa';
import { MdCode } from 'react-icons/md';
import { VscCode } from 'react-icons/vsc';

// ── Icon map: skill name → { icon component, colour } ──────────────────────
const ICON_MAP = {
  // Langages
  'PHP':                    { Icon: SiPhp,         color: '#7a86b8' },
  'JavaScript (ES6+)':      { Icon: SiJavascript,  color: '#f7df1e' },
  'HTML5':                  { Icon: SiHtml5,        color: '#e34f26' },
  'CSS3':                   { Icon: SiCss,          color: '#1572b6' },
  'SQL':                    { Icon: SiMysql,        color: '#4479a1' },

  // Frameworks & Libs
  'Laravel':                { Icon: SiLaravel,      color: '#ff2d20' },
  'React.js':               { Icon: SiReact,        color: '#61dafb' },
  'React Router':           { Icon: SiReactrouter,  color: '#ca4245' },
  'Tailwind CSS':           { Icon: SiTailwindcss,  color: '#38bdf8' },
  'Framer Motion':          { Icon: SiFramer,       color: '#ffffff' },
  'Bootstrap':              { Icon: SiBootstrap,    color: '#7952b3' },

  // Backend & BD
  'API REST':               { Icon: FaCode,         color: '#f59e0b' },
  'MySQL':                  { Icon: SiMysql,        color: '#4479a1' },
  'Laravel Sanctum':        { Icon: SiLaravel,      color: '#ff2d20' },
  'Modélisation UML':       { Icon: FaProjectDiagram, color: '#a78bfa' },

  // Outils
  'Vite':                   { Icon: SiVite,         color: '#646cff' },
  'Git & GitHub':           { Icon: SiGit,          color: '#f05032' },
  'Postman':                { Icon: SiPostman,      color: '#ff6c37' },
  'Jira':                   { Icon: SiJira,         color: '#0052cc' },
  'VS Code':                { Icon: VscCode,        color: '#007acc' },
  'Figma':                  { Icon: SiFigma,        color: '#f24e1e' },
};

const getFallback = () => ({ Icon: MdCode, color: '#f59e0b' });

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all',       label: 'Toutes les compétences', icon: Cpu      },
    { id: 'langages',  label: 'Langages de dev',         icon: Code     },
    { id: 'frameworks',label: 'Frameworks & Libs',       icon: Layers   },
    { id: 'backendDb', label: 'Backend & BD',             icon: Database },
    { id: 'tools',     label: 'Outils & Environnement',  icon: Wrench   },
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'langages')   return skillsData.langages;
    if (activeTab === 'frameworks') return skillsData.frameworks;
    if (activeTab === 'backendDb')  return skillsData.backendDb;
    if (activeTab === 'tools')      return skillsData.tools;
    return [
      ...skillsData.langages,
      ...skillsData.frameworks,
      ...skillsData.backendDb,
      ...skillsData.tools,
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
            Stack Technique &amp; <span className="gold-gradient-text">Environnement</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base">
            Compétences techniques structurées : langages de programmation, frameworks modernes, modélisation de bases de données et outils de développement.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const CatIcon = cat.icon;
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
                <CatIcon className="w-4 h-4" />
                {cat.label}
              </motion.button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {getFilteredSkills().map((skill, index) => {
              const { Icon, color } = ICON_MAP[skill.name] ?? getFallback();
              return (
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
                      {/* Tech Icon */}
                      <div
                        className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-zinc-600 shrink-0"
                        style={{ boxShadow: `0 0 14px ${color}22` }}
                      >
                        <Icon
                          size={24}
                          style={{ color }}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                          {skill.name}
                        </h3>
                        <span className="text-xs text-zinc-500 font-mono">Maîtrise</span>
                      </div>
                    </div>
                    <span className="text-sm font-mono font-bold text-amber-400 shrink-0">{skill.level}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/60">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: 0.1 + index * 0.03, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${color}99, ${color})`,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
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
            Architecture Web Full Stack (Laravel &amp; React.js)
          </h3>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            De la modélisation des besoins avec <strong>UML &amp; MySQL</strong>, jusqu'à la création d'<strong>APIs REST sécurisées</strong> avec Laravel Sanctum et d'interfaces web dynamiques avec <strong>React.js &amp; Tailwind CSS</strong>.
          </p>

          {/* Logo strip */}
          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            {[
              { Icon: SiLaravel,     color: '#ff2d20', label: 'Laravel'    },
              { Icon: SiReact,       color: '#61dafb', label: 'React'      },
              { Icon: SiTailwindcss, color: '#38bdf8', label: 'Tailwind'   },
              { Icon: SiMysql,       color: '#4479a1', label: 'MySQL'      },
              { Icon: SiPhp,         color: '#7a86b8', label: 'PHP'        },
              { Icon: SiVite,        color: '#646cff', label: 'Vite'       },
              { Icon: SiGit,         color: '#f05032', label: 'Git'        },
              { Icon: SiPostman,     color: '#ff6c37', label: 'Postman'    },
            ].map(({ Icon: LogoIcon, color: c, label }) => (
              <div key={label} className="flex flex-col items-center gap-1 group">
                <div
                  className="w-10 h-10 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-zinc-600"
                  style={{ boxShadow: `0 0 10px ${c}33` }}
                >
                  <LogoIcon size={22} style={{ color: c }} />
                </div>
                <span className="text-xs text-zinc-500 font-mono group-hover:text-zinc-300 transition-colors">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
