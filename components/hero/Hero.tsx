import { Baloo_2 } from "next/font/google";
import { cn } from "@/lib/utils";
import Action from "./Action";

const textFont = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Hero = () => {
  return (
    <>
      <h1 className="font-bold text-3xl sm:text-4xl mt-10 sm:mb-[3rem] text-center px-5"><span className="font-extrabold">MJ Study Abroad</span>, in association with <span className="font-extrabold">ETS</span>, offers</h1>
      <div className="z-[-1] mb-20 sm:h-auto h-[80vh] ">
        <div className=" relative mt-6 md:mt-8 lg:mt-0 lg:w-[90%] 2xl:w-[80%] mx-auto px-4">
          <div className="z-[-1] hidden md:block absolute inset-0 bg-globe bg-no-repeat bg-center h-full w-full" style={{ backgroundSize: "100% 80%" }}></div>
          <div className="z-[-1] flex flex-col-reverse lg:flex-row items-center gap-10">

            <div className="w-full flex flex-col lg:gap-20">
              <h2
                className={cn(
                  textFont.className,
                  "font-bold text-2xl text-center lg:text-start leading-[30px] lg:leading-[40px]  2xl:leading-[55px] py-5 "
                )}
              >
                🎓 Save <span className="font-extrabold text-red-600 rounded-lg px-2 py-1 ">INR 4,000</span> on TOEFL Exam Booking <br />
                🎓 Save <span className="font-extrabold text-red-600 rounded-lg px-2 py-1 ">INR 3,000</span> on TOEFL Voucher <br />
                🎓 Save <span className="font-extrabold text-red-600 rounded-lg px-2 py-1 ">INR 1,700</span> with a TOEFL Discount Code
              </h2>

              <div className="flex items-center justify-center lg:justify-between relative gap-10  z-10 ">
                <Action />
                {/* <div className="absolute -right-10 bottom-3 hidden xl:block">
                  <img src="assets/arrow-line.svg" alt="" />
                </div> */}
              </div>
            </div>

            <div className="w-[60%] flex justify-center items-center lg:justify-end  ">
              <div
                className=" md:hidden absolute bg-globe bg-no-repeat bg-center h-full w-full"
                style={{ backgroundSize: "100% " }}
              ></div>
              <img
                src="assets/hero.webp"
                alt=""
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Hero;
