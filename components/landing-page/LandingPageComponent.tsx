"use client"

import { useUser } from "@clerk/nextjs";
import FAQLandingPAge from "./LandingPageFAQ";
import Link from "next/link";
import MainFooter from "./MainFooter";
import Image from "next/image";
import Jese from "@/public/assets/jese-leos.png"
import Profile from "@/public/assets/profile-picture-2.jpg"
import Murli from "@/public/assets/murli.avif"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LandingPageServices from "./LandingPageServices";
import { LandingPageHeroSection } from "./LandingPageHeroSection";
import { StarFilledIcon } from "@radix-ui/react-icons";


export default function LandingPageComponent() {
  const { isSignedIn } = useUser()
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has("payment_id")) {
        router.replace("/practice-questions?payment_id");
      }
    }
  }, [router]);

  return (
    <>
      <LandingPageHeroSection />
      <LandingPageServices />

      <div className="p-6 h-96 relative w-full overflow-hidden bg-gradient-to-br sm:bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 flex flex-col items-center justify-center " >
        <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <h1 className={"text-center md:text-4xl text-xl text-white relative z-20 font-bold"}>
          Ace Your TOEFL Test with Our AI - Powered Mock Tests
        </h1>
        < p className="text-center mt-2 mb-4 text-neutral-300 relative z-20" >
          Practice with realistic tests and get detailed feedback to improve your scores.
        </p>
        {
          isSignedIn ? (
            <Link href="/tests-showcase" >
              <button className="bg-purple-600 text-white shadow-xl py-2 px-4 rounded z-[10] mt-1" > Take a Free Mock Test </button>
            </Link>
          ) : (
            <Link href="https://accounts.toeflgoglobal.com/sign-in?redirect_url=https%3A%2F%2Fwww.toeflgoglobal.com%2Ftests-showcase" >
              <button className="bg-purple-600 text-white shadow-xl py-2 px-4 rounded z-[10] mt-1" > Take a Free Mock Test </button>
            </Link>
          )
        }
      </div>

      <section className="bg-white text-black" >
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16" >
          <div className="mx-auto max-w-lg text-center" >
            <h2 className="text-3xl font-bold sm:text-4xl" > Features </h2>
            < p className="mt-4" >
              AI mock tests offer several features that enhance the learning and testing experience.Here are some notable features.
            </p>
          </div>

          < div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" >
            {
              [
                {
                  title: "AI-powered Insights and Advice",
                  description:
                    "Uses machine learning algorithms to predict scores and outcomes. Provides recommendations on how to improve scores based on past performance.",
                },
                {
                  title: "Integration with Learning Resources",
                  description:
                    "Links to additional study materials and resources based on the user's performance. Integrates with learning platforms and digital libraries for further reading.",
                },
                {
                  title: "Interactive Learning Aids",
                  description:
                    "Incorporates multimedia elements like videos, audio clips, and interactive diagrams. Utilizes gamification techniques to make learning more engaging and fun.",
                },
                {
                  title: "Diverse Question Bank",
                  description:
                    "Features a wide variety of questions, covering all topics and difficulty levels. Regularly updates the question bank to reflect the latest trends and changes in the actual exams.",
                },
                {
                  title: "Simulated Test Environment",
                  description:
                    "Creates a realistic test-taking environment, mirroring the actual test conditions. Includes timed sections and question formats similar to the real exam.",
                },
                {
                  title: "Detailed Performance Analytics",
                  description:
                    "Provides in-depth analysis of strengths and weaknesses. Offers comparative analytics to see how the user stands against peers.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl border p-8 shadow-sm  hover:border-pink-500/10 hover:shadow-pink-500/10"
                >
                  <h2 className="text-xl font-bold" > {feature.title} </h2>
                  < p className="mt-1 text-sm" > {feature.description} </p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="bg-white" >
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16" >
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl" >
            More trusted reviews from our Customers
          </h2>

          < div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3 md:gap-8" >
            {[
              {
                name: "Jese",
                image: Jese,
                review:
                  "Taking the TOEFL practice test was a game-changer for me. The interface was user-friendly, and the variety of questions kept me engaged throughout the test. The immediate scoring and feedback on my speaking and writing tasks were invaluable. I saw a significant improvement in my scores after using this resource. Absolutely worth it!",
              },
              {
                name: "Patrik",
                image: Profile,
                review:
                  "The TOEFL practice test was incredibly helpful! The questions were challenging and very similar to the actual TOEFL exam. The detailed feedback on my writing and speaking tasks gave me clear insights into my strengths and areas for improvement. Thanks to this test, I feel much more confident and prepared for the real exam.",
              },
              {
                name: "Murli",
                image: Murli,
                review:
                  "I was amazed by the comprehensive coverage of the TOEFL practice test. It accurately simulated the test environment, which helped me manage my time better during each section. The listening and reading sections were especially beneficial in enhancing my comprehension skills. Highly recommend this test to anyone serious about acing the TOEFL.",
              },
            ].map((customer, index) => (
              <blockquote key={index} className="rounded-xl border p-6 shadow-sm sm:p-8" >
                <div className="flex items-center gap-4" >
                  <Image src={customer.image} width={50} height={50} alt={customer.name} className="rounded-full" />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500" >
                      {
                        [...Array(5)].map((_, i) => (
                          <StarFilledIcon key={i} className="text-purple-400 shadow-[0_20px_50px_rgba(160,32,240,_0.7)]" />
                        ))
                      }
                    </div>
                    < p className="mt-0.5 text-lg font-medium text-gray-900" > {customer.name} </p>
                  </div>
                </div>

                < p className="mt-4 text-gray-700" > {customer.review} </p>
              </blockquote>
            ))
            }
          </div>
        </div>
      </section>

      <FAQLandingPAge />
      <MainFooter />
    </>
  )
};