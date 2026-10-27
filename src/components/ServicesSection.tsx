import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Desenvolvimento de Websites",
    description: "Estudos de layouts responsivos, navegação e componentes para páginas e aplicações web.",
  },
  {
    number: "02",
    title: "Dashboards e Visualização de Dados",
    description: "Interfaces com gráficos e indicadores para explorar a apresentação de dados.",
  },
  {
    number: "03",
    title: "Automação de Processos",
    description: "Scripts para praticar automação de tarefas repetitivas e integração entre ferramentas.",
  },
  {
    number: "04",
    title: "Integração com APIs",
    description: "Exploração da comunicação entre interfaces, serviços e persistência de dados.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-24 section-gradient" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Aprendizado na prática</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Áreas de <span className="gradient-text">interesse</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group glass-card p-8 rounded-xl hover:neon-border transition-all duration-500 cursor-default"
            >
              <span className="text-4xl font-black gradient-text opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                {service.number}
              </span>
              <h3 className="text-lg font-bold text-foreground mt-4 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
