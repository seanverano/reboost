import { useState } from "react";
import WellnessHeader from "../components/wellness_reminder/WellnessHeader";
import WellnessHero from "../components/wellness_reminder/WellnessHero";
import ReminderInputs from "../components/wellness_reminder/ReminderInputs";
import StartReminder from "../components/wellness_reminder/StartReminder";
import StartReminderButton from "../components/wellness_reminder/wellness_buttons/StartReminderButton";

const WellnessPage = () => {
  const [showReminderTest, setShowReminderTest] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [selectedReminderType, setSelectedReminderType] = useState(null);

  const handleOpenReminderTest = () => {
    setShowReminderTest(true);
  };

  const handleCloseReminderTest = () => {
    setShowReminderTest(false);
  };

  return (
    <div className="bg-[#F8FBFB] relative w-[300px] h-[500px] overflow-hidden font-manrope">
      <WellnessHeader />
      <h1 className="mt-2 text-center text-[#000000] font-semibold text-lg leading-tight tracking-[-0.015em]">
        Boost Wellness with a Break
      </h1>
      <WellnessHero />
      <ReminderInputs
        title={title}
        setTitle={setTitle}
        message={message}
        setMessage={setMessage}
      />
      <div className="flex justify-center">
        <StartReminderButton
          handleOpenReminderTest={handleOpenReminderTest}
          disabled={!title || !message}
        />
      </div>
      <StartReminder
        show={showReminderTest}
        onClose={handleCloseReminderTest}
        selectedReminderType={{ name: title }}
        message={message}
        setTimerStarted={setIsTimerStarted}
      />
    </div>
  );
};

export default WellnessPage;
