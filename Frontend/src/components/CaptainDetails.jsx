import { useContext } from "react"
import { CaptainDataContext } from "../context/CaptainContext"


const CaptainDetails = () => {

  const { captain } = useContext(CaptainDataContext);

  return (
    <div>
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center justify-start gap-3 ">
          <img
            className="h-10 w-10 object-cover rounded-full"
            src="https://plus.unsplash.com/premium_photo-1682089869602-2ec199cc501a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww" alt="Suraj Roy" />
          <h4 className="text-lg font-roboto capitalize">{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
        </div>

        <div className="flex flex-col items-center justify-center mx-2 ">

          <h4 className="font-roboto text-lg font-medium">₹ 2493.20</h4>
          <p className="font-roboto text-[14px] tracking-tight font-medium text-zinc-600">Earnings Today</p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between mt-6 mx-3 p-4 bg-zinc-100 rounded-xl">
        <div className="text-center">
          <i className="text-3xl font-medium text-lime-600 ri-time-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-zinc-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl font-medium text-lime-600 ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-zinc-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl font-medium text-lime-600 ri-book-2-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-zinc-600">Hours Online</p>
        </div>
      </div>
    </div>
  )
}

export default CaptainDetails