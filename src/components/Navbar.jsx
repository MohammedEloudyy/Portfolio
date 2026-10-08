import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, ArrowUpRight, Download } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 30);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPos = currentScrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: visible ? 0 : -110, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 pointer-events-none"
    >
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-500 border ${scrolled
              ? 'bg-[#09090b]/90 backdrop-blur-xl border-zinc-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)] shadow-amber-500/5'
              : 'bg-[#121215]/80 backdrop-blur-lg border-zinc-800/80 shadow-lg'
            }`}
        >
          {/* Brand Logo & Status */}
          <a href="#home" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 4 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-full overflow-hidden border border-amber-500/40 shadow-md shadow-amber-500/20 bg-zinc-950"
            >
              <img src="/ME_Portfolio_Logo.webp" alt="Mohammed Eloudyy Logo" className="w-full h-full object-cover" width="36" height="36" />
            </motion.div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-sm font-extrabold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                  MOHAMMED <span className="gold-gradient-text">ELOUDYY</span>
                </span>
              </div>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">
                Full Stack Web Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links Floating Bar */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-950/90 px-2 py-1 rounded-full border border-zinc-800/90 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 relative ${isActive
                      ? 'text-amber-400'
                      : 'text-zinc-300 hover:text-white'
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="sawadActiveTab"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      className="absolute inset-0 bg-amber-500/15 rounded-full border border-amber-500/40 -z-10 shadow-[0_0_12px_rgba(245,158,11,0.25)]"
                    ></motion.span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <motion.a
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              href={personalData.cv}
              target="_blank"
              rel="noopener noreferrer"
              download="CV_Mohammed_Eloudyy.pdf"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-amber-400 border border-amber-500/30 font-bold text-xs transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Mon CV</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-xs shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Me Contacter</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-full bg-zinc-900 text-zinc-300 hover:text-amber-400 border border-zinc-800"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 max-w-6xl mx-auto pointer-events-auto"
          >
            <div className="bg-[#09090b]/95 backdrop-blur-2xl border border-zinc-800 rounded-3xl p-4 space-y-2 shadow-2xl">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${isActive
                        ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                        : 'text-zinc-200 hover:text-amber-400 hover:bg-zinc-900'
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href={personalData.cv}
                target="_blank"
                rel="noopener noreferrer"
                download="CV_Mohammed_Eloudyy.pdf"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 mt-2 rounded-2xl bg-zinc-900 border border-amber-500/30 text-amber-400 font-bold text-sm text-center shadow-md"
              >
                <Download className="w-4 h-4" />
                Télécharger Mon CV
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-amber-500 text-zinc-950 font-bold text-sm text-center shadow-lg shadow-amber-500/20"
              >
                Me Contacter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
