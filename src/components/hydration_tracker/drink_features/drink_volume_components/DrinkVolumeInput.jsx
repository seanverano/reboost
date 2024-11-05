import React, { useState } from "react";
import DrinkAddRemoveButton from "../../drink_buttons/DrinkAddRemoveButton";

const DrinkVolumeInput = ({ volumes, setVolumes }) => {
  const [newVolume, setNewVolume] = useState("");

  const handleAddVolume = () => {
    if (newVolume) {
      const addedVolume = { name: newVolume, iconName: "SiRainmeter" };
      setVolumes([...volumes, addedVolume]);
      setNewVolume("");
    }
  };

  const handleDeleteVolume = () => {
    if (volumes.length > 0) {
      const updatedVolumes = volumes.slice(0, volumes.length - 1);
      setVolumes(updatedVolumes);
    }
  };

  return (
    <div className="px-4 flex flex-col border-t border-[#CFECF4] mt-2 w-full">
      <h1 className="text-left text-[#1CABE3] mb-1 mt-3 text-sm font-bold leading-normal">
        Custom Volume
      </h1>
      <p className="text-left text-[#4f8296] text-xs font-normal leading-normal mb-3">
        Enter a volume to add it to the list, or remove the most recent entry.
      </p>
      <input
        type="number"
        value={newVolume}
        onChange={(e) => setNewVolume(e.target.value)}
        placeholder="e.g. (420 ml)"
        className="placeholder:italic bg-[#F9FBFA] text-[#000000] text-xs text-center mb-3 p-2 border border-[#CFECF4] rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-[#1CABE3]"
        min="0"
        max="5000"
        step="100"
      />
      <DrinkAddRemoveButton
        handleAdd={handleAddVolume}
        handleDelete={handleDeleteVolume}
      />
    </div>
  );
};

export default DrinkVolumeInput;
