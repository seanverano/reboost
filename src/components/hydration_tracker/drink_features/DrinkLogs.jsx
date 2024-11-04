import React, { useState, useEffect } from "react";
import { getTimeAgo } from "../drink_utilities/timeUtils";
import CheckLogsModal from "../drink_modals/CheckLogsModal";
import LogsHeader from "./drink_logs_components/LogsHeader";
import EmptyLogsMsg from "./drink_logs_components/EmptyLogsMsg";
import LogsList from "./drink_logs_components/LogsList";
import TotalLogsVolume from "./drink_logs_components/TotalLogsVolume";
import CheckLogsButton from "../drink_buttons/CheckLogsButton";

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

  const getTotalVolume = () => {
    return logs.reduce((total, log) => total + Number(log.volume), 0);
  };

  return (
    <>
      <CheckLogsButton onClick={openModal} />

      <CheckLogsModal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center h-[400px] items-center font-manrope font-medium bg-[#EEF8FB] rounded-lg">
          <LogsHeader />

          {logs.length === 0 ? (
            <EmptyLogsMsg />
          ) : (
            <div className="flex-1 flex flex-col overflow-hidden">
              <LogsList logs={logs} getTimeAgo={getTimeAgo} />
              <TotalLogsVolume volume={getTotalVolume()} />
            </div>
          )}
        </div>
      </CheckLogsModal>
    </>
  );
};

export default DrinkLogs;
