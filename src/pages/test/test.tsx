import { RiMessengerLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { SiZalo } from "react-icons/si";
const Test = () => {
  return (
    <>
      <div className="relative overflow-hidden z-[999]">
        <div className="fixed bottom-10 right-[-20px] p-[17px] space-y-[9px]">
          <div className="rounded-[10px] w-[259px] h-[66px] bg-[#5A7C88] flex justify-left items-center space-x-[32px] transform translate-x-[69%] hover:translate-x-0 transition-transform duration-500">
            <FiPhone className="text-white text-[45px] ml-[17px]" />
            <div className="space-y-[-6px]">
              <h2 className="text-[20px] font-semibold text-white">
                0383005327
              </h2>
              <p className="text-white text-[20px]">Trực Hotline 24/7</p>
            </div>
          </div>
          <div className="rounded-[10px] w-[259px] h-[66px] bg-[#5A7C88] flex justify-left items-center space-x-[32px] transform translate-x-[69%] hover:translate-x-0 transition-transform duration-500">
            <RiMessengerLine className="text-white text-[45px] ml-[17px]" />
            <div className="space-y-[-6px]">
              <h2 className="text-[20px] font-semibold text-white">
                Chat Messenger
              </h2>
              <p className="text-white text-[20px]">24/7</p>
            </div>
          </div>
          <div className="rounded-[10px] w-[259px] h-[66px] bg-[#5A7C88] flex justify-left items-center space-x-[32px] transform translate-x-[69%] hover:translate-x-0 transition-transform duration-500">
            <SiZalo className="text-white text-[45px] ml-[17px]" />
            <div className="space-y-[-6px]">
              <h2 className="text-[20px] font-semibold text-white">
                Chat 24/7
              </h2>
              <p className="text-white text-[20px]">0383005327</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
