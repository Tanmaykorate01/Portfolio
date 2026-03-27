import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy } from "lucide-react";

const certifications = [
  "Python for Data Science – Coursera",
  "Web Development Bootcamp – Udemy",
];

const EducationSection = () => {
  return (
    <section id="education" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/60 via-card/30 to-transparent" />
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-xs tracking-widest uppercase mb-2">
            // background
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 gradient-text inline-block">
            Education & Achievements
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8"
          >
            <div className="flex gap-4 items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  B.Tech – CSE
                </h3>
                <p className="text-muted-foreground text-sm">
                  YCCE, Nagpur
                </p>
                <p className="font-mono text-xs text-primary/70 mt-1">2023 – Present</p>
              </div>
            </div>

            <div className="space-y-3 border-t border-border/50 pt-6">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">Certifications</p>
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3">
                  <Award className="text-primary shrink-0" size={14} />
                  <span className="text-secondary-foreground/80 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements - HackNexus featured */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            {/* HackNexus 2.0 Winner Card */}
            <div className="glass-card p-8 relative overflow-hidden animated-border">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-highlight/10 to-transparent rounded-bl-full" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-highlight/15 flex items-center justify-center">
                  <Trophy className="text-highlight" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold gradient-text-gold">
                    HackNexus 2.0
                  </h3>
                  <p className="text-muted-foreground text-sm">Hackathon Winner 🏆</p>
                </div>
              </div>
              <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                Won the HackNexus 2.0 hackathon, demonstrating innovation, technical prowess, 
                and the ability to deliver impactful solutions under pressure.
              </p>
            </div>

            {/* Other achievements */}
            <div className="glass-card p-6">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">Also</p>
              <div className="space-y-3">
                {[
                  "Active participant in coding competitions",
                  "Interested in backend dev & AI applications",
                  "Member of Coding Club, YCCE",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-secondary-foreground/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
