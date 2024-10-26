const DrinkProgressCard = ({
  totalVolume,
  dailyGoal,
  isAnimating,
  calculateProgress,
}) => {
  return (
    <div className="flex flex-wrap gap-4 px-10 py-5">
      <div
        className={`flex flex-1 flex-col gap-2 rounded-xl border border-[#d0e0e6] bg-[#EEF8FB] backdrop-blur-lg shadow-lg p-6 relative overflow-hidden ${
          isAnimating ? "animate-pulsate" : ""
        }`}
      >
        <div
          className={`absolute bottom-0 left-0 w-full bg-[#1CABE3] transition-all duration-1000 ease-out 
            ${isAnimating ? "animate-progress-wave" : ""}`}
          style={{
            height: `${calculateProgress()}%`,
            zIndex: 0,
          }}
        />

        <div className="relative z-10">
          <p
            className={`mb-2 tracking-light text-4xl font-bold font-[#000000] leading-tight truncate ${
              calculateProgress() >= 100
                ? "text-[#F8FBFB]"
                : calculateProgress() >= 80
                ? "text-[#F8FBFB]"
                : "text-[#000000]"
            }`}
          >
            {calculateProgress()}%
          </p>
          <p
            className={`text-sm font-normal leading-normal ${
              calculateProgress() >= 100
                ? "text-[#CFECF4]"
                : calculateProgress() >= 50
                ? "text-[#CFECF4]"
                : "text-[#4f8296]"
            }`}
          >
            {totalVolume >= dailyGoal
              ? "Goal Reached! 🎉"
              : totalVolume >= dailyGoal / 2
              ? "Keep it Up! 💪"
              : "Drink Up! 💧"}
          </p>
          <p
            className={`text-[13px] font-bold leading-normal tracking-[0.015em] mt-4 ${
              calculateProgress() >= 100
                ? "text-[#CFECF4]"
                : calculateProgress() >= 30
                ? "text-[#CFECF4]"
                : "text-[#4f8296]"
            }`}
          >
            {(totalVolume / 1000).toFixed(1)} of {(dailyGoal / 1000).toFixed(1)}{" "}
            L
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrinkProgressCard;
