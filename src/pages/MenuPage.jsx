import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import MenuPageButton from "../components/menupage_components/MenuPageButton";
import MenuPageFooter from "../components/menupage_components/MenuPageFooter";
import WavesBackgroundTwo from "../components/menupage_components/WaveBackgroundTwo";

const MenuPage = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const goDrink = () => navigate("/hydration-tracker");

  return (
    <div className="bg-[#F8FBFB] relative w-[300px] h-[500px] rounded-lg overflow-hidden font-manrope">
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-48 h-48 flex items-center justify-center text-center px-6 bg-[#F8FBFB]">
          <img src={logo} alt="Hero Image 1" />
        </div>
      </div>
      <WavesBackgroundTwo />
      <MenuPageButton goDrink={goDrink} />
      <MenuPageFooter goHome={goHome} />
    </div>
  );
};

export default MenuPage;
