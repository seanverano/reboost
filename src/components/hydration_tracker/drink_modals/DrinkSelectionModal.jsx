import { IoClose } from "react-icons/io5";

const DrinkSelectionModal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[#000000] bg-opacity-50 flex justify-center items-center">
      <div className="bg-transparent rounded-lg p-6 w-[320px] relative">
        <button onClick={onClose} className="absolute right-9 top-9">
          <IoClose className="text-[#1CABE3] hover:text-[#000000] text-lg" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default DrinkSelectionModal;
