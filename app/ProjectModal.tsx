"use client";
import { useEffect, useState } from "react";

type ModalKey = "rs" | "lp" | "js";

const modals: Record<ModalKey, { title: string; meta: string; body: string; stack: string; image?: string; github?: string }> = {
  rs: {
    title: "RedScare",
    meta: "HACKATHON · PENN STATE BEHREND · APRIL 2026 · 1ST PLACE — OPEN INNOVATION",
    image: "/redscare.gif",
    github: "https://github.com/moekoch/redscare",
    body: `<p><strong>What was built:</strong> A women's health web app with menstrual cycle tracking, symptom logging, pattern visualizations, and AI-powered health insights — built in 12 hours at Penn State Behrend's School of Engineering hackathon.</p>
    <p><strong>Why it mattered:</strong> Women's health data is dramatically underrepresented in tech. RedScare was designed to give users meaningful, personalized insight from their own data — not just a calendar.</p>
    <p><strong>Technical decisions:</strong> Chose Supabase for rapid auth + realtime DB setup, EJS for server-side templating to keep the stack lightweight under time pressure, and Anthropic's Claude API for contextual health insights with appropriate guardrails.</p>
    <p><strong>Result:</strong> 1st Place, Open Innovation category. Functional end-to-end app delivered in under 12 hours.</p>`,
    stack: "JavaScript · EJS · HTML5 · CSS · Supabase · Anthropic API",
  },
  lp: {
    title: "Landing Place",
    meta: "VAR LAB, PENN STATE BEHREND · MARCH 2025 – PRESENT",
    image: "/landingplace.jpg",
    github: "https://var.psu.edu/",
    body: `<p><strong>What was built:</strong> An AI-enabled React Native/Expo iOS application for clinical research and patient outcome tracking, deployed to ~80 active clinical trial participants.</p>
    <p><strong>Why it mattered:</strong> The research team needed a mobile tool that could surface insights from participant data and support ongoing clinical trials — the previous codebase had been abandoned and was non-functional.</p>
    <p><strong>What Morgan did:</strong> Led a five-person team to revive and rebuild the application from a broken codebase. Owned technical direction in a high-ambiguity environment, collaborated with psychology researchers to define requirements, and managed the full release lifecycle including TestFlight distribution.</p>
    <p><strong>Result:</strong> Production-ready application delivered within one academic year, actively used in clinical trials.</p>`,
    stack: "React Native · Expo · iOS · TestFlight · AI/LLM Integration · Firebase",
  },
  js: {
    title: "Jerre's Service Website",
    meta: "FREELANCE · 2026 – PRESENT",
    image: "/jerres.jpg",
    github: "[link]",
    body: `<p><strong>What was built:</strong> A custom business website for Jerre's Service, a family-owned snow plow and spreader dealer in Erie, PA. The site gives a 40+ year old local business a clear, mobile-first web presence built around sales, installation, and service.</p>
    <p><strong>Why it mattered:</strong> The business needed customers to immediately understand what they sell, who they work on (trucks, UTVs, tractors), and how to reach them, without wading through technical jargon. The design draws from hardware stores and work-truck signage to feel dependable rather than corporate.</p>
    <p><strong>Technical decisions:</strong> Built as a lightweight static site using HTML, CSS, and JavaScript, hosted through Cloudflare Pages and connected to a business-owned domain. A Cloudflare serverless function handles contact requests with Turnstile verification, server-side validation, honeypot protection, and rate limiting. The architecture intentionally avoids unnecessary backend infrastructure.</p>
    <p><strong>Result:</strong> A fast, straightforward business website built around local search, mobile usability, and direct customer contact, giving the owner a maintainable foundation they can operate independently.</p>`,
    stack: "HTML5 · CSS · JavaScript · Cloudflare Pages · Cloudflare Functions · Turnstile",
  },
};

export default function ProjectModal({ activeKey, onClose }: { activeKey: ModalKey | null; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = activeKey ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [activeKey, onClose]);

  if (!activeKey) {
    return (
      <div className="modal-bg" id="modal-bg">
        <div className="modal"></div>
      </div>
    );
  }

  const d = modals[activeKey];

  return (
    <div
      className="modal-bg open"
      id="modal-bg"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal">
        <button className="modal-x" onClick={onClose}>
          ESC ✕
        </button>
        <div id="modal-body">
          {d.image && (
            <div className="modal-image">
              <img src={d.image} alt={d.title} />
            </div>
          )}
          <h2>{d.title}</h2>
          <div className="modal-meta">{d.meta}</div>
          <div dangerouslySetInnerHTML={{ __html: d.body }} />
          <div className="modal-links">
            <span style={{ fontFamily: "var(--mono)", fontSize: ".68rem", opacity: 0.5 }}>{d.stack}</span>
          </div>
          {d.github && (
            <a className="modal-visit" href={d.github} target="_blank" rel="noopener noreferrer">
              Find more here ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export type { ModalKey };
