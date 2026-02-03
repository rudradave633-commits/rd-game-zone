import React, { useEffect, useState } from "react";
import { gameLibrarySlides } from "../data/GameLibraryHomeData";
import type { GameSlide } from "../data/GameLibraryHomeData";
import "../styles/GameLibraryHome.css";
import { Link } from "react-router";
/* PRELOAD IMAGES */
function preloadImages(slides: GameSlide[]) {
  slides.forEach((s) => {
    const img = new Image();
    img.src = s.image;
  });
}

/* INFINITE LOOP BUILDER */
function buildInfiniteSlides(slides: GameSlide[], repeat = 6): GameSlide[] {
  const out: GameSlide[] = [];
  for (let i = 0; i < repeat; i++) out.push(...slides);
  return out;
}

const GameLibraryHome: React.FC = () => {
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* RESPONSIVE CHECK */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* SPLIT INTO 4 LAYERS */
  const l1: GameSlide[] = [];
  const l2: GameSlide[] = [];
  const l3: GameSlide[] = [];
  const l4: GameSlide[] = [];

  gameLibrarySlides.forEach((g, i) => {
    if (i % 4 === 0) l1.push(g);
    else if (i % 4 === 1) l2.push(g);
    else if (i % 4 === 2) l3.push(g);
    else l4.push(g);
  });

  const layers = isMobile ? [l1, l2] : [l1, l2, l3, l4];

  useEffect(() => {
    preloadImages(gameLibrarySlides);
  }, []);

  return (
    <section className="game-library-container">
      <div
        className="gallery-wrapper"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {layers.map((layer, i) => {
          const speed = 40 + i * 15;
          const dir = i % 2 === 0 ? "left" : "right";

          return (
            <div className="layer-container" key={i}>
              <div
                className={`layer-scroll ${dir} ${
                  paused ? "paused" : ""
                }`}
                style={{ animationDuration: `${speed}s` }}
              >
                {buildInfiniteSlides(layer).map((g, idx) => (
                  <div className="game-card" key={`${g.id}-${idx}`}>
                    <div
                      className="game-card-inner"
                      style={{ backgroundImage: `url(${g.image})` }}
                    >
                      <div className="game-card-gradient" />
                      <div className="game-card-title">
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
      <div className="gradient-overlay-left" />
      <div className="gradient-overlay-right" />

      {/* TEXT */}
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