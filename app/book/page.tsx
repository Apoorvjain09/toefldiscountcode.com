// app/book/page.tsx
import React, { Suspense } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { Seo } from '@/components/Head/Seo';
import Section from './Section';
import { sections } from './sectionsData';

const Page: React.FC = () => {
  return (
    <>
      <Seo
        title='TOEFL Books - Recommended Study Materials'
        description='Find the best TOEFL books and study materials to prepare for your exam. Check our recommendations now!'
        url='https://toeflgoglobal.com/book'
        image="https://www.dropbox.com/scl/fi/efgh6d39t1z69ulz03dl3/GoGlobalSocialShare.jpg?rlkey=o8vttiq065fkpsemyzo04fcj5&raw=1"
      />
      <Suspense fallback={<div><LoadingSpinner /></div>}>
        <div className='rounded-lg bg-gradient-to-r from-orange-500 to-pink-600'>
          <div className="text-center flex flex-col p-7">
            {sections.map((section, index) => (
              <Section key={index} {...section} />
            ))}
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default Page;
