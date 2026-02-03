import React from "react";
import { ROG_MEDIA } from "../data/rogMedia";

/**
 * RING SLIDESHOW — INSTANT LOAD + BIG CARDS
 * No delay • GPU-safe • Kiosk safe
 */
const RingCarousel: React.FC = () => {
  return (
    <section className="ring-slider-section">
      <style>{`
        .ring-slider-section {
          position: relative;
          height: 100vh;
          background: radial-gradient(circle at center, #0e0e0e 0%, #000 70%);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ring-slider {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .ring-track {
          display: flex;
          align-items: center;
          gap: 48px;
          animation: ringMove 100s linear infinite;
          will-change: transform;
        }

        @keyframes ringMove {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .ring-item {
          flex: 0 0 auto;
          width: clamp(320px, 30vw, 460px);
          height: clamp(190px, 18vw, 260px);
          border-radius: 18px;
          overflow: hidden;
          background: #000;
          box-shadow:
            0 30px 80px rgba(0,0,0,0.85),
            inset 0 0 0 1px rgb(0, 0, 0);
          transform: rotateY(-10deg);
          transition: transform 0.4s ease;
        }

        .ring-item:nth-child(even) {
          transform: rotateY(10deg);
        }

        .ring-item img,
        .ring-item video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          background: #000;
        }

        /* keep visuals stable on load */
        video {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .ring-slider-section {
            height: 95vh;
          }

          .ring-item {
            width: 260px;
            height: 160px;
          }
        }
      `}</style>

      <div className="ring-slider">
        <div className="ring-track">
          {[...ROG_MEDIA, ...ROG_MEDIA].map((m, i) => (
            <div key={i} className="ring-item">
              {m.type === "video" ? (
                <video
                  src={m.src}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                />
              ) : (
                <img src={m.src} alt="" loading="eager" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RingCarousel;