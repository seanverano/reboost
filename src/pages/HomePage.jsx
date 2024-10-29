import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const goDrink = () => navigate("/hydration-tracker");

  return (
    <>
      <h1 className="text-center font-bold text-[lg] leading-tight tracking-[-0.015em] px-4 mb-1">
        Reboot
      </h1>
      <p className="flex justify-center px-2 text-[#4f8296] text-xs font-normal leading-normal mb-5">
        Reboot your day with a vibrant boost, one healthy habit at a time.
      </p>
      <button onClick={goDrink}>Hydration Tracker</button>
    </>
  );
};

export default HomePage;
