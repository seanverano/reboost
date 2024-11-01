const AudioTypeList = ({
  audioTypes,
  selectedAudioType,
  setSelectedAudioType,
  iconComponentsTwo,
}) => {
  const renderIcon = (iconName) => {
    const IconComponent = iconComponentsTwo[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  const handleSelectAudioType = (audioType) => {
    setSelectedAudioType(audioType);
  };

  return (
    <>
      <div className="px-10 pb-3 flex flex-row items-center justify-center my-1 border-b border-[#C9EADE] w-full">
        <h1 className="text-[#000000] mr-1 text-sm font-semibold leading-normal">
          Selected:
        </h1>
        {selectedAudioType ? (
          <div className="flex items-center text-[#019963] text-sm text-normal animate-fadeIn">
            {renderIcon(selectedAudioType.iconName)}
            <span className="ml-1">{selectedAudioType.name}</span>
          </div>
        ) : (
          <span className="flex items-center text-[#019963] text-sm text-normal">
            None
          </span>
        )}
      </div>

      <div className="overflow-y-auto max-h-48 w-full scrollbar-thin scrollbar-thumb-[#C9EADE] scrollbar-track-transparent hover:scrollbar-thumb-[#C9EADE] px-4">
        <div className="flex flex-col items-center">
          {audioTypes.map((audioType, index) => (
            <div
              key={index}
              onClick={() => handleSelectAudioType(audioType)}
              className="text-xs font-medium flex flex-row items-center justify-center mb-1 px-6 py-2 rounded-lg w-[125px] text-[#4f8296] hover:bg-[#C9EADE] cursor-pointer"
            >
              <span className="mr-2">{renderIcon(audioType.iconName)}</span>
              {audioType.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AudioTypeList;
