import React, { useState } from "react";
import { BsCup } from "react-icons/bs";
import { CiCoffeeCup } from "react-icons/ci";
import { LuCupSoda } from "react-icons/lu";
import { LuGlassWater } from "react-icons/lu";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { GiSodaCan } from "react-icons/gi";
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
      const addedDrink = { name: newDrink, icon: <BsCup /> };
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
      <div className="flex items-center gap-4 px-4 h-10 w-full">
        <div
          onClick={openModal}
          className="text-[#000000] text-sm flex items-center justify-center rounded-lg bg-[#e8f0f3] size-10 cursor-pointer transition-transform duration-200 active:scale-90"
        >
          <BsCup />
        </div>
        <p className="text-[#000000] text-sm font-normal leading-normal">
          Beverage List
        </p>
      </div>
      <DrinkModal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center py-4 items-center font-manrope font-medium bg-[#EEF8FB] rounded-lg">
          {drinks.map((drink, index) => (
            <div
              key={index}
              className="text-sm flex flex-row items-center justify-center mb-2 px-6 py-2 rounded-lg w-[125px] text-[#1CABE3] hover:bg-[#CFECF4]"
            >
              <span className="mr-2">{drink.icon}</span> {drink.name}
            </div>
          ))}
          <input
            type="text"
            value={newDrink}
            onChange={(e) => setNewDrink(e.target.value)}
            placeholder="Enter new beverage"
            className="placeholder:italic bg-[#F9FBFA] text-[#000000] text-xs text-center mt-4 mb-3 p-2 border border-[#CFECF4] rounded-full w-[175px] focus:outline-none focus:ring-1 focus:ring-[#1CABE3]"
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
