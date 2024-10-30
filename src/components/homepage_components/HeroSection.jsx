import logo from "../../assets/logo.png";

const HeroSection = () => {
  return (
    <>
      <div className="w-48 h-48 flex items-center justify-center">
        <img src={logo} alt="Reboost Logo" className="max-w-full h-auto" />
      </div>
      <h1 className="text-center font-bold text-2xl leading-tight tracking-[-0.015em] px-4 mb-1">
        Reboost
      </h1>
      <p className="flex justify-center px-2 text-[#4f8296] text-xs font-normal leading-normal mb-5">
        Reboot your day with a vibrant boost, one healthy habit at a time.
      </p>
    </>
  );
};

export default HeroSection;
