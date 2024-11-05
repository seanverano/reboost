import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import WellnessReminderModal from "./wellness_modals/WellnessReminderModal";
import AddedTimerIndicator from "./wellness_features/start_reminder_components/AddedTimerIndicator";
import ReminderTimerInput from "./wellness_features/start_reminder_components/ReminderTimerInput";
import StartReminderButton from "./wellness_buttons/StartReminderButton";
import ActiveTimerIndicator from "./wellness_features/start_reminder_components/ActiveReminderTimer";

const StartReminder = ({
  show,
  onClose,
  selectedReminderType,
  message,
  setTimerStarted,
}) => {
  const [timerDuration, setTimerDuration] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      chrome.storage.local.get(["timerData"], (result) => {
        if (result.timerData) {
          const { duration, isActive, timeRemaining } = result.timerData;
          setTimerDuration(duration || 0);
          setIsTimerActive(isActive || false);
          setTimeRemaining(timeRemaining || 0);
        }
      });
    }
  }, []);

  useEffect(() => {
    let interval;
    if (isTimerActive) {
      checkTimerStatus();
      interval = setInterval(checkTimerStatus, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isTimerActive]);

  const checkTimerStatus = () => {
    chrome.runtime.sendMessage({ action: "getTimerStatus" }, (response) => {
      if (response) {
        setTimeRemaining(response.timeRemaining);
        setIsTimerActive(response.isActive);
        if (response.shouldShowNotification && !showPopup) {
          setShowPopup(true);
        }
      }
    });
  };

  const startReminder = () => {
    const duration = parseInt(timerDuration);
    if (isNaN(duration) || duration <= 0) {
      alert("Please enter a valid duration");
      return;
    }

    chrome.runtime.sendMessage(
      {
        action: "startTimer",
        payload: {
          title: selectedReminderType?.name || "",
          message,
          duration,
        },
      },
      (response) => {
        if (response?.status === "Timer started") {
          setIsTimerActive(true);
          setTimeRemaining(duration);
          setShowPopup(false);
          setTimerStarted(true);
        }
      }
    );
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const closePopup = () => {
    setShowPopup(false);
    chrome.storage.local.get(["timerData"], (result) => {
      if (result.timerData) {
        const updatedTimerData = {
          ...result.timerData,
          notificationShown: true,
        };
        chrome.storage.local.set({ timerData: updatedTimerData });
      }
    });
  };

  return (
    <WellnessReminderModal show={show} onClose={onClose}>
      <div className="flex flex-col justify-center py-4 items-center font-manrope font-medium bg-[#E8F8EE] rounded-lg max-h-[80vh]">
        <AddedTimerIndicator timerDuration={timerDuration} />

        <ReminderTimerInput
          timerDuration={timerDuration}
          setTimerDuration={setTimerDuration}
        />

        <StartReminderButton
          startReminder={startReminder}
          selectedReminderType={selectedReminderType}
          message={message}
          timerDuration={timerDuration}
        />

        <ActiveTimerIndicator
          isTimerActive={isTimerActive}
          timeRemaining={timeRemaining}
          formatTime={formatTime}
        />

        {showPopup && (
          <div className="fixed inset-0 flex justify-center items-center z-30">
            <div className="bg-[#F8FBFB] rounded-lg p-4 w-[250px] shadow-lg flex flex-col items-center justify-center">
              <div className="mb-2">
                <p>Your reminder timer has ended! </p>
                <p>Did you receive your notification?</p>
              </div>
              <button
                onClick={closePopup}
                className="text-lg font-bold bg-[#019963] text-[#ffffff] px-4 py-2 rounded-lg hover:bg-[transparent] hover:text-[#019963]"
              >
                <FaCheckCircle />
              </button>
            </div>
          </div>
        )}
      </div>
    </WellnessReminderModal>
  );
};

export default StartReminder;
