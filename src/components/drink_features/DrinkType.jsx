import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiCoffeeCup } from "react-icons/ci";
import { LuCupSoda } from "react-icons/lu";
import { LuGlassWater } from "react-icons/lu";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { GiSodaCan } from "react-icons/gi";
import { MdOutlineLocalDrink } from "react-icons/md";
import DrinkModal from "./DrinkModal";
import DrinkModalButton from "./DrinkModalButton";

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
      <div
        onClick={openModal}
        className="flex flex-row justify-between items-center w-full bg-[#000000] border border-none rounded-lg py-3 px-6 cursor-pointer transition-transform duration-200 active:translate-y-1"
      >
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-base text-[#ffffff] text-left">
            Beverage List
          </h1>
          <h3 className="font-normal text-xs text-[#f0f0f0] text-left">
            Choose Drink
          </h3>
        </div>
        <IoIosArrowDown className="text-[#ffffff]" />
      </div>

      <DrinkModal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center py-4 items-center font-manrope font-medium bg-[#EEF8FB] rounded-lg">
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
            placeholder="Enter your beverage"
            className="italic text-[#F0F0F0] text-xs text-center mt-4 mb-3 p-2 border border-[#CFECF4] rounded-full w-[175px] focus:outline-none focus:ring-1 focus:ring-[#55BCD8]"
          />
          <DrinkModalButton
            handleAdd={handleAddDrink}
            handleDelete={handleDeleteDrink}
          />
        </div>
      </DrinkModal>
    </>
  );
};

export default DrinkType;
