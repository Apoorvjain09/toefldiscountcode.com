"use client";
import { Suspense, useEffect} from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/ui/LoadingSpinner'; // Ensure you have a loading spinner component
import { useUser } from '@clerk/nextjs';
import { useRouter, usePathname } from 'next/navigation';

// Dynamically import the FormComponent
const FormComponent = dynamic(() => import('./form'), {
  suspense: true,
});

export default function Home() {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const pathname = usePathname();


  useEffect(() => {
    if (!isSignedIn) {
      router.push('/profile');
    }
  }, [isSignedIn, pathname, router]);


  return (
    <>
      <h1 className="mt-10 text-4xl font-extrabold leading-none tracking-tight md:text-5xl text-gray-900 mb-[2rem] text-center">Fill in the form to get <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text'>Personalized Shortlisting</span></h1>
      <main className="flex justify-evenly mb-10 gap-5 p-10 ">
        <div className='hidden lg:block bg-cover bg-center h-[70vh] w-[50%] rounded-lg' style={{ backgroundImage: `url(assets/uni-short-img.webp)` }}>
        </div>
        <div className=''>
          <Suspense fallback={<LoadingSpinner />}>
            <FormComponent />
          </Suspense>
        </div>
      </main>
    </>
  );
}
