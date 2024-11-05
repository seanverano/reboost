const ReminderTypeInput = ({ title, setTitle, placeholder }) => {
  return (
    <div className="px-4 flex justify-center flex-col w-full">
      <div className="px-10 pb-3 flex flex-row items-center justify-center my-1 border-b border-[#C9EADE] w-full">
        <h1 className="text-[#000000] mr-1 text-sm font-semibold leading-normal">
          Added:
        </h1>
        {title ? (
          <span className="flex items-center text-[#019963] text-sm font-normal animate-fadeIn">
            {title.length > 20 ? `${title.substring(0, 20)}...` : title}
          </span>
        ) : (
          <span className="flex items-center text-[#019963] text-sm font-normal">
            None
          </span>
        )}
      </div>

      <h1 className="text-left text-[#019963] mb-1 mt-3 text-sm font-bold leading-normal">
        Reminder Title
      </h1>
      <div className="text-left flex flex-col text-[#4f8296] text-xs font-normal leading-normal mb-4">
        Enter the title of reminder you want to set.
      </div>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="placeholder:italic bg-[#F9FBFA] text-[#000000] text-xs text-center mb-4 p-2 border border-[#C9EADE] rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-[#019963]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default ReminderTypeInput;
