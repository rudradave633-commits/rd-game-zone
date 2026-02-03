import "../styles/game-guidelines.css";

const RULES = [
  {
    color: "red",
    title: "AGE & ENTRY",
    subtitle: "Strictly 11+ Only.",
    points: [
      "NO CHILDREN UNDER 11 ALLOWED.",
      "MAINTAIN MATURITY.",
    ],
  },
  {
    color: "orange",
    title: "ZERO TOLERANCE",
    subtitle: "Respect the zone.",
    points: [
      "NO PROFANITY ALLOWED.",
      "NO ALCOHOL OR SMOKING.",
      "NO OUTSIDE FOOD/DRINKS.",
    ],
  },
  {
    color: "green",
    title: "ENVIRONMENT",
    subtitle: "Clean & Safe.",
    points: [
      "STRICTLY SMOKE-FREE ZONE.",
      "CLEAN ENVIRONMENT MAINTAINED.",
      "GAMEPLAY RESPONSIBILITY LIES WITH THE GAMER.",
    ],
  },
  {
    color: "cyan",
    title: "EQUIPMENT CARE",
    subtitle: "Handle with care.",
    points: [
      "HANDLE CONTROLLERS GENTLY.",
      "FULL MRP CHARGED FOR DAMAGES.",
      "REPORT TECHNICAL ISSUES IMMEDIATELY.",
    ],
  },
  {
    color: "blue",
    title: "SECURITY & WAITING",
    subtitle: "No Waiting Area.",
    points: [
      "NO WAITING AREA INSIDE OR OUTSIDE DUE TO SECURITY REASONS.",
      "ENTRY LIMITED TO ACTIVE GAMERS ONLY.",
      "PLEASE ARRIVE STRICTLY AT YOUR BOOKED TIME.",
    ],
  },
  {
    color: "yellow",
    title: "CONTENT GUIDELINES",
    subtitle: "Open World Titles.",
    points: [
      "ADULT-THEMED CONTENT MAY APPEAR DURING GAMEPLAY.",
      "CUSTOMERS ENGAGING IN INAPPROPRIATE BEHAVIOR ARE PROHIBITED.",
      "IMMEDIATE SESSION TERMINATION FOR VIOLATIONS.",
    ],
  },
  {
    color: "purple",
    title: "TIME & SESSION",
    subtitle: "Play Time Rules.",
    points: [
      "SESSIONS RUN STRICTLY AS PER BOOKED TIME.",
      "LATE ARRIVAL MAY RESULT IN REDUCED PLAYTIME.",
      "EXTENSIONS SUBJECT TO AVAILABILITY.",
    ],
  },
  {
    color: "pink",
    title: "SECURITY NOTICE",
    subtitle: "Mandatory Rule.",
    points: [
      "ENTRY ONLY FOR ACTIVE GAMERS.",
      "NO CROWDING OR UNNECESSARY GATHERING.",
      "MANAGEMENT DECISION IS FINAL.",
    ],
  },
];

export default function GameGuidelines() {
  return (
    <section className="guidelines-section">
      {/* BIG TITLE */}
      <h2 className="guidelines-main-title">GAME ZONE GUIDELINES</h2>

      {/* GTA VI WARNING */}
      <div className="gta-warning">
        <span className="pulse-dot" />
        FOR SECURITY AND SAFETY REASONS, THERE IS <strong>NO WAITING AREA INSIDE OR OUTSIDE</strong> THE GAME ZONE. PLEASE ARRIVE AT YOUR BOOKED TIME ONLY.
      </div>

    {/* MOBILE SWIPE HINT */}
<div className="swipe-hint">Swipe →</div>

      {/* CARDS */}
      <div className="guidelines-grid">
        {RULES.map((rule, i) => (
          <div
            key={i}
            className={`guideline-card ${rule.color}`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <h4>{rule.title}</h4>
            <span className="subtitle">{rule.subtitle}</span>
            <hr />
            <ul>
              {rule.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
