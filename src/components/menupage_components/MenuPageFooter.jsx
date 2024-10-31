import { AiOutlineHome } from "react-icons/ai";

const MenuPageFooter = ({ goHome }) => {
  return (
    <>
      <div className="text-lg font-manrope bg-[transparent] px-3 py-3 justify-center flex w-full">
        <button
          onClick={goHome}
          className="flex cursor-pointer items-center justify-center rounded-full h-4 bg-transparent text-[#000000] gap-2 font-bold p-0"
        >
          <div className="flex items-center text-[#1CABE3] hover:text-[#019963]">
            <AiOutlineHome />
          </div>
        </button>
      </div>
    </>
  );
};

export default MenuPageFooter;
