import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const HomePageFooter = () => {
  return (
    <>
      <div className="text-[10px] font-manrope absolute bottom-0 left-0 bg-transparent px-3 py-2">
        <p className="text-[#4f8296] text-left w-full">
          Built with 🥛 by{" "}
          <a
            href="https://seanverano.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#1CABE3] to-[#80D261] text-transparent bg-clip-text font-semibold ml-1 mr-1 hover:text-black"
          >
            SDV
          </a>{" "}
        </p>
        <span className="text-[#4f8296]">v1.2.5 © 2024-2025</span>
      </div>
      <div className="px-3 py-2 flex absolute top-0 right-0 text-[10px] z-10 gap-2 ">
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

export default HomePageFooter;
