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
      <div class="flex items-center gap-4 bg-[#f8fbfb] px-4 min-h-14">
        <div
          onClick={openModal}
          class="text-[#000000] flex items-center justify-center rounded-lg bg-[#e8f0f3] shrink-0 size-10 cursor-pointer transition-transform duration-200 active:translate-y-1"
        >
          <BsCup />
        </div>
        <p class="text-[#000000] text-base font-normal flex-1">Beverage List</p>
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
            placeholder="Enter new beverage"
            className="italic text-[#000000] text-xs text-center mt-4 mb-3 p-2 border border-[#CFECF4] rounded-full w-[175px] focus:outline-none focus:ring-1 focus:ring-[#55BCD8]"
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
