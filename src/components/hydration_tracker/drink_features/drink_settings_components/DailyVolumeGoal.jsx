const DailyVolumeGoal = ({ value, onChange }) => (
  <div className="flex flex-col justify-center">
    <h1 className="text-[#1CABE3] mb-1 text-sm font-bold leading-normal">
      Daily Goal
    </h1>
    <p className="flex items-center gap-2 text-[#4f8296] text-left text-xs font-normal leading-normal">
      Set a daily goal (in ml) to track your progress.
    </p>
    <input
      type="number"
      value={value}
      placeholder="Enter daily goal (in ml)"
      onChange={onChange}
      className="w-full font-semibold placeholder:italic bg-[#F9FBFA] text-[#000000] text-xs text-center mt-4 p-2 border border-[#CFECF4] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1CABE3]"
      min="500"
      max="10000"
      step="100"
    />
  </div>
);

export default DailyVolumeGoal;
