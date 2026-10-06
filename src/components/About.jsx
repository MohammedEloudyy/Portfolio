import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Heart, CheckCircle2, BookOpen, UserCheck, Download } from 'lucide-react';
import { educationData, experienceData, interestsData, softSkillsData, languagesData, personalData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" /> À Propos de Moi
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Profil, Formation & <span className="gold-gradient-text">Expériences</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base">
            Découvrez ma philosophie de développement, mes compétences comportementales ainsi que mon parcours académique et professionnel.
          </p>
        </motion.div>

        {/* Bio & Strengths */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 glass-panel p-8 rounded-3xl space-y-5 border border-zinc-800 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-6 bg-amber-500 rounded-full"></span>
                Profil Professionnel
              </h3>
              <p className="text-zinc-300 leading-relaxed text-base italic border-l-2 border-amber-500/50 pl-4 py-1">
                "Pour moi, développer une application ne consiste pas simplement à écrire du code, mais à construire une solution qui répond à un besoin concret."
              </p>
              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                Technicien Spécialisé en <strong>Développement Digital (DTS)</strong> de l'<strong>ISTA ISAG Casablanca (OFPPT)</strong>, je m’intéresse particulièrement au développement web Full Stack et à la création d’interfaces simples, modernes et utiles. J’aime comprendre le problème avant de chercher la solution, puis transformer une idée en application fonctionnelle, de la conception du backend avec <strong>Laravel & MySQL</strong> jusqu’à l’interface dynamique avec <strong>React.js</strong>.
              </p>
              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                Après une première expérience freelance en développement frontend (notamment avec la réalisation du menu digital interactif pour <em>Mio Padre Ristorante</em>), je souhaite aujourd’hui rejoindre une équipe où je pourrai continuer à progresser, contribuer à des projets concrets et développer mes compétences au contact de professionnels.
              </p>
              <div className="pt-2">
                <a
                  href={personalData.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="CV_Mohammed_Eloudyy.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm shadow-md transition-all"
                >
                  <Download className="w-4 h-4" />
                  Télécharger Mon CV (PDF)
                </a>
              </div>
            </div>
            
            {/* Soft Skills Badges */}
            <div className="pt-4 border-t border-zinc-800 space-y-2">
              <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <UserCheck className="w-4 h-4" /> Atouts & Soft Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {softSkillsData.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-amber-500/20 text-zinc-200 text-xs font-medium hover:border-amber-500/40 hover:text-amber-400 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Languages & Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Langues */}
            <div className="glass-panel p-6 rounded-3xl border border-zinc-800 space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-400" />
                Langues
              </h4>
              <div className="space-y-4 font-medium text-sm">
                {languagesData.map((lang, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-zinc-300">
                      <span className="font-semibold text-white">{lang.name}</span>
                      <span className="text-amber-400 font-mono text-xs bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                        {lang.level}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Centres d'Intérêt */}
            <div className="glass-panel p-6 rounded-3xl border border-zinc-800 space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-amber-400" />
                Centres d'Intérêt & Veille
              </h4>
              <div className="flex flex-wrap gap-2">
                {interestsData.map((interest, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-medium hover:border-amber-500/40 hover:text-amber-400 transition-colors"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

        {/* Education & Experience Columns */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              Parcours Académique
            </h3>

            <div className="space-y-6 relative pl-6 border-l-2 border-zinc-800">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-amber-500 group-hover:scale-125 transition-transform"></span>
                  <div className="glass-panel p-6 rounded-2xl border border-zinc-800 hover:border-amber-500/30 transition-colors space-y-2">
                    <span className="inline-block px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-mono font-bold">
                      {item.period}
                    </span>
                    <h4 className="text-lg font-bold text-white">{item.degree}</h4>
                    <p className="text-zinc-400 text-sm font-semibold">{item.institution}</p>
                    <p className="text-zinc-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Briefcase className="w-6 h-6" />
              </div>
              Expériences & Projets Réalisés
            </h3>

            <div className="space-y-6 relative pl-6 border-l-2 border-zinc-800">
              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-amber-500 group-hover:scale-125 transition-transform"></span>
                  <div className="glass-panel p-6 rounded-2xl border border-zinc-800 hover:border-amber-500/30 transition-colors">
                    <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                      <span className="px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-mono font-bold">
                        {item.period}
                      </span>
                      <span className="text-xs font-mono text-amber-300/80 bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">{item.company}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white">{item.role}</h4>
                    <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                      {item.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold">•</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-zinc-800">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-0.5 rounded-md bg-zinc-900 text-xs font-mono text-amber-400 border border-zinc-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}



