const LogDrinkButton = ({ disabled, onClick }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`m-0 w-[120px] rounded-full h-10 px-4 flex items-center justify-center ${
      !disabled
        ? "bg-[#1CABE3] cursor-pointer"
        : "bg-[#1CABE3]/50 cursor-not-allowed"
    } transition-transform duration-200 active:translate-y-1`}
  >
    <p className="text-[#ffffff] text-xs font-bold leading-normal tracking-[0.015em]">
      Log Drink
    </p>
  </button>
);

export default LogDrinkButton;
