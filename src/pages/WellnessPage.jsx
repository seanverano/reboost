import WellnessHeader from "../components/wellness_reminder/WellnessHeader";
import WellnessHero from "../components/wellness_reminder/WellnessHero";
import WellnessSelection from "../components/wellness_reminder/WellnessSelection";

const WellnessPage = () => {
  return (
    <div className="bg-[#F8FBFB] relative w-[300px] h-[500px] rounded-lg overflow-hidden font-manrope">
      <WellnessHeader />
      <h1 className="mt-2 text-center text-[#000000] font-semibold text-[lg] leading-tight tracking-[-0.015em]">
        Boost Wellness with a Break
      </h1>
      <WellnessHero />
      <WellnessSelection />
    </div>
  );
};

export default WellnessPage;
