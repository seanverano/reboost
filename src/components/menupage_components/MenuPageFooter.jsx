import { FaArrowLeft } from "react-icons/fa";
import { GrResources } from "react-icons/gr";

const MenuPageFooter = ({ goHome }) => {
  return (
    <>
      <div className="text-lg font-manrope absolute bottom-0 left-0 bg-transparent px-3 py-3 justify-between flex flex-row w-full">
        <button
          onClick={goHome}
          className="flex 1 cursor-pointer items-center justify-center rounded-full h-4 bg-transparent text-[#000000] gap-2 font-bold leading-normal tracking-[0.015em] p-0"
        >
          <div className="flex items-center text-[#1CABE3] hover:text-[#000000]">
            <FaArrowLeft />
          </div>
        </button>
        <button className="flex 1 cursor-pointer items-center justify-center rounded-full h-4 bg-transparent text-[#000000] gap-2 font-bold leading-normal tracking-[0.015em] p-0">
          <div className="flex items-center text-[#1CABE3] hover:text-[#000000]">
            <GrResources />
          </div>
        </button>
      </div>
    </>
  );
};

export default MenuPageFooter;
