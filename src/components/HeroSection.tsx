import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Mail, Linkedin, ChevronDown, Trophy } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${5 + i}s`,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-6 text-glow">
            &lt;Hello World /&gt;
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-8xl font-bold mb-4 tracking-tight"
        >
          <span className="gradient-text">Tanmay</span>
          <br />
          <span className="gradient-text">Korate</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xl md:text-2xl text-muted-foreground mb-3 font-light"
        >
          Backend & Full-Stack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <Trophy className="text-highlight" size={16} />
          <span className="text-sm font-mono gradient-text-gold">
            Winner — HackNexus 2.0 Hackathon
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="text-secondary-foreground/70 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          B.Tech CSE student passionate about building efficient software solutions
          with Python, Java, Spring Boot & Flask.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <a
            href="mailto:tanmaykorate6@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:box-glow-strong transition-all duration-300 hover:scale-105"
          >
            <Mail size={18} /> Get In Touch
          </a>
          <a
            href="https://linkedin.com/in/tammay_korate_01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          href="#about"
          className="inline-block animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown size={28} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
