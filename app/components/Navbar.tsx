import { Link, useLocation, useNavigate } from "@remix-run/react";
import { useEffect, useCallback, useState, useRef } from "react";
import type React from "react";

export default function Navbar() {
  const location   = useLocation();
  const navigate   = useNavigate();
  const isHome     = location.pathname === "/";

  const [scrolled,   setScrolled]   = useState(!isHome);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const menuRef = useRef<HTMLDivElement>(null);

  /* ── Scroll background ── */
  useEffect(() => {
    if (!isHome) { setScrolled(true); return; }
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  /* ── Active section tracker ── */
  useEffect(() => {
    if (!isHome) return;
    const sections = ["booking", "pricing", "about"];
    const onScroll = () => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) { setActiveLink(id); return; }
      }
      setActiveLink("home");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  /* ── Close menu on route change ── */
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  /* ── Body scroll lock when menu open ── */
  useEffect(() => {
    document.body.style.overflow    = menuOpen ? "hidden" : "";
    document.body.style.touchAction = menuOpen ? "none"   : "";
    return () => { document.body.style.overflow = ""; document.body.style.touchAction = ""; };
  }, [menuOpen]);

  /* ── Escape key closes menu ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ─────────────────────────────────────────────────────────────
     ✅ HASH SCROLL FIX
     After navigating from another page to /#game-library (or any
     hash), this effect waits for the page to mount, then smooth-
     scrolls to the element with the nav-offset applied.
  ───────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (!isHome || !location.hash) return;
    const id = location.hash.replace("#", "");

    const scrollToEl = () => {
      const el = document.getElementById(id);
      if (!el) return false;
      const navH = window.innerWidth >= 1600 ? 84 : window.innerWidth <= 768 ? 64 : 72;
      const y = el.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top: y, behavior: "smooth" });
      return true;
    };

    /* Try immediately, then retry after brief delay for hydration */
    if (!scrollToEl()) {
      const t = setTimeout(scrollToEl, 250);
      return () => clearTimeout(t);
    }
  }, [isHome, location.hash]);

  /* ── Smooth scroll to section on same page ── */
  const scrollTo = useCallback((id: string) => {
    setMenuOpen(false);
    if (!isHome) { navigate(`/#${id}`); return; }
    const el = document.getElementById(id);
    if (!el) return;
    const navH = window.innerWidth >= 1600 ? 84 : window.innerWidth <= 768 ? 64 : 72;
    const y = el.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [isHome, navigate]);

  /* ── PLAY NOW — scrolls to #game-library ── */
  const goToGameLibrary = useCallback(() => {
    setMenuOpen(false);
    if (!isHome) {
      /* Navigate to home with hash; the useEffect above handles scroll */
      navigate("/#game-library");
      return;
    }
    const el = document.getElementById("game-library");
    if (!el) return;
    const navH = window.innerWidth >= 1600 ? 84 : window.innerWidth <= 768 ? 64 : 72;
    const y = el.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [isHome, navigate]);

  return (
    <>
      <header
        className={`rdnav ${scrolled ? "rdnav--solid" : "rdnav--clear"}`}
        role="banner"
      >
        <Link to="/" className="rdnav__brand" aria-label="RD Game Zone home">
          <div className="rdnav__logo-box" aria-hidden="true">
            {/*
              logo.svg — RD Game Zone custom logo (328×340 portrait aspect).
              Rendered white via fill="white" inside the SVG file.
              width/height set to equal values here; object-fit in CSS
              preserves the natural aspect ratio without cropping.
            */}
            <img
              src="/icons/logo.svg"
              alt=""
              className="rdnav__logo-img"
              width="28"
              height="29"
              loading="eager"
              decoding="async"
            />
            <div className="rdnav__logo-ring" />
          </div>
          <div className="rdnav__brand-text">
            <span className="rdnav__brand-name">RD GAME ZONE</span>
            <span className="rdnav__brand-tag">NO GAMER NO ENTRY</span>
          </div>
        </Link>

        <nav className="rdnav__center" aria-label="Main navigation">
          <Link to="/" className={`rdnav__item ${activeLink === "home" && isHome ? "is-active" : ""}`}>Home</Link>
          <button className={`rdnav__item ${activeLink === "about"   ? "is-active" : ""}`} onClick={() => scrollTo("about")}>About</button>
          <button className={`rdnav__item ${activeLink === "pricing" ? "is-active" : ""}`} onClick={() => scrollTo("pricing")}>Pricing</button>
          <button className={`rdnav__item ${activeLink === "booking" ? "is-active" : ""}`} onClick={() => scrollTo("booking")}>Booking</button>
        </nav>

        <div className="rdnav__right">
          {/* ✅ PLAY NOW — scrolls to #game-library, works from any page */}
          <button
            className="rdnav__cta"
            onClick={goToGameLibrary}
            aria-label="Play now — scroll to game library"
          >
            <span className="rdnav__cta-dot" aria-hidden="true" />
            <span>PLAY NOW</span>
          </button>

          <button
            className={`rdnav__burger ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="rdnav__burger-line" />
            <span className="rdnav__burger-line" />
            <span className="rdnav__burger-line" />
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU ── */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`rdmenu ${menuOpen ? "rdmenu--open" : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="rdmenu__atmosphere" aria-hidden="true" />
        <div className="rdmenu__scanlines"  aria-hidden="true" />

        <Link to="/" className="rdmenu__brand" onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
          <div className="rdmenu__logo-box">
            {/*
              Mobile menu logo — larger at 36×37 to match portrait aspect.
              Same logo.svg file, no separate asset needed.
            */}
            <img
              src="/icons/logo.svg"
              alt=""
              width="36"
              height="37"
              loading="eager"
              decoding="async"
            />
          </div>
          <div>
            <div className="rdmenu__brand-name">RD GAME ZONE</div>
            <div className="rdmenu__brand-tag">NO GAMER NO ENTRY</div>
          </div>
        </Link>

        <div className="rdmenu__divider" aria-hidden="true" />

        {/* ✅ 5 nav items — same style, no separate highlighted CTA */}
        <nav className="rdmenu__nav" aria-label="Mobile navigation">
          {[
            { label: "Home",     action: () => { setMenuOpen(false); navigate("/"); } },
            { label: "About",    action: () => scrollTo("about")    },
            { label: "Pricing",  action: () => scrollTo("pricing")  },
            { label: "Booking",  action: () => scrollTo("booking")  },
            { label: "Play Now", action: () => goToGameLibrary()     },
          ].map((item, i) => (
            <button
              key={item.label}
              className="rdmenu__nav-item"
              style={{ "--i": i } as React.CSSProperties}
              onClick={item.action}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span className="rdmenu__nav-num">0{i + 1}</span>
              <span className="rdmenu__nav-label">{item.label}</span>
              <span className="rdmenu__nav-arrow" aria-hidden="true">→</span>
            </button>
          ))}
        </nav>

        <p className="rdmenu__footer-note">Ahmedabad's #1 Gaming Cafe</p>
      </div>

      {menuOpen && (
        <div className="rdmenu__backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </>
  );
}