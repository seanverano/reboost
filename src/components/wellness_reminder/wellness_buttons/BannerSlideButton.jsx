import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const BannerSlideButton = ({ prevSlide, nextSlide }) => {
  return (
    <>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2"
      >
        <FaChevronLeft className="w-2 h-2" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2"
      >
        <FaChevronRight className="w-2 h-2" />
      </button>
    </>
  );
};

export default BannerSlideButton;
