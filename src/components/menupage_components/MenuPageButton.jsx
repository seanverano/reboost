const MenuPageButton = ({ goDrink }) => {
  return (
    <>
      <div className="flex flex-col justify-center gap-2 relative bg-[#F8FBFB] pt-4">
        <div className="text-sm font-bold text-center">
          <p className="text-center px-8 text-[#4f8296] text-xs font-normal leading-normal mb-4">
            Refresh your day with a wellness boost, one healthy habit at a time.
          </p>
          <div className="flex flex-col text-sm font-bold text-center mx-2">
            <button
              onClick={goDrink}
              className="mx-3 items-center px-4 py-3 rounded-lg text-[#F8FBFB] bg-[#1CABE3]"
            >
              <span className="text-lg leading-normal tracking-[0.015em]">
                Hydration Tracker
              </span>
              <p className="text-xs text-[#F8FBFB]/80">
                Track and log your water intake.
              </p>
            </button>
          </div>
        </div>
        <div className="flex flex-col text-sm font-bold text-center mx-2">
          <button className="items-center mx-3 px-4 py-3 rounded-lg text-[#F8FBFB] bg-[#019963]">
            <span className="text-lg leading-normal tracking-[0.015em]">
              Wellness Reminder
            </span>
            <p className="text-xs text-[#F8FBFB]/80">
              Get various break reminders.
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuPageButton;
