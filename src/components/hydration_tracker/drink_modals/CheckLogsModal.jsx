import { IoClose } from "react-icons/io5";

const CheckLogsModal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[#000000] bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-transparent rounded-lg p-2 w-[320px] relative">
        <button onClick={onClose} className="absolute right-11 top-5">
          <IoClose className="text-[#1CABE3] hover:text-[#000000] text-lg" />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CheckLogsModal;
