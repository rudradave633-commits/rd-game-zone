export type HeroSlide = {
  id: number;
  title: string;
  tagline: string;
  category: string;
  poster: string;
  videoWebm?: string;
  videoMp4?: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: "VALORANT",
    tagline: "5V5 CHARACTER-BASED TACTICAL FIREFIGHT",
    category: "OPEN WORLD ACTION",
    poster: "/images/valorant.jpg",
    videoWebm: "/videos/Val-Gunda-hero.webm",
  },
  {
    id: 2,
    title: "ASPHALT LEGENDS UNITE",
    tagline: "LEGENDS CHANGE THE GAME",
    category: "RACING",
    poster: "/images/asphalt.jpeg",
    videoMp4: "/videos/Asphalt Legends Unite.mp4",
  },
  {
    id: 3,
    title: "BLACK MYTH WUKONG",
    tagline: "RECLAIM THE LEGEND",
    category: "ACTION ADVENTURE",
    poster: "/images/black-myth-wukong.jpeg",
    videoMp4: "/videos/black myth wukong.mp4",
  },
  {
    id: 4,
    title: "CALL OF DUTY BLACK OPS 7",
    tagline: "A NEW ERA OF COVERT OPERATIONS",
    category: "FPS ACTION",
    poster: "/images/cod-blackops-7.jpg",
    videoMp4: "/videos/cod blackops 7 new.mp4",
  },
  {
    id: 5,
    title: "GTA ONLINE",
    tagline: "BUILD YOUR CRIMINAL EMPIRE",
    category: "OPEN WORLD",
    poster: "/images/gta-5online.jpeg",
    videoMp4: "/videos/gta-online-edit.mp4",
  },
];