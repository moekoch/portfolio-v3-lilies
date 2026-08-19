"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "WORK" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#capabilities", label: "SKILLS" },
  { href: "#lab", label: "LAB" },
  { href: "#about", label: "ABOUT" },
  { href: "#contact", label: "CONTACT" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "";
      document.querySelectorAll("section[id]").forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= 120 && r.bottom > 120) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav id="nav" className={scrolled ? "scrolled" : ""}>
        <a href="#" className="nav-logo">
          moekoch.xyz
        </a>
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={active === l.href.slice(1) ? "active" : ""}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className={`nav-overlay${open ? " open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
