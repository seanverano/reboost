import React, { useState } from "react";

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#000000] rounded-lg p-6">
        <button className="text-right text-gray-600" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

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
