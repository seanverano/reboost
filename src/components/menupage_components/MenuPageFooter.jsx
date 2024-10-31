import { AiOutlineHome } from "react-icons/ai";

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
    </>
  );
};

export default MenuPageFooter;
