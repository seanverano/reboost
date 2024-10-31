import { FaLinkedin } from "react-icons/fa";
import { GrResources } from "react-icons/gr";

const HomePageFooter = () => {
  return (
    <>
      <div className="text-[10px] font-manrope absolute top-0 right-0 bg-transparent px-3 py-2 z-20">
        <p className="text-[#4f8296] text-right w-full">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/sdverano"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1CABE3] hover:text-[#000000] font-bold flex items-center text-xs"
          >
            Sean Verano <FaLinkedin className="ml-1" />
          </a>
        </p>
      </div>
      <div className="text-[10px] font-manrope absolute bottom-0 left-0 bg-transparent px-3 py-2">
        <p className="text-[#4f8296] text-left w-full">
          © 2024 ARR{" "}
          <a
            href="https://www.linkedin.com/in/sdverano"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#019963] hover:text-[#000000] font-bold flex items-center text-xs"
          >
            <GrResources className="mr-1" /> Attribution
          </a>
        </p>
      </div>
    </>
  );
};

export default HomePageFooter;
