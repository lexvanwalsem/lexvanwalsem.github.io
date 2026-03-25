import { motion } from "framer-motion";
import SplitText from "./SplitText";

interface Project {
  title: string;
  description: string;
  tech: string[];
  span: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "VALLEY_VULTURES",
    description: "Complete digitale transformatie voor een basketbalvereniging met een nieuwe visie. Een schaalbaar platform gebouwd in Next.js met een FOYS API-koppeling voor live wedstrijddata en een op maat gemaakt Sanity CMS voor volledig beheer van nieuws, vrijwilligers en documenten.",
    tech: ["Next.js", "Sanity", "FOYS API", "Vercel"],
    span: "md:col-span-2 md:row-span-2",
    link: "https://valleyvultures.nl",
  },
  {
    title: "TPMS_LOOKUP",
    description: "Gespecialiseerde tool voor Easywheel.nl die monteurs helpt bij het vinden van de juiste relearn-procedures. Bevat een RDW-kentekenkoppeling, slimme database-lookup, handmatige zoekfuncties en OEM-referentiesystemen.",
    tech: ["Next.js", "RDW API", "TypeScript", "SQL"],
    span: "md:col-span-1 md:row-span-1",
    link: "https://github.com/lexvanwalsem/tpms-lookup",
  },
  {
    title: "SYSTEM_REDACTED",
    description: "Nieuw project in ontwikkeling. Focus op backend optimalisatie en systeemarchitectuur.",
    tech: ["Java", "Spring Boot"],
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "CORE_ENGINE",
    description: "Onderzoek naar modulaire systeemcomponenten en herbruikbare API-structuren.",
    tech: ["Java", "Docker"],
    span: "md:col-span-2 md:row-span-1",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const Component = project.link ? "a" : "div";

  return (
    <motion.div
      className={`glitch-hover border-2 border-border bg-card p-6 flex flex-col justify-between group ${project.span} ${project.link ? "cursor-pointer" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ borderColor: project.link ? "hsl(199, 74%, 55%)" : "undefined" }}
    >
      <Component 
        href={project.link} 
        target={project.link ? "_blank" : undefined} 
        rel={project.link ? "noopener noreferrer" : undefined}
        className="flex flex-col h-full justify-between"
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] text-muted-foreground tracking-widest">
              PRJ_{(index + 1).toString().padStart(3, "0")}
            </span>
            {project.link && <span className="text-[10px] text-primary tracking-widest">↗</span>}
          </div>
          <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2 tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-1 border border-border text-muted-foreground tracking-wider uppercase group-hover:border-primary/30 group-hover:text-primary/70 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </Component>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[10px] text-muted-foreground tracking-widest">02</span>
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            <SplitText text="PROJECTEN" />
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[180px] gap-0">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;