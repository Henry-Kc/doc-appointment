import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
// import { RiNotification3Line } from "react-icons/ri";
import { MdArrowDownward } from "react-icons/md";
import { RiMenuFoldFill } from "react-icons/ri";

import { UserProfile } from '.';
import { useStateContext } from '../../contexts/ContextProvider';
import { AuthContext } from '../../contexts/AuthProvider';

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
  const { token } = useStateContext(AuthContext)

  const username = token ? token.user.user_metadata.full_name : '';

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

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logout button clicked!');
    logout()
    navigate('/login', { replace: true }); // Navigate to the login page
  };


  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        title='Menu'
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color='black'
        icon={<RiMenuFoldFill />}
      />

      <div className='flex items-center'>
        <button 
          type="button" 
          className=' mr-10 inline-block rounded-md border border-transparent bg-indigo-500 px-4 py-1 text-center font-medium text-white hover:bg-indigo-600'
        >
          Log Out
        </button>
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('userProfile')}
          >
            

            <img src='https://cdn1.vectorstock.com/i/1000x1000/94/10/person-icon-flat-people-symbol-vector-24259410.jpg' alt="profile_img" className='rounded-full w-8 h-8' />
            <p>
              <span className='text-14 text-gray-400'>Welcome </span>
              {/* <span className='text-14 text-gray-400 font-bold ml-1'> {username} </span> */}
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