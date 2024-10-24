import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import DrinkVolume from "../components/drink_features/DrinkVolume";
import DrinkType from "../components/drink_features/DrinkType";
import DrinkLogs from "../components/drink_features/DrinkLogs";
import DrinkSettingsButton from "../components/drink_features/DrinkSettingsModal";
import confetti from "canvas-confetti";

const DrinkPage = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [dailyGoal, setDailyGoal] = useState(() => {
    return Number(localStorage.getItem("dailyGoal")) || 2000;
  });
  const [selectedVolume, setSelectedVolume] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [totalVolume, setTotalVolume] = useState(() => {
    return Number(localStorage.getItem("totalVolume")) || 0;
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [drinkLogs, setDrinkLogs] = useState(() => {
    const saved = localStorage.getItem("drinkLogs");
    return saved ? JSON.parse(saved) : [];
  });

  // Save drink data
  useEffect(() => {
    localStorage.setItem("totalVolume", String(totalVolume));
    localStorage.setItem("drinkLogs", JSON.stringify(drinkLogs));
  }, [totalVolume, drinkLogs]);

  const handleLogDrink = () => {
    if (selectedVolume && selectedDrink) {
      const newTotal = totalVolume + Number(selectedVolume.name);
      setTotalVolume(newTotal);
      setIsAnimating(true);

      const newLog = {
        drink: selectedDrink.name,
        volume: selectedVolume.name,
        timestamp: new Date().toISOString(),
      };
      setDrinkLogs([...drinkLogs, newLog]);

      if (newTotal >= dailyGoal && totalVolume < dailyGoal) {
        setShowCelebration(true);
        triggerCelebration();
      }

      setTimeout(() => {
        setIsAnimating(false);
        if (showCelebration) {
          setShowCelebration(false);
        }
      }, 1500);
    }
  };

  const handleSaveSettings = (settings) => {
    setDailyGoal(settings.dailyGoal);
    localStorage.setItem("dailyGoal", settings.dailyGoal);
  };

  const triggerCelebration = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;
    const colors = ["#1CABE3", "#EEF8FB", "#CFECF4"];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0.5 },
        colors: colors,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 0.5 },
        colors: colors,
        disableForReducedMotion: true,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const calculateProgress = () => {
    return Math.min((totalVolume / dailyGoal) * 100, 100).toFixed(1);
  };

  useEffect(() => {
    return () => {
      if (typeof confetti.reset === "function") {
        confetti.reset();
      }
    };
  }, []);

  return (
    <>
      <div className="font-manrope flex flex-col h-[500px] w-[300px] bg-[#F8FBFB] rounded-lg overflow-hidden">
        <div className="flex items-center bg-[#f8fbfb] mt-3 p-1 pb-2 justify-between">
          <button className="flex cursor-pointer items-center justify-center rounded-full h-4 bg-transparent text-[#000000] gap-2 font-bold leading-normal tracking-[0.015em] p-0">
            <div className="flex items-center gap-2 text-[#000000] ml-3 hover:text-[#1CABE3] text-lg">
              <AiOutlineHome />
            </div>
          </button>
          <DrinkSettingsButton
            show={showSettings}
            onClose={() => setShowSettings(false)}
            onSaveSettings={handleSaveSettings}
            currentSettings={{
              dailyGoal,
            }}
          />
        </div>

        <h1 className="mt-2 text-center text-[#000000] font-bold text-[lg] leading-tight tracking-[-0.015em]">
          Hydrate and Own the Day
        </h1>
        <div className="flex flex-wrap gap-4 px-10 py-6">
          <div
            className={`flex flex-1 flex-col gap-2 rounded-xl border border-[#d0e0e6] bg-[#EEF8FB] backdrop-blur-lg shadow-lg p-6 relative overflow-hidden ${
              isAnimating ? "animate-pulsate" : ""
            }`}
          >
            <div
              className={`absolute bottom-0 left-0 w-full bg-[#1CABE3] transition-all duration-1000 ease-out 
                ${isAnimating ? "animate-progress-wave" : ""}`}
              style={{
                height: `${calculateProgress()}%`,
                zIndex: 0,
              }}
            />

            <div className="relative z-10">
              <p
                className={`mb-2 tracking-light text-4xl font-black leading-tight truncate ${
                  calculateProgress() >= 100
                    ? "text-[#F8FBFB]"
                    : calculateProgress() >= 80
                    ? "text-[#F8FBFB]"
                    : "text-[#000000]"
                }`}
              >
                {calculateProgress()}%
              </p>
              <p
                className={`text-sm font-normal leading-normal ${
                  calculateProgress() >= 100
                    ? "text-[#CFECF4]"
                    : calculateProgress() >= 50
                    ? "text-[#CFECF4]"
                    : "text-[#4f8296]"
                }`}
              >
                {totalVolume >= dailyGoal
                  ? "Goal Reached! 🎉"
                  : totalVolume >= dailyGoal / 2
                  ? "Keep it Up! 💪"
                  : "Drink Up! 💧"}
              </p>
              <p
                className={`text-[13px] font-bold leading-normal tracking-[0.015em] mt-4 ${
                  calculateProgress() >= 100
                    ? "text-[#CFECF4]"
                    : calculateProgress() >= 30
                    ? "text-[#CFECF4]"
                    : "text-[#4f8296]"
                }`}
              >
                {(totalVolume / 1000).toFixed(1)} of{" "}
                {(dailyGoal / 1000).toFixed(1)} L
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-center font-bold text-[lg] leading-tight tracking-[-0.015em] px-4 mb-5">
          Your Drink, Your Choice
        </h1>
        <div className="flex flex-row">
          <div className="flex-[80%] gap-y-2 mb-4 flex flex-col text-center items-center justify-center">
            <DrinkType
              selectedDrink={selectedDrink}
              setSelectedDrink={setSelectedDrink}
            />
            <DrinkVolume
              selectedVolume={selectedVolume}
              setSelectedVolume={setSelectedVolume}
            />
          </div>
        </div>
        <div className="flex flex-row space-x-5 justify-center">
          <button
            onClick={handleLogDrink}
            disabled={!selectedVolume || !selectedDrink}
            className={`m-0 w-[120px] rounded-full h-10 px-4 flex items-center justify-center ${
              selectedVolume && selectedDrink
                ? "bg-[#1CABE3] cursor-pointer"
                : "bg-[#1CABE3]/50 cursor-not-allowed"
            } transition-transform duration-200 active:translate-y-1`}
          >
            <p className="text-[#ffffff] text-xs font-bold leading-normal tracking-[0.015em]">
              Log Drink
            </p>
          </button>
          <DrinkLogs logs={drinkLogs} />
        </div>
      </div>
    </>
  );
};

export default DrinkPage;
