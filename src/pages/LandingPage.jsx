import React from 'react'

import { NavBar, Hero, Doctors, Departments , Footer } from '../components'

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Doctors />
      <Departments />
      <Footer />
    </>
  )
}

export default LandingPage