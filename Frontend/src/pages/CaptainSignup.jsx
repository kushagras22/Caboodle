import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setCaptainData({
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
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
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-sm"
                required type="text" placeholder="First Name" />
              <input
                className="bg-[#eeeeee]  rounded-lg w-1/2 px-4 py-2 border  text-lg placeholder:text-sm"
                required type="text" placeholder="Last Name" />
            </div>


            <h3 className="text-base font-medium mb-2">Enter Email</h3>
            <input
              className="bg-[#eeeeee] mb-2 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-sm"
              required type="email" placeholder="email@example.com" />

            <h3 className="text-base font-medium mb-2">Enter Password</h3>
            <input
              className="bg-[#eeeeee] mb-2 rounded-lg px-4 py-2 border w-full text-base placeholder:text-sm"
              type="password" required placeholder="Enter Password" />
            <button
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-[18px] mb-2 rounded-lg px-4 py-2 border w-full text-md"
            >Sign Up Captain</button>

          </form>
          <p
            className="text-center text-[14px]"
          >
            Already a captain?
            <Link to={'/captain-login'}
              className="ml-1 text-blue-600 hover:text-blue-700"
            >Login Here</Link></p>

        </div>
        <div>
          <p
            className='text-[10px] text-gray-500'
          >This site is protected by reCAPTCHA and the Google
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