"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Nav from "./Nav";
import Reveal from "./Reveal";
import TimelineItem from "./TimelineItem";
import ProjectModal, { ModalKey } from "./ProjectModal";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Page() {
  const [modalKey, setModalKey] = useState<ModalKey | null>(null);

  return (
    <>
      <Nav />
      <Hero3D />

      {/* WORK */}
      <section id="work">
        <div className="inner">
          <div className="sec-label">SELECTED WORK</div>
          <h2 className="sec-title">Projects</h2>
          <div className="proj-grid">
            <Reveal className="proj-card" onClick={() => setModalKey("rs")}>
              <div className="card-bar" style={{ background: "#992938" }}></div>
              <div className="card-tag">HACKATHON · APR 2026 · 1ST PLACE</div>
              <h3 className="card-title">RedScare</h3>
              <p className="card-desc">
                Women&apos;s health web app with cycle tracking, symptom logging, data visualizations, and AI-powered insights.
                Built in 12 hours.
              </p>
              <div className="stack">
                <span className="stag">JavaScript</span>
                <span className="stag">EJS</span>
                <span className="stag">Supabase</span>
                <span className="stag">Anthropic API</span>
                <span className="stag">CSS</span>
              </div>
            </Reveal>
            <Reveal className="proj-card" onClick={() => setModalKey("lp")}>
              <div className="card-bar" style={{ background: "#35458f" }}></div>
              <div className="card-tag">CLINICAL APP · 2025–PRESENT</div>
              <h3 className="card-title">Landing Place</h3>
              <p className="card-desc">
                AI-enabled React Native iOS application for clinical research and outcome tracking, deployed to ~80 active
                trial participants.
              </p>
              <div className="stack">
                <span className="stag">React Native</span>
                <span className="stag">Expo</span>
                <span className="stag">iOS</span>
                <span className="stag">TestFlight</span>
                <span className="stag">AI</span>
              </div>
            </Reveal>
            <Reveal className="proj-card" onClick={() => setModalKey("js")}>
              <div className="card-bar" style={{ background: "#EDD96B" }}></div>
              <div className="card-tag">WEB · 2026–PRESENT</div>
              <h3 className="card-title">Jerre's Service</h3>
              <p className="card-desc">
                Custom business website for a family-owned snow plow and spreader dealer in Erie, PA.
              </p>
              <div className="stack">
                <span className="stag">WordPress</span>
                <span className="stag">HTML/CSS</span>
                <span className="stag">JavaScript</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ProjectModal activeKey={modalKey} onClose={() => setModalKey(null)} />

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="inner">
          <div className="sec-label">CAREER</div>
          <h2 className="sec-title">Experience</h2>
          <div className="timeline">
            <TimelineItem current>
              <div className="tl-date">MAR 2025 – PRESENT</div>
              <div className="tl-role">App Development Manager / Software Engineer</div>
              <div className="tl-org">VAR Lab, Penn State Behrend (Excelerate) — Erie, PA</div>
              <ul className="tl-ul">
                <li>Engineered and deployed Landing Place — AI-enabled React Native/Expo app for active clinical trials</li>
                <li>Revived non-functional legacy codebase; led five-person team to production in one academic year</li>
                <li>Owned end-to-end release lifecycle: build automation, versioning, TestFlight to ~80 participants</li>
                <li>Collaborated with psychology researchers to translate research needs into technical requirements</li>
              </ul>
            </TimelineItem>
            <TimelineItem>
              <div className="tl-date">MAY 2026 – JUL 2026</div>
              <div className="tl-role">IT Product Management Intern</div>
              <div className="tl-org">Members 1st Federal Credit Union — Enola, PA</div>
              <ul className="tl-ul">
                <li>Defined technical requirements for AI-powered chat and smart summary features in digital banking</li>
                <li>Evaluated Azure, LlamaIndex, and LangChain architectures for RAG and agentic AI workflows</li>
                <li>Conducted competitive analysis of AI fintech solutions with compliance and responsible AI focus</li>
              </ul>
            </TimelineItem>
            <TimelineItem>
              <div className="tl-date">MAY 2025 – AUG 2025</div>
              <div className="tl-role">IT Project Management Intern</div>
              <div className="tl-org">TE Connectivity — Harrisburg, PA</div>
              <ul className="tl-ul">
                <li>Supported cross-functional stakeholder alignment and documentation (CONOPS, BRDs, RASCI)</li>
                <li>Participated in global multi-region IT coordination and cross-border trade workshops</li>
              </ul>
            </TimelineItem>
            <TimelineItem>
              <div className="tl-date">APR 2024 – DEC 2025</div>
              <div className="tl-role">Student Technician</div>
              <div className="tl-org">Penn State Behrend — Erie, PA</div>
              <ul className="tl-ul">
                <li>IT support across labs and offices via ServiceNow; device imaging and hardware repair</li>
              </ul>
            </TimelineItem>
            <TimelineItem>
              <div className="tl-date">JUN 2023 – AUG 2024</div>
              <div className="tl-role">Information Technology Intern</div>
              <div className="tl-org">Big Spring School District — Newville, PA</div>
              <ul className="tl-ul">
                <li>Return intern two consecutive summers — device prep, laptop repair, hardware org</li>
              </ul>
            </TimelineItem>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities">
        <div className="inner">
          <div className="sec-label">SKILLS</div>
          <h2 className="sec-title">Capabilities</h2>
          <div className="caps-grid">
            <Reveal className="cap">
              <div className="cap-lbl">BUILD</div>
              <ul>
                <li>JavaScript / TypeScript</li>
                <li>Python</li>
                <li>Java · C · C++</li>
                <li>React Native · Expo</li>
                <li>HTML5 · CSS</li>
                <li>EJS · WordPress</li>
              </ul>
            </Reveal>
            <Reveal className="cap">
              <div className="cap-lbl">CONNECT</div>
              <ul>
                <li>REST APIs</li>
                <li>Firebase · Supabase</li>
                <li>SQL</li>
                <li>Microsoft Azure</li>
                <li>Docker</li>
                <li>ServiceNow</li>
              </ul>
            </Reveal>
            <Reveal className="cap">
              <div className="cap-lbl">THINK</div>
              <ul>
                <li>RAG Systems</li>
                <li>LlamaIndex · LangChain</li>
                <li>LLM API Integration</li>
                <li>Agentic Workflows</li>
                <li>Product Architecture</li>
                <li>Requirements Engineering</li>
              </ul>
            </Reveal>
            <Reveal className="cap">
              <div className="cap-lbl">SHIP</div>
              <ul>
                <li>Git · GitHub</li>
                <li>TestFlight distribution</li>
                <li>Build automation</li>
                <li>Figma</li>
                <li>Blender</li>
                <li>Adobe Creative Suite</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LAB */}
      <section id="lab">
        <div className="inner">
          <div className="sec-label">EXPERIMENTS</div>
          <h2 className="sec-title">Lab</h2>
          <div className="lab-banner">
            <img src="/models/lab-banner.jpg" alt="Lab banner" />
          </div>
          <div className="lab-grid">
            <Reveal className="lab-item">
              <span className="lab-status a">ACTIVE</span>
              <div className="lab-t">RAG Architecture Patterns</div>
              <div className="lab-d">
                Documenting trade-offs between retrieval-heavy and agentic LLM approaches across different infrastructure
                constraints.
              </div>
            </Reveal>
            <Reveal className="lab-item">
              <span className="lab-status a">ACTIVE</span>
              <div className="lab-t">Clinical App UX</div>
              <div className="lab-d">
                Accessible mobile UI patterns for clinical research populations. What does usable mean for someone in a
                trial?
              </div>
            </Reveal>
            <Reveal className="lab-item">
              <span className="lab-status w">WIP</span>
              <div className="lab-t">AI Fintech Guardrails</div>
              <div className="lab-d">
                Responsible AI implementation in regulated environments — auditability, compliance, conversational banking.
              </div>
            </Reveal>
            <Reveal className="lab-item">
              <span className="lab-status w">WIP</span>
              <div className="lab-t">3D Web Experiments</div>
              <div className="lab-d">Exploring Three.js and WebGL as creative tools for portfolio and interactive data visualization.</div>
            </Reveal>
            <Reveal className="lab-item">
              <span className="lab-status c">CONCEPT</span>
              <div className="lab-t">Women&apos;s Health Data</div>
              <div className="lab-d">Extending RedScare: responsible AI-powered insights for underrepresented health data.</div>
            </Reveal>
            <Reveal className="lab-item">
              <span className="lab-status c">CONCEPT</span>
              <div className="lab-t">Design Systems for Research Tools</div>
              <div className="lab-d">
                Why are most research-facing apps painful to use? A small component library to prove they don&apos;t have to
                be.
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="inner">
          <div className="sec-label">ABOUT</div>
          <h2 className="sec-title">Hi, I&apos;m Morgan.</h2>
          <div className="about-grid">
            <div>
              <div className="portrait-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/portrait.jpg"
                  alt="Morgan Koch"
                  className="portrait-img"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=750&fit=crop&crop=faces";
                  }}
                />
              </div>
            </div>
            <div>
              <div className="about-text">
                <p>
                  I&apos;m a CS student at Penn State Behrend finishing up in May 2027, with a minor in MIS. Right now I&apos;m
                  building at the VAR Lab — leading a team, shipping a clinical iOS app, and figuring out what it means to
                  own software that people actually depend on.
                </p>
                <p>
                  I&apos;m drawn to the intersection of AI systems and the humans using them. Not just whether a model
                  returns the right answer, but how retrieval is designed, how constraints are handled responsibly, and
                  whether the next developer can understand what you built.
                </p>
                <p>
                  Outside of code: I lead workshops as VP of ACM, compete on the Behrend eSports team, and use Blender and
                  the Adobe suite for fun. Good design and good engineering solve the same problem from different angles.
                </p>
                <p>Looking for 2027 entry-level roles in software engineering, AI/ML systems, or product-adjacent engineering tracks.</p>
              </div>
              <span className="sb-lbl">EDUCATION</span>
              <ul className="sb-list">
                <li>Penn State Behrend — BS CS + MIS Minor, May 2027</li>
                <li>GPA: 3.37 · Dean&apos;s List</li>
                <li>NVIDIA Deep Learning Cert · 2024</li>
              </ul>
              <span className="sb-lbl">HONORS</span>
              <ul className="sb-list">
                <li>AAUW Carlisle Higher Education Scholarship</li>
                <li>Shelly &amp; Shirley Czulewicz Trustee Scholarship</li>
                <li>Rotary Youth Leadership Awards (RYLA)</li>
              </ul>
              <span className="sb-lbl">LEADERSHIP</span>
              <ul className="sb-list">
                <li>VP — Association for Computing Machinery (ACM)</li>
                <li>Media Board + Competitor — Behrend eSports (ECAC)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="inner">
          <div className="sec-label">GET IN TOUCH</div>
          <h2 className="sec-title">Let&apos;s work together.</h2>
          <p style={{ opacity: 0.58, fontSize: ".93rem", maxWidth: 460, lineHeight: 1.72 }}>
            Open to 2027 full-time roles in software engineering, AI/ML systems, and product engineering. Always happy to
            talk shop.
          </p>
          <div className="contact-links">
            <a href="mailto:ekoch.morgan@gmail.com" className="clink">
              ✉ EMAIL
            </a>
            <a href="https://linkedin.com/in/moekoch" className="clink" target="_blank">
              ↗ LINKEDIN
            </a>
            <a href="https://github.com/moekoch" className="clink" target="_blank">
              ⌥ GITHUB
            </a>
            <a href="/resume.pdf" className="clink" target="_blank">
              ↓ RESUME
            </a>
          </div>
        </div>
      </section>

      <footer>
        <span>MOEKOCH.XYZ — 2026</span>
        <span>ERIE, PA → EVERYWHERE</span>
      </footer>
    </>
  );
}
