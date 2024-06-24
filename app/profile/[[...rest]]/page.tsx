"use client";
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useAuth } from '@clerk/nextjs';
import Alert from '@/components/ui/Alert';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

// Lazy load components
const LoginUI = lazy(() => import('./LoginUi'))

function Page() {
  const { isSignedIn } = useAuth();
  const [showAlert, setShowAlert] = useState(false);
  console.log("in profile ")
  useEffect(() => {
    if (!isSignedIn) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 2000); // Show alert for 2 seconds

      return () => clearTimeout(timer); // Clean up the timer on component unmount
    }
  }, [isSignedIn]);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      {showAlert && (
        <Alert
          message="Please log in"
          type="warning"
          onClose={handleCloseAlert}
        />
      )}
      <Suspense fallback={<LoadingSpinner />}>
        <LoginUI/>
      </Suspense>
    </>
  );
}

export default Page;
