import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import { SiShopware } from 'react-icons/si';
import { BiCollapseHorizontal } from "react-icons/bi";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { doctorlinks } from '../../data/dummy'

import { useStateContext } from '../../contexts/ContextProvider';


const DoctorSidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false)
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black text-md m-2 bg-gray-200';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 hover:bg-light-gray m-2';
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link to={'/'} onClick={ handleCloseSidebar } className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900'>
              <SiShopware /> <span>Clinic</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button type='button' className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden' onClick={() => setActiveMenu(prevActiveMenu => !prevActiveMenu)}>
                <BiCollapseHorizontal />
              </button>
            </TooltipComponent>
          </div>
          <div className='mt-10'>
            {doctorlinks.map((item) => (

              <div key={item.title}>
                <p className='text-gray-400 m-3 mt-4 uppercase'>
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/doctor/${link.name}`}
                    key={link.name}
                    // style={({ isActive }) => ({
                    //   backgroundColor: isActive ? currentColor : '',
                    // })}
                    className={({ isActive }) => isActive ? activeLink : normalLink}
                    onClick={handleCloseSidebar}
                  >
                    {link.icon}
                    <span className='capitalize'>
                      {link.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>

          {/* <div className='flex flex-col items-center justify-center mt-10'>
              <h1 className='text-4xl text-center m-6'>
                Welcome to your DashBoard, <span className='font-semibold text-clinic-color'>{token.user.user_metadata.full_name}</span>
              </h1>
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
            </div> */}
        </>
        )}
    </div>
  )
}

export default DoctorSidebar