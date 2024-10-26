import React from "react";
import DrinkLogs from "./drink_features/DrinkLogs";
import LogDrinkButton from "./drink_buttons/LogDrinkButton";

const LogADrink = ({
  handleLogDrink,
  selectedVolume,
  selectedDrink,
  drinkLogs,
}) => {
  const isDisabled = !selectedVolume || !selectedDrink;

  return (
    <div className="relative flex flex-row space-x-5 justify-center z-1">
      <LogDrinkButton disabled={isDisabled} onClick={handleLogDrink} />
      <DrinkLogs logs={drinkLogs} />
    </div>
  );
};

export default LogADrink;
