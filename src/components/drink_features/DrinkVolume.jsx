import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { SiRainmeter } from "react-icons/si";
import DrinkModal from "./DrinkModal";
import DrinkModalButton from "./DrinkModalButton";

const DrinkVolume = () => {
  const [showModal, setShowModal] = useState(false);
  const [newVolume, setNewVolume] = useState("");
  const [volumes, setVolumes] = useState([
    { name: "200", icon: <SiRainmeter /> },
    { name: "300", icon: <SiRainmeter /> },
    { name: "400", icon: <SiRainmeter /> },
    { name: "500", icon: <SiRainmeter /> },
    { name: "1000", icon: <SiRainmeter /> },
  ]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleAddVolume = () => {
    if (newVolume) {
      const addedVolume = { name: newVolume, icon: <SiRainmeter /> };
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
    <>
      <div
        onClick={openModal}
        className="flex flex-row justify-between items-center w-full bg-[#000000] border border-none rounded-lg py-3 px-6 cursor-pointer transition-transform duration-200 active:translate-y-1"
      >
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-base text-[#ffffff] text-left">
            Volume
          </h1>
          <h3 className="font-normal text-xs text-[#f0f0f0] text-left">
            Set Quantity
          </h3>
        </div>
        <IoIosArrowDown className="text-[#ffffff]" />
      </div>

      <DrinkModal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center py-4 items-center font-manrope font-medium bg-[#EEF8FB] rounded-lg">
          {volumes.map((volume, index) => (
            <div
              key={index}
              className="text-sm flex flex-row items-center justify-center mb-2 px-6 py-2 rounded-lg w-[125px] text-[#55BCD8] hover:bg-[#CFECF4]"
            >
              <span className="mr-2">{volume.icon}</span>{" "}
              <span>{volume.name} ml</span>
            </div>
          ))}
          <input
            type="number"
            value={newVolume}
            onChange={(e) => setNewVolume(e.target.value)}
            placeholder="Enter volume (in ml)"
            className="italic text-[#F0F0F0] text-xs text-center mt-4 mb-3 p-2 border border-[#CFECF4] rounded-full w-[175px] focus:outline-none focus:ring-1 focus:ring-[#55BCD8]"
            min="0"
          />
          <DrinkModalButton
            handleAdd={handleAddVolume}
            handleDelete={handleDeleteVolume}
          />
        </div>
      </DrinkModal>
    </>
  );
};

export default DrinkVolume;
