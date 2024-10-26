const ResetButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="mb-1 w-[120px] rounded-full h-10 px-4 flex items-center justify-center bg-[#000000] cursor-pointer transition-transform duration-200 active:translate-y-1"
  >
    <p className="text-[#ffffff] text-xs font-bold leading-normal tracking-[0.015em]">
      {children}
    </p>
  </button>
);

export default ResetButton;
