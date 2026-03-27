import { motion } from "framer-motion";
import { Code2, Globe, MessageSquare, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Student Management System",
    tech: ["Java", "Spring Boot", "MySQL"],
    description:
      "Web-based portal to manage student records, attendance, and grades with secure CRUD operations using Spring Boot REST APIs.",
    icon: Code2,
  },
  {
    title: "Blog Website",
    tech: ["Python", "Flask", "SQLite"],
    description:
      "Responsive blogging platform with user authentication and CRUD operations, featuring Flask templates for dynamic content.",
    icon: Globe,
  },
  {
    title: "NLP Chatbot",
    tech: ["Python", "NLTK", "Flask"],
    description:
      "Chatbot using Python's NLTK library for basic Q&A interactions, deployed locally with Flask for web-based access.",
    icon: MessageSquare,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-xs tracking-widest uppercase mb-2">
            // what i've built
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 gradient-text inline-block">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group glass-card p-6 hover-lift hover:border-primary/40 hover:box-glow flex flex-col relative overflow-hidden"
              >
                {/* Decorative corner gradient */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:box-glow transition-all duration-300">
                  <Icon className="text-primary" size={22} />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="text-muted-foreground/40 group-hover:text-primary/60 transition-colors" size={14} />
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
