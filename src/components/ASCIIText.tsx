import { motion } from "framer-motion";

const ASCII_ART = `
██╗     ███████╗██╗  ██╗
██║     ██╔════╝╚██╗██╔╝
██║     █████╗   ╚███╔╝ 
██║     ██╔══╝   ██╔██╗ 
███████╗███████╗██╔╝ ██╗
╚══════╝╚══════╝╚═╝  ╚═╝`.trim();

const ASCIIText = () => {
  const lines = ASCII_ART.split("\n");

  return (
    <div className="font-mono text-primary select-none" aria-label="LEX">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          className="text-[0.45rem] sm:text-xs md:text-sm lg:text-base leading-none whitespace-pre tracking-widest"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
};

export default ASCIIText;
