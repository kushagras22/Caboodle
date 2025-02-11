import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
import { SocketContext } from "../context/SocketContext";
import { UserDataContext } from "../context/userContext";
import toast, { Toaster } from 'react-hot-toast';


const Home = () => {

  const navigate = useNavigate();

  const [pickup, setPickup] = useState('');

  const [destination, setDestination] = useState('');

  const [panelOpen, setPanelOpen] = useState(false);

  const panelRef = useRef(null);

  const panelCloseRef = useRef(null);

  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);

  const vehiclePanelRef = useRef(null);

  const [confirmRidePanel, setConfirmRidePanel] = useState(false);

  const confirmRidePanelRef = useRef(null);

  const [vehicleFound, setVehicleFound] = useState(false);

  const vehicleFoundRef = useRef(null);

  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const waitingForDriverRef = useRef(null);

  const [pickupSuggestions, setPickupSuggestions] = useState([]);

  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  const [activeField, setActiveField] = useState(null);

  const [fare, setFare] = useState({});

  const [vehicleType, setVehicleType] = useState(null);

  const { socket } = useContext(SocketContext);

  const { user } = useContext(UserDataContext);

  useEffect(() => {
    socket.emit("join", { userType: "user", userId: user._id });
  }, [user])

  const handlePickupChange = async (e) => {
    setPickup(e.target.value)
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
        params: { input: e.target.value },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }

      })
      setPickupSuggestions(response.data)
    } catch {
      // catch error
    }
  }


  const handleDestinationChange = async (e) => {
    setDestination(e.target.value)
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
        params: { input: e.target.value },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setDestinationSuggestions(response.data)
    } catch {
      // catch error
    }
  }


  const submitHandler = (e) => {
    e.preventDefault();

  }

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24
      })

      gsap.to(panelCloseRef.current, {
        opacity: 1,

      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
      })

      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanelOpen])

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0%)'
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [waitingForDriver])

  const findTrip = async () => {
    setVehiclePanelOpen(true);
    setPanelOpen(false);

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
      params: { pickup, destination },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    setFare(response.data)

  }

  const createRide = async () => {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
      pickup,
      destination,
      vehicleType
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-20 absolute"
        src="./src/assets/Caboodle Logo.png" alt="Caboodle Logo" />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Map Layout" />
      </div>
      <div className=" absolute top-0 w-full h-screen flex flex-col justify-end">
        <div className="h-[30%] p-6 bg-white rounded-t-[25px] relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute right-6 top-6 text-2xl opacity-0 hover:bg-[#eeeeee] hover:rounded-full hover:cursor-pointer ">
            <i className='ri-arrow-down-wide-line '></i>
          </h5>
          <h4 className="text-2xl font-semibold mb-2 ">Find a trip
            <i className="ri-taxi-line ml-2"></i>
          </h4>
          <form onSubmit={(e) => {
            submitHandler(e);
          }}>
            <div className="line absolute h-16 w-1 top-[40%] left-10 bg-gray-900 rounded-full "></div>
            <input
              onClick={() => {
                setPanelOpen(true);
                setActiveField('pickup')
              }}
              value={pickup}
              onChange={
                handlePickupChange
              }
              className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mb-2 placeholder:text-[16px] outline-lime-300 hover:cursor-pointer" type="text" placeholder="Add a pickup location" />
            <input
              onClick={() => {
                setPanelOpen(true);
                setActiveField('destination')
              }}
              value={destination}
              onChange={handleDestinationChange}
              className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full placeholder:text-[16px] outline-lime-300 hover:cursor-pointer" type="text" placeholder="Enter your destination" />
          </form>
          <div className="flex items-center justify-end mt-4">
            <button
              onClick={() => {
                findTrip();
              }}
              className="text-white bg-zinc-500 text-center px-3 py-2 rounded-lg hover:animate-none hover:bg-zinc-600"
            >Find Trip</button>
          </div>
        </div>
        <div
          ref={panelRef}
          className="h-0 bg-white ">
          <LocationSearchPanel
            suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12 rounded-tr-xl rounded-tl-xl translate-y-full">
        <VehiclePanel
          selectVehicle={setVehicleType}
          createRide={createRide}
          fare={fare}
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanelOpen={setVehiclePanelOpen}
        />
      </div>

      <div
        ref={confirmRidePanelRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 rounded-tr-xl rounded-tl-xl translate-y-full">
        <ConfirmRide
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
          createRide={createRide}
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>


      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 rounded-tr-xl rounded-tl-xl translate-y-full">

        <LookingForDriver
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 rounded-tr-xl rounded-tl-xl ">
        <WaitingForDriver
          setWaitingForDriver={setWaitingForDriver}
        />
      </div>

    </div>
  )
}

export default Home