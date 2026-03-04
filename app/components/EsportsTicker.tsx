export default function EsportsTicker() {
  const GAMES = [
    "GTA Online", "Valorant", "FIFA 24", "Call of Duty MW3",
    "Fortnite", "Red Dead Redemption 2", "Cyberpunk 2077",
    "Apex Legends", "Forza Horizon 5", "Minecraft",
  ];

  /* Triple list so translateX(-33.33%) creates a seamless loop */
  const tripled = [...GAMES, ...GAMES, ...GAMES];

  return (
    <section className="esports-ticker" aria-label="Games available at RD Game Zone">

      {/* Fixed left badge */}
      <div className="ticker-badge" aria-hidden="true">
        <span className="ticker-live-dot" />
        <span className="ticker-badge-text">NOW PLAYING</span>
      </div>

      {/* Scrolling strip */}
      <div className="ticker-viewport">
        <div className="ticker-track">
          {tripled.map((game, i) => (
            <span className="ticker-item" key={i}>
              <span className="ticker-sep" aria-hidden="true">◆</span>
              <span className="ticker-name">{game}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Edge fades */}
      <div className="ticker-fade ticker-fade--left"  aria-hidden="true" />
      <div className="ticker-fade ticker-fade--right" aria-hidden="true" />
    </section>
  );
}