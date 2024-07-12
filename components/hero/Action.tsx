import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import youtubeicon from "@/public/assets/youtube-icon.png"

const Action = () => {
  const phoneNumber = "917011460487";
  const prefilledMessage = encodeURIComponent(
    "Please get me the TOEFL voucher code"
  );

  const youtubeLink = 'https://youtu.be/UbxCeWKWFCc?si=g2ba80uzGiq0GnZC' 
  return (
    <div className="flex items-center gap-10 ">
      <Link href={youtubeLink} target="_blank">
        <Button
          size="lg"
          className="font-bold text-lg rounded-full bg-black text-white"
        >
          Get the Code -&gt;
        </Button>
      </Link>
      <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
        <img src="assets/youtube-icon.png" className="min-w-[70px] max-h-[70px]" alt="" />
      </a>
    </div>
  );
};

export default Action;
