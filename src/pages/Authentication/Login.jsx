import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import eyeOpen from '../../assets/eyeOpen.svg'
import eyeClose from '../../assets/eyeClose.svg'
import { supabase } from '../../client'

import { AuthContext } from '../../contexts/AuthProvider';


const Login = ({ setToken }) => {
  // const [formData, setformData] = useState({
  //   email: '', password: '',
  // })

  // const [showPass, setshowPass] = useState('password')
  // const passwordHandler = () => (
  //   setshowPass(showPass === 'password' ? 'text' : 'password')
  // )

  // const navigate = useNavigate() //Declare useNavigate function

  // console.log(formData)

  // function handleChange(event) {
  //   console.log(event.target.name)
  //   setformData((prevformData) => {
  //     return {
  //       ...prevformData,
  //       [event.target.name]: event.target.value
  //     }
  //   })
  // }

  // async function handleSubmit(e) {
  //   console.log(e.preventDefault())

  //   try {
  //     const { data, error } = await supabase.auth.signInWithPassword({
  //       email: formData.email,
  //       password: formData.password,
  //     })
  //     if (error) throw error
  //     console.log(`${'data'} => `, data)
  //     setToken(data),
  //       navigate('/dashboard')


  //   } catch (error) {
  //     alert(error)
  //   }
  // }

  const { login, showPass, passwordHandler } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData((prevFormData) => ({...prevFormData, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(formData.email, formData.password);
    if (login) {
      navigate(`/${role}`); // Redirect to the corresponding dashboard based on the role
    }
  };


  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl text-center font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Welcome Back!</h2>
            <p className="max-w-xl text-center mx-auto mt-4 text-base leading-relaxed text-gray-600">Login to your account</p>
          </div>

          <div className="relative max-w-md mx-auto mt-8 md:mt-16">
            <div className="overflow-hidden bg-white rounded-md shadow-md">
              <div className="px-4 py-6 sm:px-8 sm:py-7">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="" className="text-base font-medium text-gray-900"> Email address </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                          </svg>
                        </div>

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          placeholder="Enter email to get started"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="" className="text-base font-medium text-gray-900"> Password </label>

                        {/* <a href="#" title="" className="text-sm font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 focus:text-orange-600 hover:underline"> Forgot password? </a> */}
                      </div>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                            />
                          </svg>
                        </div>

                        <input
                          type={showPass}
                          name="password"
                          value={formData.password}
                          placeholder="Enter your password"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          onChange={handleChange}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer focus-within:text-gray-600" onClick={passwordHandler}>
                          {showPass === 'password' ? <img src={eyeOpen} alt="" className="w-5 h-5 " /> : <img src={eyeClose} alt="" className="w-5 h-5 " />}
                        </div>
                      </div>
                    </div>

                    <div>
                      <button 
                        type="submit" 
                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-gray-600 border border-transparent rounded-md focus:outline-none hover:bg-gray-800 focus:bg-gray-800"
                      >
                        Log in
                      </button>
                    </div>

                    <div className="text-center">
                      <p className="text-base text-gray-600">
                        <Link 
                          to={'/signup'} 
                          className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                        >
                          Create an account
                        </Link>
                      </p>
                      {/* <a href="#" title="" ></a> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Login