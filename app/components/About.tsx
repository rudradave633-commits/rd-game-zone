import { useEffect } from "react";
import type React from "react";

const AboutSection: React.FC = () => {
  useEffect(() => {
    /* ===== REVEAL ===== */
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      { threshold: 0.25 }
    );

    reveals.forEach((el) => observer.observe(el));

    /* ===== MAGNETIC CARDS ===== */
    const cards = document.querySelectorAll<HTMLElement>(".epic-stat-box");

    cards.forEach((card) => {
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty("--mx", `${x}%`);
        card.style.setProperty("--my", `${y}%`);
      };

      const onLeave = () => {
        card.style.setProperty("--mx", "50%");
        card.style.setProperty("--my", "50%");
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
    });

    return () => observer.disconnect();
  }, []);

  return (
     <section id="about" className="epic-wrapper">
      <div className="epic-container">
        <span className="epic-subhead reveal">About RD Game Zone</span>

        <h2 className="epic-headline reveal">RD GAME ZONE</h2>

        {/* LONG DESCRIPTION */}
        <div className="epic-body reveal">
          <p>
            RD GAME ZONE is designed for gamers who value{" "}
            <span className="highlight">performance, comfort, and precision</span>.
            Whether you’re here to compete, practice, or simply enjoy your
            favorite games, our space delivers a balanced experience for both
            casual and serious players.
          </p>

          <p>
            Our gaming setup supports{" "}
            <span className="highlight-accent">
              PlayStation 5, PlayStation 4, and high-end gaming PCs
            </span>
            , powered by optimized hardware and high-refresh displays to deliver
            smooth gameplay with stunning visuals.
          </p>

          <p>
            The environment is carefully managed to remain{" "}
            <span className="highlight-strong">
              friendly, respectful, and welcoming
            </span>
            , allowing players to focus purely on gaming.
          </p>

          <p>
            Enjoy access to{" "}
            <span className="highlight-accent">
              top AAA titles and competitive favorites
            </span>
            , updated regularly to match current gaming trends.
          </p>

          {/* FOOD LINE – MOVED ABOVE CARDS */}
          <p className="food-line">
            Food and refreshments are available inside the gaming zone to ensure
            uninterrupted gameplay sessions. Outside food policies are strictly
            managed to maintain hygiene, equipment safety, and a premium gaming
            experience.
          </p>
        </div>

        <div className="epic-divider reveal" />

        {/* 4 POLICY CARDS */}
        <div className="epic-grid reveal">
          <div className="epic-stat-box">
            <div className="stat-number">240Hz</div>
            <div className="stat-label">Esports Displays</div>
          </div>

          <div className="epic-stat-box">
            <div className="stat-number">LAN</div>
            <div className="stat-label">Multiplayer Ready</div>
          </div>

          <div className="epic-stat-box">
            <div className="stat-number">Secure</div>
            <div className="stat-label">Safe & Friendly Zone</div>
          </div>

          <div className="epic-stat-box">
            <div className="stat-number">Pro</div>
            <div className="stat-label">Headsets & Gear</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;