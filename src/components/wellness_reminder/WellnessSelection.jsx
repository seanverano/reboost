import ReminderType from "./wellness_features/ReminderType";
import AudioType from "./wellness_features/AudioType";

const WellnessSelection = ({
  selectedReminderType,
  setSelectedReminderType,
  selectedAudioType,
  setSelectedAudioType,
}) => {
  return (
    <div className="relative z-10">
      <p className="flex justify-center px-2 text-[#4f8296] text-xs font-normal leading-normal mb-4 mt-2">
        Select a reminder and sound, then set a timer.
      </p>
      <div className="flex flex-row">
        <div className="flex-[80%] gap-y-2 mb-5 flex flex-col text-center items-center justify-center">
          <ReminderType
            selectedReminderType={selectedReminderType}
            setSelectedReminderType={setSelectedReminderType}
          />
          <AudioType
            selectedAudioType={selectedAudioType}
            setSelectedAudioType={setSelectedAudioType}
          />
        </div>
      </div>
    </div>
  );
};

export default WellnessSelection;
