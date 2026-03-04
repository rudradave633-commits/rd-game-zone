import React, { useEffect, useState } from "react";
import { gameLibrarySlides } from "../data/GameLibraryHomeData";
import type { GameSlide } from "../data/GameLibraryHomeData";
import "../styles/GameLibraryHome.css";
import { Link } from "@remix-run/react";

/* ── PRELOAD ── */
function preloadImages(slides: GameSlide[]) {
  slides.forEach((s) => {
    const img = new Image();
    img.src = s.image;
  });
}

/* ── INFINITE LOOP BUILDER ── */
function buildInfiniteSlides(slides: GameSlide[], repeat = 6): GameSlide[] {
  const out: GameSlide[] = [];
  for (let i = 0; i < repeat; i++) out.push(...slides);
  return out;
}

/* ── LAYOUT MODE ── */
type Mode = "desktop" | "portrait" | "landscape";

function getMode(): Mode {
  const w = window.innerWidth;
  const h = window.innerHeight;
  if (w > 1024) return "desktop";
  if (h < w)    return "landscape"; // wider than tall = landscape
  return "portrait";
}

const GameLibraryHome: React.FC = () => {
  const [paused, setPaused] = useState(false);
  const [mode,   setMode]   = useState<Mode>("desktop");

  /* ── RESPONSIVE ── */
  useEffect(() => {
    const update = () => setMode(getMode());
    update();
    window.addEventListener("resize",             update, { passive: true });
    window.addEventListener("orientationchange",  update, { passive: true });
    return () => {
      window.removeEventListener("resize",            update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  /* ── PRELOAD ── */
  useEffect(() => { preloadImages(gameLibrarySlides); }, []);

  /* ── SPLIT ALL GAMES INTO 4 BUCKETS ── */
  const l1: GameSlide[] = [];
  const l2: GameSlide[] = [];
  const l3: GameSlide[] = [];
  const l4: GameSlide[] = [];

  gameLibrarySlides.forEach((g, i) => {
    if      (i % 4 === 0) l1.push(g);
    else if (i % 4 === 1) l2.push(g);
    else if (i % 4 === 2) l3.push(g);
    else                  l4.push(g);
  });

  /*
    Desktop  → 4 rows: all 4 layers
    Portrait → 3 rows: l1, l2, l3
    Landscape→ 3 rows: l1, l2, l3
  */
  const layers =
    mode === "desktop"
      ? [l1, l2, l3, l4]
      : [l1, l2, l3]; // 3 rows for both portrait + landscape mobile

  /* Speed increases per layer, landscape gets faster (fewer pixels) */
  const baseSpeed = mode === "landscape" ? 28 : mode === "portrait" ? 34 : 40;

  return (
    /* ✅ FIXED: added id="game-library" — Navbar's goToGameLibrary() and
       mobile menu Play Now both call getElementById("game-library").
       Without this id the scroll target didn't exist so nothing happened. */
    <section id="game-library" className={`game-library-container glc--${mode}`}>
      <div
        className="gallery-wrapper"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {layers.map((layer, i) => {
          const speed = baseSpeed + i * 12;
          const dir   = i % 2 === 0 ? "left" : "right";
          return (
            <div className="layer-container" key={i}>
              <div
                className={`layer-scroll ${dir} ${paused ? "paused" : ""}`}
                style={{ animationDuration: `${speed}s` }}
              >
                {buildInfiniteSlides(layer).map((g, idx) => (
                  <div className="glh-card" key={`${g.id}-${idx}`}>
                    <div
                      className="glh-card-inner"
                      style={{ backgroundImage: `url(${g.image})` }}
                    >
                      <div className="glh-gradient" />
                      <div className="glh-title">
                        <h3>{g.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* EDGE FADES */}
      <div className="gradient-overlay-left"  aria-hidden="true" />
      <div className="gradient-overlay-right" aria-hidden="true" />

      {/* TEXT OVERLAY */}
      <div className="hero-overlay-text">
        <h1>Game Library</h1>
        <p>LAN • Console • eSports Ready</p>
        <Link to="/games" className="view-all-button">
          View Game Library →
        </Link>
      </div>
    </section>
  );
};

export default GameLibraryHome;