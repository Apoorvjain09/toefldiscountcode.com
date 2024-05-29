import Image from "next/image";
import heroImage from "@/public/assets/hero.png";
import whatsapp from "@/public/assets/whatsapp.svg";
import arrowLine from "@/public/assets/arrow-line.svg";

import { Baloo_2 } from "next/font/google";
import { cn } from "@/lib/utils";

import Action from "./Action";

const textFont = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Hero = () => {
  return (
    <div className="z-[-1] min-h-[80vh] md:min-h-fit lg:min-h-screen ">
      <div className=" relative min-h-[80vh] mt-6 md:mt-8 lg:mt-10 lg:w-[90%] 2xl:w-[80%] mx-auto px-4">
        <div className="z-[-1] hidden md:block absolute inset-0 bg-globe bg-no-repeat bg-center h-full w-full" style={{ backgroundSize: "100% 80%" }}></div>
        <div className="z-[-1] flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 flex flex-col lg:gap-20">
            <h2
              className={cn(
                textFont.className,
                "font-extrabold text-2xl text-center lg:text-start  lg:text-4xl leading-[30px] lg:leading-[40px]  2xl:leading-[55px] py-5 "
              )}
            >
              Unlock a TOEFL Voucher/ <br className="hidden md:block" />
              Promotion Code now for <br className="hidden md:block" /> $25 (Rs
              2000/-) off your <br className="hidden md:block" /> ETS TOEFL
              Registration <br className="hidden md:block" /> Fees! 🌐💡
            </h2>

            <div className="flex items-center justify-center lg:justify-between relative gap-10  z-10 ">
              <Action />
              <div className="absolute -right-10 bottom-3 hidden lg:block">
                <Image src={arrowLine} alt="" />
              </div>
            </div>
          </div>
          <div className="w-[70%] md:w-1/2  flex justify-center items-center lg:justify-end  ">
            <div
              className=" md:hidden absolute bg-globe bg-no-repeat bg-center h-full w-full"
              style={{ backgroundSize: "100% " }}
            ></div>
            <Image
              src={heroImage}
              alt=""
              className="md:w-96 md:h-96 lg:w-[440px] lg:h-[340px] xl:w-[500px] xl:h-[500px]  2xl:w-[unset] 2xl:h-[unset] z-[0]"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
