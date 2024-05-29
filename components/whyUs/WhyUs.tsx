import Image from "next/image";
import PerkCard from "./PerkCard";
import { perks } from "./WhyUs.constent";
import globe from "../../../../public/assets/globe.png";

const WhyUs = () => {
  return (
    <div className="relative mt-10 lg:mt-0">
      <h2 className="text-prime text-center text-4xl lg:text-5xl font-bold ">
        WHY CHOOSE US
      </h2>
      <div className="relative ">
        {/* <Image src={globe} alt="" className="absolute " /> */}
        <div className=" xl:w-[85%] 2xl:w-[70%] mx-auto grid grid=cols-1 md:grid-cols-2 lg:grid-cols-4  xl:grid-cols-4 mt-[10vh] gap-6 px-4 xl:px-0 ">
          {perks.map((perk, index) => (
            <PerkCard key={index} perk={perk} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
