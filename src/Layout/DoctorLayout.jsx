import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/AdminDashboardComponent'
import DoctorSidebar from '../components/DoctorDashboardComponent/DoctorSidebar'

const UserLayout = ({activemenu}) => {
  return (
    <div className='flex relative'>
      {activemenu ? (
        <div className='w-72 fixed sidebar bg-white'>
          <DoctorSidebar />
        </div>
      ) : (
        <div className='w-0'>
          <DoctorSidebar />
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