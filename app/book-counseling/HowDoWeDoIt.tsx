import { Award, FormInputIcon, Laptop, Users } from 'lucide-react';
import React from 'react';

const HowWeDoIt = () => {
  return (
    <section className=" text-black py- border-t-2">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 flex flex-col items-center">
        <div className=" flex flex-col items-center justify-center mx-auto text-center">
          <h2 className="text-3xl font-bold">But, how do we do it?</h2>
          <p className="mt-4 text-gray-600 w-[70%]">
            You might be curious about how this works. It's not just by chance. We've combined our counselors' vast experience with a database of over a million admission and rejection records to craft a service that consistently helps students get into top universities.          </p>
          <p className="mt-2 text-gray-600">
            Here's a quick overview of our process:
          </p>
        </div>
        <div className="w-[80%] mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="bg-gradient-to-r from-green-200 to-indigo-200 block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10 bg-white">
            <Users />
            <h3 className="mt-4 text-xl font-bold text-left text-blue-600">1. Team of 50+ experts</h3>
            <p className="mt-2 text-sm text-gray-600 text-left">
              Our dedicated team includes 50+ specialists: a test prep coach, primary and secondary counselors, a document editor, a visa expert, and a financial advisor.            </p>
          </div>
          <div className="bg-gradient-to-r from-green-200 to-indigo-200 block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10 bg-white">
            <Laptop />
            <h3 className="mt-4 text-xl font-bold text-left text-blue-600">2. Personal Dashboard</h3>
            <p className="mt-2 text-sm text-gray-600 text-left">
              Easily track your entire application process and communicate with us through your custom dashboard on our app or website.            </p>
          </div>
          <div className="bg-gradient-to-r from-green-200 to-indigo-200 block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10 bg-white">
            <FormInputIcon />
            <h3 className="mt-4 text-xl font-bold text-left text-blue-600">3. Comprehensive Tracking System</h3>
            <p className="mt-2 text-sm text-gray-600 text-left">
              Our backend dashboard allows us to monitor your entire journey from start to finish.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-200 to-indigo-200 block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10 bg-white">
            <Award />
            <h3 className="mt-4 text-xl font-bold text-left text-blue-600">4. Mentorship</h3>
            <p className="mt-2 text-sm text-gray-600 text-left">
              Our large community data helps connecting you with peers and experienced mentors for valuable guidance.            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="px-4 py-3 rounded-lg bg-green-100 text-green-700 inline-block">
            Note: University representatives spend 7 to 8 minutes reviewing each application—the same application that students spend 300 to 500 hours preparing!          </p>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Our experienced counselors will not only share the burden of these 500 hours with you but also help showcase your best qualities in your applications, recommend suitable universities and courses, and help you avoid mistakes that could cost you an entire year or a ton of money.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
