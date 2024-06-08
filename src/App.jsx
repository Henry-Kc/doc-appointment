import {React, useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

import {Login, SignUp, DashBoard, LandingPage, NoPage} from './pages/index' 


const App = () => {

  const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token', JSON.stringify(token))
    
  }
  
  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      console.log(data)
      setToken(data)
    }
  }, [])

  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path = {'/login'} element={<Login setToken={setToken}/>} />
        <Route path={'/signup'} element={<SignUp />} />
        {token ? <Route path={'/dashboard'} element={<DashBoard token={token}/>} /> : null}
        <Route path='*' element={<NoPage />}/>
        

      </Routes>
    </>
    
  )
}

export default App