import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import FinishRide from '../components/FinishRide';


const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false);

  const finishRidePanelRef = useRef(null);

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(0%)'
      })
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [finishRidePanel])

  return (
    <div className="h-screen overflow-hidden relative ">
      <div className="fixed p-3 top-0 flex items-center justify-between w-screen">
        <img
          className="w-20 "
          src="./src/assets/Caboodle Logo.png" alt="Caboodle Logo" />
        <Link
          to={'/captain-login'}
          onClick={() => {
            localStorage.removeItem('token');
          }}
          className=" h-10 w-10  bg-white flex items-center justify-center rounded-full  hover:cursor-pointer hover:bg-zinc-200">
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div

        className="h-4/5 ">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Map Layout" />
      </div>
      <div
        onClick={() => {
          setFinishRidePanel(true);
        }}
        className="h-1/5 p-6 flex items-center justify-between bg-lime-300 relative">
        <h5 className="absolute p-1 text-center w-[95%] top-0 hover:rounded-full hover:cursor-pointer">
          <i className="text-2xl text-zinc-700 ri-arrow-up-s-line"></i>
        </h5>
        <h4 className='text-xl font-serif  text-zinc-800 '>4 Km away</h4>
        <button className='  bg-zinc-900 text-white font-roboto text-[16px] p-3 px-6 rounded-xl hover:cursor-pointer hover:bg-zinc-800'>Complete Ride</button>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12 translate-y-full rounded-tr-xl rounded-tl-xl ">
        <FinishRide
          setFinishRidePanel={setFinishRidePanel}
        />

      </div>
    </div>
  )
}

export default CaptainRiding