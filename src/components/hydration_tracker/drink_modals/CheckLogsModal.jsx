import { IoClose } from "react-icons/io5";

const CheckLogsModal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-[#000000] bg-opacity-50 flex justify-center items-center z-20 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-transparent rounded-lg p-2 w-[320px] relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute right-10 top-4 w-6 h-6 flex items-center justify-center"
        >
          <span className="text-[#1CABE3] hover:text-[#000000] text-lg transition-colors duration-200">
            <IoClose className="text-[#1CABE3] hover:text-[#000000] text-lg" />
          </span>
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CheckLogsModal;
