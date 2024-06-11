import React from 'react'

import { NavBar, Hero, Doctors, Departments , Footer } from '../../components/LandingComponent'

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