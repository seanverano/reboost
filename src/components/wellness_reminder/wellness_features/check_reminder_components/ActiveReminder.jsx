import { IoMdClose } from "react-icons/io";

const ActiveReminder = ({ reminderType, timeLeft, onCancel }) => {
  return (
    <div className="mx-4 p-3 bg-[red] rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-[#019963] text-sm font-bold">
            {reminderType} Reminder
          </h3>
          <p className="text-[#4f8296] text-xs">
            Time remaining: {Math.floor(timeLeft / 60)}:
            {String(timeLeft % 60).padStart(2, "0")}
          </p>
        </div>
        <button
          onClick={onCancel}
          className="text-[#019963] hover:text-[#015d3d] transition-colors"
        >
          <IoMdClose size={20} />
        </button>
      </div>
    </div>
  );
};

export default ActiveReminder;
