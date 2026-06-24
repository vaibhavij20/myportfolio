import { motion } from 'framer-motion';
import { Award, Binary, ExternalLink, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Research() {
  const { research, certifications, github } = portfolioData;

  return (
    <section className="space-y-12">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-text-main to-slate-400 bg-clip-text text-transparent">
          Academic & Telemetry Claims
        </h2>
        <p className="text-slate-400 max-w-xl text-sm">
          Verification registries for certifications and real-time GitHub telemetry analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Research Paper Vector Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl bg-card border border-card-border relative overflow-hidden space-y-4"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none text-accent">
            <Binary size={180} />
          </div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
            Peer Reviewed Core Research
          </span>
          <h3 className="text-xl font-bold text-slate-100">
            {research.paper.title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            {research.paper.description}
          </p>
          <div className="grid grid-cols-2 gap-4 pt-2 font-mono">
            <div className="bg-slate-900/60 p-3 rounded-xl border border-card-border">
              <span className="text-xs text-slate-500 block">MAE Error Rate</span>
              <span className="text-2xl font-bold text-accent">{research.paper.metrics.mae}</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-xl border border-card-border">
              <span className="text-xs text-slate-500 block">R² Predictive Capacity</span>
              <span className="text-2xl font-bold text-secondary">{research.paper.metrics.r2}</span>
            </div>
          </div>
        </motion.div>

        {/* Real-world Core Certification Logs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-2">
            <Award size={16} /> Credential Registries
          </h3>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-xl bg-slate-900/40 border border-card-border flex flex-col sm:flex-row justify-between sm:items-center gap-2 hover:border-accent/40 transition-colors"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-200">{cert.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{cert.issuer} · {cert.date}</p>
                </div>
                <a href={cert.verify} target="_blank" rel="noreferrer" className="text-xs text-accent font-medium hover:underline w-fit flex items-center gap-1">
                  Verify Link <ExternalLink size={12} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Dynamic Centralized Analytics Blocks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="space-y-4 pt-6"
      >
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-2">
          <Activity size={16} /> GitHub Target Metrics
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <img className="w-full rounded-xl border border-card-border hover:border-accent/40 transition-colors" src={github.stats} alt="Stats" />
          <img className="w-full rounded-xl border border-card-border hover:border-accent/40 transition-colors" src={github.languages} alt="Languages" />
          <img className="w-full rounded-xl border border-card-border hover:border-accent/40 transition-colors" src={github.productiveTime} alt="Productive Analytics" />
        </div>
      </motion.div>

    </section>
  );
}