"use client";
import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { courseData, Lecture } from './courseData';


const Sidebar = dynamic(() => import('./sidebar'), {
  suspense: true,
});

const VideoPlayer = dynamic(() => import('./videoplayer'), {
  suspense: true,
});

const initialLecture = courseData.sections[0].chapters[0].lectures[1];

const CoursePage: React.FC = () => {
    const [currentLecture, setCurrentLecture] = useState<Lecture>(initialLecture);
    // console.log(currentLecture)
    return (
      <div className="flex">
        <Suspense fallback={<div>Loading Sidebar...</div>}>
          <Sidebar sections={courseData.sections} setCurrentLecture={setCurrentLecture} />
        </Suspense>
        <div className="w-full p-4">
          <Suspense fallback={<div>Loading Video Player...</div>}>
            <VideoPlayer videoUrl={currentLecture.videoUrl} />
          </Suspense>
        </div>
      </div>
    );
  };

export default CoursePage;
