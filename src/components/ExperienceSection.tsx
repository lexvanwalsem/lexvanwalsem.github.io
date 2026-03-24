import { motion } from "framer-motion";
import SplitText from "./SplitText";

const experiences = [
  {
    type: "EXPERIENCE",
    title: "Valley Vultures",
    role: "Founder & Lead",
    period: "2024 — PRESENT",
    description:
      "Building and leading a venture-focused community driving entrepreneurship and innovation.",
  },
  {
    type: "EDUCATION",
    title: "Minor Finance",
    role: "Specialization",
    period: "2025 — PRESENT",
    description:
      "Deepening financial acumen — corporate finance, investment analysis, and strategic decision-making.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="relative py-24 px-6 grid-paper">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[10px] text-muted-foreground tracking-widest">04</span>
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            <SplitText text="EXPERIENCE" />
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              className="border-2 border-border p-8 glitch-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <span className="text-[10px] text-primary tracking-widest font-mono">
                {exp.type}
              </span>
              <h3 className="font-display text-lg font-bold mt-3">{exp.title}</h3>
              <p className="text-xs text-muted-foreground font-mono mt-1">{exp.role}</p>
              <p className="text-[10px] text-muted-foreground tracking-widest font-mono mt-4 border-t border-border pt-4">
                {exp.period}
              </p>
              <p className="text-xs text-muted-foreground font-mono mt-3 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
