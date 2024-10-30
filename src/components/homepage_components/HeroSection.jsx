import logo from "../../assets/logo.png";

const HeroSection = () => {
  return (
    <>
      <div className="w-32 h-32 flex items-center justify-center text-center mt-11">
        <img src={logo} alt="Reboost Logo" />
      </div>
      <div className="relative group">
        <h1 className="text-center font-extrabold text-4xl px-4 bg-gradient-to-r from-[#1CABE3] to-[#80D261] text-transparent bg-clip-text">
          Reboost
        </h1>
      </div>
      <p className="text-center px-5 text-[#4f8296] text-xs font-normal leading-normal mb-8">
        Refresh your day with a wellness boost, one healthy habit at a time.
      </p>
    </>
  );
};

export default HeroSection;
