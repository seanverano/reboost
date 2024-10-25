import React, { useState, useEffect } from "react";
import { SiRainmeter } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import DrinkModal from "./DrinkModal";
import DrinkModalButton from "./DrinkModalButton";

const iconComponents = {
  SiRainmeter: SiRainmeter,
};

const DrinkVolume = ({ selectedVolume, setSelectedVolume }) => {
  const [showModal, setShowModal] = useState(false);
  const [newVolume, setNewVolume] = useState("");
  const [volumes, setVolumes] = useState(() => {
    const savedVolumes = localStorage.getItem("volumesList");
    return savedVolumes
      ? JSON.parse(savedVolumes)
      : [
          { name: "200", iconName: "SiRainmeter" },
          { name: "300", iconName: "SiRainmeter" },
          { name: "400", iconName: "SiRainmeter" },
          { name: "500", iconName: "SiRainmeter" },
          { name: "1000", iconName: "SiRainmeter" },
        ];
  });

  useEffect(() => {
    localStorage.setItem("volumesList", JSON.stringify(volumes));
  }, [volumes]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

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

  const handleSelectVolume = (volume) => {
    setSelectedVolume(volume);
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
          Set Volume
        </p>
      </div>

      <DrinkModal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center py-4 items-center font-manrope font-medium bg-[#EEF8FB] rounded-lg max-h-[80vh]">
          <div className="px-10 pb-3 flex flex-row items-center justify-center my-1 border-b border-[#CFECF4] w-full">
            <h1 className="text-[#000000] mr-1 text-sm font-bold leading-normal">
              Selected:
            </h1>
            {selectedVolume ? (
              <div className="flex items-center text-[#1CABE3] text-sm text-normal animate-fadeIn">
                {renderIcon(selectedVolume.iconName)}
                <span className="ml-1">{selectedVolume.name} ml</span>
              </div>
            ) : (
              <span className="flex items-center text-[#1CABE3] text-sm text-normal">
                None
              </span>
            )}
          </div>

          <div className="overflow-y-auto max-h-48 w-full scrollbar-thin scrollbar-thumb-[#CFECF4] scrollbar-track-transparent hover:scrollbar-thumb-[#1CABE3] px-4">
            <div className="flex flex-col items-center">
              {volumes.map((volume, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectVolume(volume)}
                  className="text-xs font-medium flex flex-row items-center justify-center mb-1 px-6 py-2 rounded-lg w-[125px] text-[#4f8296] hover:bg-[#CFECF4] cursor-pointer"
                >
                  <span className="mr-2">{renderIcon(volume.iconName)}</span>
                  <span>{volume.name} ml</span>
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 flex flex-col border-t border-[#CFECF4] mt-2 w-full">
            <h1 className="text-left text-[#1CABE3] mb-1 mt-3 text-sm font-bold leading-normal">
              New Volume
            </h1>
            <p className="text-left text-[#4f8296] text-xs font-normal leading-normal mb-3">
              After typing the volume, you can add it to the list or remove the
              recent one.
            </p>
            <input
              type="number"
              value={newVolume}
              onChange={(e) => setNewVolume(e.target.value)}
              placeholder="Create new volume (in ml)"
              className="placeholder:italic bg-[#F9FBFA] text-[#000000] text-xs text-center mb-3 p-2 border border-[#CFECF4] rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-[#1CABE3]"
              min="0"
              max="5000"
              step="100"
            />
            <DrinkModalButton
              handleAdd={handleAddVolume}
              handleDelete={handleDeleteVolume}
            />
          </div>
        </div>
      </DrinkModal>
    </>
  );
};

export default DrinkVolume;
