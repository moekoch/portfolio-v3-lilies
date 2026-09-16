"use client";
import { useEffect, useState } from "react";

type ModalKey = "rs" | "lp" | "js";

const modals: Record<ModalKey, { title: string; meta: string; body: string; stack: string; image?: string; github?: string }> = {
  rs: {
    title: "RedScare",
    meta: "HACKATHON · PENN STATE BEHREND · APRIL 2026 · 1ST PLACE -- OPEN INNOVATION",
    image: "/redscare.gif",
    github: "https://github.com/moekoch/redscare",
    body: `<p><strong>What was built:</strong> A women's health web app with menstrual cycle tracking, symptom logging, pattern visualizations, and AI-powered health insights, created for Penn State Behrend's School of Engineering 12-hour hackathon.</p>
    <p><strong>Why it mattered:</strong> Women's health data is underrepresented in tech. RedScare was built to help people understand their own patterns in a more personal, useful way.</p>
    <p><strong>Technical decisions:</strong> I used Supabase for rapid auth and real-time data, EJS to keep the stack lightweight, and Anthropic's Claude API to turn health data into contextual, guarded insights.</p>
    <p><strong>Result:</strong> 1st Place, Open Innovation category.</p>`,
    stack: "JavaScript · EJS · HTML5 · CSS · Supabase · Anthropic API",
  },
  lp: {
    title: "Landing Place",
    meta: "VAR LAB, PENN STATE BEHREND · MARCH 2025 - PRESENT",
    image: "/landingplace.jpg",
    github: "https://var.psu.edu/",
    body: `<p><strong>What was built:</strong> An AI-enabled React Native/Expo iOS application for clinical research and patient outcome tracking, used by around 80 active clinical trial participants.</p>
    <p><strong>Why it mattered:</strong> The research team needed a tool that could surface insights from participant data and support ongoing clinical trials without depending on a broken, abandoned codebase.</p>
    <p><strong>How I contributed:</strong> I helped bring the project back to life, clarified the technical direction in a messy environment, worked with psychology researchers to shape the product, and supported the release process through TestFlight and ongoing iteration.</p>
    <p><strong>Result:</strong> A production-ready app that is actively supporting clinical research.</p>`,
    stack: "React Native · Expo · iOS · TestFlight · AI/LLM Integration · Firebase · MongoDB · MySQL",
  },
  js: {
    title: "Jerre's Service Website",
    meta: "FREELANCE · 2026 - PRESENT",
    image: "/jerres.jpg",
    body: `<p><strong>What was built:</strong> A (work in progress) custom business website for Jerre's Service, a family-owned snow plow and spreader dealer in Erie, PA. The site gives a 40+ year old local business a clear, mobile-first web presence built around sales, installation, and service.</p>
    <p><strong>Why it mattered:</strong> The business needed customers to immediately understand what they sell, who they work on (trucks, UTVs, tractors), and how to reach them.</p>
    <p><strong>Technical decisions:</strong> Built as a lightweight static site using HTML, CSS, and JavaScript, intended to be hosted through Cloudflare Pages and connected to a business-owned domain. A Cloudflare serverless function should handle contact requests with server-side validation, honeypot protection, and rate limiting. The architecture intentionally avoids unnecessary backend infrastructure.</p>
    <p><strong>Result:</strong> A fast, straightforward business website built around local search, mobile usability, and direct customer contact, giving the owner a maintainable foundation they can operate independently.</p>`,
    stack: "HTML5 · CSS · JavaScript · Cloudflare Pages · Cloudflare Functions",
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
