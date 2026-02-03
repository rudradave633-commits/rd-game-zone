import "../styles/Experience.css";

export default function Experience() {
  return (
    <section className="experience-section">
      <div className="experience-frame">
        <span className="experience-eyebrow">PLAYER EXPERIENCE</span>

        <h2 className="experience-title">
          ELEVATED GAMING STANDARDS
        </h2>

        <p className="experience-description">
          We are committed to providing a top-tier environment. Our facility
          prioritizes player comfort, high-performance gear, and a respectful
          community atmosphere. Enjoy gaming the way it was meant to be played.
        </p>

        <div className="experience-features">
          <div className="feature">
            <span className="dot green" />
            <span> HIGH-END PCs</span>
          </div>

          <div className="feature">
            <span className="dot green" />
            <span>GIGABIT LAN</span>
          </div>
        </div>
      </div>
    </section>
  );
}

