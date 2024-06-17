import { useState, useEffect, useRef } from 'react';
import Alert from '@/components/ui/Alert';

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' | 'loading' }>({ message: 'Loading video...', type: 'loading' });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      // Show loading alert
      setAlert({ message: 'Loading video...', type: 'loading' });

      const handleCanPlay = () => {
        // Show success alert
        setAlert({ message: 'Video loaded', type: 'success' });
        setTimeout(() => setAlert({ message: '', type: 'loading' }), 2000);
      };

      const handleError = () => {
        // Show error alert
        setAlert({ message: 'Failed to load video', type: 'error' });
        setTimeout(() => setAlert({ message: '', type: 'loading' }), 2000);
      };

      videoElement.addEventListener('canplay', handleCanPlay);
      videoElement.addEventListener('error', handleError);

      // Reset the video element and load the new source
      videoElement.pause();
      videoElement.removeAttribute('src');
      videoElement.load();

      videoElement.src = videoUrl;
      videoElement.load();

      // Clean up event listeners
      return () => {
        videoElement.removeEventListener('canplay', handleCanPlay);
        videoElement.removeEventListener('error', handleError);
      };
    }
  }, [videoUrl]);

  return (
    <div className="w-full">
      {alert.message && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ message: '', type: 'loading' })}
        />
      )}
      <video ref={videoRef} controls className="w-full">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
