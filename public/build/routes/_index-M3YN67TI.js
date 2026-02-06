import {
  Link
} from "/build/_shared/chunk-WC62ZXNT.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-M72SU5T2.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/HeroSection.tsx
var import_react = __toESM(require_react(), 1);

// app/data/heroslides.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\heroslides.tsx"
  );
  import.meta.hot.lastModified = "1770129761634.1582";
}
var HERO_SLIDES = [
  {
    id: 1,
    title: "VALORANT",
    tagline: "5V5 CHARACTER-BASED TACTICAL FIREFIGHT",
    category: "OPEN WORLD ACTION",
    poster: "/images/valorant.jpg",
    videoWebm: "/videos/Val-Gunda-hero.webm"
  },
  {
    id: 2,
    title: "ASPHALT LEGENDS UNITE",
    tagline: "LEGENDS CHANGE THE GAME",
    category: "RACING",
    poster: "/images/asphalt.jpeg",
    videoMp4: "/videos/Asphalt Legends Unite.mp4"
  },
  {
    id: 3,
    title: "BLACK MYTH WUKONG",
    tagline: "RECLAIM THE LEGEND",
    category: "ACTION ADVENTURE",
    poster: "/images/black-myth-wukong.jpeg",
    videoMp4: "/videos/black myth wukong.mp4"
  },
  {
    id: 4,
    title: "CALL OF DUTY BLACK OPS 7",
    tagline: "A NEW ERA OF COVERT OPERATIONS",
    category: "FPS ACTION",
    poster: "/images/cod-blackops-7.jpg",
    videoMp4: "/videos/cod blackops 7 new.mp4"
  },
  {
    id: 5,
    title: "GTA ONLINE",
    tagline: "BUILD YOUR CRIMINAL EMPIRE",
    category: "OPEN WORLD",
    poster: "/images/gta-5online.jpeg",
    videoMp4: "/videos/gta-online-edit.mp4"
  }
];

// app/components/HeroSection.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\HeroSection.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\HeroSection.tsx"
  );
  import.meta.hot.lastModified = "1770375623280.093";
}
var SLIDE_DURATION = 9e4;
var HeroSection = () => {
  _s();
  const [currentSlide, setCurrentSlide] = (0, import_react.useState)(0);
  const videoRefs = (0, import_react.useRef)([]);
  const timerRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    timerRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => prev === HERO_SLIDES.length - 1 ? 0 : prev + 1);
    }, SLIDE_DURATION);
    return () => {
      if (timerRef.current)
        clearInterval(timerRef.current);
    };
  }, []);
  (0, import_react.useEffect)(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video)
        return;
      if (index === currentSlide) {
        video.currentTime = 0;
        video.muted = true;
        video.playsInline = true;
        video.play().catch(() => {
        });
      } else {
        video.pause();
      }
    });
  }, [currentSlide]);
  (0, import_react.useEffect)(() => {
    const onScroll = () => {
      const video = videoRefs.current[currentSlide];
      if (!video)
        return;
      if (window.scrollY > window.innerHeight * 0.6) {
        video.pause();
      } else {
        video.play().catch(() => {
        });
      }
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentSlide]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rd-hero", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `
        .rd-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: #000;
          margin-bottom: 0;
        }

        .rd-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.9s ease;
        }

        .rd-slide.active {
          opacity: 1;
          z-index: 1;
        }

        video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
  object-position: center center;
}

        .rd-fallback {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .rd-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.9),
            rgba(0,0,0,0.45),
            transparent
          );
        }

        .rd-content {
          position: absolute;
          left: 50px;
          bottom: 45px;
          max-width: 720px;
          color: #fff;
          z-index: 2;
          animation: fadeUp 0.9s ease forwards;
        }

        .rd-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1;
        }

        .rd-tagline {
          margin-top: 12px;
          font-size: 12px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #8fb4ff;
        }

        .rd-badges {
          display: flex;
          gap: 12px;
          margin-top: 22px;
        }

        .rd-badge {
          padding: 10px 16px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          border-radius: 10px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .rd-best {
          background: rgba(0,120,255,0.85);
        }

        .rd-category {
          background: rgba(255,255,255,0.06);
        }

        .rd-indicators {
          position: absolute;
          right: 20px;
          bottom: 35px;
          display: flex;
          gap: 8px;
          z-index: 2;
        }

        .rd-indicator {
          height: 4px;
          width: 22px;
          background: rgba(255,255,255,0.25);
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .rd-indicator.active {
          width: 64px;
          background: #3b82f6;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .rd-content {
            left: 20px;
            right: 20px;
            bottom: 72px;
          }
          .rd-indicators {
            right: 20px;
            bottom: 72px;
          }
        }
      ` }, void 0, false, {
      fileName: "app/components/HeroSection.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    HERO_SLIDES.map((slide, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `rd-slide ${index === currentSlide ? "active" : ""}`, children: [
      slide.videoWebm || slide.videoMp4 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", { ref: (el) => {
        videoRefs.current[index] = el;
      }, poster: slide.poster, muted: true, playsInline: true, preload: "metadata", loop: true, children: [
        slide.videoWebm && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", { src: slide.videoWebm, type: "video/webm" }, void 0, false, {
          fileName: "app/components/HeroSection.tsx",
          lineNumber: 218,
          columnNumber: 35
        }, this),
        slide.videoMp4 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", { src: slide.videoMp4, type: "video/mp4" }, void 0, false, {
          fileName: "app/components/HeroSection.tsx",
          lineNumber: 219,
          columnNumber: 34
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/HeroSection.tsx",
        lineNumber: 215,
        columnNumber: 48
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rd-fallback", style: {
        backgroundImage: `url(${slide.poster})`
      } }, void 0, false, {
        fileName: "app/components/HeroSection.tsx",
        lineNumber: 220,
        columnNumber: 24
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rd-overlay" }, void 0, false, {
        fileName: "app/components/HeroSection.tsx",
        lineNumber: 224,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rd-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rd-title", children: slide.title }, void 0, false, {
          fileName: "app/components/HeroSection.tsx",
          lineNumber: 227,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rd-tagline", children: slide.tagline }, void 0, false, {
          fileName: "app/components/HeroSection.tsx",
          lineNumber: 228,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rd-badges", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rd-badge rd-best", children: "BEST GAME" }, void 0, false, {
            fileName: "app/components/HeroSection.tsx",
            lineNumber: 231,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rd-badge rd-category", children: slide.category }, void 0, false, {
            fileName: "app/components/HeroSection.tsx",
            lineNumber: 232,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/HeroSection.tsx",
          lineNumber: 230,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/HeroSection.tsx",
        lineNumber: 226,
        columnNumber: 11
      }, this)
    ] }, slide.id, true, {
      fileName: "app/components/HeroSection.tsx",
      lineNumber: 214,
      columnNumber: 42
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rd-indicators", children: HERO_SLIDES.map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `rd-indicator ${i === currentSlide ? "active" : ""}`, onClick: () => setCurrentSlide(i) }, i, false, {
      fileName: "app/components/HeroSection.tsx",
      lineNumber: 238,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/components/HeroSection.tsx",
      lineNumber: 237,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/HeroSection.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
};
_s(HeroSection, "kj2d3eaCtBw+GklKd19+cX4PzEE=");
_c = HeroSection;
var HeroSection_default = HeroSection;
var _c;
$RefreshReg$(_c, "HeroSection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/About.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\About.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\About.tsx"
  );
  import.meta.hot.lastModified = "1770380357994.6318";
}
var AboutSection = () => {
  _s2();
  (0, import_react2.useEffect)(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
        }
      });
    }, {
      threshold: 0.25
    });
    reveals.forEach((el) => observer.observe(el));
    const cards = document.querySelectorAll(".epic-stat-box");
    cards.forEach((card) => {
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width * 100;
        const y = (e.clientY - rect.top) / rect.height * 100;
        card.style.setProperty("--mx", `${x}%`);
        card.style.setProperty("--my", `${y}%`);
      };
      const onLeave = () => {
        card.style.setProperty("--mx", "50%");
        card.style.setProperty("--my", "50%");
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
    });
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { id: "about", className: "epic-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "epic-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "epic-subhead reveal", children: "About RD Game Zone" }, void 0, false, {
      fileName: "app/components/About.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "epic-headline reveal", children: "RD GAME ZONE" }, void 0, false, {
      fileName: "app/components/About.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "epic-body reveal", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        "RD GAME ZONE is designed for gamers who value",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "highlight", children: "performance, comfort, and precision" }, void 0, false, {
          fileName: "app/components/About.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this),
        ". Whether you\u2019re here to compete, practice, or simply enjoy your favorite games, our space delivers a balanced experience for both casual and serious players."
      ] }, void 0, true, {
        fileName: "app/components/About.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        "Our gaming setup supports",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "highlight-accent", children: "PlayStation 5, PlayStation 4, and high-end gaming PCs" }, void 0, false, {
          fileName: "app/components/About.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        ", powered by optimized hardware and high-refresh displays to deliver smooth gameplay with stunning visuals."
      ] }, void 0, true, {
        fileName: "app/components/About.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        "The environment is carefully managed to remain",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "highlight-strong", children: "friendly, respectful, and welcoming" }, void 0, false, {
          fileName: "app/components/About.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        ", allowing players to focus purely on gaming."
      ] }, void 0, true, {
        fileName: "app/components/About.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        "Enjoy access to",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "highlight-accent", children: "top AAA titles and competitive favorites" }, void 0, false, {
          fileName: "app/components/About.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        ", updated regularly to match current gaming trends."
      ] }, void 0, true, {
        fileName: "app/components/About.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "food-line", children: "Food and refreshments are available inside the gaming zone to ensure uninterrupted gameplay sessions. Outside food policies are strictly managed to maintain hygiene, equipment safety, and a premium gaming experience." }, void 0, false, {
        fileName: "app/components/About.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/About.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "epic-divider reveal" }, void 0, false, {
      fileName: "app/components/About.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "epic-grid reveal", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "epic-stat-box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "stat-number", children: "240Hz" }, void 0, false, {
          fileName: "app/components/About.tsx",
          lineNumber: 113,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "stat-label", children: "Esports Displays" }, void 0, false, {
          fileName: "app/components/About.tsx",
          lineNumber: 114,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/About.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "epic-stat-box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "stat-number", children: "LAN" }, void 0, false, {
          fileName: "app/components/About.tsx",
          lineNumber: 118,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "stat-label", children: "Multiplayer Ready" }, void 0, false, {
          fileName: "app/components/About.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/About.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "epic-stat-box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "stat-number", children: "Secure" }, void 0, false, {
          fileName: "app/components/About.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "stat-label", children: "Safe & Friendly Zone" }, void 0, false, {
          fileName: "app/components/About.tsx",
          lineNumber: 124,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/About.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "epic-stat-box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "stat-number", children: "Pro" }, void 0, false, {
          fileName: "app/components/About.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "stat-label", children: "Headsets & Gear" }, void 0, false, {
          fileName: "app/components/About.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/About.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/About.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/About.tsx",
    lineNumber: 59,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/About.tsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
};
_s2(AboutSection, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c2 = AboutSection;
var About_default = AboutSection;
var _c2;
$RefreshReg$(_c2, "AboutSection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/data/rogMedia.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\rogMedia.ts"
  );
  import.meta.hot.lastModified = "1770374348137.9468";
}
var ROG_MEDIA = [
  { type: "image", src: "/images/back-4-blood.jpg" },
  { type: "video", src: "/videos/Asphalt Legends Unite.mp4" },
  { type: "image", src: "/images/black-myth-wukong.jpeg" },
  { type: "video", src: "/videos/black myth wukong.mp4" },
  { type: "image", src: "/images/beech-bugy-2.jpeg" },
  { type: "video", src: "/videos/cod blackops 7 new.mp4" },
  { type: "image", src: "/images/cod-blackops-7.jpg" },
  { type: "video", src: "/videos/valorant new compressed.mp4" },
  { type: "image", src: "/images/cricket-26.jpeg" },
  { type: "video", src: "/videos/cricket-26-edit.mp4" },
  { type: "image", src: "/images/cs-go-2.png" },
  { type: "video", src: "/videos/csgo-2-edits.mp4" },
  { type: "image", src: "/images/fc-26.jpeg" },
  { type: "video", src: "/videos/road-redemption-edits.mp4" },
  { type: "image", src: "/images/gta-5online.jpeg" },
  { type: "video", src: "/videos/gta-online-edit.mp4" },
  { type: "image", src: "/images/nba-2k25.jpeg" },
  { type: "video", src: "/videos/Farcry-6-Edit-2compressed.webm" },
  { type: "image", src: "/images/tekken-8.png" },
  { type: "video", src: "/videos/tekken-8-edit.mp4" },
  { type: "image", src: "/images/asphalt.jpeg" },
  { type: "video", src: "/videos/beach-buggy-2-edit.mp4" },
  { type: "image", src: "/images/mortal-kombat-1.webp" },
  { type: "video", src: "/videos/ufc-5-edit.mp4" },
  { type: "image", src: "/images/red-dead-redemption-2.jpg" },
  { type: "video", src: "/videos/marvel-rivals-edit.mp4" }
];

// app/components/RingCarousel.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\RingCarousel.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\RingCarousel.tsx"
  );
  import.meta.hot.lastModified = "1769736806467.647";
}
var RingCarousel = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "ring-slider-section", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("style", { children: `
        .ring-slider-section {
          position: relative;
          height: 100vh;
          background: radial-gradient(circle at center, #0e0e0e 0%, #000 70%);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ring-slider {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .ring-track {
          display: flex;
          align-items: center;
          gap: 48px;
          animation: ringMove 100s linear infinite;
          will-change: transform;
        }

        @keyframes ringMove {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .ring-item {
          flex: 0 0 auto;
          width: clamp(320px, 30vw, 460px);
          height: clamp(190px, 18vw, 260px);
          border-radius: 18px;
          overflow: hidden;
          background: #000;
          box-shadow:
            0 30px 80px rgba(0,0,0,0.85),
            inset 0 0 0 1px rgb(0, 0, 0);
          transform: rotateY(-10deg);
          transition: transform 0.4s ease;
        }

        .ring-item:nth-child(even) {
          transform: rotateY(10deg);
        }

        .ring-item img,
        .ring-item video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          background: #000;
        }

        /* keep visuals stable on load */
        video {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .ring-slider-section {
            height: 95vh;
          }

          .ring-item {
            width: 260px;
            height: 160px;
          }
        }
      ` }, void 0, false, {
      fileName: "app/components/RingCarousel.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ring-slider", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ring-track", children: [...ROG_MEDIA, ...ROG_MEDIA].map((m, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ring-item", children: m.type === "video" ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("video", { src: m.src, muted: true, autoPlay: true, loop: true, playsInline: true, preload: "auto" }, void 0, false, {
      fileName: "app/components/RingCarousel.tsx",
      lineNumber: 113,
      columnNumber: 37
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: m.src, alt: "", loading: "eager" }, void 0, false, {
      fileName: "app/components/RingCarousel.tsx",
      lineNumber: 113,
      columnNumber: 108
    }, this) }, i, false, {
      fileName: "app/components/RingCarousel.tsx",
      lineNumber: 112,
      columnNumber: 55
    }, this)) }, void 0, false, {
      fileName: "app/components/RingCarousel.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/RingCarousel.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/RingCarousel.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c3 = RingCarousel;
var RingCarousel_default = RingCarousel;
var _c3;
$RefreshReg$(_c3, "RingCarousel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Pricing.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Pricing.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Pricing.tsx"
  );
  import.meta.hot.lastModified = "1770380484772.1968";
}
var Pricing = () => {
  _s3();
  (0, import_react3.useEffect)(() => {
    const items = document.querySelectorAll(".price-reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.classList.add("price-active");
      });
    }, {
      threshold: 0.25
    });
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { id: "pricing", className: "pricing-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "pricing-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "pricing-subhead price-reveal", children: "Game Rates" }, void 0, false, {
      fileName: "app/components/Pricing.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "pricing-title price-reveal", children: "Pricing Structure" }, void 0, false, {
      fileName: "app/components/Pricing.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "pricing-notice price-reveal", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: "Important:" }, void 0, false, {
        fileName: "app/components/Pricing.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      " All sessions are charged strictly on an hourly basis. There is no half-hour pricing listed online.",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/components/Pricing.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      "If a customer extends playtime beyond 1 hour (for example, from 1 hour to 1 hour 30 minutes), the same hourly rate continues to apply for the extended duration. Half-hour extension pricing is available only at the store and is not displayed on the website."
    ] }, void 0, true, {
      fileName: "app/components/Pricing.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "pricing-grid price-reveal", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "pricing-card", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { children: "32\u2033 TV \xB7 PS4" }, void 0, false, {
          fileName: "app/components/Pricing.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
            "1 Person ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "\u20B9100 / hour" }, void 0, false, {
              fileName: "app/components/Pricing.tsx",
              lineNumber: 64,
              columnNumber: 28
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Pricing.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
            "2 Person ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "\u20B9200 / hour" }, void 0, false, {
              fileName: "app/components/Pricing.tsx",
              lineNumber: 65,
              columnNumber: 28
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Pricing.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
            "3 Person ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "\u20B9300 / hour" }, void 0, false, {
              fileName: "app/components/Pricing.tsx",
              lineNumber: 66,
              columnNumber: 28
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Pricing.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
            "4 Person ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "\u20B9400 / hour" }, void 0, false, {
              fileName: "app/components/Pricing.tsx",
              lineNumber: 67,
              columnNumber: 28
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Pricing.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Pricing.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Pricing.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "pricing-card", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { children: "50\u2033 TV" }, void 0, false, {
          fileName: "app/components/Pricing.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
            "1 Person (PS4) ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "\u20B9120 / hour" }, void 0, false, {
              fileName: "app/components/Pricing.tsx",
              lineNumber: 75,
              columnNumber: 34
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Pricing.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
            "2 Person (PS4) ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "\u20B9200 / hour" }, void 0, false, {
              fileName: "app/components/Pricing.tsx",
              lineNumber: 76,
              columnNumber: 34
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Pricing.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
            "1 Person (PS5) ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "\u20B9130 / hour" }, void 0, false, {
              fileName: "app/components/Pricing.tsx",
              lineNumber: 77,
              columnNumber: 34
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Pricing.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
            "2 Person (PS5) ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "\u20B9220 / hour" }, void 0, false, {
              fileName: "app/components/Pricing.tsx",
              lineNumber: 78,
              columnNumber: 34
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Pricing.tsx",
            lineNumber: 78,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Pricing.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Pricing.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "pricing-card featured", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { children: "65\u2033 TV \xB7 PS5" }, void 0, false, {
          fileName: "app/components/Pricing.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
            "1 Person ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "\u20B9200 / hour" }, void 0, false, {
              fileName: "app/components/Pricing.tsx",
              lineNumber: 86,
              columnNumber: 28
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Pricing.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
            "2 Person ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "\u20B9250 / hour" }, void 0, false, {
              fileName: "app/components/Pricing.tsx",
              lineNumber: 87,
              columnNumber: 28
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Pricing.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
            "3 Person ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "\u20B9300 / hour" }, void 0, false, {
              fileName: "app/components/Pricing.tsx",
              lineNumber: 88,
              columnNumber: 28
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Pricing.tsx",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
            "4 Person ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "\u20B9400 / hour" }, void 0, false, {
              fileName: "app/components/Pricing.tsx",
              lineNumber: 89,
              columnNumber: 28
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Pricing.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Pricing.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Pricing.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "pricing-card", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { children: "Computer" }, void 0, false, {
          fileName: "app/components/Pricing.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
            "Regular PC ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "\u20B9100 / hour" }, void 0, false, {
              fileName: "app/components/Pricing.tsx",
              lineNumber: 97,
              columnNumber: 30
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Pricing.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
            "Pro PC ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "\u20B9130 / hour" }, void 0, false, {
              fileName: "app/components/Pricing.tsx",
              lineNumber: 98,
              columnNumber: 26
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Pricing.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Pricing.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Pricing.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Pricing.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "pricing-footer price-reveal", children: "Rates apply to all games. For long sessions and LAN gaming, please contact the counter." }, void 0, false, {
      fileName: "app/components/Pricing.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Pricing.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Pricing.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
};
_s3(Pricing, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c4 = Pricing;
var Pricing_default = Pricing;
var _c4;
$RefreshReg$(_c4, "Pricing");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Booking.tsx
var import_react4 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Booking.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Booking.tsx"
  );
  import.meta.hot.lastModified = "1770380362362.0823";
}
function Booking() {
  _s4();
  const [showNumber, setShowNumber] = (0, import_react4.useState)(false);
  (0, import_react4.useEffect)(() => {
    const reveal = () => {
      const el = document.querySelector(".booking-section");
      if (!el)
        return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7) {
        el.classList.add("active");
      }
    };
    window.addEventListener("scroll", reveal, {
      passive: true
    });
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);
  (0, import_react4.useEffect)(() => {
    if (!showNumber)
      return;
    const t = setTimeout(() => setShowNumber(false), 8e3);
    return () => clearTimeout(t);
  }, [showNumber]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { id: "booking", className: "booking-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "booking-grid", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "booking-left", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "booking-title", children: [
        "ADVANCE ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "BOOKING RULES" }, void 0, false, {
          fileName: "app/components/Booking.tsx",
          lineNumber: 54,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Booking.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "booking-points", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Book via Store Visit or Phone Call." }, void 0, false, {
          fileName: "app/components/Booking.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Advance payment confirms your slot immediately." }, void 0, false, {
          fileName: "app/components/Booking.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "danger", children: "Payments are strictly non-refundable." }, void 0, false, {
          fileName: "app/components/Booking.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "Reserved slots are exclusive and cannot be taken by others." }, void 0, false, {
          fileName: "app/components/Booking.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Booking.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Booking.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "booking-right", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `booking-card flip-card ${showNumber ? "flipped" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flip-inner", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flip-front card-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "card-head", children: "PHONE BOOKING" }, void 0, false, {
            fileName: "app/components/Booking.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "secondary-btn", onClick: () => setShowNumber(true), children: "VIEW NUMBER" }, void 0, false, {
            fileName: "app/components/Booking.tsx",
            lineNumber: 74,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Booking.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flip-back card-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "card-head", children: "CALL NOW" }, void 0, false, {
            fileName: "app/components/Booking.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "tel:+917665533991", className: "reveal-number", children: "+917665533991" }, void 0, false, {
            fileName: "app/components/Booking.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Booking.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Booking.tsx",
        lineNumber: 70,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Booking.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "booking-card card-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "card-head", children: "OFFLINE STORE VISIT" }, void 0, false, {
          fileName: "app/components/Booking.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "https://www.google.com/maps?q=RD+GAME+ZONE+Ahmedabad", target: "_blank", rel: "noopener noreferrer", className: "secondary-btn", children: "GET DIRECTIONS" }, void 0, false, {
          fileName: "app/components/Booking.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Booking.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Booking.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Booking.tsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Booking.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_s4(Booking, "QwQWU5Gqe+0dACVgfC3v7mFrW80=");
_c5 = Booking;
var _c5;
$RefreshReg$(_c5, "Booking");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/GTAOnlinePolicy.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\GTAOnlinePolicy.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\GTAOnlinePolicy.tsx"
  );
  import.meta.hot.lastModified = "1770380473715.0425";
}
function GTAOnlinePolicy() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "gta-policy-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "gta-glass-bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "gta-profile", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "gta-profile-frame", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: "/posters/gta-5online-rog-poster.jpeg", alt: "GTA Online Profile" }, void 0, false, {
      fileName: "app/components/GTAOnlinePolicy.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/GTAOnlinePolicy.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/GTAOnlinePolicy.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "gta-policy-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "gta-warning-bar", children: "CONTENT WARNING" }, void 0, false, {
        fileName: "app/components/GTAOnlinePolicy.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "gta-title", children: "GTA 5 Online Play Policy" }, void 0, false, {
        fileName: "app/components/GTAOnlinePolicy.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "gta-policy-text", children: "GTA Online gameplay maintains a strict policy regarding in-game content. Adult-themed environments and bar-style locations are restricted.Violation will result in immediate termination of the session without refund." }, void 0, false, {
        fileName: "app/components/GTAOnlinePolicy.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/GTAOnlinePolicy.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/GTAOnlinePolicy.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/GTAOnlinePolicy.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c6 = GTAOnlinePolicy;
var _c6;
$RefreshReg$(_c6, "GTAOnlinePolicy");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/GameGuidelines.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\GameGuidelines.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\GameGuidelines.tsx"
  );
  import.meta.hot.lastModified = "1770380461524.7444";
}
var RULES = [{
  color: "red",
  title: "AGE & ENTRY",
  subtitle: "Strictly 11+ Only.",
  points: ["NO CHILDREN UNDER 11 ALLOWED.", "MAINTAIN MATURITY."]
}, {
  color: "orange",
  title: "ZERO TOLERANCE",
  subtitle: "Respect the zone.",
  points: ["NO PROFANITY ALLOWED.", "NO ALCOHOL OR SMOKING.", "NO OUTSIDE FOOD/DRINKS."]
}, {
  color: "green",
  title: "ENVIRONMENT",
  subtitle: "Clean & Safe.",
  points: ["STRICTLY SMOKE-FREE ZONE.", "CLEAN ENVIRONMENT MAINTAINED.", "GAMEPLAY RESPONSIBILITY LIES WITH THE GAMER."]
}, {
  color: "cyan",
  title: "EQUIPMENT CARE",
  subtitle: "Handle with care.",
  points: ["HANDLE CONTROLLERS GENTLY.", "FULL MRP CHARGED FOR DAMAGES.", "REPORT TECHNICAL ISSUES IMMEDIATELY."]
}, {
  color: "blue",
  title: "SECURITY & WAITING",
  subtitle: "No Waiting Area.",
  points: ["NO WAITING AREA INSIDE OR OUTSIDE DUE TO SECURITY REASONS.", "ENTRY LIMITED TO ACTIVE GAMERS ONLY.", "PLEASE ARRIVE STRICTLY AT YOUR BOOKED TIME."]
}, {
  color: "yellow",
  title: "CONTENT GUIDELINES",
  subtitle: "Open World Titles.",
  points: ["ADULT-THEMED CONTENT MAY APPEAR DURING GAMEPLAY.", "CUSTOMERS ENGAGING IN INAPPROPRIATE BEHAVIOR ARE PROHIBITED.", "IMMEDIATE SESSION TERMINATION FOR VIOLATIONS."]
}, {
  color: "purple",
  title: "TIME & SESSION",
  subtitle: "Play Time Rules.",
  points: ["SESSIONS RUN STRICTLY AS PER BOOKED TIME.", "LATE ARRIVAL MAY RESULT IN REDUCED PLAYTIME.", "EXTENSIONS SUBJECT TO AVAILABILITY."]
}, {
  color: "pink",
  title: "SECURITY NOTICE",
  subtitle: "Mandatory Rule.",
  points: ["ENTRY ONLY FOR ACTIVE GAMERS.", "NO CROWDING OR UNNECESSARY GATHERING.", "MANAGEMENT DECISION IS FINAL."]
}];
function GameGuidelines() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("section", { className: "guidelines-section", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "guidelines-main-title", children: "GAME ZONE GUIDELINES" }, void 0, false, {
      fileName: "app/components/GameGuidelines.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "gta-warning", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "pulse-dot" }, void 0, false, {
        fileName: "app/components/GameGuidelines.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      "FOR SECURITY AND SAFETY REASONS, THERE IS ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "NO WAITING AREA INSIDE OR OUTSIDE" }, void 0, false, {
        fileName: "app/components/GameGuidelines.tsx",
        lineNumber: 70,
        columnNumber: 51
      }, this),
      " THE GAME ZONE. PLEASE ARRIVE AT YOUR BOOKED TIME ONLY."
    ] }, void 0, true, {
      fileName: "app/components/GameGuidelines.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "swipe-hint", children: "Swipe \u2192" }, void 0, false, {
      fileName: "app/components/GameGuidelines.tsx",
      lineNumber: 74,
      columnNumber: 1
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "guidelines-grid", children: RULES.map((rule, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: `guideline-card ${rule.color}`, style: {
      animationDelay: `${i * 0.1}s`
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { children: rule.title }, void 0, false, {
        fileName: "app/components/GameGuidelines.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "subtitle", children: rule.subtitle }, void 0, false, {
        fileName: "app/components/GameGuidelines.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("hr", {}, void 0, false, {
        fileName: "app/components/GameGuidelines.tsx",
        lineNumber: 83,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: rule.points.map((p, j) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: p }, j, false, {
        fileName: "app/components/GameGuidelines.tsx",
        lineNumber: 85,
        columnNumber: 42
      }, this)) }, void 0, false, {
        fileName: "app/components/GameGuidelines.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this)
    ] }, i, true, {
      fileName: "app/components/GameGuidelines.tsx",
      lineNumber: 78,
      columnNumber: 33
    }, this)) }, void 0, false, {
      fileName: "app/components/GameGuidelines.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/GameGuidelines.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
}
_c7 = GameGuidelines;
var _c7;
$RefreshReg$(_c7, "GameGuidelines");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/GameLibraryHome.tsx
var import_react5 = __toESM(require_react(), 1);

// app/data/GameLibraryHomeData.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\GameLibraryHomeData.ts"
  );
  import.meta.hot.lastModified = "1770129655558.2583";
}
var gameLibrarySlides = [
  { id: 1, title: "CS GO 2", image: "/posters/cs-go-2-counter-strike-2.jpg" },
  { id: 2, title: "F1 23", image: "/posters/f1-23.jpg" },
  { id: 3, title: "APEX LEGENDS", image: "/posters/poster-apex-legends.jpg" },
  { id: 4, title: "ASPHALT", image: "/posters/poster-asphalt.jpg" },
  { id: 5, title: "BACK 4 BLOOD", image: "/posters/poster-back-4-blood.jpg" },
  { id: 6, title: "BEACH BUGY 2", image: "/posters/poster-beach-bugy-2.jpg" },
  { id: 7, title: "BLACK MYTH: WUKONG", image: "/posters/poster-black-myth-wukong.jpg" },
  { id: 8, title: "CALL OF DUTY: BLACK OPS 3", image: "/posters/poster-cod-black-ops-3.jpg" },
  { id: 9, title: "CALL OF DUTY: BLACK OPS 7", image: "/posters/poster-cod-blackops-7.jpg" },
  { id: 10, title: "CALL OF DUTY: BLACK OPS COLD WAR", image: "/posters/poster-cod-blackops-coldwar.jpg" },
  { id: 11, title: "CRICKET 26", image: "/posters/poster-cricket-26.jpg" },
  { id: 12, title: "CRICKET 24", image: "/posters/poster-cricket-24.jpg" },
  { id: 13, title: "FAR CRY 6", image: "/posters/poster-far-cry-6.jpg" },
  { id: 14, title: "FC 25", image: "/posters/poster-fc-25.png" },
  { id: 15, title: "FC 26", image: "/posters/poster-fc-26.jpg" },
  { id: 16, title: "FORTNITE", image: "/posters/poster-fortnite-2.jpg" },
  { id: 17, title: "GHOST OF TSUSHIMA", image: "/posters/poster-ghost-of-tsushima.jpg" },
  { id: 18, title: "MINECRAFT LEGENDS", image: "/posters/poster-minecraft-legends.jpg" },
  { id: 19, title: "MORTAL KOMBAT 1", image: "/posters/poster-mortal-kombat-1.jpg" },
  { id: 20, title: "NBA 2K25", image: "/posters/poster-nba-2k25.jpg" },
  { id: 21, title: "GTA V ONLINE", image: "/posters/poster-gta-5online.jpeg" },
  { id: 22, title: "LAST OF US PART 2 REMASTERED", image: "/posters/poster-last-of-us-part-2-remastered.jpeg" },
  { id: 23, title: "MARVEL RIVALS", image: "/posters/poster-marvel-rivals.jpg" }
];

// app/components/GameLibraryHome.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\GameLibraryHome.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\GameLibraryHome.tsx"
  );
  import.meta.hot.lastModified = "1770380351285.3225";
}
function preloadImages(slides) {
  slides.forEach((s) => {
    const img = new Image();
    img.src = s.image;
  });
}
function buildInfiniteSlides(slides, repeat = 6) {
  const out = [];
  for (let i = 0; i < repeat; i++)
    out.push(...slides);
  return out;
}
var GameLibraryHome = () => {
  _s5();
  const [paused, setPaused] = (0, import_react5.useState)(false);
  const [isMobile, setIsMobile] = (0, import_react5.useState)(false);
  (0, import_react5.useEffect)(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const l1 = [];
  const l2 = [];
  const l3 = [];
  const l4 = [];
  gameLibrarySlides.forEach((g, i) => {
    if (i % 4 === 0)
      l1.push(g);
    else if (i % 4 === 1)
      l2.push(g);
    else if (i % 4 === 2)
      l3.push(g);
    else
      l4.push(g);
  });
  const layers = isMobile ? [l1, l2] : [l1, l2, l3, l4];
  (0, import_react5.useEffect)(() => {
    preloadImages(gameLibrarySlides);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: "game-library-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "gallery-wrapper", onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false), children: layers.map((layer, i) => {
      const speed = 40 + i * 15;
      const dir = i % 2 === 0 ? "left" : "right";
      return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "layer-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: `layer-scroll ${dir} ${paused ? "paused" : ""}`, style: {
        animationDuration: `${speed}s`
      }, children: buildInfiniteSlides(layer).map((g, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "game-card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "game-card-inner", style: {
        backgroundImage: `url(${g.image})`
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "game-card-gradient" }, void 0, false, {
          fileName: "app/components/GameLibraryHome.tsx",
          lineNumber: 77,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "game-card-title", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { children: g.title }, void 0, false, {
          fileName: "app/components/GameLibraryHome.tsx",
          lineNumber: 79,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/GameLibraryHome.tsx",
          lineNumber: 78,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/GameLibraryHome.tsx",
        lineNumber: 74,
        columnNumber: 21
      }, this) }, `${g.id}-${idx}`, false, {
        fileName: "app/components/GameLibraryHome.tsx",
        lineNumber: 73,
        columnNumber: 61
      }, this)) }, void 0, false, {
        fileName: "app/components/GameLibraryHome.tsx",
        lineNumber: 70,
        columnNumber: 15
      }, this) }, i, false, {
        fileName: "app/components/GameLibraryHome.tsx",
        lineNumber: 69,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/GameLibraryHome.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "gradient-overlay-left" }, void 0, false, {
      fileName: "app/components/GameLibraryHome.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "gradient-overlay-right" }, void 0, false, {
      fileName: "app/components/GameLibraryHome.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "hero-overlay-text", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Game Library" }, void 0, false, {
        fileName: "app/components/GameLibraryHome.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "LAN \u2022 Console \u2022 eSports Ready" }, void 0, false, {
        fileName: "app/components/GameLibraryHome.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Link, { to: "/games", className: "view-all-button", children: "View Game Library \u2192" }, void 0, false, {
        fileName: "app/components/GameLibraryHome.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/GameLibraryHome.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/GameLibraryHome.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
};
_s5(GameLibraryHome, "iaVTXKYXUx2h4XyJLKWCMvgtvnU=");
_c8 = GameLibraryHome;
var GameLibraryHome_default = GameLibraryHome;
var _c8;
$RefreshReg$(_c8, "GameLibraryHome");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Experience.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Experience.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Experience.tsx"
  );
  import.meta.hot.lastModified = "1770380377949.5312";
}
function Experience() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("section", { className: "experience-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "experience-frame", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "experience-eyebrow", children: "PLAYER EXPERIENCE" }, void 0, false, {
      fileName: "app/components/Experience.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "experience-title", children: "ELEVATED GAMING STANDARDS" }, void 0, false, {
      fileName: "app/components/Experience.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "experience-description", children: "We are committed to providing a top-tier environment. Our facility prioritizes player comfort, high-performance gear, and a respectful community atmosphere. Enjoy gaming the way it was meant to be played." }, void 0, false, {
      fileName: "app/components/Experience.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "experience-features", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "feature", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "dot green" }, void 0, false, {
          fileName: "app/components/Experience.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: " HIGH-END PCs" }, void 0, false, {
          fileName: "app/components/Experience.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Experience.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "feature", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "dot green" }, void 0, false, {
          fileName: "app/components/Experience.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: "GIGABIT LAN" }, void 0, false, {
          fileName: "app/components/Experience.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Experience.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Experience.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Experience.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Experience.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c9 = Experience;
var _c9;
$RefreshReg$(_c9, "Experience");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/EsportsTicker.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\EsportsTicker.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\EsportsTicker.tsx"
  );
  import.meta.hot.lastModified = "1770380370388.0886";
}
function EsportsTicker() {
  const GAMES = ["GTA Online", "Valorant", "FIFA 24", "Call of Duty MW3", "Fortnite", "Red Dead Redemption 2", "Cyberpunk 2077", "Apex Legends", "Forza Horizon 5", "Minecraft"];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { className: "esports-ticker", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "ticker-track", children: [...GAMES, ...GAMES].map((game, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "ticker-text", children: game }, index, false, {
    fileName: "app/components/EsportsTicker.tsx",
    lineNumber: 27,
    columnNumber: 52
  }, this)) }, void 0, false, {
    fileName: "app/components/EsportsTicker.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/EsportsTicker.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c10 = EsportsTicker;
var _c10;
$RefreshReg$(_c10, "EsportsTicker");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Footer.tsx
var import_react7 = __toESM(require_react(), 1);
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Footer.tsx"
  );
  import.meta.hot.lastModified = "1770380384302.3037";
}
function Footer() {
  _s6();
  const [isOpen, setIsOpen] = (0, import_react7.useState)(false);
  (0, import_react7.useEffect)(() => {
    const checkStatus = () => {
      const now = /* @__PURE__ */ new Date();
      const hours = now.getHours();
      setIsOpen(hours >= 10 && hours < 22);
    };
    checkStatus();
    const t = setInterval(checkStatus, 60 * 1e3);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("footer", { className: "rd-footer", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "rd-footer-grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "rd-footer-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { children: "RD GAME ZONE" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: [
          "Ahmedabad\u2019s dedicated esports facility.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 44,
            columnNumber: 13
          }, this),
          "Built for performance, comfort, and competition."
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: "Listed on Google Store" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 48,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: "High-end PCs & Consoles" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 49,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: "LAN & Competitive Play" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "rd-footer-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h4", { children: "LOCATION" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: [
          "RD Game Zone, First Floor, A-113",
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 58,
            columnNumber: 45
          }, this),
          "Opp. Swaminarayan Temple",
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 59,
            columnNumber: 37
          }, this),
          "Shahibag, Ahmedabad, Gujarat, INDIA \u2013 380004"
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "rd-phone", children: "\u{1F4DE} +91 7665533991" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "rd-footer-col status", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h4", { children: "STATUS" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: `rd-status-box ${isOpen ? "open" : "closed"}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children: "DAILY" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("strong", { children: "10:00 AM \u2013 10:00 PM" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "rd-live", children: isOpen ? "SHOP OPEN" : "SHOP CLOSED" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "rd-footer-legal", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "\xA9 2026 RD GAME ZONE. All rights reserved." }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "All game content, visuals, and media are used for informational and promotional purposes only. Trademarks and copyrights belong to their respective owners." }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "rd-links", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { href: "/privacy", children: "Privacy" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { href: "/terms", children: "Terms" }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s6(Footer, "vl0Rt3/A8evyRPW1OQ1AhRk4UhU=");
_c11 = Footer;
var _c11;
$RefreshReg$(_c11, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1769734420191.5615";
}
function Home() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(HeroSection_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(EsportsTicker, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(About_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(RingCarousel_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Pricing_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Booking, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(GTAOnlinePolicy, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(GameGuidelines, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(GameLibraryHome_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Experience, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c12 = Home;
var _c12;
$RefreshReg$(_c12, "Home");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Home as default
};
//# sourceMappingURL=/build/routes/_index-M3YN67TI.js.map
