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
              Curso Engenharia de Computação na PUC Goiás e desenvolvo projetos
              de estudo e portfólio para praticar programação, interfaces e automação.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Tenho interesse em <span className="text-foreground font-medium">desenvolvimento web</span>,{" "}
              <span className="text-foreground font-medium">visualização de dados</span> e{" "}
              <span className="text-foreground font-medium">automação de tarefas</span>.
              Aqui compartilho aplicações, decisões técnicas e o que venho aprendendo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Busco construir projetos com organização, documentação e atenção
              à experiência de quem utiliza a interface.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "Web", label: "Interfaces e componentes" },
              { value: "Dados", label: "Dashboards e visualização" },
              { value: "Código", label: "Projetos de estudo" },
              { value: "APIs", label: "Integração entre aplicações" },
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
