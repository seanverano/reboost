const WellnessSelection = () => {
  return (
    <>
      <div className="relative z-10">
        <h1 className="text-center font-semibold text-[lg] leading-tight tracking-[-0.015em] px-4 mb-1 mt-4">
          Your Drink, Your Choice
        </h1>
        <p className="flex justify-center px-2 text-[#4f8296] text-xs font-normal leading-normal mb-5">
          Select a beverage and volume, then log it.
        </p>
        <div className="flex flex-row">
          <div className="flex-[80%] gap-y-2 mb-5 flex flex-col text-center items-center justify-center"></div>
        </div>
      </div>
    </>
  );
};

export default WellnessSelection;
