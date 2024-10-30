import { useNavigate } from "react-router-dom";
import WavesBackground from "../components/homepage_components/WavesBackground";
import logo from "../assets/logo-two.png";

const HomePage = () => {
  const navigate = useNavigate();
  const goDrink = () => navigate("/hydration-tracker");

  return (
    <div className="relative w-[300px] h-[500px] overflow-x-hidden overflow-y-hidden">
      <WavesBackground />

      <div className="relative z-10 flex flex-col items-center pt-8">
        <h1 className="text-center font-bold text-2xl leading-tight tracking-[-0.015em] px-4 mb-1">
          Reboost
        </h1>
        <div className="w-48 h-48 flex items-center justify-center">
          <img src={logo} alt="Reboost Logo" className="max-w-full h-auto" />
        </div>
        <p className="flex justify-center px-2 text-[#4f8296] text-xs font-normal leading-normal mb-5">
          Reboot your day with a vibrant boost, one healthy habit at a time.
        </p>
        <button
          onClick={goDrink}
          className="px-6 py-2 bg-[#4f8296] text-white rounded-lg hover:bg-[#3d6475] transition-colors"
        >
          Hydration Tracker
        </button>
      </div>
    </div>
  );
};

export default HomePage;
