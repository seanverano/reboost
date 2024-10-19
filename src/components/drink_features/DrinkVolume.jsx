import React, { useState } from "react";
import { SiRainmeter } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import DrinkModal from "./DrinkModal";
import DrinkModalButton from "./DrinkModalButton";

const DrinkVolume = ({ selectedVolume, setSelectedVolume }) => {
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

  const handleSelectVolume = (volume) => {
    setSelectedVolume(volume);
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
        <p className="text-[#000000] text-sm font-normal leading-normal">
          Set Volume
        </p>
      </div>

      <DrinkModal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center py-4 items-center font-manrope font-medium bg-[#EEF8FB] rounded-lg">
          <div className="px-4 flex flex-row items-center justify-center my-3">
            <h1 className="text-[#000000] ml-2 mr-1 text-xs font-bold leading-normal">
              Selected:
            </h1>
            {selectedVolume ? (
              <div className="flex items-center text-[#1CABE3] text-xs text-normal">
                {selectedVolume.icon}
                <span className="ml-1">{selectedVolume.name} ml</span>
              </div>
            ) : (
              <span className="flex items-center text-[#1CABE3] text-xs text-normal">
                None
              </span>
            )}
          </div>
          {volumes.map((volume, index) => (
            <div
              key={index}
              onClick={() => handleSelectVolume(volume)}
              className="text-sm flex flex-row items-center justify-center mb-1 px-6 py-2 rounded-lg w-[125px] text-[#1CABE3] hover:bg-[#CFECF4] cursor-pointer"
            >
              <span className="mr-2">{volume.icon}</span>{" "}
              <span>{volume.name} ml</span>
            </div>
          ))}
          <input
            type="number"
            value={newVolume}
            onChange={(e) => setNewVolume(e.target.value)}
            placeholder="Enter new volume (in ml)"
            className="placeholder:italic bg-[#F9FBFA] text-[#000000] text-xs text-center mt-4 mb-3 p-2 border border-[#CFECF4] rounded-full w-[175px] focus:outline-none focus:ring-1 focus:ring-[#1CABE3]"
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
