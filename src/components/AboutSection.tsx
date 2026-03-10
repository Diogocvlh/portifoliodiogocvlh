import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Sobre mim</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-8">
            Quem é <span className="gradient-text">Diogo Carvalho</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              Sou um desenvolvedor Full Stack apaixonado por tecnologia e automação.
              Atualmente cursando Engenharia da Computação, combino conhecimento técnico
              com experiência prática para criar soluções digitais que fazem a diferença.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Especializado em criar <span className="text-foreground font-medium">websites modernos</span>,{" "}
              <span className="text-foreground font-medium">dashboards interativos</span>,{" "}
              <span className="text-foreground font-medium">automações inteligentes</span> e{" "}
              <span className="text-foreground font-medium">soluções de e-commerce</span> que
              ajudam empresas a otimizar processos e crescer no mercado digital.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Minha missão é transformar problemas complexos em soluções elegantes e eficientes,
              usando as melhores tecnologias disponíveis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "10+", label: "Projetos Entregues" },
              { value: "2+", label: "Anos de Experiência" },
              { value: "5+", label: "Tecnologias" },
              { value: "100%", label: "Comprometimento" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-6 text-center rounded-lg hover:neon-border transition-all duration-300"
              >
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
