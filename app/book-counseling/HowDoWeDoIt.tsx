import { Award, FormInputIcon, Laptop, Users } from 'lucide-react';
import React from 'react';

const HowWeDoIt = () => {
  return (
    <section className=" text-black py- border-t-2">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 flex flex-col items-center">
        <div className=" flex flex-col items-center justify-center mx-auto text-center">
          <h2 className="text-3xl font-bold">But, how do we do it?</h2>
          <p className="mt-4 text-gray-600 w-[70%]">
            Now, you must be wondering how’s that possible? Well, it’s no stroke of luck. We combined our counselors’ expertise with our 1 million+ admit/reject database to create a product that consistently delivers top admissions for our students.
          </p>
          <p className="mt-2 text-gray-600"> 
            TLDR version of how we do it —
          </p>
        </div>
        <div className="w-[80%] mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="bg-gradient-to-r from-green-200 to-indigo-200 block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10 bg-white">
            <Users/>
            <h3 className="mt-4 text-xl font-bold text-left text-blue-600">1. Team of 6 experts</h3>
            <p className="mt-2 text-sm text-gray-600 text-left">
              test prep coach, primary & secondary counsellors, document editor, Visa expert & financial advisor
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-200 to-indigo-200 block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10 bg-white">
            <Laptop/>
            <h3 className="mt-4 text-xl font-bold text-left text-blue-600">2. Your dashboard</h3>
            <p className="mt-2 text-sm text-gray-600 text-left">
              track your entire application journey & communicate with us right from your TGG app or website
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-200 to-indigo-200 block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10 bg-white">
            <FormInputIcon/>
            <h3 className="mt-4 text-xl font-bold text-left text-blue-600">3. Our dashboard</h3>
            <p className="mt-2 text-sm text-gray-600 text-left">
              our team is also able to keep track of your entire journey through their back-end dashboard
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-200 to-indigo-200 block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10 bg-white">
            <Award/>
            <h3 className="mt-4 text-xl font-bold text-left text-blue-600">4. Mentorship</h3>
            <p className="mt-2 text-sm text-gray-600 text-left">
              our community feeds data to our predictive algorithms and connects you with peers and seniors
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="px-4 py-3 rounded-lg bg-green-100 text-green-700 inline-block">
            University reps spend 7 to 8 minutes reviewing each application — the same application package which the student spent 300 to 500 hours getting ready!
          </p>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Our seasoned counsellor will not only share the load of these 500 hours with you but also bring out your best in applications, suggest suitable universities and courses, and help you avoid that can cause a loss of an entire year or thousands of rupees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
