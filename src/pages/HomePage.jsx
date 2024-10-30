import { useNavigate } from "react-router-dom";
import WavesBackground from "../components/homepage_components/WavesBackground";
import HeroSection from "../components/homepage_components/HeroSection";
import HomePageButton from "../components/homepage_components/HomePageButton";
import HomePageFooter from "../components/homepage_components/HomePageFooter";

const HomePage = () => {
  const navigate = useNavigate();
  const goMenu = () => navigate("/menu");

  return (
    <div className="bg-[#F8FBFB] relative w-[300px] h-[500px] rounded-lg overflow-hidden font-manrope">
      <WavesBackground />

      <div className="relative z-10 flex flex-col items-center pt-8">
        <HeroSection />
        <HomePageButton goMenu={goMenu} />
      </div>

      <HomePageFooter />
    </div>
  );
};

export default HomePage;
