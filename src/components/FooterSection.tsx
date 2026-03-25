const footerLinks = [
  {
    name: "GITHUB",
    url: "https://github.com/lexvanwalsem",
  },
  {
    name: "LINKEDIN",
    url: "https://www.linkedin.com/in/lex-van-walsem-2021673a9/",
  },
  {
    name: "EMAIL",
    url: "mailto:lexvanwalsem@gmail.com", // Pas dit even aan naar je eigen mail
  },
];

const FooterSection = () => {
  return (
    <footer className="border-t-2 border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-[10px] text-muted-foreground tracking-widest font-mono">
          © 2026 LEX — ALL SYSTEMS OPERATIONAL
        </div>
        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-muted-foreground tracking-widest font-mono hover:text-[#36A9E1] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;