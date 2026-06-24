import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, Terminal, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { hero } = portfolioData;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 max-w-3xl"
      >
        {/* Subtle AI Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-accent text-sm font-medium w-fit"
        >
          <Terminal size={14} className="animate-pulse" />
          <span>Specializing in AI / ML &amp; Full Stack</span>
        </motion.div>

        {/* Main Headings */}
        <div className="space-y-2">
          <motion.p variants={itemVariants} className="text-accent font-mono tracking-wider">
            Hi, my name is
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-text-main via-slate-300 to-primary bg-clip-text text-transparent"
          >
            {hero.name}
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-4xl font-bold text-slate-400 mt-2"
          >
            {hero.roles.join(' · ')}
          </motion.h2>
        </div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-400 max-w-xl leading-relaxed"
        >
          {hero.tagline}
        </motion.p>

        {/* CTAs / Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
          <a
            href={hero.links.resume}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/20"
          >
            <FileText size={18} />
            Resume
          </a>
          <div className="flex items-center gap-3">
            <a href={hero.links.github} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-card border border-card-border hover:border-accent text-slate-300 hover:text-accent transition-all">
              <Github size={20} />
            </a>
            <a href={hero.links.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-card border border-card-border hover:border-accent text-slate-300 hover:text-accent transition-all">
              <Linkedin size={20} />
            </a>
            <a href={hero.links.leetcode} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-card border border-card-border hover:border-accent text-slate-300 hover:text-accent transition-all">
              <Code size={20} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}