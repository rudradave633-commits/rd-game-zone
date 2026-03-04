/* ================================================================
   HERO SLIDES DATA
   ─────────────────────────────────────────────────────────────
   Each slide has:

   IMAGES (shown immediately, also fallback while video loads)
   • imageDesktop        — 16:9 widescreen,  e.g. 1920×1080
   • imageMobilePortrait — 9:16 portrait,    e.g.  828×1792
   • imageMobileLandscape— 16:9 landscape,   e.g. 1792× 828

   VIDEOS (play on top of image once loaded)
   Desktop:
   • videoDesktopWebm / videoDesktopMp4     — 16:9
   Mobile portrait:
   • videoPortraitWebm  / videoPortraitMp4  — 9:16 vertical
   Mobile landscape:
   • videoLandscapeWebm / videoLandscapeMp4 — 16:9

   BUTTONS
   • btn1 / btn2

   TIP: If you only have one video format, put the same path in
   both Webm and Mp4 fields — the browser will just pick Mp4.
   ================================================================ */

export type HeroSlide = {
  id: number;
  title: string;
  tagline: string;
  category: string;

  /* ── Images (used as immediate bg + fallback while video loads) ── */
  imageDesktop:         string;
  imageMobilePortrait:  string;
  imageMobileLandscape: string;

  /* ── Desktop video (16:9) ── */
  videoDesktopWebm: string;
  videoDesktopMp4:  string;

  /* ── Mobile portrait video (9:16 vertical) ── */
  videoPortraitWebm: string;
  videoPortraitMp4:  string;

  /* ── Mobile landscape video (16:9, separate file) ── */
  videoLandscapeWebm: string;
  videoLandscapeMp4:  string;

  /* ── Buttons ── */
  btn1: string;
  btn2: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: "VALORANT",
    tagline: "5V5 CHARACTER-BASED TACTICAL FIREFIGHT",
    category: "TACTICAL FPS",

    imageDesktop:         "/images/valorant.jpg",
    imageMobilePortrait:  "/images/valorant-mobile-portraite.jpg",
    imageMobileLandscape: "/images/valorant.jpg",

    videoDesktopWebm:  "/videos/valorant-desktop.webm",
    videoDesktopMp4:   "/videos/Valorant-Desktop-Lanscape-New-Kj-Compressed.mp4",
    
    videoPortraitWebm: "/videos/valorant-portrait.webm",
    videoPortraitMp4:  "/videos/valorant-mobile-portrait.mp4",
    
    videoLandscapeWebm:"/videos/valorant-landscape.webm",
    videoLandscapeMp4: "/videos/valorant new compressed.mp4",

    btn1: "BEST GAME",
    btn2: "FPS ACTION",
  },

  {
    id: 2,
    title: "ASPHALT LEGENDS UNITE",
    tagline: "LEGENDS CHANGE THE GAME",
    category: "RACING",

    imageDesktop:         "/images/asphalt.jpeg",
    imageMobilePortrait:  "/images/asphalt-mobile-portrait.jpg",
    imageMobileLandscape: "/images/asphalt.jpeg",

    videoDesktopWebm:  "/videos/asphalt-desktop.webm",
    videoDesktopMp4:   "/videos/Asphalt Legends Unite.mp4",
    
    videoPortraitWebm: "/videos/asphalt-portrait.webm",
    videoPortraitMp4:  "/videos/asphalt-mobile-portrait.mp4",
    
    videoLandscapeWebm:"/videos/asphalt-landscape.webm",
    videoLandscapeMp4: "/videos/Asphalt Legends Unite.mp4",

    btn1: "BEST GAME",
    btn2: "ARCADE RACING",
  },

  {
    id: 3,
    title: "BLACK MYTH WUKONG",
    tagline: "RECLAIM THE LEGEND",
    category: "ACTION ADVENTURE",

    imageDesktop:         "/images/black-myth-wukong.jpeg",
    imageMobilePortrait:  "/images/black-myth-wukong-mobile-portraite.jpg",
    imageMobileLandscape: "/images/black-myth-wukong.jpeg",

    videoDesktopWebm:  "/videos/wukong-desktop.webm",
    videoDesktopMp4:   "/videos/black myth wukong.mp4",
    
    videoPortraitWebm: "/videos/wukong-portrait.webm",
    videoPortraitMp4:  "/videos/wukong-mobile-portrait.mp4",
    
    videoLandscapeWebm:"/videos/wukong-landscape.webm",
    videoLandscapeMp4: "/videos/black myth wukong.mp4",

    btn1: "BEST GAME",
    btn2: "ACTION ADVENTURE",
  },

  {
    id: 4,
    title: "CALL OF DUTY BLACK OPS 7",
    tagline: "A NEW ERA OF COVERT OPERATIONS",
    category: "FPS ACTION",
 
    imageDesktop:         "/images/cod-7-new-landscape.jpg",
    imageMobilePortrait:  "/images/cod-7-mobile-portraite.jpg",
    imageMobileLandscape: "/images/cod-7-new-landscape.jpg",

    videoDesktopWebm:  "/videos/cod-desktop.webm",
    videoDesktopMp4:   "/videos/cod blackops 7 new.mp4",
    
    videoPortraitWebm: "/videos/cod-portrait.webm",
    videoPortraitMp4:  "/videos/cod-7-mobile-portrait.mp4",
    
    videoLandscapeWebm:"/videos/cod-landscape.webm",
    videoLandscapeMp4: "/videos/cod blackops 7 new.mp4",

    btn1: "BEST GAME",
    btn2: "FPS ACTION",
  },

  {
    id: 5,
    title: "GTA ONLINE",
    tagline: "BUILD YOUR CRIMINAL EMPIRE",
    category: "OPEN WORLD",

    imageDesktop:         "/images/gta-5online.jpeg",
    imageMobilePortrait:  "/images/gta-5online-mobile-portrait.jpeg",
    imageMobileLandscape: "/images/gta-5online.jpeg",

    videoDesktopWebm:  "/videos/gta-desktop.webm",
    videoDesktopMp4:   "/videos/mobile/GTA Online.mp4",
    
    videoPortraitWebm: "/videos/gta-portrait.webm",
    videoPortraitMp4:  "public/videos/gta-online-mobile-portraite.mp4",
    
    videoLandscapeWebm:"/videos/gta-landscape.webm",
    videoLandscapeMp4: "/videos/GTA Online.mp4",

    btn1: "OPEN WORLD",
    btn2: "MULTIPLAYER",
  },
];