import { motion } from "framer-motion";
import SplitText from "./SplitText";

const experiences = [
  {
    type: "EXPERIENCE",
    title: "van Walsem Consultancy",
    role: "Freelance Full-stack Ontwikkelaar",
    period: "DEC. 2025 — HEDEN",
    description:
      "Zelfstandig realiseren van applicaties van A tot Z met focus op Next.js en TypeScript. Verantwoordelijk voor de volledige migratie van de Valley Vultures website naar een schaalbare architectuur (Next.js/Sanity/Vercel).",
  },
  {
    type: "EXPERIENCE",
    title: "Valley Vultures Basketball",
    role: "Bestuurslid Technische Zaken",
    period: "NOV. 2024 — HEDEN",
    description:
      "Strategische sturing van de technische koers en organisatie binnen de vereniging. Tevens sinds 2022 actief als Trainer & Coach, verantwoordelijk voor tactiek, wedstrijdplanning en teamcoördinatie.",
  },
  {
    type: "EXPERIENCE",
    title: "BOLD Digital",
    role: "Software Developer",
    period: "FEB. 2023 — AUG. 2025",
    description:
      "Ontwikkeling van backend systemen met Java Spring Boot en API-koppelingen. UI/UX design in Figma en onderzoek gedaan naar AI-foutdetectie met PyTorch tijdens een verdiepende stageperiode.",
  },
  {
    type: "EDUCATION",
    title: "Minor Accounting and Finance",
    role: "Hogeschool Utrecht",
    period: "SEP. 2025 — JAN. 2026",
    description:
      "Succesvol afgerond met focus op Financiële Analyse, Business Simulation (strategische marktkeuzes/kasstroombeheer) en het schrijven van datagedreven adviesrapporten.",
  },
  {
    type: "EDUCATION",
    title: "Information Technology (HBO-ICT)",
    role: "HAN University of Applied Sciences",
    period: "2021 — HEDEN",
    description:
      "Bacheloropleiding gericht op software engineering en technische systeemarchitectuur.",
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
            <SplitText text="ERVARING" />
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
