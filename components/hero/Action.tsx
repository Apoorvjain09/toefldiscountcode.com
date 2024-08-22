import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X } from "lucide-react";

// Action Component
const Action = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="flex items-center gap-10">
        <Button
          size="lg"
          className="font-bold text-lg rounded-full bg-black text-white"
          onClick={toggleModal}
        >
          Get the Code -&gt;
        </Button>
        <img
          src="https://www.dropbox.com/scl/fi/l2h27mvqkwh84p5avhsem/Toefl-voucher-code.png?rlkey=zhv61jc6s4ngnu2m7n11v3jjz&st=mdl9txhf&raw=1"
          alt="Get Code for Free"
          className="max-h-full max-w-full rounded-lg object-cover shadow-md hidden"
        />
        <img
          src="https://www.dropbox.com/scl/fi/9ttfkhque77ud9lq0f7ps/toefl-buy-voucher.png?rlkey=2s5nj021aipcr1t2xhxrqi6gj&st=fa2gefqv&raw=1"
          alt="Buy Voucher"
          className="max-h-full max-w-full rounded-lg object-cover shadow-md hidden"
          rel="preload"
        />
      </div>

      {isModalOpen && (
        <div className="z-[100] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white rounded-lg px-2 sm:p-5 h-[90vh] sm:h-[80vh] w-[90vw] sm:min-w-[70vw] sm:max-w-[80vw] flex flex-col relative shadow-lg">
            <X
              onClick={toggleModal}
              className="absolute right-5 top-5 z-[100] cursor-pointer text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"
              size={24}
            />
            <div className="flex sm:flex-row flex-col items-center justify-center sm:justify-evenly gap-2 sm:gap-8 h-full ">
              <Link
                href="https://www.youtube.com/watch?v=UbxCeWKWFCc"
                target="_blank"
                className="h-full w-full flex-1 flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="https://www.dropbox.com/scl/fi/l2h27mvqkwh84p5avhsem/Toefl-voucher-code.png?rlkey=zhv61jc6s4ngnu2m7n11v3jjz&st=mdl9txhf&raw=1"
                  alt="Get Code for Free"
                  className="max-h-full max-w-full rounded-lg object-cover shadow-md"
                />
              </Link>
              <Link
                href="https://rzp.io/l/6UO7bMkD"
                target="_blank"
                className="h-full w-full flex-1 flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="https://www.dropbox.com/scl/fi/9ttfkhque77ud9lq0f7ps/toefl-buy-voucher.png?rlkey=2s5nj021aipcr1t2xhxrqi6gj&st=fa2gefqv&raw=1"
                  alt="Buy Voucher"
                  className="max-h-full max-w-full rounded-lg object-cover shadow-md"
                  rel="preload"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Action;
