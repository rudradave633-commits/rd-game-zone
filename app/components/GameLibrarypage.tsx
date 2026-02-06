import { useState } from "react";
import GameCard from "./GameCard";
import VideoModal from "./VideoModal";
import type { Game } from "./types";
import { games } from "../data/games";

const CATEGORIES = [
  "ALL",
  "SHOOTING",
  "ACTION",
  "RACING",
  "SPORTS",
  "FIGHTING",
  "ADVENTURE",
  "OPEN WORLD",
] as const;

const STATUSES = ["ALL", "available", "upcoming", "unavailable"] as const;

export default function GameLibraryPage() {
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const [category, setCategory] =
    useState<(typeof CATEGORIES)[number]>("ALL");
  const [status, setStatus] =
    useState<(typeof STATUSES)[number]>("ALL");
  const [search, setSearch] = useState("");

  const filteredGames = games.filter((game) => {
    const matchCategory =
      category === "ALL" || game.category.toUpperCase() === category;

    const matchStatus =
      status === "ALL" || game.status === status;

    const matchSearch =
      game.title.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchStatus && matchSearch;
  });

  return (
    <section className="game-library-page">
      {/* HEADER */}
      <div className="library-header">
        <h1 className="library-title">GAME LIBRARY</h1>

        <div className="library-controls">
          {/* CATEGORY BAR */}
          <div className="category-bar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${
                  category === cat ? "active" : ""
                }`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* STATUS FILTER */}
          <div className="category-bar">
            {STATUSES.map((st) => (
              <button
                key={st}
                className={`category-btn ${
                  status === st ? "active" : ""
                }`}
                onClick={() => setStatus(st)}
              >
                {st.toUpperCase()}
              </button>
            ))}
          </div>

          {/* SEARCH */}
          <input
            type="text"
            className="game-search"
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* GRID */}
      <div className="game-grid">
        {filteredGames.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onPlay={() => game.video && setActiveGame(game)}
          />
        ))}
      </div>

      {/* VIDEO MODAL */}
      {activeGame && activeGame.video && (
        <VideoModal
          video={activeGame.video}
          onClose={() => setActiveGame(null)}
        />
      )}
    </section>
  );
}