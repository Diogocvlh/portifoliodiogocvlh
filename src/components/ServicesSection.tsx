import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Desenvolvimento de Websites",
    description: "Sites modernos, responsivos e otimizados para SEO. Landing pages, portfólios e sites institucionais com design premium.",
  },
  {
    number: "02",
    title: "Dashboards e Visualização de Dados",
    description: "Painéis interativos para monitorar métricas, KPIs e dados do seu negócio em tempo real com gráficos intuitivos.",
  },
  {
    number: "03",
    title: "Automação de Processos",
    description: "Robôs e scripts que automatizam tarefas repetitivas, coleta de dados web e integração entre sistemas e planilhas.",
  },
  {
    number: "04",
    title: "Soluções E-commerce",
    description: "Lojas virtuais completas com catálogo, carrinho, pagamentos e gestão de pedidos para vender online.",
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
          <span className="text-xs font-mono text-primary uppercase tracking-widest">O que eu faço</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Meus <span className="gradient-text">Serviços</span>
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
