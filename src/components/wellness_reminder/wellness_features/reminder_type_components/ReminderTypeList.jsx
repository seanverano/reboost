const ReminderTypeList = ({
  reminderTypes,
  selectedReminderType,
  setSelectedReminderType,
  iconComponentsTwo,
}) => {
  const renderIcon = (iconName) => {
    const IconComponent = iconComponentsTwo[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  const handleSelectReminderType = (reminderType) => {
    setSelectedReminderType(reminderType);
  };

  return (
    <>
      <div className="px-10 pb-3 flex flex-row items-center justify-center my-1 border-b border-[#C9EADE] w-full">
        <h1 className="text-[#000000] mr-1 text-sm font-semibold leading-normal">
          Selected:
        </h1>
        {selectedReminderType ? (
          <div className="flex items-center text-[#019963] text-sm text-normal animate-fadeIn">
            {renderIcon(selectedReminderType.iconName)}
            <span className="ml-1">{selectedReminderType.name}</span>
          </div>
        ) : (
          <span className="flex items-center text-[#019963] text-sm text-normal">
            None
          </span>
        )}
      </div>

      <div className="overflow-y-auto max-h-48 w-full scrollbar-thin scrollbar-thumb-[#C9EADE] scrollbar-track-transparent hover:scrollbar-thumb-[#C9EADE] px-4">
        <div className="flex flex-col items-center">
          {reminderTypes.map((reminderType, index) => (
            <div
              key={index}
              onClick={() => handleSelectReminderType(reminderType)}
              className="text-xs font-medium flex flex-row items-center justify-center mb-1 px-6 py-2 rounded-lg w-[125px] text-[#4f8296] hover:bg-[#C9EADE] cursor-pointer"
            >
              <span className="mr-2">{renderIcon(reminderType.iconName)}</span>
              {reminderType.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReminderTypeList;
