import Link from "next/link"
import Login from "./login"

const Hero = () => {
  return (
  <>
    <div className="flex flex-wrap lg:flex-col items-center">
      <p className="font-extrabold text-white mt-16 sm:pr-2 md:mt-52 text-xl md:text-5xl md:w-4/5 pl-2 md:pr-2 md:pl-64">Make your Day On your Own</p>
      <p className="font-light text-white text-center sm:pr-2 md:mt-4 text-base md:text-2xl md:w-4/5 pl-1 md:pr-10 md:pl-36">Don't worry about your day, we are here to provide you a tool which makes you to remember your plan for the day</p>
    </div>
    <div className="flex flex-wrap mt-11 md:flex-row gap-4 justify-center">
      <Link href={Login}>
        <button className="w-36 h-12 rounded-xl bg-zinc-400 text-black"><a href="todoapp\components\Login.jsx">Sign up</a></button>
      </Link>
    
    <button className="w-36 h-12 bg-black rounded-xl text-zinc-400">Log-in</button>
    </div>
  </>
  )
}

export default Hero
