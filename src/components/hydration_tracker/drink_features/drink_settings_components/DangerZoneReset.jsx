import ResetButton from "../../drink_buttons/ResetButton";
import ResetSubButton from "../../drink_buttons/ResetSubButton";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

const DangerZoneReset = ({
  showResetConfirm,
  onResetClick,
  onConfirm,
  onCancel,
}) => (
  <div className="mt-6 pt-4 border-t border-[#CFECF4]">
    <h2 className="flex items-center gap-2 mb-1 text-[#C53030] text-center text-sm font-bold leading-normal">
      Danger Zone
    </h2>
    <p className="flex items-center gap-2 mb-4 text-[#4f8296] text-left text-xs font-normal leading-normal">
      Progress and logs reset daily. Use this button to reset manually.
    </p>
    <div className="flex justify-center">
      {!showResetConfirm ? (
        <ResetButton onClick={onResetClick}>Reset</ResetButton>
      ) : (
        <div className="flex flex-row justify-center items-center">
          <p className="text-xs text-[#4f8296]">
            Are you sure? This cannot be undone.
          </p>
          <div className="flex gap-2 justify-center">
            <ResetSubButton
              onClick={onCancel}
              className="bg-[#000000] hover:bg-transparent hover:text-[#000000]"
            >
              <FaTimesCircle />
            </ResetSubButton>
            <ResetSubButton
              onClick={onConfirm}
              className="bg-red-600 hover:bg-transparent hover:text-red-600"
            >
              <FaCheckCircle />
            </ResetSubButton>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default DangerZoneReset;
