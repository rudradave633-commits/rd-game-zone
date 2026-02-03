import { useEffect } from "react";
import type React from "react";
import "../styles/epic-pricing.css";

const Pricing: React.FC = () => {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".price-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("price-active");
        });
      },
      { threshold: 0.25 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="pricing-wrapper">
      <div className="pricing-container">
        {/* HEADER */}
        <span className="pricing-subhead price-reveal">
          Game Rates
        </span>

        <h2 className="pricing-title price-reveal">
          Pricing Structure
        </h2>

        {/* IMPORTANT NOTICE – ABOVE CARDS */}
        <div className="pricing-notice price-reveal">
          <strong>Important:</strong> All sessions are charged strictly on an hourly basis. 
           There is no half-hour pricing listed online.
        <br />
        If a customer extends playtime beyond 1 hour (for example, from 1 hour to 1 hour 30 minutes), 
        the same hourly rate continues to apply for the extended duration. 
        Half-hour extension pricing is available only at the store and is not displayed on the website.
        </div>

        {/* PRICING GRID */}
        <div className="pricing-grid price-reveal">
          {/* 32 INCH */}
          <div className="pricing-card">
            <h3>32″ TV · PS4</h3>
            <ul>
              <li>1 Person <span>₹100 / hour</span></li>
              <li>2 Person <span>₹200 / hour</span></li>
              <li>3 Person <span>₹300 / hour</span></li>
              <li>4 Person <span>₹400 / hour</span></li>
            </ul>
          </div>

          {/* 50 INCH */}
          <div className="pricing-card">
            <h3>50″ TV</h3>
            <ul>
              <li>1 Person (PS4) <span>₹120 / hour</span></li>
              <li>2 Person (PS4) <span>₹200 / hour</span></li>
              <li>1 Person (PS5) <span>₹130 / hour</span></li>
              <li>2 Person (PS5) <span>₹220 / hour</span></li>
            </ul>
          </div>

          {/* 65 INCH */}
          <div className="pricing-card featured">
            <h3>65″ TV · PS5</h3>
            <ul>
              <li>1 Person <span>₹200 / hour</span></li>
              <li>2 Person <span>₹250 / hour</span></li>
              <li>3 Person <span>₹300 / hour</span></li>
              <li>4 Person <span>₹400 / hour</span></li>
            </ul>
          </div>

          {/* PC */}
          <div className="pricing-card">
            <h3>Computer</h3>
            <ul>
              <li>Regular PC <span>₹100 / hour</span></li>
              <li>Pro PC <span>₹130 / hour</span></li>
            </ul>
          </div>
        </div>

        {/* FOOTER */}
        <div className="pricing-footer price-reveal">
          Rates apply to all games. For long sessions and LAN gaming,
          please contact the counter.
        </div>
      </div>
    </section>
  );
};

export default Pricing;