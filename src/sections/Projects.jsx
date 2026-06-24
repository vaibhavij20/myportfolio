import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Zap, BarChart3, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="space-y-12">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-text-main to-slate-400 bg-clip-text text-transparent">
          Production Engineering Registers
        </h2>
        <p className="text-slate-400 max-w-xl text-sm">
          Interactive display panels with live metrics, automated pipelines, and system blueprints.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6, borderColor: "rgba(99, 102, 241, 0.4)", boxShadow: "0 15px 30px -10px rgba(99, 102, 241, 0.12)" }}
            className="rounded-2xl bg-card border border-card-border overflow-hidden flex flex-col group transition-all duration-300"
          >
            {/* Project Image */}
            {project.image && (
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,20,30,0.95)] via-[rgba(20,20,30,0.3)] to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-accent/20 text-slate-300 hover:text-accent transition-colors">
                      <Github size={14} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-accent/20 text-slate-300 hover:text-accent transition-colors">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            )}

            <div className="p-5 space-y-4 flex-1 flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-100 leading-tight">{project.name}</h3>
                {/* Show icons here only if there's no image */}
                {!project.image && (
                  <div className="flex gap-2 shrink-0">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900/60 hover:bg-accent/20 text-slate-400 hover:text-accent transition-colors">
                        <Github size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900/60 hover:bg-accent/20 text-slate-400 hover:text-accent transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                )}
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>

              {project.metrics && (
                <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-900/40 border border-card-border">
                  <div className="text-center">
                    <span className="text-xs text-slate-500 block">MAE</span>
                    <span className="text-lg font-bold text-accent font-mono">{project.metrics.mae}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-slate-500 block">R²</span>
                    <span className="text-lg font-bold text-secondary font-mono">{project.metrics.r2}</span>
                  </div>
                </div>
              )}

              {project.pipeline && (
                <div className="p-3 rounded-xl bg-slate-900/40 border border-card-border">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <Zap size={12} />
                    <span className="uppercase tracking-wider">Pipeline</span>
                  </div>
                  <p className="text-xs text-slate-300 font-mono leading-relaxed">{project.pipeline}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-md bg-slate-900/60 border border-card-border text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>

              {project.architecture && (
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 rounded-xl bg-slate-900/60 hover:bg-accent/20 border border-card-border hover:border-accent/40 text-sm text-slate-300 hover:text-accent transition-all flex items-center justify-center gap-2"
                >
                  <Layers size={14} />
                  View System Blueprint
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Slide-out Overlay Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-slate-950 border-l border-card-border z-50 overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-100">{selectedProject.name}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg hover:bg-slate-900 text-slate-400 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Show image in drawer if available */}
                {selectedProject.image && (
                  <div className="rounded-xl overflow-hidden border border-card-border">
                    <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-auto" />
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                    <BarChart3 size={16} />
                    <span>System Architecture Blueprint</span>
                  </div>

                  <div className="space-y-3">
                    {selectedProject.architecture.map((node, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 rounded-xl bg-slate-900/60 border border-card-border relative"
                      >
                        <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-accent/30" />
                        <div className="absolute left-0 top-4 w-2 h-2 rounded-full bg-accent -translate-x-1/2" />
                        <div className="pl-4">
                          <span className="text-xs font-mono text-accent block mb-1">Agent {index + 1}</span>
                          <p className="text-sm text-slate-300">{node}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-card-border">
                    <h4 className="text-sm font-semibold text-slate-200 mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.achievements && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="pt-4 border-t border-card-border space-y-2"
                    >
                      <h4 className="text-sm font-semibold text-slate-200">Key Achievements</h4>
                      <ul className="space-y-2 text-xs text-slate-300">
                        {selectedProject.achievements.map((a, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-accent mt-0.5">•</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}