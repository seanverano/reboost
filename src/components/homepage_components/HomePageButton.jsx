const HomePageButton = () => {
  return (
    <button
      onClick={goDrink}
      className="px-6 py-2 bg-[#4f8296] text-white rounded-lg hover:bg-[#3d6475] transition-colors"
    >
      Hydration Tracker
    </button>
  );
};

export default HomePageButton;
