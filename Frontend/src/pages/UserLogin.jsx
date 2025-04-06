import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserDataContext } from "../context/userContext";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const UserLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, setUser } = useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      // Use toast.promise for loading and error messages only on the login page.
      const promise = axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
      const response = await toast.promise(promise, {
        loading: 'Please wait...',
      });

      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        localStorage.setItem('firstLogin', 'true');
        // Pass state so Home.jsx shows the success toast.
        navigate('/home', { state: { loginSuccess: true } });
      }
    } catch (error) {
      toast.error(`${error.response?.data?.message}!`);
    }

    setEmail('');
    setPassword('');
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <Toaster />
      <div className="flex items-center justify-center mb-[-130px] ">
        <img className='w-20' src="./src/assets/Caboodle Logo.png" alt="Caboodle Logo" />
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
            type="submit"
            className="bg-[#111] hover:bg-zinc-800 text-white font-[18px] mb-3 rounded-lg px-4 py-2 border w-full text-md"
          >
            Login
          </button>
        </form>
        <p className="text-center text-[14px]">
          New to Caboodle?
          <Link to={'/signup'} className="ml-1 text-blue-600 hover:text-blue-800">
            Create Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to={'/captain-login'}
          className="flex items-center justify-center bg-[#10b461] hover:bg-green-500 text-white font-[18px] mb-3 rounded-lg px-4 py-2 border w-full text-md"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin
