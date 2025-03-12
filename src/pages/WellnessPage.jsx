import { useState } from "react";
import WellnessHeader from "../components/wellness_reminder/WellnessHeader";
import WellnessHero from "../components/wellness_reminder/WellnessHero";
import ReminderInputs from "../components/wellness_reminder/ReminderInputs";
import StartReminder from "../components/wellness_reminder/StartReminder";
import SetTimerButton from "../components/wellness_reminder/wellness_buttons/SetTimerButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const WellnessPage = () => {
  const [showReminderTest, setShowReminderTest] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleOpenReminderTest = () => {
    setShowReminderTest(true);
  };

  const handleCloseReminderTest = () => {
    setShowReminderTest(false);
  };

  return (
    <div className="bg-[#F8FBFB] relative w-[300px] h-[500px] overflow-hidden font-manrope">
      <div className="px-3 py-2 flex absolute top-0 right-0 text-[10px] z-10 gap-2">
        <a
          href="https://www.linkedin.com/in/sdverano"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-xs rounded-full bg-[transparent] text-[#4f8296] transform hover:scale-110 transition-transform duration-300 ease-linear"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/seanverano/reboost"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-xs rounded-full bg-[transparent]  text-[#4f8296] transform hover:scale-110 transition-transform duration-300 ease-linear"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/_seanverano"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-xs rounded-full bg-[transparent]  text-[#4f8296] transform hover:scale-110 transition-transform duration-300 ease-linear"
        >
          <FaSquareXTwitter />
        </a>
      </div>
      <WellnessHeader />
      <h1 className="mt-2 text-center text-[#000000] font-semibold text-lg leading-tight tracking-[-0.015em]">
        Improve Wellness with a Break
      </h1>
      <WellnessHero />
      <ReminderInputs
        title={title}
        setTitle={setTitle}
        message={message}
        setMessage={setMessage}
      />
      <div className="flex justify-center">
        <SetTimerButton
          handleOpenReminderTest={handleOpenReminderTest}
          title={title}
          message={message}
        />
      </div>
      <StartReminder
        show={showReminderTest}
        onClose={handleCloseReminderTest}
        selectedReminderType={{ name: title }}
        message={message}
      />
    </div>
  );
};

export default WellnessPage;
