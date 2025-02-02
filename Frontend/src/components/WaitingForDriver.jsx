

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setWaitingForDriver(true);

        }}
        className="absolute p-1 text-center w-[93%] top-0 hover:rounded-full hover:cursor-pointer">
        <i className='text-3xl text-zinc-200 ri-arrow-down-wide-line '></i>
      </h5>
      <div className="flex items-center justify-between">
        <img
          className='h-16'
          src="https://www.popularmaruti.com/storage/upload/vehicle/image/s-presso_Solid-Sizzle-Orange.png" alt="Pickup Car Image" />
        <div className="text-right">
          <h2 className=" text-[14px] text-zinc-600 font-medium font-roboto tracking-tighter">SARTH NARAYAN</h2>
          <h4 className="text-[20px] font-bold font-roboto -mt-1 -mb-1">KA 04 BY 4517</h4>
          <p className="text-[13px] text-zinc-600 font-semibold ">Orange Suzuki S-Presso LXI</p>
          <p className="text-[12px] text-zinc-600 font-bold">★ 4.9</p>
        </div>
      </div>


      <div className='flex flex-col gap-2 justify-between items-center'>


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

      </div>

    </div>
  )
}

export default WaitingForDriver