import { useState } from "react";
import WellnessSelectionModal from "../wellness_modals/WellnessReminderModal";
import ReminderMessageInput from "./reminder_msg_components/ReminderMessageInput";
import SelectionButtonTwo from "../wellness_buttons/SelectionButtonTwo";

const ReminderMessage = ({ message, setMessage }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <SelectionButtonTwo
        openModal={openModal}
        title={
          message ? (
            <div className="flex items-center text-sm text-[#000000]">
              {`Message: `}
              <span className="ml-1 text-xs text-[#019963] font-normal">
                {message.length > 20
                  ? `${message.substring(0, 20)}...`
                  : message}
              </span>
            </div>
          ) : (
            "Add Message"
          )
        }
      />

      <WellnessSelectionModal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center py-4 items-center font-manrope font-medium bg-[#E8F8EE] rounded-lg max-h-[80vh]">
          <ReminderMessageInput message={message} setMessage={setMessage} />
        </div>
      </WellnessSelectionModal>
    </>
  );
};

export default ReminderMessage;
