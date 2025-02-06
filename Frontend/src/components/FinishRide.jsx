import { Link } from "react-router-dom";


const FinishRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
        className="absolute p-1 text-center w-[93%] top-0 hover:rounded-full hover:cursor-pointer">
        <i

          className='text-3xl text-zinc-200 ri-arrow-down-wide-line '></i>
      </h5>
      <h3 className="text-[18px] font-roboto font-medium mb-5 text-center ">Finish this ride &#58;&#41; </h3>

      <div className='bg-lime-200 p-3 rounded-lg'>
        <div className='flex flex-col items-center justify-between gap-2'>
          <img
            className='h-14 w-14 rounded-full object-cover'
            src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h2 className='text-[16px] font-roboto font-medium'>Shanaya Kapoor</h2>
        </div>
        <h5 className='text-center text-sm text-zinc-500 font-semibold'>2.2 Km </h5>
      </div>

      <div className='flex flex-col gap-2 justify-between items-center'>
        <img
        />

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

        <div className="flex flex-col justify-center items-center ">
          <Link
            to={'/captain-home'}
            className='w-full text-center bg-zinc-900 text-white font-medium px-5 py-3 rounded-lg hover:cursor-pointer hover:bg-zinc-800'>Finish Ride</Link>
          <p className="mt-2 w-full tracking-tighter text-red-600 text-xs font-sans animate-pulse">
            Click on Finish Ride after receiving payment.
          </p>
        </div>

      </div>

    </div>
  )
}

export default FinishRide