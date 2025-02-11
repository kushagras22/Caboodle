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

    const userData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home');
    }


    setEmail('');
    setPassword('');
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div className="flex items-center justify-center mb-[-130px] ">
        <img className='w-20 ' src="./src/assets/Caboodle Logo.png" />
      </div>
      <div>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className="text-lg font-medium mb-2">Email Address </h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg outline-lime-300 placeholder:text-sm"
            required type="email" placeholder="email@example.com" />
          <h3 className="text-lg font-medium">Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg outline-lime-300 placeholder:text-sm"
            type="password" required placeholder="Enter Password" />
          <button
            onClick={() => {
              toast.success("Login Successful");

            }}
            className="bg-[#111]  hover:bg-zinc-800 text-white font-[18px] mb-3 rounded-lg px-4 py-2 border w-full text-md placeholder:text-sm"
          >Login</button>

        </form>
        <p
          className="text-center text-[14px]"
        >
          New to Caboodle?
          <Link to={'/signup'}
            className="ml-1 text-blue-600 hover:text-blue-800"
          >Create Account</Link></p>

      </div>
      <div>
        <Link to={'/captain-login'}
          className="flex items-center justify-center bg-[#10b461] hover:bg-green-500 text-white font-[18px] mb-3 rounded-lg px-4 py-2 border w-full text-md placeholder:text-sm"
        >Sign in as Captain </Link>
      </div>
    </div>
  )
}

export default UserLogin
