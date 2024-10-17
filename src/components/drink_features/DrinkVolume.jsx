import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { SiRainmeter } from "react-icons/si";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";
import Modal from "../Modal";

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
      <h1 onClick={openModal} className="cursor-pointer text-[#000000]">
        <FaBars /> How much have you drank?
      </h1>

      <Modal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center py-4 items-center font-poppins font-medium bg-[#EEF8FB] rounded-lg">
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
            placeholder="Your thirst, your volume!"
            className="italic text-xs text-center mt-4 mb-3 p-2 border border-gray-300 rounded-full w-[175px] focus:outline-none focus:ring-1 focus:ring-[#55BCD8]"
            min="0"
          />
          <div className="flex flex-row space-x-3">
            <button
              onClick={handleAddVolume}
              className="text-base bg-[#55BCD8] text-white px-4 py-2 rounded-lg hover:bg-[#4DA3B5]"
            >
              <IoMdAddCircle />
            </button>
            <button
              onClick={handleDeleteVolume}
              className="text-sm bg-[#55BCD8] text-white px-4 py-2 rounded-lg hover:bg-[#4DA3B5]"
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DrinkVolume;
