'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Trophy, Star, GraduationCap } from 'lucide-react'
import quizData from "../../app/vocab-ladder/output.json"
import { VocabLadderQuizComponent } from './VocabLadderQuizComponent'

interface QuizQuestion {
  Word: string;
  Definition: string;
  "Sample Sentence": string;
}

interface JourneyItemProps {
  icon: React.ReactElement
  isStart?: boolean
  isCompleted?: boolean
  isActive?: boolean
  id: string
  onClick?: () => void
}

const JourneyItem: React.FC<JourneyItemProps> = ({ icon, isStart = false, isCompleted = false, isActive = false, id, onClick }) => (
  <div
    id={id}
    onClick={() => { if (isStart || isActive || isCompleted) { onClick?.() } else { alert("pls complete previous modules") } }}
    className={`relative flex items-center justify-center w-16 h-16 rounded-full border-4 cursor-pointer ${isStart ? 'bg-green-500 border-yellow-400' : isCompleted ? 'bg-yellow-300 border-yellow-400' : 'bg-gray-200 border-gray-300'
      } ${isActive ? 'animate-bounce' : ''}`}
  >
    {React.cloneElement(icon, {
      className: `w-8 h-8 ${isStart || isCompleted ? 'text-white' : 'text-gray-500'}`,
      strokeWidth: 3,
    })}
    {isStart && (
      <div className="absolute top-0 right-0 w-5 h-5 bg-yellow-400 rounded-full border-2 border-white" />
    )}
  </div>
)

export function VocabLadderGamifiedJourney() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [selectedQuestions, setSelectedQuestions] = useState<QuizQuestion[]>([])
  const [currentPosition, setCurrentPosition] = useState<number>(0)
  const [currentVocabularyLadderPositionExtracted, setCurrentVocabularyLadderPositionExtracted] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if `currentVocabLadderPosition` exists in localStorage; if not, initialize it to 0
    const savedPosition = localStorage.getItem('currentVocabLadderPosition');
    if (savedPosition === null) {
      localStorage.setItem('currentVocabLadderPosition', '0');
      setCurrentVocabularyLadderPositionExtracted(0);
    } else {
      setCurrentVocabularyLadderPositionExtracted(parseInt(savedPosition, 10));
    }
  });

  useEffect(() => {
    if (scrollContainerRef.current) {
      const { scrollHeight, clientHeight } = scrollContainerRef.current;

      // Reverse the scroll position based on `currentVocabularyLadderPositionExtracted` from the bottom
      const maxPosition = 14;
      const positionRatio = (maxPosition - currentVocabularyLadderPositionExtracted) / maxPosition;
      const targetScrollTop = positionRatio * (scrollHeight - clientHeight);

      scrollContainerRef.current.scrollTo({
        top: targetScrollTop,
        behavior: "smooth",
      });
    }
  }, [currentVocabularyLadderPositionExtracted]);



  const handleIconClick = (startIndex: number, endIndex: number, position: number) => {
    setSelectedQuestions(quizData.slice(startIndex, endIndex));
    setShowQuiz(true);
    setCurrentPosition(position);
  };
  const renderJourneyItems = () => {
    const items = []
    for (let i = 14; i >= 0; i--) {
      const startIndex = i * 20
      const endIndex = startIndex + 20
      const isCompleted = i < currentVocabularyLadderPositionExtracted
      const icon = i === 14 ? <GraduationCap /> : isCompleted ? <Trophy className='golden' /> : <Star />

      items.push(
        <React.Fragment key={i}>
          <JourneyItem
            id={`icon-${i}`}
            icon={icon}
            isStart={i === 14}
            isCompleted={isCompleted}
            isActive={i === currentVocabularyLadderPositionExtracted} // Make the current position bounce
            onClick={() => handleIconClick(startIndex, endIndex, i)}
          />
          {i > 0 && <div className="w-1 h-10 bg-gray-300" />} {/* Spacer div between items */}
        </React.Fragment>
      )
    }
    return items
  }

  return (
    <div className="w-full h-[95vh] sm:h-full mx-auto rounded-lg overflow-hidden">
      <div
        ref={scrollContainerRef}
        style={{
          overflowY: "auto",
          maxHeight: "95vh",
          scrollbarWidth: "thin", // for Firefox
          scrollbarColor: "#c1c1c1 #f0f0f0", // scrollbar color for Firefox
        }}
        className="rounded-lg modern-scrollbar" // Add a class for custom styling
      >
        {showQuiz ? (
          <VocabLadderQuizComponent questions={selectedQuestions} modulePosition={currentPosition} />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center space-y-6 mt-5">
              {renderJourneyItems()}
            </div>
            <div className="bg-green-500 text-center w-[90%] sm:w-[60%] p-6 rounded-lg my-8">
              <div className="flex items-center justify-center flex-col">
                <h2 className="text-white text-xl sm:text-3xl font-bold">
                  TOEFL VOCAB LADDER
                </h2>
                <p className="text-green-100 text-base">
                  complete all modules and become a toefl vocab master
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
