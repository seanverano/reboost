import { AiOutlineHome } from "react-icons/ai";
import { GrResources } from "react-icons/gr";

const MenuPageFooter = ({ goHome }) => {
  return (
    <>
      <div className="text-lg font-manrope absolute bottom-0 left-0 bg-[transparent] px-3 py-3 justify-between flex flex-row w-full">
        <button
          onClick={goHome}
          className="flex cursor-pointer items-center justify-center rounded-full h-4 bg-transparent text-[#000000] gap-2 font-bold p-0"
        >
          <div className="flex items-center text-[#1CABE3] hover:text-[#000000]">
            <AiOutlineHome />
            <span className="text-xs ml-2 ">Home</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default MenuPageFooter;
