// components/VideoPlayer.tsx
import React, { useState, useEffect } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  thumbnailUrl: string; // Add a thumbnailUrl prop
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, thumbnailUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // CSS to hide the pop-out button
    const style = document.createElement('style');
    style.innerHTML = `
      .video-overlay {
        position: absolute;
        top: 0;
        right: 0;
        width: 120px; /* Adjust size to cover the button */
        height: 80px;  /* Adjust size to cover the button */
        background: transparent;
        z-index: 10;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const modifiedUrl = videoUrl.replace('/view', '/preview');

  return (
    <div className="w-full h-[30vh] sm:h-[90vh] flex flex-col items-center justify-center relative">
      {isPlaying ? (
        <>
          <iframe
            src={modifiedUrl}
            width="100%"
            height="100%"
            allow="autoplay"
            className="border rounded-lg"
            allowFullScreen
          ></iframe>
          <div className="video-overlay"></div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center cursor-pointer" onClick={handlePlayVideo}>
          <img src={thumbnailUrl} alt="Video Thumbnail" className="w-full h-auto rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
