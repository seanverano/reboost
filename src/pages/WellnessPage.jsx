import { useState } from "react";
import WellnessHeader from "../components/wellness_reminder/WellnessHeader";
import WellnessHero from "../components/wellness_reminder/WellnessHero";
import WellnessSelection from "../components/wellness_reminder/WellnessSelection";
import LogAReminder from "../components/wellness_reminder/LogAReminder";

const WellnessPage = () => {
  const [selectedReminderType, setSelectedReminderType] = useState(null);
  const [selectedAudioType, setSelectedAudioType] = useState(null);

  return (
    <div className="bg-[#F8FBFB] relative w-[300px] h-[500px] overflow-hidden font-manrope">
      <WellnessHeader />
      <h1 className="mt-2 text-center text-[#000000] font-semibold text-[lg] leading-tight tracking-[-0.015em]">
        Boost Wellness with a Break
      </h1>
      <WellnessHero />
      <WellnessSelection
        selectedReminderType={selectedReminderType}
        setSelectedReminderType={setSelectedReminderType}
        selectedAudioType={selectedAudioType}
        setSelectedAudioType={setSelectedAudioType}
      />
      <LogAReminder />
    </div>
  );
};

export default WellnessPage;
