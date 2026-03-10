import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Cliente Satisfeito",
    role: "Empresário",
    text: "Excelente profissional! Entregou o projeto no prazo e com qualidade superior ao esperado. Recomendo para qualquer projeto de automação.",
    initials: "CS",
  },
  {
    name: "Parceiro de Negócio",
    role: "Gerente de TI",
    text: "O dashboard que o Diogo criou transformou a forma como analisamos nossos dados. Interface intuitiva e dados em tempo real.",
    initials: "PN",
  },
  {
    name: "Startup Digital",
    role: "CEO",
    text: "Profissional dedicado e extremamente competente. O e-commerce ficou exatamente como imaginamos, moderno e funcional.",
    initials: "SD",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
            O que <span className="gradient-text">dizem sobre mim</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-6 rounded-xl relative"
            >
              <div className="text-4xl gradient-text opacity-20 absolute top-4 right-6 font-serif">"</div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 relative z-10">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
