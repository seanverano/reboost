import React, { useState } from "react";
import { IoWarningOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const DrinkSettings = ({ show, onClose, onSaveSettings, currentSettings }) => {
  const [dailyGoal, setDailyGoal] = useState(
    currentSettings?.dailyGoal || 2000
  );
  const [resetHour, setResetHour] = useState(
    currentSettings?.resetHour || "00:00"
  );
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleSave = () => {
    onSaveSettings({
      dailyGoal: parseInt(dailyGoal),
      resetHour,
    });
    onClose();
  };

  const handleReset = () => {
    localStorage.removeItem("drinkLogs");
    localStorage.removeItem("totalVolume");
    window.location.reload();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[#000000] bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-transparent rounded-lg p-2 w-[320px] relative">
        <button onClick={onClose} className="absolute right-11 top-5">
          <IoClose className="text-[#000000] hover:text-[#1CABE3] text-lg" />
        </button>

        <div className="mx-5 bg-[#EEF8FB] rounded-lg font-manrope">
          <div className="flex-none p-4 border-b border-[#CFECF4] w-full">
            <h2 className="text-[#000000] text-center text-base font-bold leading-normal">
              Settings
            </h2>
          </div>

          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#4f8296] mb-1">
                Daily Goal (ml)
              </label>
              <input
                type="number"
                value={dailyGoal}
                onChange={(e) => setDailyGoal(e.target.value)}
                className="w-full px-3 py-2 border border-[#CFECF4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CABE3] bg-[#F9FBFA]"
                min="500"
                max="5000"
                step="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#4f8296] mb-1">
                Daily Reset Time
              </label>
              <input
                type="time"
                value={resetHour}
                onChange={(e) => setResetHour(e.target.value)}
                className="w-full px-3 py-2 border border-[#CFECF4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CABE3] bg-[#F9FBFA]"
              />
            </div>

            <button
              onClick={handleSave}
              className="w-full bg-[#1CABE3] text-white py-2 rounded-md hover:bg-[#1CABE3]/90 transition-colors"
            >
              Save Settings
            </button>

            <div className="mt-6 pt-4 border-t border-[#CFECF4]">
              <h3 className="text-red-600 font-medium mb-2 flex items-center gap-2">
                <IoWarningOutline /> Danger Zone
              </h3>

              {!showResetConfirm ? (
                <button
                  onClick={() => setShowResetConfirm(true)}
                  className="w-full bg-red-100 text-red-600 py-2 rounded-md hover:bg-red-200 transition-colors"
                >
                  Reset Progress & Logs
                </button>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm text-[#4f8296]">
                    Are you sure? This cannot be undone.
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowResetConfirm(false)}
                      className="flex-1 bg-[#F9FBFA] text-[#4f8296] py-2 rounded-md hover:bg-[#CFECF4] transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleReset}
                      className="flex-1 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkSettings;
