
import type { VideoSource } from "./types";

type Props = {
  video: VideoSource;
  onClose: () => void;
};

export default function VideoModal({ video, onClose }: Props) {
  const renderVideo = () => {
    // ▶️ YouTube (LOCKED + CSP SAFE)
    if (video.type === "youtube") {
      return (
        <div className="video-frame-wrapper">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&controls=0&modestbranding=1&rel=0&disablekb=1`}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-presentation"
            title="Game Trailer"
          />
          {/* CLICK BLOCKER */}
          <div className="iframe-blocker" />
        </div>
      );
    }

    // ▶️ MP4 / WEBM (LOCAL FILES)
    if (video.type === "mp4" || video.type === "webm") {
      return (
        <video
          src={video.src}
          autoPlay
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
        />
      );
    }

    // ▶️ Google Drive (LOCKED)
    if (video.type === "gdrive") {
      return (
        <div className="video-frame-wrapper">
          <iframe
            src={`https://drive.google.com/file/d/${video.id}/preview`}
            allow="autoplay"
            sandbox="allow-scripts allow-same-origin allow-presentation"
            title="Game Trailer"
          />
          <div className="iframe-blocker" />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="video-modal">
      <div className="video-overlay" onClick={onClose} />
      <div className="video-container">
        <button className="close-btn" onClick={onClose}>✕</button>
        {renderVideo()}
      </div>
    </div>
  );
}