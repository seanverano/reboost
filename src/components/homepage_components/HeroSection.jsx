import logo from "../../assets/logo.png";

const HeroSection = () => {
  return (
    <>
      <div className="w-36 h-36 flex items-center justify-center text-center mt-6 mb-1">
        <img src={logo} alt="Reboost Logo" />
      </div>
      <div className="relative group mb-1">
        <h1 className="text-center font-extrabold text-3xl px-4 mb-1 bg-gradient-to-r from-[#1CABE3] to-[#80D261] text-transparent bg-clip-text">
          Reboost
        </h1>
      </div>
      <p className="text-center px-5 text-[#4f8296] text-xs font-normal leading-normal mb-5">
        Refresh your day with a wellness boost, one healthy habit at a time.
      </p>
    </>
  );
};

export default HeroSection;
