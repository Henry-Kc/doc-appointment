import React, { useEffect } from 'react';

import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
// import { RiNotification3Line } from "react-icons/ri";
import { MdArrowDownward } from "react-icons/md";
import { RiMenuFoldFill } from "react-icons/ri";

import { UserProfile } from '.';
import { useStateContext } from '../../contexts/ContextProvider';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position='BottomCenter'>
      <button type='button' onClick={customFunc} style={{ color }} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
        <span 
          className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' 
          style={{ background: dotColor }}
        />
        {icon}  
        
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        title='Menu'
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color='black'
        icon={<RiMenuFoldFill />}
      />

      <div className='Notifications'>
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('userProfile')}
          >
            <img src='https://cdn1.vectorstock.com/i/1000x1000/94/10/person-icon-flat-people-symbol-vector-24259410.jpg' alt="profile_img" className='rounded-full w-8 h-8' />
            <p>
              <span className='text-14 text-gray-400'>Welcome, </span>
              <span className='text-14 text-gray-400 font-bold ml-1'> Henry </span>
            </p>
            <MdArrowDownward className='text-14 text-gray-400' />
          </div>
        </TooltipComponent>
        {isClicked.userProfile && <UserProfile />}

        {/* <NavButton
          title='Logout'
          customFunc={logout}
          color='red'
          icon={<TbLayoutSidebarLeftCollapse />}
        /> */}
      </div>

    </div>
  );
};

export default Navbar;