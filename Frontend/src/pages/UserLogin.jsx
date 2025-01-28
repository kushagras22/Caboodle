import { useState } from "react"
import { Link } from "react-router-dom"


const UserLogin = () => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password
    })
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
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-sm"
            required type="email" placeholder="email@example.com" />
          <h3 className="text-lg font-medium">Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-sm"
            type="password" required placeholder="Enter Password" />
          <button
            className="bg-[#111]  hover:bg-zinc-800 text-white font-[18px] mb-3 rounded-lg px-4 py-2 border w-full text-md placeholder:text-sm"
          >Login</button>

        </form>
        <p
          className="text-center text-[14px]"
        >
          New to Caboodle?
          <Link to={'/signup'}
            className="ml-1 text-blue-600"
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
