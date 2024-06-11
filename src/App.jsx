import { React, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { registerLicense } from '@syncfusion/ej2-base';
// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF1cXmhPYVJwWmFZfVpgfF9HZ1ZQTWYuP1ZhSXxXdkNjUH9WcXNUT2FeUUI=');

import { DashBoard, LandingPage, NoPage } from './pages/LandingPage'
import { Login, SignUp } from './pages/Authentication'

import { Sidebar, Navbar } from './components/AdminDashboardComponent';
import { Dashboard, Appointments, Departments, Doctors, Patients } from './pages/AdminDashboardPage';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {

  const [token, setToken] = useState(false)
  const [role, setRole] = useState(null);

  const { activeMenu } = useStateContext(); //Context Menu

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token))

  }

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'))
      console.log(data)
      setToken(data)
      setRole(data.role)
    }
  }, [])

  return (
    <>
      <div className='flex relative dark:bg-main-dark-bg'>
        {/* Setting Feature */}
        {/* <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content='Settings' position="Top" tooltip="true">
              <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white '
                style={{ background: 'blue', borderRadius: '50%' }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div> */}
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


        <Routes>
          <Route index element={<LandingPage />} />
          <Route path={'/login'} element={<Login setToken={setToken} />} />
          <Route path={'/signup'} element={<SignUp />} />
          {token ? <Route path={'/dashboard'} element={<DashBoard token={token} />} /> : null}
          <Route path='*' element={<NoPage />} />

          {token && role === 'admin' ? (
            <Route path="/dashboard" element={<Dashboard />} />
          ) : token && role === 'doctor' ? (
            <Route path="/dashboard" element={<DoctorDashboard />} />
          ) : token && role === 'user' ? (
            <Route path="/dashboard" element={<UserDashboard />} />
          ) : (
            <Route path="*" element={<NoPage />} />
          )}
          
          {/* <Route path='/' element={<Dashboard />} />
          <Route path='/admin/dashboard' element={<Dashboard />} /> */}
          {/* Pages */}
          {/* <Route path='/patients' element={<Patients />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/departments' element={<Departments />} />
          <Route path='/appointments' element={<Appointments />} /> */}
        </Routes>
      </div>
    </>

  )
}

export default App