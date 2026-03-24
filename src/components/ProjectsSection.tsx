import { motion } from "framer-motion";
import SplitText from "./SplitText";

interface Project {
  title: string;
  description: string;
  tech: string[];
  span: string;
}

const projects: Project[] = [
  {
    title: "NEURAL_ENGINE",
    description: "Real-time ML inference pipeline with WebGPU acceleration and custom shader compute.",
    tech: ["Rust", "WebGPU", "WASM"],
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "GRID_SYNC",
    description: "Distributed state management for collaborative editing at scale.",
    tech: ["TypeScript", "CRDTs", "WebSocket"],
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "PIXEL_FORGE",
    description: "GPU-accelerated image processing toolkit.",
    tech: ["WebGL", "React", "Canvas"],
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "BYTE_STREAM",
    description: "High-throughput event streaming platform with sub-millisecond latency.",
    tech: ["Go", "Kafka", "gRPC"],
    span: "md:col-span-1 md:row-span-2",
  },
  {
    title: "VOID_UI",
    description: "Brutalist component library with zero runtime CSS overhead.",
    tech: ["React", "CSS", "Vite"],
    span: "md:col-span-2 md:row-span-1",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    className={`glitch-hover border-2 border-border bg-card p-6 flex flex-col justify-between group cursor-pointer ${project.span}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
    whileHover={{ borderColor: "hsl(199, 74%, 55%)" }}
  >
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] text-muted-foreground tracking-widest">
          PRJ_{(index + 1).toString().padStart(3, "0")}
        </span>
        <span className="text-[10px] text-primary tracking-widest">↗</span>
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
  </motion.div>
);

const ProjectsSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[10px] text-muted-foreground tracking-widest">02</span>
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            <SplitText text="PROJECTS" />
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
