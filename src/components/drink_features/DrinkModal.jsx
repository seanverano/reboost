import { IoClose } from "react-icons/io5";

const DrinkModal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[#000000] bg-opacity-50 flex justify-center items-center">
      <div className="bg-transparent rounded-lg p-6 w-[280px] relative">
        <button
          className="absolute top-2 right-4 w-12 h-12 bg-[#000000] rounded-full flex justify-center items-center"
          onClick={onClose}
        >
          <IoClose className="text-[#ffffff] text-lg" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default DrinkModal;
