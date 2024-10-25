const TotalLogsVolume = ({ volume }) => (
  <div className="flex-none border-t border-[#CFECF4] p-4 w-full">
    <div className="flex justify-between items-center">
      <span className="text-[#4f8296] text-sm">Total Volume:</span>
      <span className="text-[#1CABE3] font-bold">
        {(volume / 1000).toFixed(1)}L
      </span>
    </div>
  </div>
);

export default TotalLogsVolume;
