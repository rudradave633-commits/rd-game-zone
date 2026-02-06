import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-KVLPYTM2.js";
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

// app/styles/global.css
var global_default = "/build/_assets/global-FJ77HPIX.css";

// app/styles/epic-about.css
var epic_about_default = "/build/_assets/epic-about-AORBET3G.css";

// app/styles/epic-booking.css
var epic_booking_default = "/build/_assets/epic-booking-AI6ISPDQ.css";

// app/styles/epic-pricing.css
var epic_pricing_default = "/build/_assets/epic-pricing-J4KHF4UL.css";

// app/styles/esports-ticker.css
var esports_ticker_default = "/build/_assets/esports-ticker-RDAIHTS7.css";

// app/styles/footer.css
var footer_default = "/build/_assets/footer-BIVKKWHZ.css";

// app/styles/game-card.css
var game_card_default = "/build/_assets/game-card-3DPGRQHQ.css";

// app/styles/game-guidelines.css
var game_guidelines_default = "/build/_assets/game-guidelines-W4LDUEA3.css";

// app/styles/game-library-page.css
var game_library_page_default = "/build/_assets/game-library-page-77TGHQRJ.css";

// app/styles/GameLibraryHome.css
var GameLibraryHome_default = "/build/_assets/GameLibraryHome-V3WJGZIT.css";

// app/styles/gta-online-policy.css
var gta_online_policy_default = "/build/_assets/gta-online-policy-GNE4P4JW.css";

// app/styles/video-model.css
var video_model_default = "/build/_assets/video-model-XSAS4XKO.css";

// app/components/Navbar.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Navbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Navbar.tsx"
  );
  import.meta.hot.lastModified = "1770374928259.7163";
}
function Navbar() {
  _s();
  const [isOpen, setIsOpen] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const checkStatus = () => {
      const hour = (/* @__PURE__ */ new Date()).getHours();
      setIsOpen(hour >= 10 && hour < 22);
    };
    checkStatus();
    const interval = setInterval(checkStatus, 6e4);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "rd-navbar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `
        .rd-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 72px;
          z-index: 100;
          display: flex;
          align-items: center;
          padding: 0 32px;
          background: rgba(8, 8, 10, 0.7);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        /* LEFT BRAND */
        .rd-brand {
          min-width: 220px;
          line-height: 1.1;
        }

        .rd-brand-title {
          font-size: 18px;
          font-weight: 900;
          letter-spacing: 0.6px;
          color: #ffffff;
        }

        .rd-brand-sub {
          font-size: 11px;
          margin-top: 2px;
          letter-spacing: 1.4px;
          font-weight: 700;
          text-transform: uppercase;
          background: linear-gradient(90deg, #ff4d4d, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* CENTER NAV */
        .rd-nav {
          flex: 1;
          display: flex;
          justify-content: center;
          gap: 32px;
        }

        /* NAV LINKS */
        .rd-nav a {
          position: relative;
          text-decoration: none;
          color: #cfd6ff;
          font-size: 14px;
          font-weight: 600;
          padding: 6px 2px;
          opacity: 0.8;
          transition: opacity 0.25s ease, color 0.25s ease;
        }

        .rd-nav a:hover {
          opacity: 1;
          color: #ffffff;
        }

        /* PLAYSTATION STYLE UNDERLINE */
        .rd-nav a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #00ffc3, #38bdf8);
          transition: width 0.3s ease;
        }

        .rd-nav a:hover::after {
          width: 100%;
        }

        .rd-nav a.active::after {
          width: 100%;
        }

        /* RIGHT STATUS */
        .rd-status {
          min-width: 160px;
          display: flex;
          justify-content: flex-end;
        }

        .rd-status-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          border-radius: 999px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.15);
        }

        .rd-open {
          color: #0b1f14;
          background: rgba(0, 255, 127, 0.75);
          box-shadow: 0 0 18px rgba(0,255,127,0.6);
        }

        .rd-open svg {
          color: #0b1f14;
        }

        .rd-closed {
          color: #2b0b0b;
          background: rgba(255, 59, 59, 0.75);
          box-shadow: 0 0 18px rgba(255,59,59,0.6);
        }

        .rd-closed svg {
          color: #2b0b0b;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .rd-nav {
            display: none;
          }
        }
      ` }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rd-brand", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rd-brand-title", children: "RD GAME ZONE" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 173,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rd-brand-sub", children: "NO GAMER NO ENTRY" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 174,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 172,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "rd-nav", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", end: true, children: "Home" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#about", children: "About" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 180,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#pricing", children: "Pricing" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#booking", children: "Booking" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/games", children: "Games" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 183,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rd-status", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `rd-status-pill ${isOpen ? "rd-open" : "rd-closed"}`, children: isOpen ? "SHOP OPEN" : "SHOP CLOSED" }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 188,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 187,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_s(Navbar, "vl0Rt3/A8evyRPW1OQ1AhRk4UhU=");
_c = Navbar;
var _c;
$RefreshReg$(_c, "Navbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/styles/Experience.css
var Experience_default = "/build/_assets/Experience-VZDGLMPU.css";

// app/root.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var meta = () => [
  {
    title: "RD Game Zone | Ultimate Gaming Experience"
  },
  {
    name: "description",
    content: "RD Game Zone is a premium gaming hub featuring high-end PCs, PlayStation consoles, esports titles, cinematic gameplay, and immersive gaming ambience."
  },
  {
    name: "viewport",
    content: "width=device-width, initial-scale=1, viewport-fit=cover"
  },
  {
    name: "theme-color",
    content: "#000000"
  },
  /* Crawl budget + ranking */
  {
    name: "robots",
    content: "index, follow, max-image-preview:large"
  },
  {
    name: "googlebot",
    content: "index, follow"
  },
  {
    name: "author",
    content: "RD Game Zone"
  },
  /* OpenGraph */
  {
    property: "og:title",
    content: "RD Game Zone"
  },
  {
    property: "og:type",
    content: "website"
  },
  {
    property: "og:site_name",
    content: "RD Game Zone"
  },
  {
    property: "og:description",
    content: "High-performance gaming PCs, PlayStation consoles and esports-ready setups."
  },
  /* Twitter */
  {
    name: "twitter:card",
    content: "summary_large_image"
  }
];
var links = () => [
  // PERFORMANCE
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  // APP META
  {
    rel: "icon",
    href: "/favicon.ico"
  },
  {
    rel: "manifest",
    href: "/manifest.webmanifest"
  },
  // STYLES
  {
    rel: "stylesheet",
    href: global_default
  },
  {
    rel: "stylesheet",
    href: epic_about_default
  },
  {
    rel: "stylesheet",
    href: epic_booking_default
  },
  {
    rel: "stylesheet",
    href: epic_pricing_default
  },
  {
    rel: "stylesheet",
    href: esports_ticker_default
  },
  {
    rel: "stylesheet",
    href: footer_default
  },
  {
    rel: "stylesheet",
    href: game_card_default
  },
  {
    rel: "stylesheet",
    href: game_guidelines_default
  },
  {
    rel: "stylesheet",
    href: game_library_page_default
  },
  {
    rel: "stylesheet",
    href: GameLibraryHome_default
  },
  {
    rel: "stylesheet",
    href: gta_online_policy_default
  },
  {
    rel: "stylesheet",
    href: video_model_default
  },
  {
    rel: "stylesheet",
    href: Experience_default
  }
];
function RootLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "RD Game Zone",
          url: "https://rdgamezone.com",
          openingHours: "Mo-Su 10:00-22:00",
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN"
          }
        })
      } }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("script", { dangerouslySetInnerHTML: {
        __html: `
      (function () {
        try {
          /* ===== KIOSK DETECTION ===== */
          const isKiosk =
            matchMedia('(min-width: 2200px)').matches ||
            navigator.userAgent.includes('TV') ||
            navigator.userAgent.includes('SmartTV');

          if (!isKiosk) return;

          /* ===== HARD LOCK ===== */
          document.body.style.cursor = 'none';
          document.body.style.userSelect = 'none';

          /* ===== LOOP GUARD ===== */
          const lastReload = Number(sessionStorage.getItem('__kiosk_reload')) || 0;
          const now = Date.now();

          // prevent reload loops (min 10 min gap)
          if (now - lastReload < 10 * 60 * 1000) return;

          /* ===== ACTIVITY TRACKING ===== */
          let lastActivity = Date.now();
          const bump = () => (lastActivity = Date.now());

          ['mousemove','touchstart','keydown','scroll','click'].forEach(e =>
            addEventListener(e, bump, { passive: true })
          );

          /* ===== VISIBILITY FREEZE DETECT ===== */
          let lastFrame = performance.now();
          function frameCheck(t) {
            if (t - lastFrame > 60000) {
              sessionStorage.setItem('__kiosk_reload', Date.now());
              location.reload();
            }
            lastFrame = t;
            requestAnimationFrame(frameCheck);
          }
          requestAnimationFrame(frameCheck);

          /* ===== IDLE WATCHDOG (15 MIN) ===== */
          setInterval(() => {
            if (
              document.visibilityState === 'visible' &&
              Date.now() - lastActivity > 15 * 60 * 1000
            ) {
              sessionStorage.setItem('__kiosk_reload', Date.now());
              location.reload();
            }
          }, 60000);

        } catch (e) {}
      })();
    `
      } }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 173,
        columnNumber: 1
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { httpEquiv: "Content-Security-Policy", content: "\n    default-src 'self';\n\n    img-src\n      'self'\n      data:\n      blob:\n      https://i.ytimg.com;\n\n    media-src\n      'self'\n      blob:\n      https://*.googlevideo.com;\n\n    frame-src\n      'self'\n      https://www.youtube-nocookie.com;\n\n    connect-src\n      'self'\n      https://*.googlevideo.com\n      https://www.youtube-nocookie.com;\n\n    script-src\n      'self'\n      'unsafe-inline'\n      https://www.youtube-nocookie.com;\n\n    style-src\n      'self'\n      'unsafe-inline';\n\n    font-src\n      'self'\n      https://fonts.gstatic.com;\n\n    frame-ancestors 'none';\n  " }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 237,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { httpEquiv: "X-Frame-Options", content: "DENY" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 313,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { httpEquiv: "X-Content-Type-Options", content: "nosniff" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 314,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { httpEquiv: "Referrer-Policy", content: "strict-origin-when-cross-origin" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 315,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 147,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { style: {
      background: "#000",
      color: "#fff"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rotate-overlay", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rotate-box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rotate-icon", children: "\u{1F4F1}" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 325,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rotate-title", children: "Rotate your device" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 326,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rotate-sub", children: "Best viewed in landscape" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 327,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 324,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 323,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Navbar, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 331,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 332,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 334,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 335,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("script", { dangerouslySetInnerHTML: {
        __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js');
              }
            `
      } }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 340,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("script", { dangerouslySetInnerHTML: {
        __html: `
              (function () {
                try {
                  /* ---------- ENTROPY TRACKING ---------- */
                  let score = 0;
                  const bump = v => score += v;

                  ['mousemove','touchmove'].forEach(e =>
                    addEventListener(e, () => bump(1), { passive:true })
                  );
                  addEventListener('click', () => bump(3), { passive:true });
                  addEventListener('keydown', () => bump(4), { passive:true });
                  addEventListener('scroll', () => bump(2), { passive:true });

                  /* ---------- TIMING NOISE ---------- */
                  const n = performance.now.bind(performance);
                  performance.now = () => n() + Math.random() * 3;

                  /* ---------- FINGERPRINT POISON ---------- */
                  Object.defineProperty(navigator, 'webdriver', { get: () => false });
                  Object.defineProperty(screen, 'availWidth', {
                    get: () => screen.width - Math.floor(Math.random() * 5)
                  });

                  /* ---------- HONEYPOT ---------- */
                  const trap = document.createElement('input');
                  trap.style.cssText = 'position:absolute;opacity:0;pointer-events:none';
                  document.body.appendChild(trap);
                  trap.addEventListener('input', () => {
                    document.documentElement.dataset.bot = 'true';
                  });

                  /* ---------- HUMAN CONFIRM ---------- */
                  setTimeout(() => {
                    if (score > 25) {
                      document.documentElement.dataset.human = 'true';
                    }
                  }, 3500);

                  /* ---------- KIOSK MODE ---------- */
                  if (matchMedia('(min-width: 2200px)').matches) {
                    document.body.style.cursor = 'none';
                    document.body.style.userSelect = 'none';
                  }
                } catch (e) {}
              })();
            `
      } }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 352,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 318,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 146,
    columnNumber: 10
  }, this);
}
_c2 = RootLayout;
var _c2;
$RefreshReg$(_c2, "RootLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  RootLayout as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-GTNAF5M2.js.map
