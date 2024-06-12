import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Header } from '../../components/AdminDashboardComponent';

import { dashboardData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

import DoctorAppointments from './DoctorAppointments';

const DoctorDashboard = ({token}) => {
  // const currentRoute = window.location.pathname; // get the current route
  // console.log(currentRoute)
  // const condition = currentRoute === '/appointments';

  // let navigate = useNavigate()
  // function handleLogout() {
  //   sessionStorage.removeItem('token')
  //   navigate('/login')
  // }

  return (
    <div className="mt-2">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        {/* <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-gray-600 hover:drop-shadow-xl rounded-full  p-4"
            >
              Hello
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div> */}
        <div className="flex m-3 flex-wrap justify-center gap-4 items-center">
          {dashboardData.map((item) => (
            <div key={item.title} className="bg-white h-42 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.total}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      
        <Link to="/doctor/appointment list">
          <DoctorAppointments title='List of Appointments' category='' />
        </Link> 
      
        
    </div>
  )
}

export default DoctorDashboard