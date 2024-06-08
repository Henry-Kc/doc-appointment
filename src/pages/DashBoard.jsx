import React from 'react'
import { useNavigate } from 'react-router-dom'

const DashBoard = ({ token }) => {
  let navigate = useNavigate()
  function handleLogout() {
    sessionStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col'>
      <h1 className='text-4xl text-center m-6'>Welcome to your DashBoard, <span className='font-semibold text-clinic-color'>{token.user.user_metadata.full_name}</span></h1>
      <button onClick={handleLogout} className="
        group
        p-5
        cursor-pointer 
        relative  
        text-xl 
        font-normal 
        border-0 
        flex 
        items-center 
        justify-center
        bg-transparent
         text-clinic-color
         h-auto  
         w-[170px]  
         overflow-hidden   
         transition-all
         duration-100">
        <span className="
        group-hover:w-full
        absolute 
        left-0 
        h-full 
        w-5 
        border-y
        border-l
         border-clinic-color
           transition-all
         duration-500">
        </span>

        <p className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
         duration-200">Click rawh le</p>

        <span className="group-hover:translate-x-0 group-hover:text-red-500  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">
          Log Out
        </span>

        <span
          className="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-red-600 transition-all duration-500">
        </span>
      </button>
    </div>
  )
}

export default DashBoard
