import React, { useState } from "react";
import DrinkAddRemoveButton from "../../drink_buttons/DrinkAddRemoveButton";

const DrinkTypeInput = ({ drinks, setDrinks }) => {
  const [newDrink, setNewDrink] = useState("");

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

  return (
    <div className="px-4 flex justify-center flex-col border-t border-[#CFECF4] mt-2 w-full">
      <h1 className="text-left text-[#1CABE3] mb-1 mt-3 text-sm font-bold leading-normal">
        Custom Beverage
      </h1>
      <p className="text-left text-[#4f8296] text-xs font-normal leading-normal mb-3">
        Enter a beverage to add it to the list, or remove the most recent entry.
      </p>

      <input
        type="text"
        value={newDrink}
        onChange={(e) => setNewDrink(e.target.value)}
        placeholder="e.g. (Milk Tea)"
        className="placeholder:italic bg-[#F9FBFA] text-[#000000] text-xs text-center mb-3 p-2 border border-[#CFECF4] rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-[#1CABE3]"
      />
      <DrinkAddRemoveButton
        handleAdd={handleAddDrink}
        handleDelete={handleDeleteDrink}
      />
    </div>
  );
};

export default DrinkTypeInput;
