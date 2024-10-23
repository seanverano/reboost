import React, { useState } from "react";
import { GoGear } from "react-icons/go";
import DrinkSettings from "./DrinkSettings";

const DrinkSettingsButton = ({ currentSettings, onSaveSettings }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="flex w-14 items-center justify-end">
      <button
        onClick={openModal}
        className="flex cursor-pointer items-center justify-center rounded-full h-4 bg-transparent text-[#000000] gap-2 font-bold leading-normal tracking-[0.015em] p-0"
      >
        <div className="text-[#000000] mr-3 hover:text-[#1CABE3] text-lg">
          <GoGear />
        </div>
      </button>
      <DrinkSettings
        show={showModal}
        onClose={closeModal}
        onSaveSettings={onSaveSettings}
        currentSettings={currentSettings}
      />
    </div>
  );
};

export default DrinkSettingsButton;
