const FooterSection = () => {
  return (
    <footer className="border-t-2 border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-[10px] text-muted-foreground tracking-widest font-mono">
          © 2026 LEX — ALL SYSTEMS OPERATIONAL
        </div>
        <div className="flex items-center gap-6">
          {["GITHUB", "LINKEDIN", "EMAIL"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[10px] text-muted-foreground tracking-widest font-mono hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
