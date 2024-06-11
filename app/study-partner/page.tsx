"use client";
import React, { useEffect, useState, ChangeEvent, lazy, Suspense } from "react";
import { useUser } from "@clerk/clerk-react";
import axios from 'axios';
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const VideoConferencingRoom = lazy(() => import("./VideoConferencingRoom"));
const Form = lazy(() => import("./Form")); // Lazy import for the Form component

interface FormData {
  location: string;
  bookedExam: string;
  examDate: string;
}

interface Step {
  id: number;
  question: string;
  key: keyof FormData;
}

const steps: Step[] = [
  { id: 1, question: "Where do you belong?", key: "location" },
  { id: 2, question: "Have you booked your TOEFL exam?", key: "bookedExam" },
  { id: 3, question: "When are you planning to give TOEFL?", key: "examDate" },
];

export default function App() {
  const [stage, setStage] = useState<'home' | 'form' | 'video'>('home');
  const [onlineCount, setOnlineCount] = useState(23044);
  const { isSignedIn } = useUser();

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount((prevCount) => prevCount + Math.floor(Math.random() * 10) + 1);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleButtonClick = () => {
    if (!isSignedIn) {
      window.location.href = '/profile';
      return;
    }
    else setStage('form');
  };

  return (
    <>
      {stage === 'home' && (
        <div className="z-[0] relative overflow-hidden rounded-xl m-2 flex items-center min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/video-confrencing-bg.jpg"
              alt="Background"
              className="w-full h-full object-cover blur"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative text-white max-w-3xl p-10">
            <h1 className="lg:text-7xl md:text-5xl font-bold mb-4 text-4xl">
              Meet, chat, and study with students from all over the world 🌍
            </h1>
            <p className="text-lg mb-10 md:text-2xl">
              Join the largest global student community online and say goodbye to lack of motivation.
            </p>
            <button onClick={handleButtonClick} className="bg-white text-pink-500 font-bold py-2 px-4 rounded-full mb-7 animate-bounce">
              Study Together now
            </button>
            <div className="flex items-center mb-4">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full">100% free!</span>
              <span className="ml-2 text-white animate-pulse">{onlineCount} Online</span>
            </div>
          </div>
        </div>
      )}
      {stage === 'form' && (
        <Suspense fallback={<div><LoadingSpinner/></div>}>
          <Form setStage={setStage} />
        </Suspense>
      )}
      {stage === 'video' && (
        <div
          style={{
            backgroundImage: `url(/assets/lib-bg.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100vh',
            borderRadius: '0.5rem',
            padding: '1rem',
          }}
        >
          <Suspense fallback={<div>Loading video conferencing room...</div>}>
            <VideoConferencingRoom />
          </Suspense>
        </div>
      )}
    </>
  );
}
