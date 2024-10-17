import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Modal from "../Modal";

const DrinkVolume = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <h1 onClick={openModal} className="cursor-pointer text-[#000000]">
        <FaBars /> How much did you drink?
      </h1>

      <Modal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center py-4 items-center font-poppins font-semibold bg-[#EEF8FB] rounded-lg">
          <div className="text-base flex flex-row items-center justify-center mb-2 px-6 py-2 rounded-lg w-[125px] text-[#55BCD8] hover:bg-[#CFECF4]">
            200 ml
          </div>
          <div className="text-base flex flex-row items-center justify-center mb-2 px-6 py-2 rounded-lg w-[125px] text-[#55BCD8] hover:bg-[#CFECF4]">
            300 ml
          </div>
          <div className="text-base flex flex-row items-center justify-center mb-2 px-6 py-2 rounded-lg w-[125px] text-[#55BCD8] hover:bg-[#CFECF4]">
            400 ml
          </div>
          <div className="text-base flex flex-row items-center justify-center mb-2 px-6 py-2 rounded-lg w-[125px] text-[#55BCD8] hover:bg-[#CFECF4]">
            500 ml
          </div>
          <div className="text-base flex flex-row items-center justify-center px-6 py-2 rounded-lg w-[125px] text-[#55BCD8] hover:bg-[#CFECF4]">
            1000 ml
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DrinkVolume;
