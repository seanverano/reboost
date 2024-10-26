const ResetSubButton = ({ onClick, className, children }) => (
  <button
    onClick={onClick}
    className={`text-lg font-bold text-white px-4 py-2 rounded-lg flex items-center justify-center cursor-pointer ${className}`}
  >
    {children}
  </button>
);

export default ResetSubButton;
