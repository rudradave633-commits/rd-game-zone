import { useEffect, useState } from "react";
import { NavLink } from "@remix-run/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const hour = new Date().getHours();
      setIsOpen(hour >= 10 && hour < 22);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="rd-navbar">
      <style>{`
        .rd-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 72px;
          z-index: 100;
          display: flex;
          align-items: center;
          padding: 0 32px;
          background: rgba(8, 8, 10, 0.7);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        /* LEFT BRAND */
        .rd-brand {
          min-width: 220px;
          line-height: 1.1;
        }

        .rd-brand-title {
          font-size: 18px;
          font-weight: 900;
          letter-spacing: 0.6px;
          color: #ffffff;
        }

        .rd-brand-sub {
          font-size: 11px;
          margin-top: 2px;
          letter-spacing: 1.4px;
          font-weight: 700;
          text-transform: uppercase;
          background: linear-gradient(90deg, #ff4d4d, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* CENTER NAV */
        .rd-nav {
          flex: 1;
          display: flex;
          justify-content: center;
          gap: 32px;
        }

        /* NAV LINKS */
        .rd-nav a {
          position: relative;
          text-decoration: none;
          color: #cfd6ff;
          font-size: 14px;
          font-weight: 600;
          padding: 6px 2px;
          opacity: 0.8;
          transition: opacity 0.25s ease, color 0.25s ease;
        }

        .rd-nav a:hover {
          opacity: 1;
          color: #ffffff;
        }

        /* PLAYSTATION STYLE UNDERLINE */
        .rd-nav a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #00ffc3, #38bdf8);
          transition: width 0.3s ease;
        }

        .rd-nav a:hover::after {
          width: 100%;
        }

        .rd-nav a.active::after {
          width: 100%;
        }

        /* RIGHT STATUS */
        .rd-status {
          min-width: 160px;
          display: flex;
          justify-content: flex-end;
        }

        .rd-status-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          border-radius: 999px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.15);
        }

        .rd-open {
          color: #0b1f14;
          background: rgba(0, 255, 127, 0.75);
          box-shadow: 0 0 18px rgba(0,255,127,0.6);
        }

        .rd-open svg {
          color: #0b1f14;
        }

        .rd-closed {
          color: #2b0b0b;
          background: rgba(255, 59, 59, 0.75);
          box-shadow: 0 0 18px rgba(255,59,59,0.6);
        }

        .rd-closed svg {
          color: #2b0b0b;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .rd-nav {
            display: none;
          }
        }
      `}</style>

      {/* LEFT */}
      <div className="rd-brand">
        <div className="rd-brand-title">RD GAME ZONE</div>
        <div className="rd-brand-sub">NO GAMER NO ENTRY</div>
      </div>

      {/* CENTER */}
      <nav className="rd-nav">
        <NavLink to="/" end>Home</NavLink>
       <a href="#about">About</a>
        <a href="#pricing">Pricing</a>
        <a href="#booking">Booking</a>
        <NavLink to="/games">Games</NavLink>
      </nav>

      {/* RIGHT */}
      <div className="rd-status">
        <div className={`rd-status-pill ${isOpen ? "rd-open" : "rd-closed"}`}>
          {isOpen ? "SHOP OPEN" : "SHOP CLOSED"}
        </div>
      </div>
    </header>
  );
}