import { motion } from "framer-motion";
import SplitText from "./SplitText";

const skills = [
  { 
    category: "TALEN", 
    items: ["Java", "TypeScript", "JavaScript", "SQL", "Python", "HTML/CSS"] 
  },
  { 
    category: "FRONTEND", 
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Shadcn/UI", "Lucide"] 
  },
  { 
    category: "BACKEND", 
    items: ["Spring Boot", "Node.js", "Express", "PostgreSQL", "REST API's", "Hibernate"] 
  },
  { 
    category: "TOOLS & DESIGN", 
    items: ["Sanity CMS", "Figma", "Git", "Vercel", "Docker", "Postman"] 
  },
];

const SkillsSection = () => {
  return (
    <section className="relative py-24 px-6 grid-paper">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[10px] text-muted-foreground tracking-widest">03</span>
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            <SplitText text="TECH_STACK" />
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              className="border-2 border-border p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <h3 className="text-[10px] text-primary tracking-widest mb-4 font-mono">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-muted-foreground font-mono flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary/50 inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
