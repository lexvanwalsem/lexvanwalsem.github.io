import { motion } from "framer-motion";
import ASCIIText from "./ASCIIText";
import StatusBar from "./StatusBar";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Shader gradient background */}
      <div className="absolute inset-0 shader-gradient" />
      <div className="absolute inset-0 grid-paper" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20">
        <motion.div
          className="mb-6 text-xs text-muted-foreground tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {'>'} developer_portfolio.init()
          <span className="animate-cursor-blink ml-1 text-primary">█</span>
        </motion.div>

        <ASCIIText />

        <motion.p
          className="mt-8 text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed font-mono"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Full-stack ontwikkelaar gespecialiseerd in het bouwen van snelle, moderne omgevingen.
          <br />
          Focus op <span className="text-primary">Java (Spring Boot)</span>,{" "}
          <span className="text-primary">Next.js</span> en{" "}
          <span className="text-primary">TypeScript</span>.
        </motion.p>

        <div className="mt-10">
          <StatusBar />
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-[10px] text-muted-foreground tracking-widest uppercase">scroll</span>
          <motion.div
            className="w-px h-8 bg-primary/50"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
