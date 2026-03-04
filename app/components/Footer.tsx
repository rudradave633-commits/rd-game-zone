// app/components/Footer.tsx
import { useEffect, useRef, useState } from "react";
import "../styles/footer.css";

/* ─────────────────────────────────────────────────────────────
   STORE DATA — update phone with real number
───────────────────────────────────────────────────────────── */
const STORE = {
  lat:         23.045587,
  lng:         72.58923,
  zoom:        19,
  address:     "First Floor, A-113, Advance Business Park, Opp. Swaminarayan Temple, Shahibag, Ahmedabad – 380004",
  phone:       "+91 XXXXX XXXXX",          // ← replace with real number
  email:       "support@rdgamezone.com",
  dirLink:     "https://www.google.com/maps/dir/?api=1&destination=23.045587,72.58923&travelmode=driving",
  googleBadge: "https://share.google/uUXajxFXWgKKRfWGR",
};

/* ─────────────────────────────────────────────────────────────
   ICONS — all inline SVG
───────────────────────────────────────────────────────────── */
const IcoPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IcoNav = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
  </svg>
);
const IcoClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IcoPower = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/>
  </svg>
);
const IcoClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IcoGamepad = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="5"/><path d="M6 12h4M8 10v4"/>
    <circle cx="16" cy="10" r="1" fill="currentColor" stroke="none"/>
    <circle cx="18" cy="12" r="1" fill="currentColor" stroke="none"/>
    <circle cx="16" cy="14" r="1" fill="currentColor" stroke="none"/>
    <circle cx="14" cy="12" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
const IcoMonitor = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
  </svg>
);
const IcoNetwork = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="2" width="6" height="4" rx="1"/>
    <rect x="2" y="18" width="6" height="4" rx="1"/>
    <rect x="16" y="18" width="6" height="4" rx="1"/>
    <path d="M12 6v4M5 18v-4h14v4"/>
  </svg>
);
const IcoFood = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
  </svg>
);
const IcoChevron = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <polyline points="4 6 8 10 12 6"/>
  </svg>
);
const IcoPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IcoMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IcoGoogle = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   STATIC DATA
───────────────────────────────────────────────────────────── */
const OFFERINGS = [
  { icon: <IcoGamepad />, label: "PS5 GAMING"    },
  { icon: <IcoGamepad />, label: "PS4 GAMING"    },
  { icon: <IcoMonitor />, label: "PC GAMING"     },
  { icon: <IcoNetwork />, label: "LAN SESSIONS"  },
  { icon: <IcoFood    />, label: "SNACKS & BEVERAGES" },
];

const QUICK_LINKS = [
  { label: "Home",     href: "#home"    },
  { label: "About",   href: "#about"   },
  { label: "Pricing", href: "#pricing" },
  { label: "Booking", href: "#booking" },
];

const CONTACT_ITEMS = [
  { icon: <IcoPin   />, label: "Address", value: STORE.address, href: STORE.dirLink,                           external: true  },
  { icon: <IcoPhone />, label: "Phone",   value: STORE.phone,   href: `tel:${STORE.phone.replace(/\s/g,"")}`, external: false },
  { icon: <IcoMail  />, label: "Email",   value: STORE.email,   href: `mailto:${STORE.email}`,                 external: false },
];

const BRAND_LINES = [
  "Ahmedabad's dedicated esports gaming lounge.",
  "Built for performance, comfort, and competitive play.",
  "High-end PCs and latest PlayStation consoles.",
  "LAN-ready setups for multiplayer gaming.",
  "Quick bites, coffee, milkshakes and gaming refreshments available at the counter.",
];

/* ─────────────────────────────────────────────────────────────
   ACCORDION
───────────────────────────────────────────────────────────── */
type AccId = "links" | "services" | "contact" | null;

function AccItem({ id, title, open, onToggle, children }: {
  id: AccId; title: string; open: boolean;
  onToggle: (id: AccId) => void; children: React.ReactNode;
}) {
  return (
    <div className="ft-acc__item">
      <button type="button" className="ft-acc__trigger"
        onClick={() => onToggle(open ? null : id)} aria-expanded={open}>
        <span className="ft-acc__title">{title}</span>
        <span className={`ft-acc__chevron${open ? " ft-acc__chevron--open" : ""}`}>
          <IcoChevron />
        </span>
      </button>
      {open && <div className="ft-acc__panel">{children}</div>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FOOTER COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function Footer() {
  const [isOpen,    setIsOpen]    = useState(false);
  const [mapOpen,   setMapOpen]   = useState(false);
  const [mapReady,  setMapReady]  = useState(false);
  const [leafletOk, setLeafletOk] = useState(false);
  const [openAcc,   setOpenAcc]   = useState<AccId>(null);
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapRef    = useRef<any>(null);

  /* store open/closed clock */
  useEffect(() => {
    const check = () => { const h = new Date().getHours(); setIsOpen(h >= 10 && h < 23); };
    check();
    const t = setInterval(check, 60_000);
    return () => clearInterval(t);
  }, []);

  /* lazy-load Leaflet */
  const loadLeaflet = () => new Promise<void>((resolve) => {
    if ((window as any).L) { resolve(); return; }
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
    document.head.appendChild(css);
    const js = document.createElement("script");
    js.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
    js.onload = () => resolve();
    document.head.appendChild(js);
  });

  const openMap = async () => { setMapOpen(true); await loadLeaflet(); setLeafletOk(true); };
  const openDirections = () => window.open(STORE.dirLink, "_blank", "noopener,noreferrer");

  /* Leaflet map init */
  useEffect(() => {
    if (!mapOpen || !leafletOk || !mapDivRef.current || mapRef.current) return;
    const L = (window as any).L;
    const map = L.map(mapDivRef.current, {
      center: [STORE.lat, STORE.lng], zoom: STORE.zoom,
      minZoom: 15, maxZoom: 20,
      zoomControl: false, attributionControl: false,
      scrollWheelZoom: true, dragging: true,
    });
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      { maxZoom: 20, maxNativeZoom: 19 }
    ).addTo(map);
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
      { maxZoom: 20, maxNativeZoom: 19, opacity: 0.7 }
    ).addTo(map);
    const pinHTML = `
      <div class="ftr-pin">
        <div class="ftr-pin__shadow"></div>
        <div class="ftr-pin__pulse"></div>
        <svg class="ftr-pin__svg" viewBox="0 0 36 52" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 0C8.06 0 0 8.06 0 18C0 30.9 18 52 18 52C18 52 36 30.9 36 18C36 8.06 27.94 0 18 0Z" fill="#ffffff"/>
          <circle cx="18" cy="18" r="7" fill="#000"/>
        </svg>
        <div class="ftr-pin__label">RD GAME ZONE</div>
      </div>`;
    const icon = L.divIcon({ html: pinHTML, className: "", iconSize: [56,76], iconAnchor: [28,70], popupAnchor: [0,-72] });
    const marker = L.marker([STORE.lat, STORE.lng], { icon }).addTo(map);
    marker.bindPopup(`
      <div class="ftr-popup">
        <strong class="ftr-popup__name">RD GAME ZONE</strong>
        <p class="ftr-popup__addr">${STORE.address}</p>
        <a class="ftr-popup__link" href="${STORE.dirLink}" target="_blank" rel="noopener noreferrer">Get Directions &#8599;</a>
      </div>`, { className: "ftr-popup-wrap", maxWidth: 240, closeButton: true });
    marker.openPopup();
    mapRef.current = map;
    setTimeout(() => { map.invalidateSize(); setMapReady(true); }, 100);
  }, [mapOpen, leafletOk]);

  const zoomIn   = () => mapRef.current?.zoomIn();
  const zoomOut  = () => mapRef.current?.zoomOut();
  const recenter = () => mapRef.current?.flyTo([STORE.lat, STORE.lng], STORE.zoom, { duration: 0.8 });
  const closeMap = () => { setMapOpen(false); setMapReady(false); mapRef.current = null; };

  /* ── shared sub-components ── */
  const LinksList = () => (
    <ul className="ft-list">
      {QUICK_LINKS.map(l => (
        <li key={l.href}>
          <a href={l.href} className="ft-list__link">
            <span className="ft-list__dash" aria-hidden="true">—</span>{l.label}
          </a>
        </li>
      ))}
    </ul>
  );

  const ServicesList = () => (
    <ul className="ft-list">
      {OFFERINGS.map(o => (
        <li key={o.label} className="ft-list__service">
          <span className="ft-list__svc-icon">{o.icon}</span>
          <span className="ft-list__svc-label">{o.label}</span>
        </li>
      ))}
    </ul>
  );

  const ContactList = () => (
    <ul className="ft-list ft-list--contact">
      {CONTACT_ITEMS.map(c => (
        <li key={c.label} className="ft-list__contact-item">
          <span className="ft-list__contact-icon">{c.icon}</span>
          <div className="ft-list__contact-body">
            <span className="ft-list__contact-label">{c.label}</span>
            <a href={c.href} className="ft-list__contact-value"
               target={c.external ? "_blank" : undefined}
               rel={c.external ? "noopener noreferrer" : undefined}>
              {c.value}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );

  const BrandBlock = () => (
    <>
      <p className="ft-wordmark">RD GAME ZONE</p>
      <span className="ft-wordmark-sub">AHMEDABAD'S PREMIUM GAMING LOUNGE & ESPORTS HUB</span>
      <ul className="ft-brand-lines">
        {BRAND_LINES.map(line => <li key={line} className="ft-brand-line">{line}</li>)}
      </ul>
      <a href={STORE.googleBadge} target="_blank" rel="noopener noreferrer"
         className="ft-google-badge" aria-label="Find us on Google">
        <span className="ft-google-badge__icon"><IcoGoogle /></span>
        <span className="ft-google-badge__text">Listed on Google</span>
      </a>
    </>
  );

  /* ─────────────────────────────────────────────────────────── */
  return (
    <footer className="rd-footer">

      {/* ════ MAP SECTION ════ */}
      <div className="rd-map-section">
        <div className="rd-map-header">
          <span className="rd-map-eyebrow">FIND US</span>
          <h3 className="rd-map-title">Visit Our Store</h3>
          <p className="rd-map-address">{STORE.address}</p>
        </div>
        <div className="rd-map-thumb" aria-hidden="true">
          <div className="rd-map-thumb-fallback">
            <IcoPin />
            <span>{STORE.lat.toFixed(5)}°N · {STORE.lng.toFixed(5)}°E</span>
            <span className="rd-map-thumb-sub">Advance Business Park, Shahibag</span>
          </div>
          <div className="rd-map-thumb-overlay" />
          <div className="rd-map-actions">
            <button className="rd-map-btn rd-map-btn--primary" onClick={openMap}>
              <IcoPin /> View on Map
            </button>
            <button className="rd-map-btn rd-map-btn--secondary" onClick={openDirections}>
              <IcoNav /> Get Directions
            </button>
          </div>
        </div>
        <div className="rd-map-status-bar">
          <div className="rd-status-tag">
            <span className="rd-status-tag__icon"><IcoClock /></span>
            <span className="rd-status-tag__text">
              Open Daily&nbsp;<strong>10:00 AM – 10:00 PM</strong>&nbsp;· All year 
            </span>
          </div>
          <div className={`rd-live-badge ${isOpen ? "open" : "closed"}`}>
            <span className="rd-live-badge__icon"><IcoPower /></span>
            <div className="rd-live-badge__body">
              <span className="rd-live-badge__label">STORE STATUS</span>
              <span className="rd-live-badge__state">{isOpen ? "OPEN NOW" : "CLOSED"}</span>
            </div>
            <span className="rd-live-badge__dot" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* ════ DESKTOP 4-COL GRID ════ */}
      <div className="ft-info">
        <div className="ft-info__grid">
          <div className="ft-col ft-col--brand"><BrandBlock /></div>
          <div className="ft-col">
            <span className="ft-col__label">Quick Links</span>
            <LinksList />
          </div>
          <div className="ft-col">
            <span className="ft-col__label">Services</span>
            <ServicesList />
          </div>
          <div className="ft-col">
            <span className="ft-col__label">Contact</span>
            <ContactList />
          </div>
        </div>
      </div>

      {/* ════ MOBILE ACCORDION ════ */}
      <div className="ft-acc">
        <div className="ft-acc__brand"><BrandBlock /></div>
        <AccItem id="links"    title="Quick Links" open={openAcc === "links"}    onToggle={setOpenAcc}><LinksList    /></AccItem>
        <AccItem id="services" title="Services"    open={openAcc === "services"} onToggle={setOpenAcc}><ServicesList /></AccItem>
        <AccItem id="contact"  title="Contact"     open={openAcc === "contact"}  onToggle={setOpenAcc}><ContactList  /></AccItem>
      </div>

      {/* ════ BOTTOM BAR ════ */}
      <div className="ft-bottom">
        <div className="ft-bottom__inner">
          <span className="ft-bottom__copy">
            © {new Date().getFullYear()} RD Game Zone. All rights reserved.
            RD Game Zone name, logo, website design, and original content are protected.
            All game titles, trademarks, and logos belong to their respective owners.
          </span>
          <nav className="ft-bottom__nav" aria-label="Legal">
            <a href="/privacy" className="ft-bottom__link">Privacy</a>
            <span className="ft-bottom__sep" aria-hidden="true">|</span>
            <a href="/terms"   className="ft-bottom__link">Terms</a>
          </nav>
        </div>
      </div>

      {/* ════ MAP MODAL ════ */}
      {mapOpen && (
        <div className={`ftr-modal ${mapReady ? "ftr-modal--ready" : ""}`}
             role="dialog" aria-modal="true" aria-label="Store location map">
          <div className="ftr-modal__backdrop" onClick={closeMap} />
          <div className="ftr-modal__panel">
            <div className="ftr-modal__bar">
              <div className="ftr-modal__bar-info">
                <span className="ftr-modal__bar-name">RD GAME ZONE</span>
                <span className="ftr-modal__bar-addr">{STORE.address}</span>
              </div>
              <div className="ftr-modal__bar-btns">
                <button className="ftr-bar-btn" onClick={openDirections} title="Get Directions">
                  <IcoNav /><span>Directions</span>
                </button>
                <button className="ftr-bar-btn ftr-bar-btn--close" onClick={closeMap} aria-label="Close map">
                  <IcoClose />
                </button>
              </div>
            </div>
            <div className="ftr-modal__map-wrap">
              {!mapReady && (
                <div className="ftr-modal__loader">
                  <div className="ftr-loader-ring" />
                  <span>Loading satellite view…</span>
                </div>
              )}
              <div ref={mapDivRef} className="ftr-modal__map" />
              {mapReady && (
                <div className="ftr-zoom">
                  <button className="ftr-zoom__btn" onClick={zoomIn}  aria-label="Zoom in">+</button>
                  <div className="ftr-zoom__sep" />
                  <button className="ftr-zoom__btn" onClick={zoomOut} aria-label="Zoom out">−</button>
                  <div className="ftr-zoom__sep" />
                  <button className="ftr-zoom__btn ftr-zoom__btn--center" onClick={recenter} aria-label="Re-centre">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                         strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                      <circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
                    </svg>
                  </button>
                </div>
              )}
              <div className="ftr-modal__attr-cover" aria-hidden="true" />
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}