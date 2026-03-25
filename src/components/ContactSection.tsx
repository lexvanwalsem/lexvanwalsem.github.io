import { motion } from "framer-motion";
import { useState } from "react";
import SplitText from "./SplitText";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mvzvpdgr", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section className="relative py-24 px-6 grid-paper">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[10px] text-muted-foreground tracking-widest">04</span>
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            <SplitText text="CONTACT" />
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <motion.div
          className="border-2 border-border p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-xs text-primary tracking-widest font-mono">MESSAGE_SENT</p>
              <p className="text-xs text-muted-foreground font-mono mt-2">
                Reactie queued. Verwacht een antwoord binnen 24h.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="_gotcha" className="hidden" />

              <div>
                <label className="text-[10px] text-muted-foreground tracking-widest font-mono block mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  maxLength={100}
                  className="w-full bg-background border-2 border-border px-4 py-3 text-xs font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="uw_naam"
                />
              </div>
              <div>
                <label className="text-[10px] text-muted-foreground tracking-widest font-mono block mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  maxLength={255}
                  className="w-full bg-background border-2 border-border px-4 py-3 text-xs font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="user@domain.com"
                />
              </div>
              <div>
                <label className="text-[10px] text-muted-foreground tracking-widest font-mono block mb-2">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  required
                  maxLength={1000}
                  rows={4}
                  className="w-full bg-background border-2 border-border px-4 py-3 text-xs font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="// uw bericht hier"
                />
              </div>
              <button
                type="submit"
                className="w-full border-2 border-primary bg-primary text-primary-foreground py-3 text-[10px] tracking-widest font-mono hover:bg-transparent hover:text-primary transition-colors glitch-hover"
              >
                TRANSMIT_MESSAGE
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;