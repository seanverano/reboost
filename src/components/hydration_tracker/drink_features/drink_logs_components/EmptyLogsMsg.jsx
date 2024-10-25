import { LuHistory } from "react-icons/lu";

const EmptyLogsMsg = () => (
  <div className="flex-1 flex flex-row gap-2 text-sm items-center justify-center text-[#4f8296] p-4">
    <LuHistory />
    <p>No drink logs recorded yet.</p>
  </div>
);

export default EmptyLogsMsg;
