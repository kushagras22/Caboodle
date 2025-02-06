import { Link } from "react-router-dom"



const Riding = () => {
  return (
    <div className="h-screen overflow-hidden ">
      <Link
        to={'/home'}
        className="fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full  hover:cursor-pointer hover:bg-zinc-200">
        <i className="text-lg font-medium ri-home-2-line"></i>
      </Link>
      <div className="h-1/2 ">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Map Layout" />
      </div>
      <div className="h-1/2 p-3 ">
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

        <button
          className='w-full mt-2 bg-blue-600 text-white font-medium p-2 rounded-xl hover:cursor-pointer hover:bg-blue-500'
        >Make a payment</button>
      </div>
    </div>
  )
}

export default Riding