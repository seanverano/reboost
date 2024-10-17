import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";
import { LuCupSoda } from "react-icons/lu";
import { LuGlassWater } from "react-icons/lu";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { GiSodaCan } from "react-icons/gi";
import { MdOutlineLocalDrink } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";
import Modal from "../Modal";

const DrinkType = () => {
  const [showModal, setShowModal] = useState(false);
  const [newDrink, setNewDrink] = useState("");
  const [drinks, setDrinks] = useState([
    { name: "Water", icon: <LuGlassWater /> },
    { name: "Coffee", icon: <CiCoffeeCup /> },
    { name: "Juice", icon: <LuCupSoda /> },
    { name: "Soda", icon: <GiSodaCan /> },
    { name: "Tea", icon: <MdOutlineEmojiFoodBeverage /> },
  ]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleAddDrink = () => {
    if (newDrink) {
      const addedDrink = { name: newDrink, icon: <MdOutlineLocalDrink /> };
      setDrinks([...drinks, addedDrink]);
      setNewDrink("");
    }
  };
  const handleDeleteDrink = () => {
    if (drinks.length > 0) {
      const updatedDrinks = drinks.slice(0, drinks.length - 1);
      setDrinks(updatedDrinks);
    }
  };

  return (
    <>
      <h1 onClick={openModal} className="cursor-pointer text-[#000000]">
        <FaBars /> Which beverage did you drink?
      </h1>

      <Modal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center py-4 items-center font-poppins font-medium bg-[#EEF8FB] rounded-lg">
          {drinks.map((drink, index) => (
            <div
              key={index}
              className="text-sm flex flex-row items-center justify-center mb-2 px-6 py-2 rounded-lg w-[125px] text-[#55BCD8] hover:bg-[#CFECF4]"
            >
              <span className="mr-2">{drink.icon}</span> {drink.name}
            </div>
          ))}
          <input
            type="text"
            value={newDrink}
            onChange={(e) => setNewDrink(e.target.value)}
            placeholder="Your drink, your choice!"
            className="italic text-xs text-center mt-4 mb-3 p-2 border border-gray-300 rounded-full w-[175px] focus:outline-none focus:ring-1 focus:ring-[#55BCD8]"
          />
          <div className="flex flex-row space-x-3">
            <button
              onClick={handleAddDrink}
              className="text-base bg-[#55BCD8] text-white px-4 py-2 rounded-lg hover:bg-[#4DA3B5]"
            >
              <IoMdAddCircle />
            </button>
            <button
              onClick={handleDeleteDrink}
              className="text-sm bg-[#55BCD8] text-white px-4 py-2 rounded-lg hover:bg-[#4DA3B5]"
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DrinkType;
