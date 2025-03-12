const ReviewPopup = ({ onClose, onReview }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-30 font-manrope">
      <div className="bg-[#F8FBFB] rounded-lg py-4 w-[225px] shadow-lg flex flex-col items-center justify-center animate-fadeIn">
        <div className="mb-4 text-center flex flex-col px-4">
          <p className="text-sm">
            Has Reboost helped you stay hydrated and take breaks?
          </p>
          <p className="text-sm mt-2">
            If so, your review on the Chrome Web Store would help me grow and
            improve, it means a lot to me! 💙
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={onReview}
            className="text-xs font-bold bg-[#1CABE3] text-white px-2 py-2 rounded-lg hover:bg-transparent hover:text-[#1CABE3] transition-colors duration-300"
          >
            Review ⭐
          </button>
          <button
            onClick={onClose}
            className="text-xs font-bold bg-[#019963] text-white px-2 py-2 rounded-lg hover:bg-transparent hover:text-gray-700 transition-colors duration-300"
          >
            Done! 🚀
          </button>
        </div>
        <button
          onClick={onClose}
          className="text-xs font-bold bg-gray-200 text-gray-700 px-2 py-2 mt-2 rounded-lg hover:bg-transparent hover:text-gray-700 transition-colors duration-300"
        >
          I haven't tried it yet.
        </button>
      </div>
    </div>
  );
};

export default ReviewPopup;
