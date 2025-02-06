import { useState } from "react";
import { Link } from "react-router-dom";


const ConfirmRidePopup
  = (props) => {

    const [OTP, setOTP] = useState('');

    const submitHandler = async (e) => {
      e.preventDefault();

      setOTP('');
    }

    return (
      <div>
        <h3 className="text-[18px] font-roboto font-medium mb-5 text-center ">Press confirm to start</h3>
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
          <div className="mt-2 w-[50%]">
            <form
              className="flex flex-col"
              onSubmit={(e) => {
                submitHandler(e);
              }}>

              <input
                value={OTP}
                onChange={(e) => {
                  setOTP(e.target.value);
                }}
                className="bg-[#eeeeee] px-4 py-2 text-base font-mono rounded-lg mb-4 placeholder:text-[16px] placeholder:text-zinc-500 outline-lime-300 hover:cursor-pointer placeholder:text-sm"
                type="text"
                placeholder="Enter OTP here" />
              <Link
                to={'/captain-riding'}
                className='w-full text-center bg-green-600 text-white font-medium p-2 rounded-xl hover:cursor-pointer hover:bg-green-500'>Confirm</Link>

              <button
                onClick={() => {
                  props.setConfirmRidePopup(false);
                  props.setRidePopupPanel(false);
                }}
                className='w-full mt-2 bg-red-600 text-white font-medium p-2 rounded-xl hover:cursor-pointer hover:bg-red-700'>Cancel</button>
            </form>

          </div>
        </div>

      </div>
    )
  }

export default ConfirmRidePopup
