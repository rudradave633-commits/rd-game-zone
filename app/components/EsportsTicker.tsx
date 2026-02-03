import "../styles/esports-ticker.css";

export default function EsportsTicker() {
  // Example list (can scale to 100+ easily)
  const GAMES = [
    "GTA Online",
    "Valorant",
    "FIFA 24",
    "Call of Duty MW3",
    "Fortnite",
    "Red Dead Redemption 2",
    "Cyberpunk 2077",
    "Apex Legends",
    "Forza Horizon 5",
    "Minecraft",
  ];

  return (
    <section className="esports-ticker">
      <div className="ticker-track">
        {/* Duplicate content for seamless infinite scroll */}
        {[...GAMES, ...GAMES].map((game, index) => (
          <span className="ticker-text" key={index}>
            {game}
          </span>
        ))}
      </div>
    </section>
  );
}