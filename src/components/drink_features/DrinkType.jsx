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
        <div className="flex flex-col justify-center py-4 items-center font-poppins font-semibold bg-[#EEF8FB] rounded-lg">
          <div className="text-base flex flex-row items-center justify-center mb-2 px-6 py-2 rounded-lg w-[125px] text-[#55BCD8] hover:bg-[#CFECF4]">
            <LuGlassWater className="mr-2" /> Water
          </div>
          <div className="text-base flex flex-row items-center justify-center mb-2 px-6 py-2 rounded-lg w-[125px] text-[#55BCD8] hover:bg-[#CFECF4]">
            <CiCoffeeCup className="mr-2" /> Coffee
          </div>
          <div className="text-base flex flex-row items-center justify-center mb-2 px-6 py-2 rounded-lg w-[125px] text-[#55BCD8] hover:bg-[#CFECF4]">
            <LuCupSoda className="mr-2" /> Juice
          </div>
          <div className="text-base flex flex-row items-center justify-center mb-2 px-6 py-2 rounded-lg w-[125px] text-[#55BCD8] hover:bg-[#CFECF4]">
            <GiSodaCan className="mr-2" /> Soda
          </div>
          <div className="text-base flex flex-row items-center justify-center px-6 py-2 rounded-lg w-[125px] text-[#55BCD8] hover:bg-[#CFECF4]">
            <MdOutlineEmojiFoodBeverage className="mr-2" /> Tea
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DrinkType;
