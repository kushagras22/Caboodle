import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const [vehicleColor, setVehicleColor] = useState('');

  const [vehiclePlate, setVehiclePlate] = useState('');

  const [vehicleCapacity, setVehicleCapacity] = useState('');

  const [vehicleType, setVehicleType] = useState('');

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }


    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }



    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setVehicleColor('');
    setVehicleCapacity('');
    setVehicleType('');
    setVehiclePlate('');
  }

  return (
    <>
      <div className="p-7 h-screen flex flex-col justify-between ">
        <div className="flex justify-center ">
          <img className='w-20 ' src="./src/assets/CaptainLogo.png" />
        </div>
        <div>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <h3 className="text-base font-medium mb-2">Full Name </h3>
            <div className='flex gap-2 mb-2'>
              <input
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border v text-lg outline-lime-300 placeholder:text-sm"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                required type="text" placeholder="First Name" />
              <input
                className="bg-[#eeeeee]  rounded-lg w-1/2 px-4 py-2 border  text-lg outline-lime-300 placeholder:text-sm"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                required type="text" placeholder="Last Name" />
            </div>


            <h3 className="text-base font-medium mb-2">Enter Email</h3>
            <input
              className="bg-[#eeeeee] mb-2 rounded-lg px-4 py-2 border w-full text-lg outline-lime-300 placeholder:text-sm"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              required type="email" placeholder="email@example.com" />

            <h3 className="text-base font-medium mb-2">Enter Password</h3>
            <input
              className="bg-[#eeeeee] mb-2 rounded-lg px-4 py-2 border w-full text-base outline-lime-300 placeholder:text-sm"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              type="password" required placeholder="Enter Password" />




            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="text-md font-semibold mb-2">Vehicle Type</h3>
                <select
                  className="bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-sm outline-lime-300 placeholder:text-sm"
                  value={vehicleType}
                  required
                  onChange={(e) => setVehicleType(e.target.value)}
                >
                  <option className='text-sm' value="" disabled>None</option>
                  <option className='text-sm' value="car">Car</option>
                  <option className='text-sm' value="auto">Auto Rickshaw</option>
                  <option className='text-sm' value="motorcycle">Motorcycle</option>
                </select>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Vehicle Color</h3>
                <input
                  className="bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-sm outline-lime-300 placeholder:text-sm"
                  value={vehicleColor}
                  required type="text" placeholder="Vehicle Color"
                  onChange={(e) => setVehicleColor(e.target.value)}
                />
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Vehicle Capacity</h3>
                <input
                  className="bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-sm outline-lime-300 placeholder:text-sm"
                  value={vehicleCapacity}
                  required type="number" placeholder="Vehicle Capacity" min="1" max="8"
                  onChange={(e) => setVehicleCapacity(e.target.value)}
                />
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Vehicle Plate</h3>
                <input
                  className="bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-sm outline-lime-300 placeholder:text-sm"
                  value={vehiclePlate}
                  required type="text" placeholder="Vehicle Plate"
                  onChange={(e) => setVehiclePlate(e.target.value)}
                />
              </div>
            </div>



            <button
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-[18px] mb-2 rounded-lg px-4 py-2 border w-full text-md"
            >Create Captain Account </button>

          </form>
          <p
            className="text-center text-[14px]"
          >
            Already a captain?
            <Link to={'/captain-login'}
              className="ml-1 text-blue-600 hover:text-blue-700"
            >Login Here</Link></p>

        </div>
        <div className='mt-6 '>
          <p
            className='text-[10px] text-gray-500 tracking-tighter '
          >This site is protected by reCAPTCHA and the Google's
            <Link to={'https://policies.google.com/privacy?hl=en-US'} target='blank' className='underline text-zinc-800 font-medium mx-1'> Privacy Policy</Link>
            and
            <Link to={'https://policies.google.com/terms?hl=en-US'} target='blank' className='underline text-zinc-800 font-medium mx-1'>Terms of Service</Link>
            apply.
          </p>
        </div>
      </div>
    </>
  )
}

export default CaptainSignup