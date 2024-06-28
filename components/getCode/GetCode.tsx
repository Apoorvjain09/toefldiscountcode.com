import Action from "../hero/Action";
import HowToGetCode from "./HowToGetCode";
import Video from "./Video";

const GetCode = () => {
  return (
    <div className="py-[15dvh]" id="get-code">
      <div className="flex flex-col-reverse lg:flex-row gap-y-5  xl:w-[85%] mx-auto px-4 xl:px-0">
        <div className="lg:w-1/2">
          <HowToGetCode />
          <div className="py-2 flex justify-center lg:justify-start">
            <Action />
          </div>
        </div>
        <Video />
      </div>
    </div>
  );
};

export default GetCode;
