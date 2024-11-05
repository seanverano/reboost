import React from "react";

const StartReminderButton = ({ handleOpenReminderTest }) => {
  return (
    <button
      onClick={handleOpenReminderTest}
      className={`m-0 w-[120px] rounded-full h-10 px-4 flex items-center justify-center 
         bg-[#019963] cursor-pointer active:translate-y-1 transition-all duration-200`}
    >
      <p className="text-white text-xs font-bold leading-normal tracking-[0.015em]">
        Start Reminder
      </p>
    </button>
  );
};

export default StartReminderButton;
