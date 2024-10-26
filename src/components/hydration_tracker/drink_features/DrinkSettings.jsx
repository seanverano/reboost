import React, { useState } from "react";
import SaveButton from "../drink_buttons/SaveButton";
import DrinkSettingsHeader from "./drink_settings_components/DrinkSettingsHeader";
import DailyVolumeGoal from "./drink_settings_components/DailyVolumeGoal";
import DangerZoneReset from "./drink_settings_components/DangerZoneReset";
import DrinkSettingsModal from "../drink_modals/DrinkSettingsModal";

const DrinkSettings = ({ show, onClose, onSaveSettings, currentSettings }) => {
  const [dailyGoal, setDailyGoal] = useState(
    currentSettings?.dailyGoal || 2000
  );
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleSave = () => {
    onSaveSettings({
      dailyGoal: Number(dailyGoal),
    });
    onClose();
  };

  const handleReset = () => {
    localStorage.removeItem("drinkLogs");
    localStorage.removeItem("totalVolume");
    window.location.reload();
  };

  return (
    <DrinkSettingsModal show={show} onClose={onClose}>
      <div className="mx-4 bg-[#EEF8FB] rounded-lg font-manrope">
        <DrinkSettingsHeader />

        <div className="p-4 space-y-4">
          <DailyVolumeGoal
            value={dailyGoal}
            onChange={(e) => setDailyGoal(e.target.value)}
          />

          <div className="flex justify-center">
            <SaveButton onClick={handleSave}>Save</SaveButton>
          </div>

          <DangerZoneReset
            showResetConfirm={showResetConfirm}
            onResetClick={() => setShowResetConfirm(true)}
            onConfirm={handleReset}
            onCancel={() => setShowResetConfirm(false)}
          />
        </div>
      </div>
    </DrinkSettingsModal>
  );
};

export default DrinkSettings;
