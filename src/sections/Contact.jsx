import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { contact } = portfolioData;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-card-border/60 pt-16">
      <div className="lg:col-span-5 space-y-4">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-text-main to-slate-400 bg-clip-text text-transparent">
          Gateway Communications
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
          Operational client routing portal processing input variables directly to integrated submission collector system.
        </p>
        <div className="space-y-3 pt-4">
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <Mail size={16} className="text-accent" />
            <span className="font-mono">{contact.email}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <Linkedin size={16} className="text-primary" />
            <span className="font-mono">linkedin.com/in/vaibhavijaiswal</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <Github size={16} className="text-secondary" />
            <span className="font-mono">github.com/vaibhavij20</span>
          </div>
        </div>
      </div>

      {/* Web3Forms Integration */}
      <form 
        action={`https://api.web3forms.com/submit`}
        method="POST"
        className="lg:col-span-7 grid grid-cols-1 gap-4 font-sans text-sm"
      >
        <input type="hidden" name="access_key" value={contact.web3formsKey} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input required type="text" name="name" placeholder="Full Name" className="w-full bg-card border border-card-border rounded-xl p-3 text-slate-200 outline-none focus:border-accent transition-colors placeholder:text-slate-600" />
          <input required type="email" name="email" placeholder="Email Address" className="w-full bg-card border border-card-border rounded-xl p-3 text-slate-200 outline-none focus:border-accent transition-colors placeholder:text-slate-600" />
        </div>
        <textarea required name="message" rows="5" placeholder="Project details or message query..." className="w-full bg-card border border-card-border rounded-xl p-3 text-slate-200 outline-none focus:border-accent transition-colors placeholder:text-slate-600 resize-none" />
        <button type="submit" className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl transition-all cursor-pointer shadow-lg shadow-primary/10 flex items-center justify-center gap-2">
          <Send size={18} />
          Transmit Message Array
        </button>
      </form>
    </section>
  );
}