const ReminderMessageInput = ({ message, setMessage }) => {
  return (
    <div className="px-4 flex justify-center flex-col w-full">
      <div className="px-10 pb-3 flex flex-row items-center justify-center my-1 border-b border-[#C9EADE] w-full">
        <h1 className="text-[#000000] mr-1 text-sm font-semibold leading-normal">
          Added:
        </h1>
        {message ? (
          <span className="flex items-center text-[#019963] text-sm font-normal animate-fadeIn">
            {message.length > 20 ? `${message.substring(0, 20)}...` : message}
          </span>
        ) : (
          <span className="flex items-center text-[#019963] text-sm font-normal">
            None
          </span>
        )}
      </div>

      <h1 className="text-left text-[#019963] mb-1 mt-3 text-sm font-bold leading-normal">
        Add Message
      </h1>
      <div className="text-left flex flex-col text-[#4f8296] text-xs font-normal leading-normal mb-4">
        Enter any details or notes to include with your reminder.
      </div>
      <textarea
        id="message"
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="placeholder:italic bg-[#F9FBFA] text-[#000000] text-xs text-center mb-4 p-2 border border-[#CFFFD8] rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-[#019963]"
        placeholder="e.g. (Relax your eyes for few mins.)"
      />
    </div>
  );
};

export default ReminderMessageInput;
