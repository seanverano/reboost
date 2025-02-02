import { useState } from "react";
import WellnessSelectionModal from "../wellness_modals/WellnessReminderModal";
import ReminderTypeInput from "./reminder_type_components/ReminderTypeInput";
import SelectionButtonTwo from "../wellness_buttons/SelectionButtonTwo";

const ReminderType = ({ title, setTitle }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <SelectionButtonTwo
        openModal={openModal}
        title={
          title ? (
            <div className="flex items-center text-sm text-[#000000]">
              {`Title: `}
              <span className="ml-1 text-xs text-[#019963] font-normal">
                {title.length > 20 ? `${title.substring(0, 20)}...` : title}
              </span>
            </div>
          ) : (
            "Add Title"
          )
        }
      />

      <WellnessSelectionModal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center py-4 items-center font-manrope font-medium bg-[#E8F8EE] rounded-lg max-h-[80vh]">
          <ReminderTypeInput
            title={title}
            setTitle={setTitle}
            placeholder="e.g. (Eye Break)"
          />
        </div>
      </WellnessSelectionModal>
    </>
  );
};

export default ReminderType;
