

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehicleFound(false);
        }}
        className="absolute p-1 text-center w-[93%] top-0 hover:rounded-full hover:cursor-pointer">
        <i className='text-3xl text-zinc-200 ri-arrow-down-wide-line '></i>
      </h5>
      <h3 className="text-[20px] font-roboto font-medium mb-5 text-center ">Looking for nearby drivers</h3>
      <div className='flex flex-col gap-2 justify-between items-center'>
        <img
          className='h-20'
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="Pickup Car Image" />

        {/* User's Location */}
        <div className='flex flex-col gap-1 w-full mt-5'>
          <div className='flex items-center gap-4 border-b-2 p-2'>
            <i className="text-lg ri-map-pin-range-fill"></i>
            <div className=''>
              <h3 className='text-[15px] font-medium text-zinc-900 tracking-tighter font-roboto  '>{props.pickup}</h3>
            </div>
          </div>

          {/* Drop-off Location */}
          <div className='flex items-center gap-4 border-b-2 p-2'>
            <i className="text-lg ri-map-pin-3-fill"></i>
            <div className=''>
              <h3 className='text-[15px] font-medium text-zinc-800 tracking-tighter font-roboto  '>{props.destination}</h3>
            </div>
          </div>

          {/* Amount */}
          <div className='flex items-center gap-4 p-2'>
            <i className="text-lg ri-wallet-fill"></i>
            <div className=''>
              <h3 className='text-[15px] font-semibold text-zinc-800 tracking-tight font-roboto'>₹{props.fare[props.vehicleType]}</h3>
              <p className='text-zinc-600 text-[14px] '>Payment by Cash</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default LookingForDriver