import React, { useState, ChangeEvent } from 'react';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';

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

export default function Form({ setStage }: { setStage: React.Dispatch<React.SetStateAction<'home' | 'form' | 'video'>> }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    location: '',
    bookedExam: '',
    examDate: '',
  });
  const { user } = useUser();

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const key = steps[currentStep].key;
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!user) return;
    try {
      await axios.post('/api/updateUserMetadata', {
        userId: user.id,
        location: formData.location,
        bookedExam: formData.bookedExam,
        examDate: formData.examDate,
      });
      setStage('video');
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };

  return (
    <div className="p-2 min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full flex flex-col md:flex-row">
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">👋 Welcome to Study Together! Tell us about yourself!</h1>
            <p className="text-gray-600 md:w-[80%]">Tell us about yourself, so that we can recommend you personalized study rooms and friends later on!</p>
          </div>
          <div className="items-center justify-between mb-6 hidden sm:flex">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 0 ? 'bg-purple-500' : 'bg-gray-200'}`}>
                <span className="text-white">1</span>
              </div>
              <span>Education</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 1 ? 'bg-purple-500' : 'bg-gray-200'}`}>
                <span className="text-white">2</span>
              </div>
              <span>Country</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 2 ? 'bg-purple-500' : 'bg-gray-200'}`}>
                <span className="text-white">3</span>
              </div>
              <span>Welcome</span>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">{steps[currentStep].question}</h2>
            <input
              type="text"
              value={formData[steps[currentStep].key]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
          </div>
          <div className="flex justify-between">
            {currentStep < steps.length - 1 ? (
              <>
                <button onClick={handleNext} className="bg-blue-500 text-white py-2 px-4 rounded">
                  Next
                </button>
                {currentStep < steps.length - 2 && (
                  <button onClick={() => { setStage('video') }} className="bg-blue-500 text-white py-2 px-4 rounded">
                    Skip
                  </button>
                )}
              </>
            ) : (
              <button onClick={handleSubmit} className="bg-green-500 text-white py-2 px-4 rounded">
                Submit
              </button>
            )}
            {currentStep > 0 && (
              <button onClick={handleBack} className="bg-blue-500 text-white py-2 px-4 rounded">
                Back
              </button>
            )}
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:justify-center md:w-1/2">
          <img src="/assets/study.svg" alt="Study Illustration" className="w-full h-auto" />
        </div>
      </div>
      <div className="w-full max-w-3xl mt-4">
        <div className="bg-gray-200 rounded-full h-2.5">
          <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}></div>
        </div>
      </div>
    </div>
  );
}
