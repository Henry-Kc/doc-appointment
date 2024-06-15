import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Button } from '../../components/AdminDashboardComponent';
import heroImg from '../../assets/heroImg.svg'

import { dashboardData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

import UserAppointments from './UserAppointments';


const AdminDashboard = ({token}) => {
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
      <div className="flex flex-wrap justify-center">
        <div 
          className=" bg-white h-44 rounded-xl w-full lg:w-[93%] p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center"
          // style={{ backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20190831/pngtree-cartoon-super-hero-doctor-with-red-cape-image_311197.jpg')` }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={'#797aec'}
              text="Make an Appointment"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex m-3 md:flex-wrap flex-wrap lg:w-[93%] justify-center items-center overflow-mx-auto">
          {dashboardData.map((item) => (
            <div key={item.title} className="bg-white m-2 h-44 md:24 w-[20%] md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 pt-9 rounded-2xl ">
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

      
        <Link to="/user/appointments">
          <UserAppointments title='List of Appointments' category='' />
        </Link> 
      
        
    </div>
  )
}

export default AdminDashboard