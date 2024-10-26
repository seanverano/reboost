const CheckLogsButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="m-0 w-[120px] rounded-full h-10 px-4 flex items-center justify-center bg-[#000000] cursor-pointer transition-all duration-200 active:translate-y-1"
  >
    <p className="text-white text-xs font-bold leading-normal tracking-[0.015em]">
      Check Logs
    </p>
  </button>
);

export default CheckLogsButton;
