import { useNavigate } from "react-router-dom";
import WavesBackground from "../components/homepage_components/WavesBackground";
import HeroSection from "../components/homepage_components/HeroSection";

const HomePage = () => {
  const navigate = useNavigate();
  const goDrink = () => navigate("/hydration-tracker");

  return (
    <div className="relative w-[300px] h-[500px] overflow-x-hidden overflow-y-hidden font-manrope">
      <WavesBackground />

      <div className="relative z-10 flex flex-col items-center pt-8">
        <HeroSection />

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
