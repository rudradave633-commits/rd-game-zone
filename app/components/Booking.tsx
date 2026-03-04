import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   SVG ICONS — Lucide-style, strokeWidth 1.5
───────────────────────────────────────────── */
const IcoPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1.18 2 2 0 014 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const IcoWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 2A10 10 0 002.1 12c0 1.77.466 3.43 1.276 4.878L2 22l5.278-1.354A10 10 0 1012.05 2zm0 18.286a8.286 8.286 0 01-4.54-1.21l-.325-.193-3.134.804.825-3.039-.21-.34A8.276 8.276 0 013.77 12c0-4.563 3.715-8.279 8.278-8.279 4.565 0 8.28 3.716 8.28 8.279 0 4.564-3.715 8.286-8.278 8.286z"/>
  </svg>
);

const IcoClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const IcoPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IcoDoor = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const IcoArrow = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10h12M11 5l5 5-5 5"/>
  </svg>
);

const IcoCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const IcoStore = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l1-5h16l1 5"/>
    <path d="M21 9a2 2 0 01-4 0 2 2 0 01-4 0 2 2 0 01-4 0 2 2 0 01-4 0"/>
    <path d="M5 11v9a1 1 0 001 1h12a1 1 0 001-1v-9"/>
    <rect x="9" y="14" width="6" height="6"/>
  </svg>
);

const IcoLock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/>
    <path d="M7 11V7a5 5 0 0110 0v4"/>
  </svg>
);

const IcoTag = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
    <line x1="7" y1="7" x2="7.01" y2="7"/>
  </svg>
);

const IcoSlash = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
  </svg>
);

const META = [
  { icon: <IcoClock />, value: "10 AM – 11 PM",  sub: "Open every day" },
  { icon: <IcoDoor  />, value: "No Appointment", sub: "Subject to availability" },
  { icon: <IcoPin   />, value: "Ahmedabad",      sub: "Gujarat, India" },
  { icon: <IcoClock />, value: "Hourly Basis",   sub: "PS5 · PS4 · PC · LAN" },
];

const RULES = [
  { icon: <IcoStore />, title: "Store Visit or Call", desc: "Book via Store Visit or Phone Call." },
  { icon: <IcoCheck />, title: "Advance Payment",     desc: "Advance payment confirms your slot immediately." },
  { icon: <IcoSlash />, title: "Non-Refundable",      desc: "Payments are strictly non-refundable." },
  { icon: <IcoLock  />, title: "Exclusive Slot",      desc: "Reserved slots are exclusive and cannot be taken by others." },
  { icon: <IcoTag   />, title: "Skip the Wait",       desc: "Pay in advance to skip the wait." },
  { icon: <IcoClock />, title: "Hourly Billing",      desc: "Sessions charged strictly on hourly basis only." },
];

export default function EpicBooking() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="booking" ref={ref} className={`bk${vis ? " bk--on" : ""}`}>
      <div className="bk__wrap">

        {/* ── Header ── */}
        <div className="bk__head">
          <p className="bk__eyebrow">RESERVATIONS &amp; CONTACT</p>
          <h2 className="bk__title">Book Your Session</h2>
          <p className="bk__sub">
            Reserve in advance or walk in. Open every day —
            call us or show up at the zone.
          </p>
        </div>

        {/* ── Info chips ── */}
        <div className="bk__chips">
          {META.map((m, i) => (
            <div className="bk__chip" key={i}>
              <span className="bk__chip-icon">{m.icon}</span>
              <div>
                <span className="bk__chip-val">{m.value}</span>
                <span className="bk__chip-sub">{m.sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Contact cards — class is bk__cards, always 2-col ── */}
        <div className="bk__cards">

          <div className="bk__card bk__card--phone">
            <div className="bk__card-top">
              <span className="bk__card-ico"><IcoPhone /></span>
              <span className="bk__card-badge">RECOMMENDED</span>
            </div>
            <h3 className="bk__card-title">Direct Booking</h3>
            <p className="bk__card-label">CALL US</p>
            <p className="bk__card-num">+91 76655 33991</p>
            <p className="bk__card-note">Mon – Sun · 10 AM – 11 PM</p>
            <a href="tel:+917665533991" className="bk__btn bk__btn--primary">
              Call Now <span className="bk__btn-ico"><IcoArrow /></span>
            </a>
          </div>

          <div className="bk__card bk__card--wa">
            <div className="bk__card-top">
              <span className="bk__card-ico bk__card-ico--wa"><IcoWhatsApp /></span>
            </div>
            <h3 className="bk__card-title">Send a Message</h3>
            <p className="bk__card-label">WHATSAPP</p>
            <p className="bk__card-num">+91 76655 33991</p>
            <p className="bk__card-note">Responses may be delayed. Call for instant confirmation.</p>
            <a href="https://wa.me/917665533991"
              className="bk__btn bk__btn--secondary"
              target="_blank" rel="noopener noreferrer">
              Open WhatsApp <span className="bk__btn-ico"><IcoArrow /></span>
            </a>
          </div>

        </div>

        {/* ── Rules ── */}
        <div className="bk__rules">
          <div className="bk__rules-hd">
            <span className="bk__rules-eye">ZONE POLICY</span>
            <h3 className="bk__rules-title">Important Rules</h3>
          </div>
          <div className="bk__rules-grid">
            {RULES.map((r, i) => (
              <div className="bk__rule" key={i}>
                <span className="bk__rule-ico">{r.icon}</span>
                <div className="bk__rule-body">
                  <span className="bk__rule-title">{r.title}</span>
                  <span className="bk__rule-desc">{r.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}