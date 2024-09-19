import { FiPhone } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import { SiZalo } from "react-icons/si";

const ContactButtons = () => {
  return (
    <div className="relative overflow-hidden z-[999]">
      <div className="fixed bottom-10 right-[6px] p-[17px] space-y-[9px]">
        <a
          href="tel:0383005327"
          className="relative rounded-[10px] w-[45px] h-[35px] bg-red-500 flex justify-center items-center transition-transform duration-300 transform hover:scale-110 hover:animate-shake"
        >
          <FiPhone className="text-white text-[25px]" />
          <div className="absolute inset-0 rounded-full border-2 border-red-wave animate-wave"></div>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61565480232008&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="relative rounded-[10px] w-[45px] h-[35px] bg-red-500 flex justify-center items-center transition-transform duration-300 transform hover:scale-110 hover:animate-shake"
        >
          <RiMessengerLine className="text-white text-[25px]" />
          <div className="absolute inset-0 rounded-full border-2 border-red-wave animate-wave"></div>
        </a>
        <a
          href="https://zalo.me/0383005327"
          target="_blank"
          rel="noopener noreferrer"
          className="relative rounded-[10px] w-[45px] h-[35px] bg-red-500 flex justify-center items-center transition-transform duration-300 transform hover:scale-110 hover:animate-shake"
        >
          <SiZalo className="text-white text-[25px]" />
          <div className="absolute inset-0 rounded-full border-2 border-red-wave animate-wave"></div>
        </a>
      </div>
    </div>
  );
};

export default ContactButtons;
