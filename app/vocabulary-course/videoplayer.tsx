import { useState, useEffect } from 'react';
import Alert from '@/components/ui/Alert';

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' | 'loading' }>({ message: 'Loading video...', type: 'loading' });
  console.log(videoUrl)
  useEffect(() => {
    // Show loading alert
    setAlert({ message: 'Loading video...', type: 'loading' });

    const videoElement = document.querySelector('video');

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

    if (videoElement) {
      videoElement.addEventListener('canplay', handleCanPlay);
      videoElement.addEventListener('error', handleError);
    }

    // Clean up event listeners
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('canplay', handleCanPlay);
        videoElement.removeEventListener('error', handleError);
      }
    };
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
      <video key={videoUrl} controls className="w-full">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
