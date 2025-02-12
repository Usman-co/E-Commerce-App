import { LuMailOpen } from "react-icons/lu"


const Newsletter = () => {
  return (
    <div className="bg-accentDark mt-16">
     <div className="container py-8 flex justify-between items-center sd:flex-row gap-4 text-white ">
      <div className="flex flex-shrink-0 items-center gap-4">
        <LuMailOpen className="text-[60px]" />
        <div>
          <h3 className="font-semibold text-xl sm:text-2xl ">
            Sign Up to Our Newsletters
          </h3>
          <p>...and receive $20 coupon for first shopping</p>
        </div>
      </div>
      <div className="relative w-full max-w-[500px]">
        <input className="rounded-full w-full py-4 px-6 text-black" type="Email"  placeholder="Your email..." />
        <button className="absolute bg-accentDark top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full hover:bg-accent ">
          Subscribe!
        </button>
      </div>
     </div>
    </div>
  )
}

export default Newsletter