
import { React, useState } from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'

import lock from '../assets/lock.svg'
import hamburgerMenu from '../assets/hamburgerMenu.svg'
import close from '../assets/close.svg'

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

  const handleMenuClick = () => setToggle(prevtoggle => !prevtoggle)

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignupClick = () => {
    navigate('/signup')
  }

  return (
    <div className='w-full h-[80px] bg-white z-10 sticky top-0 border border-b-slate-950'>
      <div className='max-w-[400px] sm:max-w-[600px] md:max-w-[740px] lg:max-w-[1280px] mx-auto w-full h-full flex justify-between place-items-center '>
        <a href="/"><h2 className=' py-4 text text-4xl font-semibold text-clinic-color'>Clinic</h2></a>
        <div className="hidden md:flex md:mx-auto">
          <ul className='flex gap-4 lg:flex lg:items-center lg:space-x-10 text-lg font-semibold'>
            <li><a href="/" >Home</a></li>
            <li><a href="#doctor" >Doctors</a></li>
            <li><a href="#department" >Departments</a></li>
            <li>About</li>
          </ul>
        </div>

        <div className='hidden md:flex pl-6 gap-2'>
          <button className='flex justify-between items-center bg-transparent font-medium px-6 gap-2 hover:border border-clinic-color rounded-md' onClick={handleLoginClick}>
            <img src={lock} />
            Login
          </button>
          <button className='px-8 py-3 rounded-md bg-[#797aec] text-white font-bold' onClick={handleSignupClick}>Sign Up</button>
        </div>

        <div className='flex md:hidden' onClick={handleMenuClick}>
          <img className='pr-8' src={toggle ? close : hamburgerMenu} />
        </div>

      </div>

      {/* Adding responsiveness to navbar */}
      <div className={toggle ? 'absolute z-10 p-4 w-full px-8 bg-white md:hidden' : 'hidden'}>
        <ul>
          <a href="/" >
            <li className='p-4 hover:bg-gray-100 '>Home</li>
          </a>
          <a href="#doctor" >
            <li className='p-4 hover:bg-gray-100' onClick={() => setToggle(!toggle)}>Doctors</li>
          </a>
          <a href="#department" >
            <li className='p-4 hover:bg-gray-100' onClick={() => setToggle(!toggle)}>Departments</li>
          </a>
          <a href="/about" >
            <li className='p-4 hover:bg-gray-100' onClick={() => setToggle(!toggle)}>About</li>
          </a>
          {/* <li className='p-4 hover:bg-gray-100'><a href="/" >Home</a></li>
          <li className='p-4 hover:bg-gray-100'><a href="#doctor" >Doctors</a></li>
          <li className='p-4 hover:bg-gray-100'><a href="#department" >Departments</a></li>
          <li className='p-4 hover:bg-gray-100'>About</li> */}
          <div className='flex flex-col my-4 gap-4'>

            <button className='flex justify-center items-center bg-transparent px-6 gap-2 py-4 hover:border border-clinic-color' onClick={handleLoginClick}>

              <img src={lock} />
              Login


            </button>


            <button className='px-8 py-4 rounded-md bg-[#797aec] text-white font-bold' onClick={handleSignupClick}>Sign Up</button>

          </div>
        </ul>
      </div>
    </div>
  )
}

export default NavBar