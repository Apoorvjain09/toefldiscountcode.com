"use client";
import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/ui/LoadingSpinner'; // Ensure you have a loading spinner component
import { Seo } from '@/components/Head/Seo';
import AfterUniversityShortlistFromOpenAI from './AfterUniversityShortlistFromOpenAI';
import { lazy } from 'react';

const FormComponent = lazy(() => import('./form'));

export default function Home() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [shortlistData, setShortlistData] = useState({
    shortlistedUniversities: [],
    profileRating: 0,
    improvements: [],
  });

  // Check localStorage for existing form data
  useEffect(() => {
    const shortlistedUniversities = localStorage.getItem(
      "universityShortlistingResponse-shortlistedUniversities"
    );
    const profileRating = localStorage.getItem(
      "universityShortlistingResponse-profileRating"
    );
    const improvements = localStorage.getItem(
      "universityShortlistingResponse-improvements"
    );

    if (shortlistedUniversities && profileRating && improvements) {
      setShortlistData({
        shortlistedUniversities: JSON.parse(shortlistedUniversities),
        profileRating: JSON.parse(profileRating),
        improvements: JSON.parse(improvements),
      });
      setIsFormSubmitted(true);
    }
  }, [isFormSubmitted]);

  const handleFormSubmit = () => {
    const shortlistedUniversities = localStorage.getItem(
      "universityShortlistingResponse-shortlistedUniversities"
    );
    const profileRating = localStorage.getItem(
      "universityShortlistingResponse-profileRating"
    );
    const improvements = localStorage.getItem(
      "universityShortlistingResponse-improvements"
    );

    if (shortlistedUniversities && profileRating && improvements) {
      setShortlistData({
        shortlistedUniversities: JSON.parse(shortlistedUniversities),
        profileRating: JSON.parse(profileRating),
        improvements: JSON.parse(improvements),
      });
      setIsFormSubmitted(true); // Re-render with the new data
    }
  };

  return (
    <>
      <Seo
        title='University Shortlisting for TOEFL Test Takers'
        description='Get a personalized list of universities based on your TOEFL scores and preferences.'
        url='https://toeflgoglobal.com/university-shortlisting'
        image="https://www.dropbox.com/scl/fi/efgh6d39t1z69ulz03dl3/GoGlobalSocialShare.jpg?rlkey=o8vttiq065fkpsemyzo04fcj5&raw=1"
      />
      {isFormSubmitted ? (
        <>
          <AfterUniversityShortlistFromOpenAI
            shortlistedUniversities={shortlistData.shortlistedUniversities}
            profileRating={shortlistData.profileRating}
            improvements={shortlistData.improvements}
          />
        </>
      ) : (
        <>
          <h1 className="p-5 sm:p-3 mt-10 text-4xl font-extrabold leading-none tracking-tight md:text-5xl text-gray-900 mb-[2rem] text-center">Fill in the form to get <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text'>Personalized Shortlisting</span></h1>
          <main className="flex justify-center md:justify-evenly mb-10 gap-5 p-10 ">
            <div className='hidden lg:block bg-cover bg-center h-[70vh] w-[50%] rounded-lg' style={{ backgroundImage: `url(assets/uni-short-img.webp)` }}>
            </div>
            <div className=''>
              <Suspense fallback={<LoadingSpinner />}>
                <FormComponent onFormSubmit={handleFormSubmit} />
              </Suspense>
            </div>
          </main>
        </>
      )}
    </>
  );
}
