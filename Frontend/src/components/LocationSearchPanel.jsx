
const LocationSearchPanel = ({ suggestions, setVehiclePanelOpen, setPanelOpen, setPickup, setDestination, activeField }) => {

  const handleSuggestionClick = (suggestion) => {
    if (activeField === 'pickup') {
      setPickup(suggestion);
    } else if (activeField === 'destination') {
      setDestination(suggestion);
    }

  };


  return (
    <div>
      {
        suggestions.map((elem, idx) => (
          <div
            key={idx}
            onClick={() => handleSuggestionClick(elem)}
            className='flex items-center justify-start gap-2 hover:bg-zinc-100 p-2 hover:cursor-pointer hover:rounded-full border-2 border-gray-50 active:border-black rounded-xl my-2'>
            <h2 className='bg-[#eeeeee] p-2 rounded-full flex items-center justify-center h-8 w-8'><i className="ri-map-pin-range-fill"></i></h2>
            <h4 className='tracking-tight'>{elem}</h4>
          </div>
        ))
      }
    </div>
  );
};

export default LocationSearchPanel;