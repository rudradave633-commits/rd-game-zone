import { useEffect, useState } from "react";
export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      // 10:00 AM – 10:00 PM
      setIsOpen(hours >= 10 && hours < 22);
    };

    checkStatus();
    const t = setInterval(checkStatus, 60 * 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer className="rd-footer">
      <div className="rd-footer-grid">
        {/* LEFT */}
        <div className="rd-footer-col">
          <h3>RD GAME ZONE</h3>
          <p>
            Ahmedabad’s dedicated esports facility.
            <br />
            Built for performance, comfort, and competition.
          </p>
          <ul>
            <li>Listed on Google Store</li>
            <li>High-end PCs & Consoles</li>
            <li>LAN & Competitive Play</li>
          </ul>
        </div>

        {/* CENTER */}
        <div className="rd-footer-col">
          <h4>LOCATION</h4>
          <p>
            RD Game Zone, First Floor, A-113<br />
            Opp. Swaminarayan Temple<br />
            Shahibag, Ahmedabad, Gujarat, INDIA – 380004
          </p>
          <p className="rd-phone">📞 +91 7665533991</p>
        </div>

        {/* RIGHT */}
        <div className="rd-footer-col status">
          <h4>STATUS</h4>
          <div className={`rd-status-box ${isOpen ? "open" : "closed"}`}>
            <span>DAILY</span>
            <strong>10:00 AM – 10:00 PM</strong>
            <div className="rd-live">
              {isOpen ? "SHOP OPEN" : "SHOP CLOSED"}
            </div>
          </div>
        </div>
      </div>

      {/* LEGAL */}
      <div className="rd-footer-legal">
        <p>
          © 2026 RD GAME ZONE. All rights reserved.
        </p>
        <p>
          All game content, visuals, and media are used for informational and promotional
          purposes only. Trademarks and copyrights belong to their respective owners.
        </p>
        <div className="rd-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}