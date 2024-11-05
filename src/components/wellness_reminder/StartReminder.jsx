import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

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

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-[#000000] bg-opacity-50 flex justify-center items-center z-20 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#e8f8ee] rounded-lg p-6 w-[320px] relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute right-8 top-8 w-6 h-6 flex items-center justify-center"
        >
          <span className="text-[#019963] hover:text-[#000000] text-lg transition-colors duration-200">
            <IoClose className="text-[#019963] hover:text-[#000000] text-lg" />
          </span>
        </button>

        <div className="px-4 flex justify-center flex-col w-full">
          <h1 className="text-left text-[#019963] mb-1 mt-3 text-sm font-bold leading-normal">
            Reminder Timer
          </h1>
          <div className="text-left flex flex-col text-[#4f8296] text-xs font-normal leading-normal mb-4">
            Set the timer duration for your reminder in seconds.{" "}
            <span className="text-center italic mt-2">
              e.g. (60s = 1 min, 3600s = 1 hr.)
            </span>
          </div>
          <input
            type="number"
            id="timer"
            value={timerDuration}
            onChange={(e) => setTimerDuration(parseInt(e.target.value) || 0)}
            min="1"
            placeholder="Set timer (in seconds)"
            className="placeholder:italic bg-[#F9FBFA] text-[#000000] text-xs text-center mb-4 p-2 border border-[#CFFFD8] rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-[#019963]"
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            type="button"
            className="text-lg font-bold bg-[#019963] text-[#ffffff] px-4 py-2 rounded-lg hover:bg-[transparent] hover:text-[#019963]"
            onClick={startReminder}
            disabled={!selectedReminderType || !message || timerDuration <= 0}
          >
            <FaPlus />
          </button>
          {isTimerActive && (
            <div className="text-gray-900 font-medium">
              Time Remaining: {formatTime(timeRemaining)}
            </div>
          )}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center z-30">
          <div className="bg-white rounded-lg p-4 w-[250px] shadow-lg">
            <h2 className="text-lg font-semibold">
              {selectedReminderType?.name}
            </h2>
            <p className="text-gray-700">{message}</p>
            <button
              onClick={closePopup}
              className="mt-4 w-full bg-[#019963] hover:bg-[#016f48] text-white font-medium py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartReminder;
