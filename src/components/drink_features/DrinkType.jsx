import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiCoffeeCup } from "react-icons/ci";
import { LuCupSoda } from "react-icons/lu";
import { LuGlassWater } from "react-icons/lu";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { GiSodaCan } from "react-icons/gi";
import { BsCupStraw } from "react-icons/bs";
import DrinkModal from "./DrinkModal";
import DrinkModalButton from "./DrinkModalButton";

const DrinkType = ({ selectedDrink, setSelectedDrink }) => {
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
      const addedDrink = { name: newDrink, icon: <BsCupStraw /> };
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

  const handleSelectDrink = (drink) => {
    setSelectedDrink(drink);
  };

  return (
    <>
      <div className="flex items-center gap-4 px-4 h-10 w-full">
        <div
          onClick={openModal}
          className="text-[#000000] text-sm flex items-center justify-center rounded-lg bg-[#e8f0f3] size-10 cursor-pointer transition-transform duration-200 active:scale-90"
        >
          <IoIosArrowDown />
        </div>
        <p className="text-[#000000] text-sm font-medium leading-normal">
          Beverage List
        </p>
      </div>
      <DrinkModal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center py-4 items-center font-manrope font-medium bg-[#EEF8FB] rounded-lg">
          <div className="px-12 pb-3 flex flex-row items-center justify-center my-3 border-b border-[#CFECF4]">
            <h1 className="text-[#000000] ml-2 mr-1 text-xs font-bold leading-normal">
              Selected:
            </h1>
            {selectedDrink ? (
              <div className="flex items-center text-[#1CABE3] text-xs text-normal">
                {selectedDrink.icon}
                <span className="ml-1">{selectedDrink.name}</span>
              </div>
            ) : (
              <span className="flex items-center text-[#1CABE3] text-xs text-normal">
                None
              </span>
            )}
          </div>
          {drinks.map((drink, index) => (
            <div
              key={index}
              onClick={() => handleSelectDrink(drink)}
              className="text-sm font-medium flex flex-row items-center justify-center mb-1 px-6 py-2 rounded-lg w-[125px] text-[#1CABE3] hover:bg-[#CFECF4] cursor-pointer"
            >
              <span className="mr-2">{drink.icon}</span> {drink.name}
            </div>
          ))}
          <div className="px-12 flex flex-col border-t border-[#CFECF4] mt-2">
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
        </div>
      </DrinkModal>
    </>
  );
};

export default DrinkType;
