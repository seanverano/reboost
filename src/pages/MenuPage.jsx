import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const navigate = useNavigate();
  const goDrink = () => navigate("/hydration-tracker");

  return (
    <div className="bg-[#F8FBFB] relative w-[300px] h-[500px] rounded-lg overflow-hidden font-manrope">
      <div className="relative z-10 flex flex-col items-center pt-8">
        <h1>Test</h1>
      </div>
      <button onClick={goDrink}>
        <span>Test</span>
      </button>
    </div>
  );
};

export default MenuPage;
