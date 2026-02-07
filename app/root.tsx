
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import Navbar from "~/components/Navbar";


/* =====================================================
   MAX LEVEL SEO (SSR + CRAWL OPTIMIZED)
===================================================== */
export const meta = () => [
  { title: "RD Game Zone | Ultimate Gaming Experience" },
  {
    name: "description",
    content:
      "RD Game Zone is a premium gaming hub featuring high-end PCs, PlayStation consoles, esports titles, cinematic gameplay, and immersive gaming ambience.",
  },
  { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },

  { name: "theme-color", content: "#000000" },

  /* Crawl budget + ranking */
  { name: "robots", content: "index, follow, max-image-preview:large" },
  { name: "googlebot", content: "index, follow" },
  { name: "author", content: "RD Game Zone" },

  /* OpenGraph */
  { property: "og:title", content: "RD Game Zone" },
  { property: "og:type", content: "website" },
  { property: "og:site_name", content: "RD Game Zone" },
  {
    property: "og:description",
    content:
      "High-performance gaming PCs, PlayStation consoles and esports-ready setups.",
  },

  /* Twitter */
  { name: "twitter:card", content: "summary_large_image" },
];

/* =====================================================
   PERFORMANCE + HARDENING LINKS
===================================================== */
export const links = () => [
  // PERFORMANCE
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },

  // APP META
  { rel: "icon", href: "/favicon.ico" },
  { rel: "manifest", href: "/manifest.webmanifest" },

  // STYLES (PUBLIC)
  { rel: "stylesheet", href: "/styles/global.css" },
  { rel: "stylesheet", href: "/styles/epic-about.css" },
  { rel: "stylesheet", href: "/styles/epic-booking.css" },
  { rel: "stylesheet", href: "/styles/epic-pricing.css" },
  { rel: "stylesheet", href: "/styles/esports-ticker.css" },
  { rel: "stylesheet", href: "/styles/footer.css" },
  { rel: "stylesheet", href: "/styles/game-card.css" },
  { rel: "stylesheet", href: "/styles/game-guidelines.css" },
  { rel: "stylesheet", href: "/styles/game-library-page.css" },
  { rel: "stylesheet", href: "/styles/GameLibraryHome.css" },
  { rel: "stylesheet", href: "/styles/gta-online-policy.css" },
  { rel: "stylesheet", href: "/styles/video-model.css" },
  { rel: "stylesheet", href: "/styles/Experience.css" },
];
/* =====================================================
   ROOT LAYOUT — MAX HARDENED
===================================================== */
export default function RootLayout() {
  return (
    <html lang="en">
      <head>
  <Meta />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, viewport-fit=cover"
  />

  <Links />

        {/* =======================
           STRUCTURED DATA
        ======================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "RD Game Zone",
              url: "https://rdgamezone.com",
              openingHours: "Mo-Su 10:00-22:00",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
            }),
          }}
        />

     {/* =====================================================
   🔥 KIOSK AUTO-RELOAD WATCHDOG (TIER-3 SAFE)
   Frontend-only • Loop-proof • TV / Shop Mode
===================================================== */}
<script
  dangerouslySetInnerHTML={{
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
    `,
  }}
/>


        {/* =======================
           SECURITY HEADERS (SSR)
        ======================= */}
        <meta
  httpEquiv="Content-Security-Policy"
  content="
    default-src 'self';

    img-src
      'self'
      data:
      blob:
      https://i.ytimg.com;

    media-src
      'self'
      blob:
      https://*.googlevideo.com;

    frame-src
      'self'
      https://www.youtube-nocookie.com;

    connect-src
      'self'
      https://*.googlevideo.com
      https://www.youtube-nocookie.com;

    script-src
      'self'
      'unsafe-inline'
      https://www.youtube-nocookie.com;

    style-src
      'self'
      'unsafe-inline';

    font-src
      'self'
      https://fonts.gstatic.com;

    frame-ancestors 'none';
  "
/>
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      </head>

      <body style={{ background: "#000", color: "#fff" }}>
        {/* ROTATE OVERLAY (CSS CONTROLLED) */}
        <div className="rotate-overlay">
          <div className="rotate-box">
            <div className="rotate-icon">📱</div>
            <div className="rotate-title">Rotate your device</div>
            <div className="rotate-sub">Best viewed in landscape</div>
          </div>
        </div>

        <Navbar />
        <Outlet />

        <ScrollRestoration />
        <Scripts />

        {/* =======================
           SERVICE WORKER (PWA)
        ======================= */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js');
              }
            `,
          }}
        />

 <script
  dangerouslySetInnerHTML={{
    __html: `
      (function () {
        const isTV =
          matchMedia('(min-width: 1200px)').matches &&
          !/Android|iPhone|iPad/i.test(navigator.userAgent);

        if (!isTV) return;

        let index = 0;
        const getItems = () =>
          [...document.querySelectorAll('a,button')]
            .filter(el => el.offsetParent !== null);

        window.addEventListener('keydown', e => {
          const items = getItems();
          if (!items.length) return;

          if (['ArrowRight','ArrowDown'].includes(e.key)) {
            index = (index + 1) % items.length;
            items[index].focus();
            e.preventDefault();
          }
          if (['ArrowLeft','ArrowUp'].includes(e.key)) {
            index = (index - 1 + items.length) % items.length;
            items[index].focus();
            e.preventDefault();
          }
          if (e.key === 'Enter') {
            items[index]?.click();
          }
        });
      })();
    `,
  }}
/>

<script
  dangerouslySetInnerHTML={{
    __html: `
      (function () {
        try {
          // Disable right-click
          document.addEventListener("contextmenu", e => e.preventDefault());

          // Block DevTools shortcuts
          document.addEventListener("keydown", e => {
            if (
              e.key === "F12" ||
              (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key)) ||
              (e.ctrlKey && e.key === "U")
            ) {
              e.preventDefault();
            }
          });
        } catch (e) {}
      })();
    `,
  }}
/>

        {/* =====================================================
           🔥 MAX ANTI-BOT + KIOSK LOCK + FINGERPRINT NOISE
        ===================================================== */}
        <script
          dangerouslySetInnerHTML={{
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

                 /* ---------- KIOSK MODE (handled earlier) ---------- */
                 /* intentionally empty to avoid double-lock */
                } catch (e) {}
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}