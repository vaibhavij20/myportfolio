import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Research from './sections/Research';
import Contact from './sections/Contact';

function App() {
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      <div className="mesh-gradient" />
      <div className="scanline-overlay" />
      
      <div className="relative z-10 space-y-24">
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Research />
        <Contact />
      </div>
      
      <footer className="relative z-10 pt-16 border-t border-card-border/60 text-center">
        <p className="text-sm text-slate-500 font-mono">
          © 2024 Vaibhavi Jaiswal · Engineered with React + Tailwind CSS v4 + Framer Motion
        </p>
      </footer>
    </main>
  );
}

export default App;
