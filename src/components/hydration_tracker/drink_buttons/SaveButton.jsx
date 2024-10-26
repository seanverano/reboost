const SaveButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="m-0 w-[120px] rounded-full h-10 px-4 flex items-center justify-center bg-[#1CABE3] cursor-pointer transition-transform duration-200 active:translate-y-1"
  >
    <p className="text-white text-xs font-bold leading-normal tracking-[0.015em]">
      {children}
    </p>
  </button>
);

export default SaveButton;
