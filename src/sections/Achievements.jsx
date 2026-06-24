import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Achievements() {
  const { achievements } = portfolioData;

  if (!achievements || achievements.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="space-y-10 py-4">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-card-border text-slate-400 text-xs font-mono">
          <span>COMPETITIVE RECOGNITIONS</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-text-main to-slate-400 bg-clip-text text-transparent">
          Key Achievements
        </h2>
        <p className="text-slate-400 max-w-xl text-sm">
          Highlights from elite coding battles, hackathons, and academic championships.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {achievements.map((achievement, idx) => {
          // Determine icon based on content
          const isWinner = achievement.toLowerCase().includes("winner") || achievement.toLowerCase().includes("ranked 3rd");
          const IconComponent = isWinner ? Trophy : Award;
          const iconColorClass = isWinner ? "text-amber-400" : "text-accent";
          const glowColorClass = isWinner ? "shadow-amber-500/10 hover:border-amber-500/30" : "shadow-accent/10 hover:border-accent/30";

          // Split title and details if there's a colon
          const colonIndex = achievement.indexOf(":");
          const title = colonIndex !== -1 ? achievement.substring(0, colonIndex).trim() : "Recognition";
          const description = colonIndex !== -1 ? achievement.substring(colonIndex + 1).trim() : achievement;

          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.2 }
              }}
              className={`p-6 rounded-2xl bg-card/30 border border-card-border backdrop-blur-sm shadow-lg ${glowColorClass} transition-all duration-300 flex gap-4 items-start group`}
            >
              <div className={`p-3 rounded-xl bg-slate-900/80 border border-card-border/80 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                <IconComponent className={iconColorClass} size={24} />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-200 group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
