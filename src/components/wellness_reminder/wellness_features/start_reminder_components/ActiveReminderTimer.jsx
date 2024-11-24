import React from "react";

const ActiveTimerIndicator = ({ isTimerActive, timeRemaining, formatTime }) => {
  return (
    <div className="flex flex-col items-center mt-3">
      {isTimerActive && (
        <div className="text-[#000000]">
          Time Remaining:{" "}
          <span className="text-[#019963] font-bold">
            {formatTime(timeRemaining)}
          </span>
        </div>
      )}
    </div>
  );
};

export default ActiveTimerIndicator;
