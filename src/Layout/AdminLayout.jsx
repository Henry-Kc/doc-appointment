import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, AdminSidebar } from '../components/AdminDashboardComponent'

const AdminLayout = ({activemenu}) => {
  return (
    <div className='flex relative'>
      {activemenu ? (
        <div className='w-72 fixed sidebar bg-white'>
          <AdminSidebar />
        </div>
      ) : (
        <div className='w-0'>
          <AdminSidebar />
        </div>
      )}

      <div className={`bg-main-bg min-h-screen w-full ${activemenu ? 'md:ml-72' : 'flex-2'}`}>
        <div className='fixed md:static bg-main-bg  navbar w-full'>
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout