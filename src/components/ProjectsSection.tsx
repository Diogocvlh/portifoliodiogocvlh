import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectAutomation from "@/assets/project-automation.jpg";

const projects = [
  {
    title: "FieldOps",
    description: "MVP para gerenciar ordens de serviço, técnicos e distribuição de trabalho, com demonstração local e API Java.",
    image: projectDashboard,
    stack: ["React", "TypeScript", "Java", "Spring Boot"],
    github: "https://github.com/Diogocvlh/fieldops",
    demo: "#",
  },
  {
    title: "Automação de tarefas",
    description: "Projeto de automação em Python para explorar coleta de dados e integração com planilhas.",
    image: projectAutomation,
    stack: ["Python", "Selenium", "Google Auth", "gspread"],
    github: "https://github.com/Diogocvlh/automacao-planilhas",
    demo: "#",
  },
  {
    title: "Dashboard financeiro",
    description: "Protótipo de interface com indicadores, gráficos de receitas e despesas e transações demonstrativas.",
    image: projectDashboard,
    stack: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
    github: "https://github.com/Diogocvlh/elegant-financial-dashboard",
    demo: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Portfólio</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Projetos em <span className="gradient-text">Destaque</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group glass-card rounded-xl overflow-hidden hover:neon-border transition-all duration-500"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={`Imagem ilustrativa de ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] font-mono font-medium text-primary bg-primary/10 border border-primary/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 text-xs font-medium text-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300"
                  >
                    Código no GitHub
                  </a>
                  <span className="flex-1 px-4 py-2 text-xs text-center rounded-lg bg-muted text-muted-foreground">
                    Demonstração em preparação
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
