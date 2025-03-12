import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import menu from "../assets/images/menu.png";
import MenuPageButton from "../components/menupage_components/MenuPageButton";
import MenuPageFooter from "../components/menupage_components/MenuPageFooter";
import WavesBackgroundTwo from "../components/menupage_components/WaveBackgroundTwo";
import ReviewPopup from "../components/menupage_components/ReviewPopup";

const MenuPage = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const goDrink = () => navigate("/hydration-tracker");
  const goWell = () => navigate("/wellness-reminder");

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const checkPopupDisplay = () => {
      const lastShown = localStorage.getItem("reboostReviewPopupLastShown");
      const currentTime = new Date().getTime();

      if (
        !lastShown ||
        currentTime - parseInt(lastShown) > 7 * 24 * 60 * 60 * 1000
      ) {
        setShowPopup(true);
        localStorage.setItem(
          "reboostReviewPopupLastShown",
          currentTime.toString()
        );
      }
    };

    const timer = setTimeout(checkPopupDisplay, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleReview = () => {
    window.open(
      "https://chromewebstore.google.com/detail/reboost-hydration-tracker/bdlffpdkioakgjjpmgpboogfiaegbpgp/reviews",
      "_blank"
    );
    setShowPopup(false);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-[#F8FBFB] relative w-[300px] h-[500px] overflow-hidden font-manrope">
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-48 h-48 flex flex-col items-center justify-center text-center px-6 bg-[#F8FBFB]">
          <img src={menu} alt="Menu Icon" />
        </div>
      </div>
      <WavesBackgroundTwo />
      <MenuPageButton goDrink={goDrink} goWell={goWell} />
      <MenuPageFooter goHome={goHome} />
      {showPopup && (
        <>
          <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>
          <ReviewPopup onClose={handleClose} onReview={handleReview} />
        </>
      )}
    </div>
  );
};

export default MenuPage;
