import React, { useState } from "react";
import SelectionButtonTwo from "../wellness_buttons/SelectionButtonTwo";
import WellnessSelectionModal from "../wellness_modals/WellnessSelectionModal";

const ReminderType = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <>
      <SelectionButtonTwo openModal={openModal} />
      <WellnessSelectionModal show={showModal} onClose={closeModal}>
        <h1>test</h1>
      </WellnessSelectionModal>
    </>
  );
};

export default ReminderType;
