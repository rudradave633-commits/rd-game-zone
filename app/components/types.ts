export type VideoSource =
  | {
      type: "youtube";
      id: string; // YouTube video ID only
    }
  | {
      type: "mp4" | "webm";
      src: string; // local video only
    }
  | {
      type: "gdrive";
      id: string; // Google Drive file ID
    };

export type Game = {
  id: number;
  title: string;
  subtitle: string;
  category: "SHOOTING" | "ACTION" | "RACING"  | "SPORTS" | "FIGHTING" | "ADVENTURE" | "OPEN WORLD";
  playerType: string;
  platforms: ("PS5" | "PS4" | "PC")[];
  status: "available" | "unavailable" | "upcoming" ; 
  adult?: boolean;
  image: string;
  video?: VideoSource; // ✅ unified video support
};