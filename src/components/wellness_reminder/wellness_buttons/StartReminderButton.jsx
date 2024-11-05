import { FaPlayCircle } from "react-icons/fa";

const StartReminderButton = ({
  startReminder,
  selectedReminderType,
  message,
  timerDuration,
}) => {
  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        className="text-lg font-bold bg-[#019963] text-[#ffffff] px-4 py-2 rounded-lg hover:bg-[transparent] hover:text-[#019963]"
        onClick={startReminder}
        disabled={!selectedReminderType || !message || timerDuration <= 0}
      >
        <FaPlayCircle />
      </button>
    </div>
  );
};

export default StartReminderButton;
