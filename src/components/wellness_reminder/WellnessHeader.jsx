import { FiArrowLeft } from "react-icons/fi";
import { GoGear } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const WellnessHeader = () => {
  const navigate = useNavigate();
  const goMenu = () => navigate("/menu");

  return (
    <div className="flex items-center mt-3 p-1 pb-2 justify-between">
      <button
        onClick={goMenu}
        className="flex cursor-pointer items-center justify-center rounded-full h-4 bg-transparent text-[#000000] gap-2 font-bold leading-normal tracking-[0.015em] p-0"
      >
        <div className="flex items-center gap-2 text-[#019963] ml-3 hover:text-[#000000] text-lg">
          <FiArrowLeft />
        </div>
      </button>
      <button className="flex cursor-pointer items-center justify-center rounded-full h-4 bg-transparent text-[#000000] gap-2 font-bold leading-normal tracking-[0.015em] p-0">
        <div className="flex items-center gap-2 text-[#019963] mr-3 hover:text-[#000000] text-lg">
          <GoGear />
        </div>
      </button>
    </div>
  );
};

export default WellnessHeader;