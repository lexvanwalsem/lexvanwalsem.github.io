import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const StatusBar = () => {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setUptime((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatUptime = (s: number) => {
    const h = Math.floor(s / 3600).toString().padStart(2, "0");
    const m = Math.floor((s % 3600) / 60).toString().padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };

  const stats = [
    { label: "STATUS", value: "CODING", active: true },
    { label: "LOCATION", value: "VEENENDAAL, NL" },
    { label: "UPTIME", value: formatUptime(uptime) },
    { label: "STACK", value: "REACT / TS / NODE" },
  ];

  return (
    <motion.div
      className="border-2 border-border bg-card/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="flex flex-wrap divide-x divide-border">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2 text-[10px] sm:text-xs">
            {stat.active && (
              <span className="status-dot w-1.5 h-1.5 bg-primary inline-block" />
            )}
            <span className="text-muted-foreground">{stat.label}:</span>
            <span className="text-foreground font-medium">{stat.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default StatusBar;
