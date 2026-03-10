import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-24 section-gradient" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Contato</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Vamos <span className="gradient-text">trabalhar juntos?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Estou disponível para projetos freelance, parcerias e oportunidades.
            Entre em contato e vamos conversar sobre sua ideia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          <a
            href="https://wa.me/5599985244422?text=Olá%20Diogo!%20Tenho%20interesse%20em%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl glass-card hover:neon-border transition-all duration-300 group"
          >
            <span className="text-2xl">💬</span>
            <div className="text-left">
              <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">WhatsApp</div>
              <div className="text-xs text-muted-foreground">Resposta rápida</div>
            </div>
          </a>

          <a
            href="mailto:diogocarvalho12129@gmail.com"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl glass-card hover:neon-border transition-all duration-300 group"
          >
            <span className="text-2xl">📧</span>
            <div className="text-left">
              <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">E-mail</div>
              <div className="text-xs text-muted-foreground">diogocarvalho12129@gmail.com</div>
            </div>
          </a>

          <a
            href="https://github.com/diloco06"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl glass-card hover:neon-border transition-all duration-300 group"
          >
            <span className="text-2xl">🐙</span>
            <div className="text-left">
              <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">GitHub</div>
              <div className="text-xs text-muted-foreground">github.com/diloco06</div>
            </div>
          </a>

          <a
            href="https://www.instagram.com/dev.diogocvlh/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl glass-card hover:neon-border transition-all duration-300 group"
          >
            <span className="text-2xl">📸</span>
            <div className="text-left">
              <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Instagram</div>
              <div className="text-xs text-muted-foreground">@dev.diogocvlh</div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
