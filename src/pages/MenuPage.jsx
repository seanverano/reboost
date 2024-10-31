import { useNavigate } from "react-router-dom";
import hero_one from "../assets/hero-one.jpg";
import MenuPageFooter from "../components/menupage_components/MenuPageFooter";
import MenuPageButton from "../components/menupage_components/MenuPageButton";

const MenuPage = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const goDrink = () => navigate("/hydration-tracker");

  return (
    <div className="bg-[#F8FBFB] relative w-[300px] h-[500px] rounded-lg overflow-hidden font-manrope">
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-50% h-50% flex items-center justify-center text-center px-6 border-b border-[transparent]">
          <img src={hero_one} alt="Hero Image 1" />
        </div>
      </div>
      <MenuPageButton goDrink={goDrink} />
      <MenuPageFooter goHome={goHome} />
    </div>
  );
};

export default MenuPage;
