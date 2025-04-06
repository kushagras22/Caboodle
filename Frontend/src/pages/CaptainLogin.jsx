import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = { email, password };

    try {
      const promise = axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData);
      const response = await toast.promise(promise, {
        loading: 'Logging in...',
        success: '',
      });

      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home', { state: { loginSuccess: true } });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong during login!");
    }

    setEmail('');
    setPassword('');
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <Toaster />
      <div className="flex items-center justify-center mb-[-130px] ">
        <img className='w-20' src="./src/assets/CaptainLogo.png" alt="Captain Logo" />
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">Email Address</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg outline-lime-300 placeholder:text-sm"
            required
            type="email"
            placeholder="email@example.com" />
          <h3 className="text-lg font-medium">Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg outline-lime-300 placeholder:text-sm"
            type="password"
            required
            placeholder="Enter Password" />
          <button
            onClick={() => {
              localStorage.setItem('firstCaptainLogin', 'true');
            }}
            type="submit"
            className="bg-[#111] hover:bg-zinc-800 text-white font-[18px] mb-3 rounded-lg px-4 py-2 border w-full text-md"
          >
            Login Captain
          </button>
        </form>
        <p className="text-center text-[14px]">
          Join Us?
          <Link to={'/captain-signup'} className="ml-1 text-blue-600 hover:text-blue-700">
            Register as Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to={'/login'}
          className="flex items-center justify-center bg-[#77CA1D] hover:bg-yellow-500 text-white font-[18px] mb-3 rounded-lg px-4 py-2 border w-full text-md"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin;