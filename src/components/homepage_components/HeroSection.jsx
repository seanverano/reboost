import logo from "../../assets/images/logo.png";

const HeroSection = () => {
  return (
    <>
      <div className="w-36 h-36 flex items-center justify-center text-center mt-11 mb-1">
        <img src={logo} alt="Reboost Logo" />
      </div>
      <div className="relative group">
        <h1 className="text-center font-extrabold text-5xl px-4 bg-gradient-to-r from-[#1CABE3] to-[#80D261] text-transparent bg-clip-text">
          Reboost
        </h1>
        <p className="text-center px-12 text-[#4f8296] text-xs font-normal leading-normal mb-6">
          Refresh and boost your well-being, one healthy habit at a time.
        </p>
      </div>
    </>
  );
};

export default HeroSection;
