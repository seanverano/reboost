import { useNavigate } from "react-router-dom";
import menu from "../assets/menu.png";
import MenuPageButton from "../components/menupage_components/MenuPageButton";
import MenuPageFooter from "../components/menupage_components/MenuPageFooter";
import WavesBackgroundTwo from "../components/menupage_components/WaveBackgroundTwo";

const MenuPage = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const goDrink = () => navigate("/test");
  const goWell = () => navigate("/wellness-reminder");

  return (
    <div className="bg-[#F8FBFB] relative w-[300px] h-[500px] rounded-lg overflow-hidden font-manrope">
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-48 h-48 flex flex-col items-center justify-center text-center px-6 bg-[#F8FBFB]">
          <img src={menu} alt="Menu Icon" />
        </div>
      </div>
      <WavesBackgroundTwo />
      <MenuPageButton goDrink={goDrink} goWell={goWell} />
      <MenuPageFooter goHome={goHome} />
    </div>
  );
};

export default MenuPage;
