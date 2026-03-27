import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "tanmaykorate6@gmail.com",
    href: "mailto:tanmaykorate6@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "7350365303",
    href: "tel:7350365303",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "tammay_korate_01",
    href: "https://linkedin.com/in/tammay_korate_01",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-xs tracking-widest uppercase mb-2">
            // get in touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text inline-block">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-12 max-w-md mx-auto">
            Currently looking for internship opportunities. Let's build something great together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "LinkedIn" ? "_blank" : undefined}
                rel={link.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="glass-card p-6 hover-lift hover:border-primary/40 hover:box-glow group text-left"
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon className="text-primary" size={20} />
                  <ArrowUpRight className="text-muted-foreground/30 group-hover:text-primary transition-colors" size={16} />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{link.label}</p>
                <p className="text-foreground text-sm font-medium truncate">{link.value}</p>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
