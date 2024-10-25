const LogsEntry = ({ timestamp, drink, volume, getTimeAgo }) => (
  <div className="flex items-center justify-between p-3 mb-2 bg-[#CFECF4] rounded-lg shadow-sm">
    <div className="flex items-center justify-between">
      <div className="ml-2 text-[#4f8296] text-sm text-left">
        {getTimeAgo(timestamp)}
      </div>
      <div className="ml-14 text-right">
        <p className="text-[#1CABE3] text-sm font-medium">{drink}</p>
        <p className="text-[#1CABE3] text-xs">{volume} ml</p>
      </div>
    </div>
  </div>
);

export default LogsEntry;
