import React from "react";
import { FaPlus } from "react-icons/fa6";

const DrinkPage = () => {
  return (
    <>
      <div className="font-poppins flex flex-col h-full w-[300px] h-[500px]">
        <h1 className="font-bold text-lg justify-center text-center">
          Hydrate Daily!
        </h1>
        <h2 className="text-sm text-left p-0 m-0">Today</h2>
        <div className="flex px-4 py-6 justify-center items-center">
          <div className="flex flex-1 flex-col gap-2 rounded-xl border border-transparent p-6 bg-[#EEF8FB]">
            <p className="text-[#000000]">0% Hydrated</p>
            <p className="text-[#000000] font-bold">40oz</p>
          </div>
        </div>
      </div>
      <div>
        <button
          className=" bg-[#55BCD8] rounded-lg px-4 py-2
    ml-2 focus:outline-none"
          onMouseDown={() => {
            if (navigator.vibrate) {
              navigator.vibrate(100);
            }
          }}
        >
          <FaPlus />
        </button>
      </div>
    </>
  );
};

export default DrinkPage;
