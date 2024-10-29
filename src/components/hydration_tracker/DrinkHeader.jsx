import { AiOutlineHome } from "react-icons/ai";
import DrinkSettingsButton from "./drink_buttons/DrinkSettingsButton";
import { useNavigate } from "react-router-dom";

const DrinkHeader = ({
  showSettings,
  setShowSettings,
  handleSaveSettings,
  dailyGoal,
}) => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  return (
    <div className="flex items-center mt-3 p-1 pb-2 justify-between">
      <button
        onClick={goHome}
        className="flex cursor-pointer items-center justify-center rounded-full h-4 bg-transparent text-[#000000] gap-2 font-bold leading-normal tracking-[0.015em] p-0"
      >
        <div className="flex items-center gap-2 text-[#1CABE3] ml-3 hover:text-[#000000] text-lg">
          <AiOutlineHome />
        </div>
      </button>
      <DrinkSettingsButton
        show={showSettings}
        onClose={() => setShowSettings(false)}
        onSaveSettings={handleSaveSettings}
        currentSettings={{ dailyGoal }}
      />
    </div>
  );
};

export default DrinkHeader;
