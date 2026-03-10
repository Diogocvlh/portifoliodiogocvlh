import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Python", level: 90 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "SQL", level: 75 },
  { name: "APIs", level: 85 },
  { name: "Automação", level: 95 },
  { name: "Dashboards", level: 85 },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="habilidades" className="py-24 section-gradient" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Tech Stack</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Habilidades e <span className="gradient-text">Tecnologias</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground font-mono">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + idx * 0.08, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-neon-cyan"
                  style={{
                    boxShadow: "0 0 10px hsl(217 91% 60% / 0.4)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
