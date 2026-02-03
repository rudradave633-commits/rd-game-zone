import "../styles/gta-online-policy.css";

export default function GTAOnlinePolicy() {
  return (
    <section className="gta-policy-section">
      <div className="gta-glass-bar">

        {/* LEFT : PROFILE FRAME */}
        <div className="gta-profile">
          <div className="gta-profile-frame">
            <img
              src="/posters/gta-5online-rog-poster.jpeg"
              alt="GTA Online Profile"
            />
          </div>
        </div>

        {/* RIGHT : CONTENT */}
        <div className="gta-policy-content">

          <div className="gta-warning-bar">
            CONTENT WARNING
          </div>

          <h2 className="gta-title">
            GTA 5 Online Play Policy
          </h2>

          <p className="gta-policy-text">
            GTA Online gameplay maintains a strict policy regarding in-game content. 
            Adult-themed environments and bar-style locations are restricted.Violation 
            will result in immediate termination of the session without refund.
          </p>

        </div>
      </div>
    </section>
  );
}