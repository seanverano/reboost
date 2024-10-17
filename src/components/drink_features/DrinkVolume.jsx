import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";
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
      <h1 onClick={openModal} className="cursor-pointer">
        <FaBars /> How much did you drink?
      </h1>

      <Modal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-2 text-[#ffffff]">
            <IoWaterOutline />
            200 ml
          </div>
          <div className="mb-2 text-[#ffffff]">
            <IoWaterOutline />
            300 ml
          </div>
          <div className="mb-2 text-[#ffffff]">
            <IoWaterOutline />
            400 ml
          </div>
          <div className="mb-2 text-[#ffffff]">
            <IoWaterOutline />
            500 ml
          </div>
          <div className="mb-2 text-[#ffffff]">
            <IoWaterOutline />
            1000 ml
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DrinkVolume;
