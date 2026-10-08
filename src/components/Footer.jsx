import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, Download, MapPin, Check, Copy, ArrowRight, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const techBadges = [
    'Laravel & REST API',
    'React.js & Vite',
    'MySQL Database',
    'Tailwind CSS',
    'Framer Motion',
  ];

  return (
    <footer className="relative bg-[#08080a]/90 backdrop-blur-xl border-t border-zinc-800/80 pt-20 pb-10 overflow-hidden">
      {/* Top subtle golden accent gradient border line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Pre-Footer Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 sm:p-10 rounded-3xl border border-zinc-800/90 mb-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
              Nouvelle Collaboration
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Prêt à concevoir votre prochaine solution web ?
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Que ce soit pour un recrutement (CDI / CDD) ou un projet applicatif Full Stack sur mesure, je suis à votre disposition.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Me Contacter</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={personalData.cv}
              target="_blank"
              rel="noopener noreferrer"
              download="CV_Mohammed_Eloudyy.pdf"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-amber-500/30 text-amber-400 font-semibold text-sm transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger Mon CV</span>
            </a>
          </div>
        </motion.div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-zinc-800/80">

          {/* Col 1: Identity & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.08 }}
                className="w-10 h-10 rounded-xl overflow-hidden border border-amber-500/40 shadow-md shadow-amber-500/20 bg-zinc-950"
              >
                <img src="/ME_Portfolio_Logo.webp" alt="Mohammed Eloudyy Logo" className="w-full h-full object-cover" width="40" height="40" loading="lazy" />
              </motion.div>
              <div>
                <span className="text-lg font-extrabold text-white tracking-tight">
                  MOHAMMED <span className="gold-gradient-text">ELOUDYY</span>
                </span>
                <p className="text-xs text-zinc-400 font-mono">
                  Développeur Web Full Stack Junior
                </p>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Passionné par la conception d'applications web robustes avec <strong>Laravel & React.js</strong>. Diplômé DTS en Développement Digital, axé sur la clarté du code et l'expérience utilisateur.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Casablanca, Maroc (GMT+1)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-zinc-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="text-zinc-600 group-hover:text-amber-400 transition-colors">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Stack Technique (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Technologies
            </h4>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              {techBadges.map((badge, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{badge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Contact & Copy (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Contact Direct
            </h4>

            {/* Interactive Email Copy Box */}
            <div className="space-y-2">
              <span className="text-xs text-zinc-400 font-mono block">Email :</span>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono">
                <span className="text-zinc-200 truncate pr-2 select-all">
                  {personalData.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-amber-400 hover:text-white transition-colors shrink-0"
                  title="Copier l'adresse email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              {copied && (
                <span className="text-[11px] font-mono text-emerald-400 block">
                  ✓ Adresse email copiée dans le presse-papier !
                </span>
              )}
            </div>

            <div className="pt-1">
              <span className="text-xs text-zinc-400 font-mono block mb-1">Téléphone :</span>
              <a
                href={personalData.socials.phone}
                className="text-sm font-bold text-white hover:text-amber-400 transition-colors font-mono"
              >
                {personalData.phone}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Social Icons & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-400">

          {/* Social Links Icons */}
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-zinc-500 mr-1 uppercase text-[11px]">Réseaux :</span>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors shadow-sm"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors shadow-sm"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href={personalData.socials.email}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors shadow-sm"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Copyright & Stack credits */}
          <div className="flex items-center gap-1.5 font-mono text-center md:text-left text-zinc-500 text-xs">
            <span>© {new Date().getFullYear()} Mohammed Eloudyy. Conçu avec</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 inline fill-amber-500" />
            <span>(React & Tailwind CSS)</span>
          </div>

          {/* Back to top button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400 hover:border-amber-500/40 transition-all font-mono shadow-sm group"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-4 h-4 text-amber-400 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}
