import React, { useState } from "react";
import WellnessSelectionModal from "../wellness_modals/WellnessSelectionModal";
import AudioTypeList from "./audio_type_components/AudioTypeList";
import SelectionButtonTwo from "../wellness_buttons/SelectionButtonTwo";
import { iconComponentsTwo } from "../wellness_utilities/iconMappingTwo";
import { defaultAudioTypes } from "../wellness_utilities/defaultDataTwo";

const AudioType = ({ selectedAudioType, setSelectedAudioType }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const renderIcon = (iconName) => {
    const IconComponent = iconComponentsTwo[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <>
      <SelectionButtonTwo
        openModal={openModal}
        title={
          selectedAudioType ? (
            <div className="flex items-center text-sm text-[#000000]">
              {`Selected: `}
              <span className="flex flex-row items-center ml-1 gap-1 text-xs text-[#019963] font-normal">
                {renderIcon(selectedAudioType.iconName)}
                {selectedAudioType.name}
              </span>
            </div>
          ) : (
            "Alert Sound List"
          )
        }
      />

      <WellnessSelectionModal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center py-4 items-center font-manrope font-medium bg-[#E8F8EE] rounded-lg max-h-[80vh]">
          <AudioTypeList
            audioTypes={defaultAudioTypes}
            selectedAudioType={selectedAudioType}
            setSelectedAudioType={setSelectedAudioType}
            iconComponentsTwo={iconComponentsTwo}
          />
        </div>
      </WellnessSelectionModal>
    </>
  );
};

export default AudioType;
