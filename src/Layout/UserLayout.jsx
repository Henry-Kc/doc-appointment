import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/AdminDashboardComponent'
import UserSidebar from '../components/UserDashboardComponent/UserSidebar'

const UserLayout = ({ activemenu }) => {
  return (
    <div className='flex relative'>
      {activemenu ? (
        <div className='w-72 fixed sidebar bg-white'>
          <UserSidebar />
        </div>
      ) : (
        <div className='w-0'>
          <UserSidebar />
        </div>
      )}

      <div className={`bg-main-bg min-h-screen w-full ${activemenu ? 'md:ml-72' : 'flex-2'}`}>
        <div className='fixed md:static bg-main-bg navbar w-full'>
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default UserLayout