const ReminderTimerInput = ({ timerDuration, setTimerDuration }) => {
  return (
    <div className="px-4">
      <h1 className="text-left text-[#019963] mb-1 mt-3 text-sm font-bold leading-normal">
        Reminder Timer
      </h1>
      <div className="text-left flex flex-col text-[#4f8296] text-xs font-normal leading-normal mb-4">
        Set the timer duration in seconds, then click play to start the
        reminder.
        <br /> <br />
        Once the timer starts, you can close the extension. The reminder will
        notify you when the timer ends.
        <br /> <br />
        Remember, only one reminder can run at a time. Starting a new one will
        cancel the current timer.
      </div>
      <input
        type="number"
        id="timer"
        value={timerDuration}
        onChange={(e) => setTimerDuration(parseInt(e.target.value) || 0)}
        min="1"
        placeholder="Set timer (in seconds)"
        className="placeholder:italic bg-[#F9FBFA] text-[#000000] text-xs text-center mb-4 p-2 border border-[#C9EADE] rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-[#019963]"
      />
    </div>
  );
};

export default ReminderTimerInput;
