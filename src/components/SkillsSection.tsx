import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Python" },
  { name: "React" },
  { name: "Java" },
  { name: "SQL" },
  { name: "APIs" },
  { name: "Automação" },
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
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Estudo e prática</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Tecnologias que <span className="gradient-text">exploro</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card rounded-lg px-5 py-4"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground font-mono">{skill.name}</span>
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
