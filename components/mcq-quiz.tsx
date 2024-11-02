'use client'

import { useCallback, useEffect, useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Progress } from '@/components/ui/progress'
import { CircleCheck, CircleX, Medal, X } from 'lucide-react'

interface QuizQuestion {
  Word: string;
  Definition: string;
  "Sample Sentence": string;
}
interface McqQuizProps {
  questions: QuizQuestion[];
  modulePosition: number; // New prop for module position
}

export function McqQuiz({ questions, modulePosition }: McqQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({})
  const [incorrectExplanation, setIncorrectExplanation] = useState<string | null>(null)
  const [wrongAnswers, setWrongAnswers] = useState<QuizQuestion[]>([])
  const [showCorrectFeedback, setShowCorrectFeedback] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [isReviewingWrongAnswers, setIsReviewingWrongAnswers] = useState(false)
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0)
  const [moduleComplete, setModuleComplete] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null) // New state for selected option
  const [isCorrect, setIsCorrect] = useState(false)


  const playSound = useCallback((frequency: number, duration: number) => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.value = frequency
    oscillator.type = "sine"

    gainNode.gain.setValueAtTime(0, audioContext.currentTime)
    gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 0.01)
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + duration)
  }, [])

  const handleAnswer = (answer: string) => {
    const currentQuestion = isReviewingWrongAnswers ? wrongAnswers[currentQuestionIndex] : questions[currentQuestionIndex]
    const isCorrect = answer === currentQuestion.Word
    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }))
    setSelectedOption(answer)
    setIsCorrect(isCorrect)

    if (isCorrect) {
      setShowCorrectFeedback(true)
      playSound(800, 0.15)

      if (isReviewingWrongAnswers) {
        // Remove the corrected question from wrongAnswers and increment the correct answer count
        setWrongAnswers((prev) => prev.filter(q => q.Word !== currentQuestion.Word))
        setCorrectAnswersCount(prev => prev + 1)
        setCurrentQuestionIndex(-1)

        // If `wrongAnswers` is now empty, mark the module as complete
        if (wrongAnswers.length === 0) {
          setModuleComplete(true)
          return
        }
      } else {
        // Increment correct answers count for main questions
        setCorrectAnswersCount(prev => prev + 1)
      }

      setTimeout(() => {
        setShowCorrectFeedback(false)
        moveToNextQuestion()
      }, 500)
    } else {
      // Show explanation and add question to wrongAnswers if not already there
      playSound(300, 0.15)
      setIncorrectExplanation(currentQuestion["Sample Sentence"])
      if (!wrongAnswers.find(q => q.Word === currentQuestion.Word)) {
        setWrongAnswers([...wrongAnswers, currentQuestion])
      }
    }
  }

  useEffect(() => {
    // Reset to first question in wrongAnswers whenever wrongAnswers array changes
    if (isReviewingWrongAnswers) {
      if (wrongAnswers.length === 0) {
        setModuleComplete(true)
      };
    }
  }, [wrongAnswers.length, isReviewingWrongAnswers]);

  const moveToNextQuestion = () => {
    setIncorrectExplanation(null);

    console.log("Current Question Index:", currentQuestionIndex);
    console.log("Wrong Answers Left:", wrongAnswers.length);
    console.log("Current Wrong Answers Array:", wrongAnswers);

    if (isReviewingWrongAnswers) {
      // Ensure the currentQuestionIndex is within bounds after filtering wrongAnswers
      if (currentQuestionIndex > wrongAnswers.length) {
        setCurrentQuestionIndex(0); // Reset to start if out of bounds
      }

      if (wrongAnswers.length > 0) {
        setCurrentQuestionIndex(prevIndex => Math.min(prevIndex + 1, wrongAnswers.length - 1));
      } else {
        setModuleComplete(true); // No more questions left to review, mark as complete
      }
    } else {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        if (wrongAnswers.length === 0) {
          setModuleComplete(true);
        } else {
          // Switch to reviewing wrongAnswers
          setIsReviewingWrongAnswers(true);
          setCurrentQuestionIndex(0); // Start with the first incorrect question
          setUserAnswers({});
        }
      }
    }
  };


  useEffect(() => {
    // When module completes, update `localStorage` only if new position is higher
    if (moduleComplete) {
      const currentMaxPosition = parseInt(localStorage.getItem('currentVocabLadderPosition') || '0', 10);
      const newPosition = Math.max(currentMaxPosition, modulePosition + 1);
      localStorage.setItem('currentVocabLadderPosition', newPosition.toString());
    }
  }, [moduleComplete, modulePosition]);


  const generateOptions = (correctAnswer: string) => {
    const incorrectOptions = questions
      .filter((q) => q.Word !== correctAnswer)
      .map((q) => q.Word)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)

    return [correctAnswer, ...incorrectOptions].sort(() => 0.5 - Math.random())
  }

  const currentQuestion = isReviewingWrongAnswers
    ? wrongAnswers[currentQuestionIndex] || null
    : questions[currentQuestionIndex] || null;
  const currentOptions = useMemo(() => {
    if (currentQuestion) {
      const correctAnswer = currentQuestion.Word;
      const incorrectOptions = questions
        .filter((q) => q.Word !== correctAnswer)
        .map((q) => q.Word)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      return [correctAnswer, ...incorrectOptions].sort(() => 0.5 - Math.random());
    }

    // Fallback to empty array if `currentQuestion` is undefined
    return [];
  }, [currentQuestion, questions]); const progressValue = (correctAnswersCount / questions.length) * 100

  return (
    <Card className="relative mx-auto bg-[#1D1A5F] w-full h-[95vh] sm:h-[90vh] bg-center bg-cover bg-no-repeat bg-[url('https://img.freepik.com/free-vector/outer-space-background-with-planets-stars_107791-17549.jpg?t=st=1730365437~exp=1730369037~hmac=4113865b77c0b9f1a5e1e18857f19df9fe3ddf309b5b2bbeddadffa0ad234bc0&w=996')]">
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div>
      <div className='relative z-10'>

        <CardContent>
          <div className='flex justify-center items-center my-10 gap-3'>
            <X className='text-white hover:cursor-pointer' onClick={() => { window.location.href = "/vocab-ladder" }} />
            <Progress value={progressValue} className="border border-white" style={{ backgroundColor: '#0C062F', color: 'gray' }} />
          </div>

          <h2 className="text-3xl sm:text-4xl mb-10 text-white text-center font-bold">{currentQuestion?.Definition}</h2>

          {!incorrectExplanation && currentQuestion && (
            <div className="flex flex-col justify-center items-center">
              {currentOptions.map((option, index) => (
                <div
                  key={index}
                  className={`w-[90%] sm:w-[50%] h-[4rem] mb-3 px-4 text-white rounded-lg flex justify-start items-center gap-5 cursor-pointer ${selectedOption === option && showCorrectFeedback ? 'bg-green-500' : 'bg-white/10 sm:hover:bg-white/30'}`}
                  onClick={() => handleAnswer(option)}
                >
                  <span className="mr-2">{userAnswers[currentQuestionIndex] === option ? "●" : "○"}</span>
                  <Label className='text-xl'>{option}</Label>
                </div>
              ))}
            </div>
          )}


          {incorrectExplanation && (
            <div className="mt-4 backdrop-blur text-white text-base sm:text-xl p-5 rounded-lg">
              <p className="mb-3 text-red-600">Your Answer is "{userAnswers[currentQuestionIndex]}" <CircleX color="red" className="inline ml-2" /> </p>
              <p className="mb-3">Correct Answer is "{currentQuestion?.Word}" <CircleCheck color="green" className="inline ml-2" /> </p>
              <p className="">Please review the example:</p>
              <p className="italic mt-2">{incorrectExplanation}</p>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-center">
          {incorrectExplanation && (
            <Button onClick={moveToNextQuestion} className='text-xl bg-purple-500 p-2'>Next</Button>
          )}
        </CardFooter>

        {moduleComplete && (
          <Card className="w-[80%] h-[] sm:w-full max-w-sm mx-auto">
            <CardContent className="pt-6 text-center">
              <div className="relative mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full max-w-[200px] max-h-[200px]">
                    <div className="absolute top-0 left-1/4 w-2 h-2 bg-sky-300 rounded-full" />
                    <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-pink-300 rounded-full" />
                    <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-300 rounded-full" />
                    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-yellow-300 rounded-full" />
                    <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-green-300 rotate-45" />
                    <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-300 rotate-45" />
                    <div className="absolute top-[45%] left-[45%] w-1.5 h-1.5 bg-red-300 rotate-45" />
                  </div>
                </div>

                <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center">
                  <div className="absolute -bottom-3 w-6 h-8 bg-purple-500 clip-ribbon" />
                  <Medal className="w-10 h-10 text-yellow-100" />
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-3">Congratulations</h2>
              <p className="text-muted-foreground text-sm mb-6 px-6">
                Awesome Job! You’ve successfully completed this module, and now you’re one step closer to mastering the art of vocabulary! Every word you learn strengthens your understanding and brings you closer to expressing yourself with precision and confidence. 🚀
              </p>

              <Button onClick={() => { window.location.href = "/vocab-ladder" }} className="bg-purple-500 hover:bg-purple-600 text-white px-8">Home</Button>
            </CardContent>

            <style jsx>{`
            .clip-ribbon {
              clip-path: polygon(50% 100%, 0 0, 100% 0);
            }
          `}</style>
          </Card>
        )}
      </div>

    </Card>
  )
}
