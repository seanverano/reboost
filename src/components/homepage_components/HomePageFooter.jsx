import { FaLinkedin } from "react-icons/fa";

const HomePageFooter = () => {
  return (
    <>
      <div className="text-xs font-manrope absolute bottom-0 left-0 bg-transparent px-3 py-2">
        <p className="text-[#4f8296] text-left w-full">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/sdverano"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1CABE3] font-bold flex items-center text-sm"
          >
            Sean Verano <FaLinkedin className="ml-1" />
          </a>
        </p>
      </div>
    </>
  );
};

export default HomePageFooter;
