import { motion } from 'framer-motion';
import { Cpu, Code2, Database, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const categoryConfig = {
    languages: {
      title: "Core Languages",
      icon: <Code2 size={20} className="text-primary" />,
      colorClass: "from-primary/20 to-primary/5 border-primary/20 hover:border-primary/40",
      glowClass: "shadow-primary/10"
    },
    aiDeepLearning: {
      title: "AI & Deep Learning",
      icon: <Cpu size={20} className="text-accent" />,
      colorClass: "from-accent/20 to-accent/5 border-accent/20 hover:border-accent/40",
      glowClass: "shadow-accent/10"
    },
    frameworks: {
      title: "Frameworks & Tools",
      icon: <Layers size={20} className="text-secondary" />,
      colorClass: "from-secondary/20 to-secondary/5 border-secondary/20 hover:border-secondary/40",
      glowClass: "shadow-secondary/10"
    },
    databases: {
      title: "Databases & Storage",
      icon: <Database size={20} className="text-emerald-500" />,
      colorClass: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40",
      glowClass: "shadow-emerald-500/10"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const tagVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 150, damping: 10 }
    }
  };

  return (
    <section className="space-y-10 py-4">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-card-border text-slate-400 text-xs font-mono">
          <span>COMPETENCY GRAPH</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-text-main to-slate-400 bg-clip-text text-transparent">
          Technical Inventory
        </h2>
        <p className="text-slate-400 max-w-xl text-sm">
          A comprehensive suite of engineering capabilities across full-stack systems and deep learning solutions.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {Object.entries(skills).map(([key, items]) => {
          const config = categoryConfig[key] || {
            title: key,
            icon: <Code2 size={20} className="text-slate-400" />,
            colorClass: "from-slate-500/20 to-slate-500/5 border-slate-500/20 hover:border-slate-500/40",
            glowClass: "shadow-slate-500/10"
          };

          return (
            <motion.div
              key={key}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className={`p-6 rounded-2xl bg-gradient-to-b ${config.colorClass} border bg-card/40 backdrop-blur-sm shadow-lg hover:${config.glowClass} transition-all duration-300 group`}
            >
              <div className="flex items-center justify-between border-b border-card-border/60 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-900/80 border border-card-border/80 group-hover:scale-110 transition-transform duration-300">
                    {config.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-200 tracking-wide">
                    {config.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-500 group-hover:text-accent transition-colors duration-300">
                  {items.length} items
                </span>
              </div>

              <motion.div 
                variants={containerVariants}
                className="flex flex-wrap gap-2.5"
              >
                {items.map((item, i) => (
                  <motion.span
                    key={i}
                    variants={tagVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      borderColor: "rgba(255, 255, 255, 0.2)"
                    }}
                    className="text-xs px-3.5 py-2 rounded-xl bg-slate-950/60 border border-card-border/50 text-slate-300 cursor-default transition-all duration-200 shadow-sm font-medium"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}