import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const whatsappUrl = `https://wa.me/${personalData.phoneClean.replace('+', '')}`;

  return (
    <section id="contact" className="py-24 relative">
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
            <Mail className="w-3.5 h-3.5" /> Contact Direct
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Restons en <span className="gold-gradient-text">Contact</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base">
            Vous avez une opportunité de recrutement, un projet web ou une proposition de collaboration ? N'hésitez pas à me joindre directement via mes coordonnées ci-dessous.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main Direct Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            {/* Email Card */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              href={personalData.socials.email}
              className="glass-panel p-6 rounded-3xl border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 group flex items-start gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all shrink-0">
                <Mail className="w-7 h-7" />
              </div>
              <div className="space-y-1 min-w-0">
                <span className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">Email Professionnel</span>
                <span className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors truncate block">
                  {personalData.email}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-amber-400/90 font-medium">
                  Envoyer un message <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.a>

            {/* Phone Card */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
              href={personalData.socials.phone}
              className="glass-panel p-6 rounded-3xl border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 group flex items-start gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all shrink-0">
                <Phone className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">Téléphone</span>
                <span className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors block">
                  {personalData.phone}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-amber-400/90 font-medium">
                  Appeler directement <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.a>

            {/* WhatsApp Direct Card */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-3xl border border-zinc-800 hover:border-emerald-500/40 transition-all duration-300 group flex items-start gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all shrink-0">
                <MessageSquare className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">WhatsApp</span>
                <span className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors block">
                  Message Instantané
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400/90 font-medium">
                  Ouvrir WhatsApp <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.a>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-panel p-6 rounded-3xl border border-zinc-800 flex items-start gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">Localisation</span>
                <span className="text-base sm:text-lg font-bold text-white block">
                  {personalData.location}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Disponible en présentiel & remote
                </span>
              </div>
            </motion.div>

          </div>

          {/* Social Profiles Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel p-8 rounded-3xl border border-zinc-800 text-center space-y-6"
          >
            <h3 className="text-xl font-bold text-white">Retrouvez-moi sur les réseaux professionnels</h3>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-200 font-semibold text-sm hover:border-amber-500/40 hover:text-amber-400 transition-all shadow-md"
              >
                <GithubIcon className="w-5 h-5 text-amber-400" />
                <span>GitHub (MohammedEloudyy)</span>
                <ExternalLink className="w-4 h-4 text-zinc-500" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-200 font-semibold text-sm hover:border-amber-500/40 hover:text-amber-400 transition-all shadow-md"
              >
                <LinkedinIcon className="w-5 h-5 text-amber-400" />
                <span>LinkedIn (Mohammed Eloudyy)</span>
                <ExternalLink className="w-4 h-4 text-zinc-500" />
              </motion.a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}



