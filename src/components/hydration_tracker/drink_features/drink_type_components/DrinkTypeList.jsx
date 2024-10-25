const DrinkTypeList = ({
  drinks,
  selectedDrink,
  setSelectedDrink,
  iconComponents,
}) => {
  const renderIcon = (iconName) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  const handleSelectDrink = (drink) => {
    setSelectedDrink(drink);
  };

  return (
    <>
      <div className="px-10 pb-3 flex flex-row items-center justify-center my-1 border-b border-[#CFECF4] w-full">
        <h1 className="text-[#000000] mr-1 text-sm font-bold leading-normal">
          Selected:
        </h1>
        {selectedDrink ? (
          <div className="flex items-center text-[#1CABE3] text-sm text-normal animate-fadeIn">
            {renderIcon(selectedDrink.iconName)}
            <span className="ml-1">{selectedDrink.name}</span>
          </div>
        ) : (
          <span className="flex items-center text-[#1CABE3] text-sm text-normal">
            None
          </span>
        )}
      </div>

      <div className="overflow-y-auto max-h-48 w-full scrollbar-thin scrollbar-thumb-[#CFECF4] scrollbar-track-transparent hover:scrollbar-thumb-[#1CABE3] px-4">
        <div className="flex flex-col items-center">
          {drinks.map((drink, index) => (
            <div
              key={index}
              onClick={() => handleSelectDrink(drink)}
              className="text-xs font-medium flex flex-row items-center justify-center mb-1 px-6 py-2 rounded-lg w-[125px] text-[#4f8296] hover:bg-[#CFECF4] cursor-pointer"
            >
              <span className="mr-2">{renderIcon(drink.iconName)}</span>
              {drink.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DrinkTypeList;
