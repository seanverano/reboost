import { useState, useEffect } from "react";
import BannerSlideButton from "./wellness_buttons/BannerSlideButton";
import slides from "./wellness_utilities/bannerData";

const WellnessHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto px-4 py-2 font-manrope">
      <div className="relative aspect-video flex items-center justify-center">
        <img
          src={slides[currentSlide].image}
          alt="Wellness Reminder"
          className="w-full h-full object-contain"
        />

        <BannerSlideButton prevSlide={prevSlide} nextSlide={nextSlide} />
      </div>

      <div className="mt-2 text-center">
        <p className="text-xs">{slides[currentSlide].text}</p>
      </div>

      <div className="flex justify-center gap-2 mt-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1 h-1 rounded-full transition-colors ${
              currentSlide === index ? "bg-[#019963]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default WellnessHero;
