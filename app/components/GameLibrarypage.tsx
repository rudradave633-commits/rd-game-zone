/**
 * GameLibraryPage.tsx — RD Game Zone
 * SEO: JSON-LD ItemList + VideoGame schema, semantic HTML,
 *      aria roles, h1 heading, meta descriptions
 */

import { useState, useEffect, useRef, useCallback } from "react";
import GameCard   from "./GameCard";
import VideoModal from "./VideoModal";
import type { Game } from "./types";
import { games }    from "../data/games";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

/* ─── Constants ─────────────────────────────────────── */
const CATEGORIES = [
  "ALL", "SHOOTING", "ACTION", "RACING",
  "SPORTS", "FIGHTING", "ADVENTURE", "OPEN WORLD",
] as const;

const STATUSES = ["ALL", "AVAILABLE", "UPCOMING", "UNAVAILABLE"] as const;

type Category = (typeof CATEGORIES)[number];
type Status   = (typeof STATUSES)[number];

/* ─── SEO JSON-LD ────────────────────────────────────── */
function buildSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Game Library — RD Game Zone Ahmedabad",
    description:
      "Browse 30+ PS5, PS4 and PC games at RD Game Zone, Ahmedabad's premier gaming cafe. Play AAA titles including GTA Online, Valorant, Call of Duty, and more.",
    url: "https://rdgamezone.in/games",
    numberOfItems: games.length,
    itemListElement: games.slice(0, 10).map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: g.title,
      url: `https://rdgamezone.in/games#${g.id}`,
    })),
  };
}

/* ═══════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════ */
export default function GameLibraryPage() {
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const [category,   setCategory]   = useState<Category>("ALL");
  const [status,     setStatus]     = useState<Status>("ALL");
  const [search,     setSearch]     = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const drawerRef    = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  /* ── Filter ── */
  const filteredGames = games.filter((g) => {
    const matchCat    = category === "ALL" || g.category.toUpperCase() === category;
    const matchStatus = status   === "ALL" || g.status.toUpperCase()   === status;
    const matchSearch = g.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchStatus && matchSearch;
  });

  /* ── Body scroll lock when drawer open ── */
  useEffect(() => {
    document.body.style.overflow    = drawerOpen ? "hidden" : "";
    document.body.style.touchAction = drawerOpen ? "none"   : "";
    return () => {
      document.body.style.overflow    = "";
      document.body.style.touchAction = "";
    };
  }, [drawerOpen]);

  /* ── Escape closes drawer / search ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setDrawerOpen(false); setSearchOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ── Focus search input when expanding ── */
  useEffect(() => {
    if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 80);
  }, [searchOpen]);

  /* ── Handlers ── */
  const pickCategory = useCallback((cat: Category) => {
    setCategory(cat);
    setDrawerOpen(false);
  }, []);

  const pickStatus = useCallback((st: Status) => setStatus(st), []);
  const clearSearch = useCallback(() => setSearch(""), []);

  /* ══════════════════════════════════════════════════════
     RENDER
  ══════════════════════════════════════════════════════ */
  return (
    <>
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema()) }}
      />

      <section
        className="game-library-page"
        aria-label="Game Library"
        itemScope
        itemType="https://schema.org/CollectionPage"
      >

        {/* ══════════════════════════
            HEADER — h1 only, no subtitle
        ══════════════════════════ */}
        <header className="library-header">
          <h1 className="library-title" itemProp="name">
            GAME LIBRARY
          </h1>
        </header>

        {/* ════════════════════════════════════════════════════
            DESKTOP CONTROLS  (≥ 769px)
            Row 1 → all genre pills inline, 1 row
            Row 2 → status pills + search bar
        ════════════════════════════════════════════════════ */}
        <nav className="desktop-controls" aria-label="Filter games">

          {/* Row 1: Genres */}
          <div className="desktop-row desktop-row--genres" role="group" aria-label="Genre filter">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-pill ${category === cat ? "filter-pill--active" : ""}`}
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Row 2: Status + Search */}
          <div className="desktop-row desktop-row--status-search">
            <div className="status-pill-group" role="group" aria-label="Availability filter">
              {STATUSES.map((st) => (
                <button
                  key={st}
                  type="button"
                  className={`filter-pill filter-pill--status ${status === st ? "filter-pill--active" : ""}`}
                  onClick={() => pickStatus(st)}
                  aria-pressed={status === st}
                >
                  {st}
                </button>
              ))}
            </div>

            {/* Search field — desktop */}
            <label className="search-field" aria-label="Search games">
              <span className="search-field__icon" aria-hidden="true">
                <FiSearch size={15} strokeWidth={2.5} />
              </span>
              <input
                type="search"
                className="search-field__input"
                placeholder="Search games..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search games by title"
                autoComplete="off"
                spellCheck={false}
              />
              {search && (
                <button type="button" className="search-field__clear" onClick={clearSearch} aria-label="Clear search">
                  <FiX size={13} strokeWidth={2.5} />
                </button>
              )}
            </label>
          </div>
        </nav>

        {/* ════════════════════════════════════════════════════
            MOBILE CONTROLS  (≤ 768px)
            SINGLE ROW:
            [≡ GENRES] [ALL][AVAIL][UPCOMING][UNAVAIL] [🔍]
            ──────────────────────────────────────────────────
            When 🔍 tapped → search bar expands below as row 2
        ════════════════════════════════════════════════════ */}
        <div className="mobile-controls" aria-label="Mobile filters">

          {/* ── Single control row ── */}
          <div className="mobile-row">

            {/* Hamburger genre trigger */}
            <button
              type="button"
              className={`mobile-genre-btn ${category !== "ALL" ? "mobile-genre-btn--active" : ""}`}
              onClick={() => setDrawerOpen(true)}
              aria-label="Open genre filter"
              aria-expanded={drawerOpen}
              aria-controls="genre-drawer"
            >
              <FiMenu size={15} strokeWidth={2.5} aria-hidden="true" />
              <span className="mobile-genre-btn__label">
                {category !== "ALL" ? category : "GENRES"}
              </span>
              {category !== "ALL" && (
                <span className="mobile-genre-btn__dot" aria-hidden="true" />
              )}
            </button>

            {/* Status pills — flex-shrink scrollable strip */}
            <div
              className="mobile-status-strip"
              role="group"
              aria-label="Availability filter"
            >
              {STATUSES.map((st) => (
                <button
                  key={st}
                  type="button"
                  className={`filter-pill filter-pill--status ${status === st ? "filter-pill--active" : ""}`}
                  onClick={() => pickStatus(st)}
                  aria-pressed={status === st}
                >
                  {st}
                </button>
              ))}
            </div>

            {/* Search icon button */}
            <button
              type="button"
              className={`mobile-search-btn ${searchOpen ? "mobile-search-btn--active" : ""}`}
              onClick={() => setSearchOpen((v) => !v)}
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
            >
              {searchOpen
                ? <FiX     size={15} strokeWidth={2.5} aria-hidden="true" />
                : <FiSearch size={15} strokeWidth={2.5} aria-hidden="true" />
              }
            </button>
          </div>

          {/* ── Search expand row (row 2 — only when searchOpen) ── */}
          <div className={`mobile-search-expand ${searchOpen ? "mobile-search-expand--open" : ""}`}>
            <label className="search-field search-field--mobile" aria-label="Search games">
              <span className="search-field__icon" aria-hidden="true">
                <FiSearch size={14} strokeWidth={2.5} />
              </span>
              <input
                ref={searchInputRef}
                type="search"
                className="search-field__input"
                placeholder="Search games..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search games by title"
                autoComplete="off"
                spellCheck={false}
              />
              {search && (
                <button type="button" className="search-field__clear" onClick={clearSearch} aria-label="Clear">
                  <FiX size={12} />
                </button>
              )}
            </label>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════
            MOBILE GENRE DRAWER — bottom sheet, ≤ 768px only
        ════════════════════════════════════════════════════ */}

        {/* Backdrop */}
        <div
          className={`drawer-backdrop ${drawerOpen ? "drawer-backdrop--visible" : ""}`}
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer */}
        <div
          id="genre-drawer"
          ref={drawerRef}
          className={`genre-drawer ${drawerOpen ? "genre-drawer--open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Genre filter"
          aria-hidden={!drawerOpen}
          tabIndex={drawerOpen ? 0 : -1}
        >
          <div className="genre-drawer__handle" aria-hidden="true" />

          <div className="genre-drawer__header">
            <h2 className="genre-drawer__title">SELECT GENRE</h2>
            <button
              type="button"
              className="genre-drawer__close"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close genre filter"
            >
              <FiX size={18} strokeWidth={2.5} />
            </button>
          </div>

          <div className="genre-drawer__grid" role="group" aria-label="Genre categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`genre-drawer__pill ${category === cat ? "genre-drawer__pill--active" : ""}`}
                onClick={() => pickCategory(cat)}
                aria-pressed={category === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════
            GAME GRID
        ════════════════════════════════ */}
        <main
          className="game-grid"
          aria-label={`${filteredGames.length} game${filteredGames.length !== 1 ? "s" : ""} found`}
          aria-live="polite"
          aria-atomic="false"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {filteredGames.map((game, index) => (
            <article
              key={game.id}
              id={String(game.id)}
              itemScope
              itemType="https://schema.org/VideoGame"
              itemProp="itemListElement"
            >
              <meta itemProp="name"        content={game.title} />
              <meta itemProp="description" content={game.subtitle} />
              <meta itemProp="position"    content={String(index + 1)} />
              <GameCard
                game={game}
                onPlay={() => game.video && setActiveGame(game)}
              />
            </article>
          ))}

          {filteredGames.length === 0 && (
            <div className="game-grid__empty" role="status" aria-live="polite">
              <p>No games found for this filter.</p>
            </div>
          )}
        </main>

        {activeGame?.video && (
          <VideoModal video={activeGame.video} onClose={() => setActiveGame(null)} />
        )}
      </section>
    </>
  );
}