import { useNavigate } from "react-router-dom";
import hero_one from "../assets/hero-one.jpg";
import MenuPageFooter from "../components/menupage_components/MenuPageFooter";

const MenuPage = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const goDrink = () => navigate("/hydration-tracker");

  return (
    <div className="bg-[#F8FBFB] relative w-[300px] h-[500px] rounded-lg overflow-hidden font-manrope">
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-100% h-auto flex items-center justify-center text-center p-5">
          <img src={hero_one} alt="Hero Image 1" />
        </div>
        <h1>Test</h1>
      </div>
      <button onClick={goDrink}>
        <span>Test</span>
      </button>
      <MenuPageFooter goHome={goHome} />
    </div>
  );
};

export default MenuPage;
