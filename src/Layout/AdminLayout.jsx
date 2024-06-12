import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Sidebar } from '../components/AdminDashboardComponent'

const AdminLayout = ({activemenu}) => {
  return (
    <div className='flex relative dark:bg-main-dark-bg'>
      {activemenu ? (
        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
          <Sidebar />
        </div>
      ) : (
        <div className='w-0 dark:bg-secondary-dark-bg'>
          <Sidebar />
        </div>
      )}

      <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activemenu ? 'md:ml-72' : 'flex-2'}`}>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
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