import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Organização",
    role: "Estrutura do projeto",
    text: "Separar páginas, componentes e utilitários ajuda a entender o código e facilita pequenas mudanças.",
    initials: "01",
  },
  {
    name: "Verificação",
    role: "Execução e comportamento",
    text: "Conferir o build, os estados da interface e as regras ajuda a identificar limitações antes de compartilhar um projeto.",
    initials: "02",
  },
  {
    name: "Documentação",
    role: "Decisões e próximos passos",
    text: "Registrar como executar a aplicação, o que já funciona e o que está em desenvolvimento torna o projeto mais fácil de avaliar.",
    initials: "03",
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
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Desenvolvimento</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Cuidados com <span className="gradient-text">cada projeto</span>
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
