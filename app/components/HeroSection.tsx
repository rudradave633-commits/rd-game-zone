import { useEffect, useRef, useState } from "react";
import type React from "react";
import { HERO_SLIDES } from "../data/heroslides";

const SLIDE_DURATION = 90000; // 90s per slide

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<number | null>(null);

  /* AUTO SLIDE */
  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setCurrentSlide((prev) =>
        prev === HERO_SLIDES.length - 1 ? 0 : prev + 1
      );
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  /* VIDEO CONTROL */
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === currentSlide) {
        video.currentTime = 0;
        video.muted = true;
        video.playsInline = true;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [currentSlide]);

  /* PAUSE ON SCROLL */
  useEffect(() => {
    const onScroll = () => {
      const video = videoRefs.current[currentSlide];
      if (!video) return;

      if (window.scrollY > window.innerHeight * 0.6) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentSlide]);

  return (
    <section className="rd-hero">
      <style>{`
        .rd-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: #000;
          margin-bottom: 0;
        }

        .rd-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.9s ease;
        }

        .rd-slide.active {
          opacity: 1;
          z-index: 1;
        }

        video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
  object-position: center center;
}

        .rd-fallback {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .rd-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.9),
            rgba(0,0,0,0.45),
            transparent
          );
        }

        .rd-content {
          position: absolute;
          left: 50px;
          bottom: 45px;
          max-width: 720px;
          color: #fff;
          z-index: 2;
          animation: fadeUp 0.9s ease forwards;
        }

        .rd-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1;
        }

        .rd-tagline {
          margin-top: 12px;
          font-size: 12px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #8fb4ff;
        }

        .rd-badges {
          display: flex;
          gap: 12px;
          margin-top: 22px;
        }

        .rd-badge {
          padding: 10px 16px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          border-radius: 10px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .rd-best {
          background: rgba(0,120,255,0.85);
        }

        .rd-category {
          background: rgba(255,255,255,0.06);
        }

        .rd-indicators {
          position: absolute;
          right: 20px;
          bottom: 35px;
          display: flex;
          gap: 8px;
          z-index: 2;
        }

        .rd-indicator {
          height: 4px;
          width: 22px;
          background: rgba(255,255,255,0.25);
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .rd-indicator.active {
          width: 64px;
          background: #3b82f6;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .rd-content {
            left: 20px;
            right: 20px;
            bottom: 72px;
          }
          .rd-indicators {
            right: 20px;
            bottom: 72px;
          }
        }
      `}</style>

      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`rd-slide ${index === currentSlide ? "active" : ""}`}
        >
          {(slide.videoWebm || slide.videoMp4) ? (
            <video
              ref={(el) => {
  videoRefs.current[index] = el;
}}
              poster={slide.poster}
              muted
              playsInline
              preload="metadata"
              loop
            >
              {slide.videoWebm && (
                <source src={slide.videoWebm} type="video/webm" />
              )}
              {slide.videoMp4 && (
                <source src={slide.videoMp4} type="video/mp4" />
              )}
            </video>
          ) : (
            <div
              className="rd-fallback"
              style={{ backgroundImage: `url(${slide.poster})` }}
            />
          )}

          <div className="rd-overlay" />

          <div className="rd-content">
            <div className="rd-title">{slide.title}</div>
            <div className="rd-tagline">{slide.tagline}</div>

            <div className="rd-badges">
              <div className="rd-badge rd-best">BEST GAME</div>
              <div className="rd-badge rd-category">{slide.category}</div>
            </div>
          </div>
        </div>
      ))}

      <div className="rd-indicators">
        {HERO_SLIDES.map((_, i) => (
          <div
            key={i}
            className={`rd-indicator ${i === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;