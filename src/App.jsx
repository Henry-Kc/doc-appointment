import { React, useState, useEffect, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { registerLicense } from '@syncfusion/ej2-base';
// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF1cXmhPYVJwWmFZfVpgfF9HZ1ZQTWYuP1ZhSXxXdkNjUH9WcXNUT2FeUUI=');

import { LandingPage, NoPage } from './pages/LandingPage'
import { Login, SignUp } from './pages/Authentication'


import { LandingLayout, AdminLayout, UserLayout, DoctorLayout } from './Layout';

import { AdminDashboard, Appointments, Departments, Doctors, Patients } from './pages/AdminDashboardPage';

import { UserDashboard, UserAppointments } from './pages/UserDashboardPage';

import { DoctorDashboard, DoctorAppointments, DoctorSchedule } from './pages/DoctorDashboardPage';

import { useStateContext } from './contexts/ContextProvider';
import { AuthContext } from './contexts/AuthProvider';

const App = () => {

  const { token, role } = useContext(AuthContext);

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(() => {
    if (token) {
      if (role === 'admin') {
        window.location.href = '/admin/dashboard';
      } else if (role === 'doctor') {
        window.location.href = '/doctor/dashboard';
      } else {
        window.location.href = '/user/dashboard';
      }
    }
  }, [token, role]);

  // useEffect(() => {
  //   if (sessionStorage.getItem('token')) {
  //     let data = JSON.parse(sessionStorage.getItem('token'))
  //     console.log(data)
  //     setToken(data)
  //     setRole(data.role)
  //   }
  // }, [])

  const { activeMenu } = useStateContext(); //Context Menu


  return (
    <Routes>

      <Route path={'/'} element={<LandingLayout />}>
        <Route index element={<LandingPage />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<SignUp />} />
      </Route>

      {/* {token && role === 'admin' ? ( */}
        <Route path={'/admin'} element={<AdminLayout activemenu={activeMenu} />}>
          <Route path={'dashboard'} element={<AdminDashboard />} />
          <Route path={'patients'} element={<Patients />} />
          <Route path={'doctors'} element={<Doctors />} />
          <Route path={'departments'} element={<Departments />} />
          <Route path={'appointments'} element={<Appointments />} />
        </Route>
      {/* ) : token && role === 'user' ? ( */}
        <Route path={'/user'} element={<UserLayout activemenu={activeMenu} />}>
          <Route path={'dashboard'} element={<UserDashboard />} />
          <Route path={'doctors'} element={<Doctors />} />
          <Route path={'departments'} element={<Departments />} />
          <Route path={'appointments'} element={<UserAppointments />} />
        </Route>
      {/* ) : token && role === 'doctor' ? ( */}
        <Route path={'/doctor'} element={<DoctorLayout activemenu={activeMenu} />}>
          <Route path={'dashboard'} element={<DoctorDashboard />} />
          <Route path={'appointment schedule'} element={<DoctorSchedule />} />
          <Route path={'appointment list'} element={<DoctorAppointments />} />
        </Route>
      {/* ) : ( */}
        <Route path="*" element={<NoPage />} />
      {/* )} */}
    </Routes>
  )
}

export default App

{/* <Route path={'/admin/dashboard'} element={
            <>
              {activeMenu ? (
                <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                  <Sidebar />
                </div>
              ) : (
                <div className='w-0 dark:bg-secondary-dark-bg'>
                  <Sidebar />
                </div>
              )}

              <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                  <Navbar />
                </div>
              </div>

              <Dashboard />
            </>

          } /> */}

{/* {token ? <Route path={'/dashboard'} element={<DashBoard token={token} />} /> : null}
          <Route path='*' element={<NoPage />} /> */}


{/* {token && role === 'admin' ? (
                <Route path={"/admin/dashboard"} element={<AdminDashboard />} />
              ) : token && role === 'doctor' ? (
                <Route path={"/doctor/dashboard"} element={<DoctorDashboard />} />
              ) : token && role === 'user' ? (
                <Route path="/user/dashboard" element={<UserDashboard />} />
              ) : (
                <Route path="*" element={<NoPage />} />
              )} */}