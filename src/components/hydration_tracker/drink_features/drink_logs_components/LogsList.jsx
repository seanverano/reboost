import LogEntry from "./LogEntry";

const LogsList = ({ logs, getTimeAgo }) => (
  <div className="flex-1 overflow-y-auto px-4 py-2">
    {logs
      .slice()
      .reverse()
      .map((log, index) => (
        <LogEntry
          key={index}
          timestamp={log.timestamp}
          drink={log.drink}
          volume={log.volume}
          getTimeAgo={getTimeAgo}
        />
      ))}
  </div>
);

export default LogsList;
