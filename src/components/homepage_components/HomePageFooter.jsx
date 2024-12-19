import { FaLinkedin } from "react-icons/fa";

const HomePageFooter = () => {
  return (
    <>
      <div className="text-[10px] font-manrope absolute bottom-0 left-0 bg-transparent px-3 py-2">
        <p className="text-[#4f8296] text-left w-full">
          v1.2.0 | © 2024 Developed by{" "}
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
    </>
  );
};

export default HomePageFooter;
