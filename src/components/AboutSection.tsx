import { motion } from "framer-motion";
import { Trophy, Code, Zap } from "lucide-react";

const stats = [
  { icon: Trophy, label: "Hackathon Winner", value: "HackNexus 2.0" },
  { icon: Code, label: "Projects Built", value: "3+" },
  { icon: Zap, label: "Tech Stack", value: "Full-Stack" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-xs tracking-widest uppercase mb-2">
            // who am i
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 gradient-text inline-block">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-secondary-foreground/80 text-lg leading-relaxed mb-6">
              Motivated and detail-oriented Computer Science Engineering student at YCCE Nagpur.
              I specialize in backend and full-stack development, with hands-on experience building
              production-ready applications using Java, Python, Spring Boot, and Flask.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Winner of HackNexus 2.0 hackathon, active coding competitor, and member of the YCCE Coding Club.
              I'm passionate about clean code, scalable architecture, and solving real-world problems.
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="glass-card p-4 flex items-center gap-4 hover-lift hover:border-primary/30 hover:box-glow"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-sm">{stat.value}</p>
                    <p className="text-muted-foreground text-xs">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
