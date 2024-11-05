import ReminderType from "./wellness_features/ReminderType";
import ReminderMessage from "./wellness_features/ReminderMessage";

const ReminderInputs = ({ title, setTitle, message, setMessage }) => {
  return (
    <div className="relative z-10">
      <p className="flex justify-center px-2 text-[#4f8296] text-xs font-normal leading-normal mb-4 mt-2">
        Enter a title, message, and set timer.
      </p>
      <div className="flex flex-row">
        <div className="flex-[80%] gap-y-2 mb-5 flex flex-col text-center items-center justify-center">
          <ReminderType title={title} setTitle={setTitle} />
          <ReminderMessage message={message} setMessage={setMessage} />
        </div>
      </div>
    </div>
  );
};

export default ReminderInputs;
