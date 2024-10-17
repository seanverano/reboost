import React, { useState } from "react";
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
        How much did you drink?
      </h1>

      <Modal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-2 text-[#ffffff]">200 ml</div>
          <div className="mb-2 text-[#ffffff]">300 ml</div>
          <div className="mb-2 text-[#ffffff]">400 ml</div>
          <div className="mb-2 text-[#ffffff]">500 ml</div>
          <div className="mb-2 text-[#ffffff]">1000 ml</div>
        </div>
      </Modal>
    </>
  );
};

export default DrinkVolume;
