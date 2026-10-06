import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Mail, MapPin, CheckCircle2, Code, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalData, statsData } from '../data/portfolioData';

const ROLES = [
  "Développeur Web Full Stack Junior",
  "Spécialiste Laravel & React.js",
  "Technicien Spécialisé (DTS)",
  "Créateur d'API REST & Applications SaaS"
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = ROLES[currentRoleIndex];
      
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-radial-glow">
      {/* Background Subtle Ambient Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-glow"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-medium shadow-sm backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{personalData.status}</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
              >
                Bonjour, je suis <br className="hidden sm:inline" />
                <span className="gold-gradient-text">Mohammed Eloudyy</span>
              </motion.h1>
              
              <div className="h-10 text-xl sm:text-2xl font-mono text-zinc-300 flex items-center justify-center lg:justify-start gap-2">
                <Code className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-amber-400 font-semibold">{displayedText}</span>
                <span className="w-0.5 h-6 bg-amber-400 animate-pulse"></span>
              </div>
            </div>

            {/* Paragraph Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {personalData.bio}
            </motion.p>

            {/* Location & Degree Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-zinc-400 font-medium"
            >
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
                <MapPin className="w-4 h-4 text-amber-400" />
                {personalData.location}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                {personalData.degree}
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href={personalData.cv}
                target="_blank"
                rel="noopener noreferrer"
                download="CV_Mohammed_Eloudyy.pdf"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all text-base"
              >
                <Download className="w-5 h-5" />
                Télécharger CV
              </a>

              <a
                href="#projects"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-amber-500/40 hover:border-amber-400 text-amber-400 font-semibold transition-all text-base"
              >
                <Sparkles className="w-5 h-5 text-amber-400" />
                Voir Mes Projets
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-zinc-200 font-semibold transition-all text-base"
              >
                <Mail className="w-5 h-5 text-zinc-400" />
                Me Contacter
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-zinc-400"
            >
              <span className="text-xs uppercase tracking-wider font-mono text-zinc-500">Réseaux:</span>
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/40 hover:text-amber-400 transition-all hover:scale-110"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/40 hover:text-amber-400 transition-all hover:scale-110"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={personalData.socials.email}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/40 hover:text-amber-400 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>

          </motion.div>

          {/* Avatar / Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-72 sm:w-80 lg:w-96 aspect-[3/4] max-w-full">
              {/* Outer Glowing Border Ring */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 0 }}
                className="absolute inset-0 rounded-[30px] bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-700 p-1 shadow-2xl shadow-amber-500/20 transform rotate-1 transition-all duration-500"
              >
                <div className="w-full h-full bg-[#0d0d10] rounded-[26px] overflow-hidden relative shadow-inner">
                  <img
                    src={personalData.avatar}
                    alt="Mohammed Eloudyy Portrait"
                    className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Glass overlay at bottom of avatar */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent pt-10 pb-4 px-4 text-center">
                    <p className="text-white font-extrabold text-base tracking-wide">Mohammed Eloudyy</p>
                    <p className="text-amber-400 text-xs font-mono font-semibold">DÉVELOPPEUR FULL STACK (LARAVEL / REACT)</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Tech Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-3.5 py-2 rounded-2xl bg-zinc-900/95 border border-amber-500/40 text-amber-400 text-xs font-mono font-bold shadow-xl backdrop-blur-md flex items-center gap-1.5"
              >
                <span>⚡ React & Laravel</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-2xl bg-zinc-900/95 border border-zinc-700 text-zinc-200 text-xs font-mono font-semibold shadow-xl backdrop-blur-md flex items-center gap-1.5"
              >
                <span>💻 Full Stack SaaS</span>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Stats Row Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-zinc-800/80"
        >
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="glass-panel p-5 rounded-2xl text-center hover:border-amber-500/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold gold-gradient-text font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}


