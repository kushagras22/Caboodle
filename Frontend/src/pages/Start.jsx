import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-no-repeat bg-[url("https://img.freepik.com/free-photo/vertical-shot-traffic-light-with-number-13-stopwatch_181624-11218.jpg?t=st=1738162858~exp=1738166458~hmac=ce5e0ec2b2d361e9915ff3f8b4b4eb2edef95c73cea9fda2a32d3128e921abfe&w=740")] h-screen pt-8 w-full flex justify-between flex-col bg-red-400'>
        <img className='w-20 ' src="./src/assets/Caboodle Logo.png" />
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-2xl font-bold'>Get started with Caboodle!</h2>

          <Link to={"/login"} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
