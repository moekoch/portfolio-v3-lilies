"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Nav from "./Nav";
import Reveal from "./Reveal";
import TimelineItem from "./TimelineItem";
import ProjectModal, { ModalKey } from "./ProjectModal";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

const LinkedInLogo = () => (
  <svg className="social-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.28 9.88h3.32v9.59H5.28V9.88Zm5.29 0h3.18v1.31h.04c.44-.84 1.52-1.72 3.13-1.72 3.35 0 3.97 2.2 3.97 5.06v5.94h-3.31v-5.57c0-1.33-.03-3.05-1.85-3.05-1.86 0-2.15 1.45-2.15 2.94v5.68H10.57V9.88Z"
      fill="currentColor"
    />
  </svg>
);

const GitHubLogo = () => (
  <svg className="social-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M12 2C6.48 2 2 6.56 2 12.15c0 4.46 2.87 8.24 6.84 9.57.5.09.68-.22.68-.49 0-.24-.01-.89-.01-1.74-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.54 1.05 1.54 1.05.89 1.55 2.33 1.1 2.9.84.09-.66.35-1.1.64-1.35-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.73 0 0 .84-.27 2.75 1.05A9.38 9.38 0 0 1 12 6.77c.85 0 1.7.12 2.49.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.07.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.18 10.18 0 0 0 22 12.15C22 6.56 17.52 2 12 2Z"
      fill="currentColor"
    />
  </svg>
);

const EmailLogo = () => (
  <svg className="social-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.1-.75 6.9 5.4 6.9-5.4H5.1Zm13.15 1.58-6.3 4.93a.75.75 0 0 1-.9 0L5.75 7.58v9.67c0 .41.34.75.75.75h10.99c.41 0 .75-.34.75-.75V7.58Z"
      fill="currentColor"
    />
  </svg>
);

const ResumeLogo = () => (
  <svg className="social-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M7 3.5A2.5 2.5 0 0 0 4.5 6v12A2.5 2.5 0 0 0 7 20.5h10A2.5 2.5 0 0 0 19.5 18V8.65a2.5 2.5 0 0 0-.74-1.77L15.12 3.74A2.5 2.5 0 0 0 13.35 3H7Zm7.5 1.8 3.2 3.2h-2.45a.75.75 0 0 1-.75-.75V5.3ZM7.75 8.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 3.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 3.5h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5Z"
      fill="currentColor"
    />
  </svg>
);

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
          <h2 className="sec-title">Hi, I&apos;m Morgan!</h2>
          <div className="about-grid">
            <div>
              <div className="portrait-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/portrait2.jpg"
                  alt="Morgan Koch"
                  className="portrait-img"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1561897519-6e4fbd1fbc41?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
                  }}
                />
                <img
                  src="/SignatureHeart.png"
                  alt="Morgan Koch signature"
                  className="portrait-signature"
                />
              </div>
            </div>
            <div>
              <div className="about-text">
                <p>
                  I&apos;m a CS student at Penn State Behrend finishing up in May 2027, with a minor in MIS. Right now I&apos;m
                  a manager at PSU's Virtual / Augmented Reality Lab — leading a team, shipping a clinical iOS app, and figuring out what it means to
                  own software that people actually depend on.
                </p>
                <p>
                  When I&apos;m not doing school or work, I&apos;m usually trying to learn something new. Lately I&apos;ve 
                  been playing around with{" "}
                  <a
                  href="https://odysseus-dev.github.io/odysseus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-link"
                  >
                   Odysseus
                  </a>{" "} 
                  (PewDiePie's AI workspace) and self-hosting, learning about cybersecurity, and teaching myself Blender and TouchDesigner. 
                  I&apos;ve been especially interested in 3D animation and making things that move and respond on a screen.
                </p>
                <p>
                  I lead workshops as VP of ACM, compete on the Behrend eSports Marvel Rivals team (my role is main strategist!), and set up VAR Lab outreach events
                  for high school students and local girl scouts to learn about tech. I&apos;m also a big fan of shonen anime. :)
                </p>
                <p>Looking for 2027 entry-level roles in software engineering, cybersecurity, or product-adjacent engineering tracks.</p>
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
            Open to 2027 full-time roles in software engineering, cybersecurity, and product management. Feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="mailto:ekoch.morgan@gmail.com" className="clink">
              <EmailLogo />
              <span>EMAIL</span>
            </a>
            <a href="https://linkedin.com/in/moekoch" className="clink" target="_blank" rel="noreferrer">
              <LinkedInLogo />
              <span>LINKEDIN</span>
            </a>
            <a href="https://github.com/moekoch" className="clink" target="_blank" rel="noreferrer">
              <GitHubLogo />
              <span>GITHUB</span>
            </a>
            <a href="/resume.pdf" className="clink" target="_blank">
              <ResumeLogo />
              <span>RESUME</span>
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
