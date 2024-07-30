"use client"
import React, { useState, useRef, useEffect } from 'react';

interface Video {
  id: string;
  title: string;
}

const videos: Video[] = [
  {
    id: 'yuzTgsJ-pPs',
    title: 'GRE Verbal Class 1'
  },
  {
    id: 'wPbfELW0iOI',
    title: 'GRE Verbal Class 2'
  },
  {
    id: 'SnMwRkuO5FU',
    title: 'GRE Verbal Class 3'
  },
  {
    id: '7WTyi0aQA-4',
    title: 'GRE Verbal Class 4'
  },
  {
    id: 'jTd7TV-7BcM',
    title: 'GRE Verbal Class 5'
  },
  {
    id: 'l5yoVovaAbo',
    title: 'GRE Verbal Class 6'
  }
];

const CoursePage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (videoId: string, index: number) => {
    setSelectedVideo(videoId);
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      videoElement.requestFullscreen().catch(err => console.log(err));
      setIsFullscreen(true);
    }
  };

  const handleFullscreenChange = () => {
    if (!document.fullscreenElement) {
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">GRE Verbal Classes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg"
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
          >
            {selectedVideo === video.id && isFullscreen ? (
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&controls=1&modestbranding=1&rel=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* Transparent overlay to intercept clicks on the top links and YouTube logo */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <div
                    className="absolute top-0 left-0 w-full h-16 bg-transparent pointer-events-auto"
                    onClick={(e) => e.preventDefault()}
                  ></div>
                  <div
                    className="absolute bottom-0 right-0 w-[20%] h-[2rem] bg-transparent pointer-events-auto"
                    onClick={(e) => e.preventDefault()}
                  ></div>
                </div>
              </div>
            ) : selectedVideo === video.id && !isFullscreen ? (
              <div className="relative w-full h-0 pb-[56.25%] flex items-center justify-center bg-black bg-opacity-50 text-white">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleClick(video.id, index)}
                >
                  Go Back to Fullscreen
                </button>
              </div>
            ) : (
              <div className="relative cursor-pointer" onClick={() => handleClick(video.id, index)}>
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-72 object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
            <p className="mt-4 text-center text-xl font-medium">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
