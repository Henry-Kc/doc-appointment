import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import eyeOpen from '../assets/eyeOpen.svg'
import eyeClose from '../assets/eyeClose.svg'
import { supabase } from '../client'


const SignUp = () => {

  const [formData, setformData] = useState({
    fullName: '', email: '', password: ''
  })

  const [showPass, setshowPass] = useState('password')
  const passwordHandler = () => (
    setshowPass(showPass === 'password' ? 'text' : 'password')
  )

  const navigate = useNavigate()

  console.log(formData)

  function handleChange(event) {
    setformData((prevformData) => {
      return {
        ...prevformData,
        // console.log(event.target.name),
        [event.target.name]: event.target.value
      }
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.fullName,
            }
          }
        }
      )
      if (error) throw error
      console.log(data)
      alert('Check your email for verification Link')
      navigate('/login')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Create an account</h2>
            {/* <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">You can create a free Celebration account in 2 minutes</p> */}
          </div>

          <div className="relative max-w-md mx-auto mt-8 md:mt-16">
            <div className="overflow-hidden bg-white rounded-md shadow-md">
              <div className="px-4 py-6 sm:px-8 sm:py-7">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="" className="text-base font-medium text-gray-900"> Enter Your Name </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>

                        <input
                          type="text"
                          name="fullName"
                          id=""
                          placeholder="Enter your name"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>

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
                          id=""
                          placeholder="Enter email to get started"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="" className="text-base font-medium text-gray-900"> Password </label>
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
                          id=""
                          placeholder="Enter your password"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          required
                          onChange={handleChange}
                        />

                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer focus-within:text-gray-600" onClick={passwordHandler}>
                          {showPass === 'password' ? <img src={eyeOpen} alt="" className="w-5 h-5 " /> : <img src={eyeClose} alt="" className="w-5 h-5 " />}
                          {/* <img src={eyeOpen} alt="" className="w-5 h-5 " /> */}
                        </div>
                      </div>
                    </div>



                    <div>
                      <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-gray-600 border border-transparent rounded-md focus:outline-none hover:bg-gray-800 focus:bg-gray-800">
                        Create account
                      </button>
                    </div>

                    <div className="text-center">
                      <p className="text-base text-gray-600">Already have an account?<Link to={'/login'} className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline">Login here</Link></p>
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

export default SignUp