

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanelOpen(false);
          props.setConfirmRidePanel(false);
        }}
        className="absolute p-1 text-center w-[93%] top-0 hover:rounded-full hover:cursor-pointer">
        <i

          className='text-3xl text-zinc-200 ri-arrow-down-wide-line '></i>
      </h5>
      <h3 className="text-[20px] font-roboto font-medium mb-5 text-center ">Confirm your ride</h3>
      <div className='flex flex-col gap-2 justify-between items-center'>
        <img
          className='h-20'
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="Pickup Car Image" />

        {/* User's Location */}
        <div className='flex flex-col gap-1 w-full mt-5'>
          <div className='flex items-center gap-4 border-b-2 p-2'>
            <i className="text-lg ri-map-pin-range-fill"></i>
            <div className=''>
              <h3 className='text-lg font-semibold '>562/11-A</h3>
              <p className='text-zinc-600 text-[14px]'>Kaikondrahalli, Bengaluru, Karnataka</p>
            </div>
          </div>

          {/* Drop-off Location */}
          <div className='flex items-center gap-4 border-b-2 p-2'>
            <i className="text-lg ri-map-pin-3-fill"></i>
            <div className=''>
              <h3 className='text-lg font-semibold '>Third Wave Coffee</h3>
              <p className='text-zinc-600 text-[14px] '>17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru, Karnataka</p>
            </div>
          </div>

          {/* Amount */}
          <div className='flex items-center gap-4 p-2'>
            <i className="text-lg ri-wallet-fill"></i>
            <div className=''>
              <h3 className='text-lg font-semibold '>₹193.20</h3>
              <p className='text-zinc-600 text-[14px] '>Payment by Cash</p>
            </div>
          </div>

        </div>
        <button
          onClick={() => {
            props.setVehicleFound(true);
            props.setConfirmRidePanel(false);
          }}
          className='w-full mt-5 bg-green-600 text-white font-medium p-2 rounded-xl hover:cursor-pointer hover:bg-green-500'>Confirm Ride</button>
      </div>

    </div>
  )
}

export default ConfirmRide