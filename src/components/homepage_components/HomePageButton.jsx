import { GoArrowUpRight } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const HomePageButton = ({ goDrink }) => {
  return (
    <>
      <div className="flex flex-col justify-center gap-2">
        <div className="text-sm font-bold text-center">
          <button
            onClick={goDrink}
            className="group relative inline-flex items-center px-6 py-2 rounded-lg text-[#F8F2F0] bg-[#000000] leading-normal tracking-[0.015em] transition-all duration-300
                     hover:pr-9"
          >
            <span>Get Started</span>
            <GoArrowRight
              className="absolute left-[calc(100%-30px)] transform translate-x-8 opacity-0 transition-all duration-300 text-base
                       group-hover:translate-x-0 group-hover:opacity-100"
            />
          </button>
        </div>
        <div className="text-sm font-bold text-center border-black ">
          <button
            onClick={goDrink}
            className="group relative inline-flex items-center px-6 py-2 rounded-lg text-[#000000] bg-[transparent] leading-normal tracking-[0.015em] transition-all duration-300
                     hover:pr-9"
          >
            <span>Learn More</span>
            <GoArrowUpRight
              className="absolute left-[calc(100%-30px)] transform translate-x-8 opacity-0 transition-all duration-300 text-base
                       group-hover:translate-x-0 group-hover:opacity-100"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePageButton;
