import React from 'react'
import PropTypes from 'prop-types';

const RidePopup = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setRidePopupPanel(false)
        }}
        className="absolute p-1 text-center w-[93%] top-0 hover:rounded-full hover:cursor-pointer">

        <i

          className='text-3xl text-zinc-200 ri-arrow-down-wide-line '></i>
      </h5>
      <h3 className="text-[18px] font-roboto font-medium mb-5 text-center ">New Ride Available!</h3>

      <div className='bg-lime-200 p-3 rounded-lg'>
        <div className='flex flex-col items-center justify-between gap-2'>
          <img
            className='h-14 w-14 rounded-full object-cover'
            src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h2 className='text-[16px] font-roboto font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
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
              <h3 className='text-[15px] font-medium text-zinc-900 tracking-tighter font-roboto  '>{props.ride?.pickup}</h3>
            </div>
          </div>

          {/* Drop-off Location */}
          <div className='flex items-center gap-4 border-b-2 p-2'>
            <i className="text-lg ri-map-pin-3-fill"></i>
            <div className=''>
              <h3 className='text-[15px] font-medium text-zinc-900 tracking-tighter font-roboto  '>{props.ride?.destination}</h3>
            </div>
          </div>

          {/* Amount */}
          <div className='flex items-center gap-4 p-2'>
            <i className="text-lg ri-wallet-fill"></i>
            <div className=''>
              <h3 className='text-lg font-semibold '>₹{props.ride?.fare}</h3>
              <p className='text-zinc-600 text-[14px] '>Payment by Cash</p>
            </div>
          </div>

        </div>

        <button
          onClick={() => {
            props.setConfirmRidePopup(true);
          }}
          className='w-full mt-5 bg-green-600 text-white font-medium p-2 rounded-xl hover:cursor-pointer hover:bg-green-500'>Accept</button>

        <button
          onClick={() => {
            props.setRidePopupPanel(false);
          }}
          className='w-full mt-2 bg-zinc-400 text-zinc-600 font-medium p-2 rounded-xl hover:cursor-pointer hover:text-white hover:bg-zinc-500'>Ignore</button>

      </div>

    </div>
  )
}

export default RidePopup