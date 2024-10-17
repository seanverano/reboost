import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";
import { LuCupSoda } from "react-icons/lu";
import { LuGlassWater } from "react-icons/lu";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { GiSodaCan } from "react-icons/gi";
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
        <FaBars /> Which beverage did you drink?
      </h1>

      <Modal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-2 text-[#ffffff]">
            <LuGlassWater /> Plain Water
          </div>
          <div className="mb-2 text-[#ffffff]">
            <CiCoffeeCup /> Coffee
          </div>
          <div className="mb-2 text-[#ffffff]">
            <MdOutlineEmojiFoodBeverage /> Tea
          </div>
          <div className="mb-2 text-[#ffffff]">
            <LuCupSoda /> Juice
          </div>
          <div className="mb-2 text-[#ffffff]">
            <GiSodaCan /> Soft Drink
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DrinkType;
