import React from "react";

const SetTimerButton = ({ handleOpenReminderTest, title, message }) => {
  const isDisabled = !title || !message;

  return (
    <button
      onClick={handleOpenReminderTest}
      disabled={isDisabled}
      className={`m-0 w-[120px] rounded-full h-10 px-4 flex items-center justify-center
         ${
           !isDisabled
             ? "bg-[#019963] cursor-pointer transition-transform duration-200 active:translate-y-1"
             : "bg-[#019963]/50 cursor-not-allowed"
         } transition-transform duration-200 active:translate-y-1`}
    >
      <p className="text-[#ffffff] text-xs font-bold leading-normal tracking-[0.015em]">
        Set Timer
      </p>
    </button>
  );
};

export default SetTimerButton;
