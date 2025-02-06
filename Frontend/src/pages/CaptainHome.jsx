import { Link } from "react-router-dom"
import CaptainDetails from "../components/CaptainDetails"
import RidePopup from "./RidePopup"
import { useRef, useState } from "react"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmRidePopup from "../components/ConfirmRidePopup";


const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true);

  const ridePopupPanelRef = useRef(null);

  const [confirmRidePopup, setConfirmRidePopup] = useState(false);

  const confirmRidePopupRef = useRef(null);

  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0%)'
      })
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopupPanel])

  useGSAP(() => {
    if (confirmRidePopup) {
      gsap.to(confirmRidePopupRef.current, {
        transform: 'translateY(0%)'
      })
    } else {
      gsap.to(confirmRidePopupRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePopup])

  return (
    <div className="h-screen overflow-hidden  ">
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
      <div className="h-3/5 ">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Map Layout" />
      </div>
      <div className="h-2/5 ">
        <CaptainDetails />
        <div
          ref={ridePopupPanelRef}
          className="fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12 translate-y-full rounded-tr-xl rounded-tl-xl ">
          <RidePopup
            setRidePopupPanel={setRidePopupPanel}
            setConfirmRidePopup={setConfirmRidePopup}
          />
        </div>

        <div
          ref={confirmRidePopupRef}
          className="fixed w-full h-screen z-10 bottom-0 bg-white px-3 py-5  translate-y-full rounded-tr-xl rounded-tl-xl ">
          <ConfirmRidePopup
            setRidePopupPanel={setRidePopupPanel}
            setConfirmRidePopup={setConfirmRidePopup}
          />
        </div>
      </div>
    </div>
  )
}

export default CaptainHome