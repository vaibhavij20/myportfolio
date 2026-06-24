import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Wrench, ArrowRight, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about, skills } = portfolioData;

  return (
    <section className="space-y-12">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-text-main to-slate-400 bg-clip-text text-transparent">
          About Me & Domain Competencies
        </h2>
        <p className="text-slate-400 max-w-xl text-sm">
          Bridging algorithmic thinking with modern AI architecture and full-stack execution.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Python Object representation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 rounded-2xl border border-card-border bg-slate-950 font-mono text-xs overflow-hidden shadow-2xl"
        >
          <div className="bg-slate-900 px-4 py-3 border-b border-card-border flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-slate-500 text-[10px] ml-2">vaibhavi.py</span>
          </div>
          <div className="p-5 space-y-2 text-slate-300 leading-relaxed">
            <p><span className="text-secondary">class</span> <span className="text-accent">VaibhaviJaiswal</span>:</p>
            <p className="pl-4"><span className="text-primary">university</span> = <span className="text-amber-300">"{about.university}"</span></p>
            <p className="pl-4"><span className="text-primary">focus</span> = [</p>
            {about.focus.map((f, i) => (
              <p key={i} className="pl-8 text-emerald-400">"{f}",</p>
            ))}
            <p className="pl-4">]</p>
            <p className="pl-4"><span className="text-primary">currently</span> = <span className="text-amber-300">"{about.currently}"</span></p>
            <p className="pl-4"><span className="text-primary">looking_for</span> = <span className="text-amber-300">"{about.lookingFor}"</span></p>
            <p className="pl-4"><span className="text-primary">fun_fact</span> = <span className="text-amber-300">"{about.funFact}"</span></p>
          </div>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-2">
            <Calendar size={16} /> Trajectory Evolution
          </h3>
          <div className="space-y-4">
            {about.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 rounded-xl bg-card border border-card-border hover:border-accent/40 transition-colors"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-accent mt-1.5" />
                  {index < about.timeline.length - 1 && <div className="w-0.5 flex-1 bg-card-border mt-2" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-accent">{item.year}</span>
                    <ArrowRight size={12} className="text-slate-600" />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-200">{item.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Skill Categorization Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
        <div className="p-4 rounded-xl bg-card border border-card-border space-y-3">
          <div className="flex items-center gap-2 text-accent text-sm font-semibold">
            <Code2 size={16} /> <span>Core Languages</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {skills.languages.map((s) => (
              <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-card-border">{s}</span>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-card border border-card-border space-y-3">
          <div className="flex items-center gap-2 text-primary text-sm font-semibold">
            <Cpu size={16} /> <span>AI / Deep Learning</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {skills.aiDeepLearning.map((s) => (
              <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-card-border">{s}</span>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-card border border-card-border space-y-3">
          <div className="flex items-center gap-2 text-secondary text-sm font-semibold">
            <Database size={16} /> <span>Frameworks</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {skills.frameworks.map((s) => (
              <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-card-border">{s}</span>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-card border border-card-border space-y-3">
          <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold">
            <Wrench size={16} /> <span>Databases</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {skills.databases.map((s) => (
              <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-card-border">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}