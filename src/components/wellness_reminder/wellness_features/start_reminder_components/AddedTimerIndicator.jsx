const AddedTimerIndicator = ({ timerDuration }) => {
  return (
    <div className="px-1 flex justify-center flex-col">
      <div className="px-10 pb-3 flex flex-row items-center justify-center my-1 border-b border-[#C9EADE] w-full">
        <h1 className="text-[#000000] mr-1 text-sm font-semibold leading-normal">
          Added:
        </h1>
        {timerDuration > 0 ? (
          <span className="flex items-center text-[#019963] text-sm font-normal animate-fadeIn">
            {timerDuration >= 3600
              ? `${Math.floor(timerDuration / 3600)} hour${
                  Math.floor(timerDuration / 3600) > 1 ? "s" : ""
                }`
              : timerDuration >= 60
              ? `${Math.floor(timerDuration / 60)} minute${
                  Math.floor(timerDuration / 60) > 1 ? "s" : ""
                }`
              : `${timerDuration} second${timerDuration > 1 ? "s" : ""}`}
          </span>
        ) : (
          <span className="flex items-center text-[#019963] text-sm font-normal">
            None
          </span>
        )}
      </div>
    </div>
  );
};

export default AddedTimerIndicator;
