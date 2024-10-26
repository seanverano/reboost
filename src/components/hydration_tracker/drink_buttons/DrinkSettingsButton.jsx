import React, { useState } from "react";
import { GoGear } from "react-icons/go";
import DrinkSettings from "../drink_features/DrinkSettings";

const DrinkSettingsButton = ({ currentSettings, onSaveSettings }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex w-14 items-center justify-end">
      <button
        onClick={() => setShowModal(true)}
        className="flex cursor-pointer items-center justify-center rounded-full h-4 bg-transparent text-[#000000] gap-2 font-bold leading-normal tracking-[0.015em] p-0"
      >
        <div className="text-[#1CABE3] mr-3 hover:text-[#000000] text-lg transition-colors duration-200">
          <GoGear />
        </div>
      </button>
      <DrinkSettings
        show={showModal}
        onClose={() => setShowModal(false)}
        onSaveSettings={onSaveSettings}
        currentSettings={currentSettings}
      />
    </div>
  );
};

export default DrinkSettingsButton;
