
import { FaPlay } from "react-icons/fa";
import { FaPlaystation, FaDesktop } from "react-icons/fa";
import type { Game } from "./types";

type Props = {
  game: Game;
  onPlay: () => void;
};

export default function GameCard({ game, onPlay }: Props) {
  const status = game.status; // available | upcoming | unavailable

  return (
    <div className={`game-card status-${status}`}>
      {/* IMAGE */}
      <div className="game-card-image">
        <img src={game.image} alt={game.title} />

        {/* STATUS DOT */}
        <span
          className={`status-dot ${status}`}
          data-tooltip={
            status === "available"
              ? "Available"
              : status === "upcoming"
              ? "Coming Soon"
              : "Unavailable"
          }
        />

        {game.adult && <span className="badge-18">18+</span>}
      </div>

      {/* TITLE */}
      <h3 className="game-title">{game.title}</h3>
      <p className="game-subtitle">{game.subtitle}</p>

      {/* TAGS */}
      <div className="tag-row">
        <span className="tag">{game.category}</span>
        <span className="tag">{game.playerType}</span>
      </div>

      {/* PLATFORMS */}
      <div className="platform-row">
        {game.platforms.includes("PS5") && (
          <span className="platform">
            <FaPlaystation /> PS5
          </span>
        )}
        {game.platforms.includes("PS4") && (
          <span className="platform">
            <FaPlaystation /> PS4
          </span>
        )}
        {game.platforms.includes("PC") && (
          <span className="platform">
            <FaDesktop /> PC
          </span>
        )}
      </div>

      {/* TRAILER BUTTON */}
      <button
        className={`watch-trailer ${
          !game.video || status !== "available" ? "disabled" : ""
        }`}
        onClick={onPlay}
        disabled={!game.video || status !== "available"}
      >
        <FaPlay />
        <span>
          {!game.video || status !== "available"
            ? "Trailer Unavailable"
            : "Watch Trailer"}
        </span>
      </button>
    </div>
  );
}
