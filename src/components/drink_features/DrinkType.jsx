import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiCoffeeCup } from "react-icons/ci";
import { LuCupSoda } from "react-icons/lu";
import { LuGlassWater } from "react-icons/lu";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { GiSodaCan } from "react-icons/gi";
import { BsCupStraw } from "react-icons/bs";
import DrinkModal from "./DrinkModal";
import DrinkModalButton from "./DrinkModalButton";

const iconComponents = {
  LuGlassWater: LuGlassWater,
  CiCoffeeCup: CiCoffeeCup,
  LuCupSoda: LuCupSoda,
  GiSodaCan: GiSodaCan,
  MdOutlineEmojiFoodBeverage: MdOutlineEmojiFoodBeverage,
  BsCupStraw: BsCupStraw,
};

const DrinkType = ({ selectedDrink, setSelectedDrink }) => {
  const [showModal, setShowModal] = useState(false);
  const [newDrink, setNewDrink] = useState("");
  const [drinks, setDrinks] = useState(() => {
    const savedDrinks = localStorage.getItem("drinksList");
    return savedDrinks
      ? JSON.parse(savedDrinks)
      : [
          { name: "Water", iconName: "LuGlassWater" },
          { name: "Coffee", iconName: "CiCoffeeCup" },
          { name: "Juice", iconName: "LuCupSoda" },
          { name: "Soda", iconName: "GiSodaCan" },
          { name: "Tea", iconName: "MdOutlineEmojiFoodBeverage" },
        ];
  });

  useEffect(() => {
    localStorage.setItem("drinksList", JSON.stringify(drinks));
  }, [drinks]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleAddDrink = () => {
    if (newDrink) {
      const addedDrink = { name: newDrink, iconName: "BsCupStraw" };
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

  const renderIcon = (iconName) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent /> : null;
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
        <div className="flex flex-col justify-center py-4 items-center font-manrope font-medium bg-[#EEF8FB] rounded-lg max-h-[80vh]">
          <div className="px-10 pb-3 flex flex-row items-center justify-center my-1 border-b border-[#CFECF4] w-full">
            <h1 className="text-[#000000] mr-1 text-sm font-bold leading-normal">
              Selected:
            </h1>
            {selectedDrink ? (
              <div className="flex items-center text-[#1CABE3] text-sm text-normal animate-fadeIn">
                {renderIcon(selectedDrink.iconName)}
                <span className="ml-1">{selectedDrink.name}</span>
              </div>
            ) : (
              <span className="flex items-center text-[#1CABE3] text-sm text-normal">
                None
              </span>
            )}
          </div>

          <div className="overflow-y-auto max-h-48 w-full scrollbar-thin scrollbar-thumb-[#CFECF4] scrollbar-track-transparent hover:scrollbar-thumb-[#1CABE3] px-4">
            <div className="flex flex-col items-center">
              {drinks.map((drink, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectDrink(drink)}
                  className="text-xs font-medium flex flex-row items-center justify-center mb-1 px-6 py-2 rounded-lg w-[125px] text-[#4f8296] hover:bg-[#CFECF4] cursor-pointer"
                >
                  <span className="mr-2">{renderIcon(drink.iconName)}</span>{" "}
                  {drink.name}
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 flex justify-center flex-col border-t border-[#CFECF4] mt-2 w-full">
            <h1 className="text-left text-[#1CABE3] mb-1 mt-3 text-sm font-bold leading-normal">
              New Beverage
            </h1>
            <p className="text-left text-[#4f8296] text-xs font-normal leading-normal mb-3">
              After typing the beverage, you can add it to the list or remove
              the recent one.
            </p>

            <input
              type="text"
              value={newDrink}
              onChange={(e) => setNewDrink(e.target.value)}
              placeholder="Create new beverage"
              className="placeholder:italic bg-[#F9FBFA] text-[#000000] text-xs text-center mb-3 p-2 border border-[#CFECF4] rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-[#1CABE3]"
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
