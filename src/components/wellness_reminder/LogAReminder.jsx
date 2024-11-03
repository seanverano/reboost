import CheckReminders from "./wellness_buttons/CheckReminders";
import SetTimer from "./wellness_buttons/SetTimer";

const LogAReminder = () => {
  return (
    <div className="relative flex flex-row gap-5 justify-center z-1">
      <SetTimer />
      <CheckReminders />
    </div>
  );
};

export default LogAReminder;
