import { AiOutlineHome } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const MenuPageFooter = ({ goHome }) => {
  return (
    <>
      <div className="text-lg font-manrope bg-gradient-to-r from-[#1CABE3] to-[#80D261] px-3 py-3 justify-center flex w-full">
        <button
          onClick={goHome}
          className="flex cursor-pointer items-center justify-center rounded-full h-4 bg-transparent text-[#000000] gap-2 font-bold p-0"
        >
          <div className="flex items-center text-[#F8FBFB] hover:text-[#000000]">
            <AiOutlineHome />
          </div>
        </button>
      </div>
      <div className="px-3 py-2 flex absolute top-0 right-0 text-[10px] z-10 gap-2">
        <a
          href="https://www.linkedin.com/in/sdverano"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-xs rounded-full bg-[transparent] text-[#4f8296] transform hover:scale-110 transition-transform duration-300 ease-linear"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/seanverano/reboost"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-xs rounded-full bg-[transparent]  text-[#4f8296] transform hover:scale-110 transition-transform duration-300 ease-linear"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/_seanverano"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-xs rounded-full bg-[transparent]  text-[#4f8296] transform hover:scale-110 transition-transform duration-300 ease-linear"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </>
  );
};

export default MenuPageFooter;
