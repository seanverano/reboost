import React, { useState, useEffect } from "react";
import DrinkSelectionModal from "../drink_modals/DrinkSelectionModal";
import DrinkTypeList from "./drink_type_components/DrinkTypeList";
import DrinkTypeInput from "./drink_type_components/DrinkTypeInput";
import SelectionButton from "../drink_buttons/SelectionButton";
import { iconComponents } from "../drink_utilities/iconMapping";
import { defaultDrinks } from "../drink_utilities/defaultData";

const DrinkType = ({ selectedDrink, setSelectedDrink }) => {
  const [showModal, setShowModal] = useState(false);
  const [drinks, setDrinks] = useState(() => {
    const savedDrinks = localStorage.getItem("drinksList");
    return savedDrinks ? JSON.parse(savedDrinks) : defaultDrinks;
  });

  useEffect(() => {
    localStorage.setItem("drinksList", JSON.stringify(drinks));
  }, [drinks]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <SelectionButton openModal={openModal} title="Beverage List" />
      <DrinkSelectionModal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center py-4 items-center font-manrope font-medium bg-[#EEF8FB] rounded-lg max-h-[80vh]">
          <DrinkTypeList
            drinks={drinks}
            selectedDrink={selectedDrink}
            setSelectedDrink={setSelectedDrink}
            iconComponents={iconComponents}
          />
          <DrinkTypeInput drinks={drinks} setDrinks={setDrinks} />
        </div>
      </DrinkSelectionModal>
    </>
  );
};

export default DrinkType;
