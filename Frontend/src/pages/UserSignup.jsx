import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { UserDataContext } from '../context/userContext';

const UserSignup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }

    try {
      const promise = axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
      const response = await toast.promise(promise, {
        loading: "Creating account...",
        success: "Account created successfully!",
        error: "Signup failed. Please try again!"
      });

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home')
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred during registration.");
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  }

  return (
    <>
      <div className="p-7 h-screen flex flex-col justify-between ">
        <Toaster />
        <div className="flex justify-center">
          <img className='w-20' src="./src/assets/Caboodle Logo.png" alt="Caboodle Logo" />
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <h3 className="text-base font-medium mb-2">Full Name</h3>
            <div className='flex gap-2 mb-2'>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border outline-lime-300 text-lg placeholder:text-sm"
                required
                type="text"
                placeholder="First Name" />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-[#eeeeee] rounded-lg w-1/2 px-4 py-2 border outline-lime-300 text-lg placeholder:text-sm"
                required
                type="text"
                placeholder="Last Name" />
            </div>

            <h3 className="text-base font-medium mb-2">Enter Email</h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#eeeeee] mb-2 rounded-lg px-4 py-2 border w-full text-lg outline-lime-300 placeholder:text-sm"
              required
              type="email"
              placeholder="email@example.com" />

            <h3 className="text-base font-medium mb-2">Enter Password</h3>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#eeeeee] mb-2 rounded-lg px-4 py-2 border w-full text-base outline-lime-300 placeholder:text-sm"
              type="password"
              required
              placeholder="Enter Password" />
            <button
              type="submit"
              className="bg-[#111] hover:bg-zinc-900 text-white font-[18px] mb-2 rounded-lg px-4 py-2 border w-full text-md"
            >
              Create Account
            </button>
          </form>
          <p className="text-center text-[14px]">
            Already have an account?
            <Link to={'/login'} className="ml-1 text-blue-600 hover:text-blue-800">
              Login Here
            </Link>
          </p>
        </div>
        <div>
          <p className='text-[10px] text-gray-500'>
            By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from
            <Link className='underline text-zinc-800 font-medium mx-1 hover:text-zinc-700' to={'/'}>
              Caboodle
            </Link>
            and its affiliates to the email provided.
          </p>
        </div>
      </div>
    </>
  )
}

export default UserSignup;