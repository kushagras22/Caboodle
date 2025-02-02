

const LocationSearchPanel = (props) => {

  const locations = [
    "Kempegowda International Airport, Karnataka 534320",
    "Sheraton Grand Bengaluru Whitefield Hotel & Convention Center, Whitefield, Bengaluru, Karnataka 560048",
    "Indira Gandhi International Airport, New Delhi, Delhi 110037",
    "Zsquare, Mall Rd, Downtown, Kanpur, Uttar Pradesh 208001",
    "Pranveer Singh Institute of Technology National Highway, NH-19, Kanpur, Uttar Pradesh 209305"
  ]

  return (
    <div>
      {
        locations.map((element, index) => {
          return (
            <>
              <div
                key={index}
                onClick={() => {
                  props.setVehiclePanelOpen(true);
                  props.setPanelOpen(false);
                }}
                className='flex items-center justify-start gap-2 hover:bg-zinc-100 p-2 hover:cursor-pointer hover:rounded-full border-2 border-gray-50 active:border-black rounded-xl my-2'>

                <h2 className='bg-[#eeeeee] p-2 rounded-full flex items-center justify-center h-8 w-8'><i className="ri-map-pin-range-fill"></i></h2>
                <h4 className='tracking-tight'>{element}</h4>
              </div>
            </>
          )
        })
      }

    </div>
  )
}

export default LocationSearchPanel