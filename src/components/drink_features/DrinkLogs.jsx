import React, { useState, useEffect } from "react";
import CheckLogs from "./CheckLogs";
import { LuHistory } from "react-icons/lu";

const DrinkLogs = ({ logs = [] }) => {
  const [showModal, setShowModal] = useState(false);
  const [, setForceUpdate] = useState(0);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setForceUpdate((prev) => prev + 1);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const past = new Date(timestamp);
    const diffInMinutes = Math.floor((now - past) / (1000 * 60));

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes === 1) return "1 minute ago";
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours === 1) return "1 hour ago";
    if (diffInHours < 24) return `${diffInHours} hours ago`;

    return "Yesterday";
  };

  const getTotalVolume = () => {
    return logs.reduce((total, log) => total + Number(log.volume), 0);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="m-0 w-[120px] rounded-full h-10 px-4 flex items-center justify-center bg-[#000000] cursor-pointer transition-transform duration-200 active:translate-y-1"
      >
        <p className="text-[#E7F0F2] text-xs font-bold leading-normal tracking-[0.015em]">
          Check Logs
        </p>
      </button>

      <CheckLogs show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center h-[400px] w-[280px] items-center font-manrope font-medium bg-[#EEF8FB] rounded-lg">
          <div className="flex-none p-4 border-b border-[#CFECF4] w-full">
            <h2 className="text-[#000000] text-center text-base font-bold leading-normal">
              Today's Drink Logs
            </h2>
          </div>

          {logs.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-[#4f8296] p-4">
              <LuHistory className="text-2xl mb-2" />
              <p className="text-sm">No drinks logged yet</p>
            </div>
          ) : (
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="flex-1 overflow-y-auto px-4 py-2">
                {logs
                  .slice()
                  .reverse()
                  .map((log, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 mb-2 bg-[#F9FBFA] rounded-lg shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div className="ml-2 text-[#1CABE3] text-sm text-left">
                          {getTimeAgo(log.timestamp)}
                        </div>
                        <div className="ml-14 text-right">
                          <p className="text-[#000000] text-sm font-medium">
                            {log.drink}
                          </p>
                          <p className="text-[#4f8296] text-xs">
                            {log.volume} ml
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex-none border-t border-[#CFECF4] p-4 w-full">
                <div className="flex justify-between items-center">
                  <span className="text-[#4f8296] text-sm">Total Volume:</span>
                  <span className="text-[#1CABE3] font-bold">
                    {(getTotalVolume() / 1000).toFixed(1)}L
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </CheckLogs>
    </>
  );
};

export default DrinkLogs;
