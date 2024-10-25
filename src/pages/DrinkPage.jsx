import React, { useState, useEffect } from "react";
import DrinkVolume from "../components/drink_features/DrinkVolume";
import DrinkType from "../components/drink_features/DrinkType";
import DrinkLogs from "../components/drink_features/DrinkLogs";
import DrinkHeader from "../components/drink_features/DrinkHeader";
import DrinkProgressCard from "../components/drink_features/DrinkProgressCard";
import confetti from "canvas-confetti";

const DrinkPage = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [dailyGoal, setDailyGoal] = useState(() => {
    const saved = localStorage.getItem("dailyGoal");
    return saved ? Number(saved) : 2000;
  });
  const [selectedVolume, setSelectedVolume] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [totalVolume, setTotalVolume] = useState(() => {
    const saved = localStorage.getItem("totalVolume");
    return saved ? Number(saved) : 0;
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [drinkLogs, setDrinkLogs] = useState(() => {
    const saved = localStorage.getItem("drinkLogs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("totalVolume", totalVolume.toString());
    localStorage.setItem("drinkLogs", JSON.stringify(drinkLogs));
    localStorage.setItem("dailyGoal", dailyGoal.toString());
  }, [totalVolume, drinkLogs, dailyGoal]);

  useEffect(() => {
    const lastAccessDate = localStorage.getItem("lastAccessDate");
    const today = new Date().toDateString();

    if (lastAccessDate !== today) {
      localStorage.setItem("lastAccessDate", today);
      if (lastAccessDate) {
        setTotalVolume(0);
        setDrinkLogs([]);
        localStorage.setItem("totalVolume", "0");
        localStorage.setItem("drinkLogs", JSON.stringify([]));
      }
    }
  }, []);

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
    if (settings.resetProgress) {
      setTotalVolume(0);
      setDrinkLogs([]);
      localStorage.setItem("totalVolume", "0");
      localStorage.setItem("drinkLogs", JSON.stringify([]));
    }
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
        <DrinkHeader
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          handleSaveSettings={handleSaveSettings}
          dailyGoal={dailyGoal}
        />

        <h1 className="mt-2 text-center text-[#000000] font-bold text-[lg] leading-tight tracking-[-0.015em]">
          Hydrate and Own the Day
        </h1>

        <DrinkProgressCard
          totalVolume={totalVolume}
          dailyGoal={dailyGoal}
          isAnimating={isAnimating}
          calculateProgress={calculateProgress}
        />

        <h1 className="text-center font-bold text-[lg] leading-tight tracking-[-0.015em] px-4 mb-1">
          Your Drink, Your Choice
        </h1>
        <p className="flex justify-center px-2 text-[#4f8296] text-xs font-normal leading-normal mb-3">
          Select a drink and volume, then log it.
        </p>
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
