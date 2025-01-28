import { useState } from 'react';
import { Link } from 'react-router-dom';


const UserSignup = () => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
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
          <img className='w-20' src="./src/assets/Caboodle Logo.png" />
        </div>
        <div>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <h3 className="text-base font-medium mb-2">Full Name </h3>
            <div className='flex gap-2 mb-2'>
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-sm"
                required type="text" placeholder="First Name" />
              <input
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                className="bg-[#eeeeee]  rounded-lg w-1/2 px-4 py-2 border  text-lg placeholder:text-sm"
                required type="text" placeholder="Last Name" />
            </div>


            <h3 className="text-base font-medium mb-2">Enter Email</h3>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-[#eeeeee] mb-2 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-sm"
              required type="email" placeholder="email@example.com" />

            <h3 className="text-base font-medium mb-2">Enter Password</h3>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="bg-[#eeeeee] mb-2 rounded-lg px-4 py-2 border w-full text-base placeholder:text-sm"
              type="password" required placeholder="Enter Password" />
            <button
              className="bg-[#111] text-white font-[18px] mb-2 rounded-lg px-4 py-2 border w-full text-md"
            >Sign Up</button>

          </form>
          <p
            className="text-center text-[14px]"
          >
            Already have an account?
            <Link to={'/login'}
              className="ml-1 text-blue-600"
            >Login Here</Link></p>

        </div>
        <div>
          <p
            className='text-[10px] text-gray-500'
          >By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from
            <Link className='underline text-zinc-800 font-medium mx-1'
              to={'/'}> Caboodle </Link> and its affiliates to the email provided.</p>
        </div>
      </div>
    </>
  )
}

export default UserSignup