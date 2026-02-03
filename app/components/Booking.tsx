import { useEffect, useState } from "react";
import "../styles/epic-booking.css";

export default function Booking() {
  const [showNumber, setShowNumber] = useState(false);

  useEffect(() => {
    const reveal = () => {
      const el = document.querySelector(".booking-section");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7) {
        el.classList.add("active");
      }
    };

    window.addEventListener("scroll", reveal, { passive: true });
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  /* AUTO HIDE NUMBER */
  useEffect(() => {
    if (!showNumber) return;
    const t = setTimeout(() => setShowNumber(false), 8000);
    return () => clearTimeout(t);
  }, [showNumber]);

  return (
  <section id="booking" className="booking-section">
      <div className="booking-grid">

        {/* LEFT */}
        <div className="booking-left">
          <h2 className="booking-title">
            ADVANCE <span>BOOKING RULES</span>
          </h2>

          <ul className="booking-points">
            <li>Book via Store Visit or Phone Call.</li>
            <li>Advance payment confirms your slot immediately.</li>
            <li className="danger">Payments are strictly non-refundable.</li>
            <li>Reserved slots are exclusive and cannot be taken by others.</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="booking-right">

          {/* PHONE */}
          <div className={`booking-card flip-card ${showNumber ? "flipped" : ""}`}>
            <div className="flip-inner">

              <div className="flip-front card-center">
                <div className="card-head">PHONE BOOKING</div>
                <button
                  className="secondary-btn"
                  onClick={() => setShowNumber(true)}
                >
                  VIEW NUMBER
                </button>
              </div>

              <div className="flip-back card-center">
                <div className="card-head">CALL NOW</div>
                <a
                  href="tel:+917665533991"
                  className="reveal-number"
                >
                  +917665533991
                </a>
              </div>

            </div>
          </div>

          {/* STORE */}
          <div className="booking-card card-center">
            <div className="card-head">OFFLINE STORE VISIT</div>
            <a
              href="https://www.google.com/maps?q=RD+GAME+ZONE+Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              GET DIRECTIONS
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}