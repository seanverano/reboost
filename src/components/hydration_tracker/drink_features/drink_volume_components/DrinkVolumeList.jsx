import React from "react";

const DrinkVolumeList = ({
  volumes,
  selectedVolume,
  setSelectedVolume,
  iconComponents,
}) => {
  const renderIcon = (iconName) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  const handleSelectVolume = (volume) => {
    setSelectedVolume(volume);
  };

  return (
    <>
      <div className="px-10 pb-3 flex flex-row items-center justify-center my-1 border-b border-[#CFECF4] w-full">
        <h1 className="text-[#000000] mr-1 text-sm font-semibold leading-normal">
          Selected:
        </h1>
        {selectedVolume ? (
          <div className="flex items-center text-[#1CABE3] text-sm text-normal animate-fadeIn">
            {renderIcon(selectedVolume.iconName)}
            <span className="ml-1">{selectedVolume.name} ml</span>
          </div>
        ) : (
          <span className="flex items-center text-[#1CABE3] text-sm text-normal">
            None
          </span>
        )}
      </div>

      <div className="overflow-y-auto max-h-48 w-full scrollbar-thin scrollbar-thumb-[#CFECF4] scrollbar-track-transparent hover:scrollbar-thumb-[#1CABE3] px-4">
        <div className="flex flex-col items-center">
          {volumes.map((volume, index) => (
            <div
              key={index}
              onClick={() => handleSelectVolume(volume)}
              className="text-xs font-medium flex flex-row items-center justify-center mb-1 px-6 py-2 rounded-lg w-[125px] text-[#4f8296] hover:bg-[#CFECF4] cursor-pointer"
            >
              <span className="mr-2">{renderIcon(volume.iconName)}</span>
              <span>{volume.name} ml</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DrinkVolumeList;
