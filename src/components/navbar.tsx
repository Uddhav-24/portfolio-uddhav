export default function Navbar() {
  const links = [
    { name: "ABOUT", href: "#about" },
    { name: "PROJECTS", href: "#projects" },
    { name: "SKILLS", href: "#skills" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CONTACT", href: "#contact" },
    { name: "RESUME", href: "/Uddhav_Davey_Resume.pdf" },
  ];

  return (
    <nav className="flex flex-wrap items-center justify-between border-b border-zinc-400 pb-5">
      <h1 className="text-2xl font-bold">
        Uddhav Davey
      </h1>

      <div className="flex flex-wrap gap-6 text-sm font-semibold">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="transition hover:text-zinc-600"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}