import React from "react";
import { infos } from "./GetCode.constent";

const HowToGetCode = () => {
  return (
    <div>
      <h2 className="text-center lg:text-start text-prime font-bold text-3xl">
        HOW TO GET CODE?{" "}
      </h2>
      <div className="xl:w-[80%] py-4 px-2 md:px-[5dvh] lg:px-2 ">
{/*         <p className=" mark text-lg font-medium text-center md:text-start">
          <span className="bg-prime bg-opacity-5 px-2  text-black rounded-lg">
            WhatsApp us at (+91) 7011460487.
          </span>{" "}
          We will promptly provide you with the code.
        </p> */}
        <div className="flex flex-col gap-3 mt-2">
          {infos?.map((info, index) => (
            <div key={index}>
              <div className="flex gap-2 font-bold text-xl">
                <span>{index + 1}.</span>
                <p className="">{info.text}</p>
              </div>
              {info?.subList?.length! > 0 &&
                info.subList?.map((list, i) => (
                  <p className="font-semibold px-8 text-lg" key={i}>
                    • {list}
                  </p>
                ))}
            </div>
          ))}
        </div>
        <p className="font-bold text-xl mt-5">Act Now</p>
      </div>
    </div>
  );
};

export default HowToGetCode;
