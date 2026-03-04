import React from "react";

/* ================================================================
   GAME GUIDELINES — Modern Minimalist Dark
   Vercel / Epic Games aesthetic
   ✅ Pure black #000 background
   ✅ #050505 card surfaces
   ✅ #1a1a1a borders → #333 on hover
   ✅ #fff primary text · #888 secondary text
   ✅ #0070f3 accent (icon stroke only)
   ✅ ZERO glow · ZERO gradient · ZERO glassmorphism
   ✅ 3-col desktop → 2-col tablet → 1-col mobile
   ✅ Lucide-style SVG icons (strokeWidth 1.5, round caps)
   ================================================================
   TO SWAP AN ICON: replace the inner <svg> paths in any Ico*
   component. Keep className="gg-svg" on the root <svg> element.
   ================================================================ */

/* ─────────────────────────────────────────────────
   ICONS — Lucide-style, strokeWidth 1.5
───────────────────────────────────────────────── */

const IcoUser = () => (
  <svg className="gg-svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-3.866 3.582-7 8-7s8 3.134 8 7" />
  </svg>
);

const IcoShield = () => (
  <svg className="gg-svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L3 6.5v5C3 16.925 7.075 21.85 12 23c4.925-1.15 9-6.075 9-11.5v-5L12 2z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const IcoLeaf = () => (
  <svg className="gg-svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22c1.8-1.8 3.8-3.3 6-4.2C10.2 16.9 12 13.7 12 10c0-3.866 3.134-7 7-7 0 3.866-3.134 7-7 7-1.17 0-2.27-.3-3.22-.82C6.64 10.82 4 14.2 4 18c0 1.5.4 2.9 1.07 4.07" />
    <path d="M2 22l10-10" />
  </svg>
);

const IcoGamepad = () => (
  <svg className="gg-svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="12" rx="4" />
    <line x1="8" y1="13" x2="12" y2="13" />
    <line x1="10" y1="11" x2="10" y2="15" />
    <circle cx="16" cy="12" r="0.75" fill="currentColor" stroke="none" />
    <circle cx="18.5" cy="14" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

const IcoLock = () => (
  <svg className="gg-svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="11" rx="2" />
    <path d="M8 11V7a4 4 0 018 0v4" />
    <circle cx="12" cy="16.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IcoEye = () => (
  <svg className="gg-svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IcoClock = () => (
  <svg className="gg-svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IcoAlertTriangle = () => (
  <svg className="gg-svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <circle cx="12" cy="17" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

/* ─────────────────────────────────────────────────
   RULES DATA
   accent  → used only for the card's top border line
   icon    → Lucide-style SVG component
   title   → bold card heading
   subtitle → muted secondary line
   points  → bullet list items
───────────────────────────────────────────────── */
interface Rule {
  accent: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  points: string[];
}

const RULES: Rule[] = [
  {
    accent: "#ef4444",
    icon: <IcoUser />,
    title: "Age & Entry",
    subtitle: "Strictly 11+ only",
    points: [
      "No children under 11 allowed.",
      "Maintain maturity at all times.",
    ],
  },
  {
    accent: "#f97316",
    icon: <IcoShield />,
    title: "Zero Tolerance",
    subtitle: "Respect the zone",
    points: [
      "No profanity allowed.",
      "No alcohol or smoking.",
      "No outside food or drinks.",
    ],
  },
  {
    accent: "#22c55e",
    icon: <IcoLeaf />,
    title: "Environment",
    subtitle: "Clean & safe",
    points: [
      "Strictly smoke-free zone.",
      "Clean environment maintained.",
      "Gameplay responsibility lies with the gamer.",
    ],
  },
  {
    accent: "#06b6d4",
    icon: <IcoGamepad />,
    title: "Equipment Care",
    subtitle: "Handle with care",
    points: [
      "Handle controllers gently.",
      "Full MRP charged for damages.",
      "Report technical issues immediately.",
    ],
  },
  {
    accent: "#3b82f6",
    icon: <IcoLock />,
    title: "Security & Waiting",
    subtitle: "No waiting area",
    points: [
      "No waiting area inside or outside due to security.",
      "Entry limited to active gamers only.",
      "Please arrive strictly at your booked time.",
    ],
  },
  {
    accent: "#eab308",
    icon: <IcoEye />,
    title: "Content Guidelines",
    subtitle: "Open world titles",
    points: [
      "Adult-themed content may appear during gameplay.",
      "Inappropriate behaviour is strictly prohibited.",
      "Immediate session termination for violations.",
    ],
  },
  {
    accent: "#8b5cf6",
    icon: <IcoClock />,
    title: "Time & Session",
    subtitle: "Play time rules",
    points: [
      "Sessions run strictly as per booked time.",
      "Late arrival may result in reduced playtime.",
      "Extensions subject to availability.",
    ],
  },
  {
    accent: "#ec4899",
    icon: <IcoAlertTriangle />,
    title: "Security Notice",
    subtitle: "Mandatory rule",
    points: [
      "Entry only for active gamers.",
      "No crowding or unnecessary gathering.",
      "Management decision is final.",
    ],
  },
];

/* ─────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────── */
export default function GameGuidelines() {
  return (
    <section className="gg">

      {/* ── Header ── */}
      <header className="gg__header">
        <p className="gg__eyebrow">Official Rules</p>
        <h2 className="gg__title">
          Game Zone <span className="gg__title-mark">Guidelines</span>
        </h2>
        <p className="gg__lead">
          All visitors must read and comply with the following
          rules before entering the zone.
        </p>
      </header>

      {/* ── Security alert bar ── */}
      <div className="gg__alert" role="alert">
        <span className="gg__alert-icon" aria-hidden="true">
          <IcoAlertTriangle />
        </span>
        <p className="gg__alert-text">
          <strong>Security Notice —</strong> There is{" "}
          <strong>NO WAITING AREA</strong> inside or outside the Game
          Zone for security and safety reasons. Please arrive strictly
          at your booked time only.
        </p>
      </div>

      {/* ── Cards grid ── */}
      <ul className="gg__grid" role="list">
        {RULES.map((rule, i) => (
          <li
            key={i}
            className="gg__card"
            style={{ "--accent": rule.accent } as React.CSSProperties}
          >
            {/* Icon + heading */}
            <div className="gg__card-head">
              <span className="gg__card-ico" aria-hidden="true">
                {rule.icon}
              </span>
              <div>
                <h3 className="gg__card-title">{rule.title}</h3>
                <span className="gg__card-sub">{rule.subtitle}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="gg__card-sep" aria-hidden="true" />

            {/* Bullet points */}
            <ul className="gg__card-list" role="list">
              {rule.points.map((pt, j) => (
                <li key={j} className="gg__card-item">
                  <span className="gg__card-dot" aria-hidden="true" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

    </section>
  );
}