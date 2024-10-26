import { IoClose } from "react-icons/io5";

const DrinkSettingsModal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-transparent rounded-lg p-2 w-[320px] relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute right-9 top-5 w-6 h-6 flex items-center justify-center"
        >
          <span className="text-[#1CABE3] hover:text-black text-lg transition-colors duration-200">
            <IoClose />
          </span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default DrinkSettingsModal;
