import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["Python", "Java"], color: "from-primary/20 to-primary/5" },
  { category: "Frameworks", items: ["Flask", "Spring Boot"], color: "from-primary/20 to-primary/5" },
  { category: "Databases", items: ["MySQL", "SQLite"], color: "from-primary/20 to-primary/5" },
  { category: "Web Technologies", items: ["HTML", "CSS", "REST APIs"], color: "from-primary/20 to-primary/5" },
  { category: "Tools", items: ["Git", "VS Code", "Postman"], color: "from-primary/20 to-primary/5" },
  { category: "Core Concepts", items: ["OOP", "Data Structures", "DBMS"], color: "from-primary/20 to-primary/5" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/60 via-card/30 to-transparent" />
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-xs tracking-widest uppercase mb-2">
            // what i know
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 gradient-text inline-block">
            Skills & Tools
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={item}
              className="glass-card p-6 hover-lift hover:border-primary/40 hover:box-glow group"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <h3 className="font-mono text-primary text-sm tracking-wider uppercase">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary/80 text-secondary-foreground border border-border/50 group-hover:border-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
