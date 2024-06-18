import { useState, useEffect, useRef } from 'react';
import Alert from '@/components/ui/Alert';
import VideoSkele from './LoadingSkeletonVideo';

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' | 'loading' | 'warning' }>({ message: 'Loading video...', type: 'loading' });
  const [showSkeleton, setShowSkeleton] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    let internetConnectionTimeout: NodeJS.Timeout;

    if (videoElement) {
      // Show loading alert
      setAlert({ message: 'Loading video...', type: 'loading' });

      const handleCanPlay = () => {
        // Show success alert
        setAlert({ message: 'Video loaded', type: 'success' });
        clearTimeout(internetConnectionTimeout);
        setTimeout(() => {
          setAlert({ message: '', type: 'loading' });
          setShowSkeleton(false);
        }, 2000);
      };

      const handleError = () => {
        // Show error alert
        setAlert({ message: 'Failed to load video', type: 'error' });
        clearTimeout(internetConnectionTimeout);
        setTimeout(() => setAlert({ message: '', type: 'loading' }), 2000);
      };

      videoElement.addEventListener('canplay', handleCanPlay);
      videoElement.addEventListener('error', handleError);

      // Reset the video element and load the new source
      videoElement.pause();
      videoElement.src = videoUrl;
      videoElement.load();

      // Show skeleton for 8 seconds
      setShowSkeleton(true);
      const skeletonTimeout = setTimeout(() => {
        setShowSkeleton(false);
      }, 40000);

      // Show "Check Internet Connection" alert if video is not loaded after 8 seconds
      internetConnectionTimeout = setTimeout(() => {
        setAlert({ message: 'Please Wait... Loading!', type: 'warning' });
      }, 20000);

      // Clean up event listeners and timeouts
      return () => {
        videoElement.removeEventListener('canplay', handleCanPlay);
        videoElement.removeEventListener('error', handleError);
        clearTimeout(skeletonTimeout);
        clearTimeout(internetConnectionTimeout);
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
      {showSkeleton && <VideoSkele />}
      <video ref={videoRef} controls className={`w-full ${showSkeleton ? 'hidden' : 'block'}`} controlsList="nodownload"> 
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
