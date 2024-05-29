import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import whatsapp from "../../../../public/assets/whatsapp.svg";
import youtubeicon from "@/public/assets/youtube-icon.png"

const Action = () => {
  const phoneNumber = "917011460487";
  const prefilledMessage = encodeURIComponent(
    "Please get me the TOEFL voucher code"
  );
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${prefilledMessage}`;

  const youtubeLink = 'https://www.youtube.com/watch?v=FUjYPJv2g2E'
  return (
    <div className="flex items-center gap-10 ">
      <Link href={youtubeLink} target="_blank">
        <Button
          size="lg"
          className="font-bold text-lg rounded-full "
        >
          Get the Code -&gt;
        </Button>
      </Link>
      <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
        <Image src={youtubeicon} alt="" height={70} />
      </a>
    </div>
  );
};

export default Action;
