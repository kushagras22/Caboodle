

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
        className="absolute p-1 text-center w-[93%] top-0 hover:rounded-full hover:cursor-pointer">
        <i className='text-3xl text-zinc-200 ri-arrow-down-wide-line '></i>
      </h5>
      <h3 className="text-[24px] font-roboto font-medium mb-5 ">Choose Vehicle</h3>

      {/* Caboodle Pickup Car */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanelOpen(false);
          props.selectVehicle('car');
        }}
        className="flex w-full items-center justify-between gap-2 border-[3px] active:border-black rounded-xl p-3 mb-2 hover:cursor-pointer hover:bg-zinc-100">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="Pickup Car Image" />
        <div className="w-1/2 ">
          <h4 className="font-medium font-roboto tracking-tight">Caboo Go
            <span className="text-sm font-normal ml-1  font-roboto">
              <i className="ri-user-fill"></i>
              4
            </span>
          </h4>
          <h5 className="text-sm font-roboto font-medium">2 mins away</h5>
          <p className="text-[12px] text-zinc-500 font-medium font-roboto ">Fast, comfortable rides</p>
        </div>
        <h2 className="font-medium mt-[-32px] font-roboto">₹
          {props.fare.car}</h2>
      </div>

      {/* Caboodle Pickup Motorcycle */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanelOpen(false);
          props.selectVehicle('moto');
        }}
        className="flex w-full items-center justify-between gap-2 border-[3px] active:border-black rounded-xl p-3 mb-2 hover:cursor-pointer hover:bg-zinc-100">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="Pickup Moto Image" />
        <div className="w-1/2 ">
          <h4 className="font-medium font-roboto tracking-tight">Caboo Moto
            <span className="text-sm font-normal ml-1  font-roboto">
              <i className="ri-user-fill"></i>
              1
            </span>
          </h4>
          <h5 className="text-sm font-roboto font-medium">3 mins away</h5>
          <p className="text-[12px] text-zinc-500 font-medium font-roboto ">Affordable airy rides</p>
        </div>
        <h2 className="font-medium mt-[-32px] font-roboto">₹
          {props.fare.moto}</h2>
      </div>

      {/* Caboodle Pickup Auto */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanelOpen(false);
          props.selectVehicle('auto');
        }}
        className="flex w-full items-center justify-between gap-2 border-[3px] active:border-black rounded-xl p-3 mb-2 hover:cursor-pointer hover:bg-zinc-100 ">
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="Pickup Auto Image" />
        <div className="w-1/2 ">
          <h4 className="font-medium font-roboto tracking-tight">Caboo Auto
            <span className="text-sm font-normal ml-1 font-roboto">
              <i className="ri-user-fill"></i>
              3
            </span>
          </h4>
          <h5 className="text-sm font-roboto font-medium">2 mins away</h5>
          <p className="text-[12px] text-zinc-500 font-medium font-roboto ">Pocket-friendly rides</p>
        </div>
        <h2 className="font-medium mt-[-32px] font-roboto">₹
          {props.fare.auto}</h2>
      </div>
    </div>
  )
}

export default VehiclePanel