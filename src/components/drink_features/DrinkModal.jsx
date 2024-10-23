import { IoClose } from "react-icons/io5";

const DrinkModal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[#000000] bg-opacity-50 flex justify-center items-center">
      <div className="bg-transparent rounded-lg p-6 w-[280px] relative">
        <div className="flex flex-col justify-center h-[400px] w-[280px] items-center font-manrope font-medium bg-[#EEF8FB] rounded-lg">
          <button onClick={onClose} className="absolute right-9 top-9">
            <IoClose className="text-[#000000] hover:text-[#1CABE3] text-lg" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DrinkModal;
