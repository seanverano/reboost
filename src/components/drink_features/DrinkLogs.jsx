import React, { useState } from "react";
import CheckLogs from "./CheckLogs";

const DrinkLogs = ({ drinkLogs }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <button
        onClick={openModal}
        className="m-0 w-[120px] rounded-full h-10 px-4 flex items-center justify-center bg-[#000000] cursor-pointer transition-transform duration-200 active:translate-y-1"
      >
        <p className="text-[#E7F0F2] text-xs font-bold leading-normal tracking-[0.015em]">
          Check Logs
        </p>
      </button>

      <CheckLogs show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center py-4 items-center font-manrope font-medium bg-[#EEF8FB] rounded-lg">
          <h2 className="text-[#000000] text-lg font-bold mb-4">Drink Logs</h2>
        </div>
      </CheckLogs>
    </>
  );
};

export default DrinkLogs;
