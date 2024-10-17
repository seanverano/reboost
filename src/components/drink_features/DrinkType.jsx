import React, { useState } from "react";
import Modal from "../Modal";

const DrinkType = () => {
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
        Which beverage did you drink?
      </h1>

      <Modal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-2 text-[#ffffff]">Plain Water</div>
          <div className="mb-2 text-[#ffffff]">Coffee</div>
          <div className="mb-2 text-[#ffffff]">Tea</div>
          <div className="mb-2 text-[#ffffff]">Juice</div>
          <div className="mb-2 text-[#ffffff]">Soft Drink</div>
        </div>
      </Modal>
    </>
  );
};

export default DrinkType;
