import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'

import { DiffSentence } from '../data/random'
import heroImg from '../assets/heroImg.svg'
import { FaArrowRight } from "react-icons/fa";

// const diffSentence = [
//   'I duh chu sawi rawh le',
//   'Ka la dam ka la dam',
//   'Hmangaihte hmangaih nih hi a va nuam em',
//   'Tu nge ka smoking keng lai thla lo la',
//   'I Hlim nan chuan ka mittui pawh kang mai se yeyyeye',
//   'Kan in kawng hi tihpalh em ni',
// ]
// function genRandomSentence(max) {
//   return Math.floor(Math.random() * (max));
// }
// const randomSentence = DiffSentence[genRandomSentence(DiffSentence.length)]

const Hero = () => {

  const [text] = useTypewriter({
    words: DiffSentence,
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50
  })


  return (
    <div className='bg-white w-full py-8'>
      <div className='max-w-[400px] sm:max-w-[600px] md:max-w-[740px] lg:max-w-[1280px] m-auto grid md:grid-cols-2 ' >
        <div className='flex content-center md:justify-center flex-col gap-4'>
          <p className='py-3 text-2xl font-medium text-clinic-color'>Book your Appointment</p>
          <h1 className='py-3 md:text-6xl md:leading-[70px] font-semibold text-4xl flex items-center'>Tihdam aiin inven a tha zawk. <span className='text-clinic-color'></span></h1>
          <p className='py-3 text-xl font-sans font-normal text-gray-600'>
            {text}
            <span>
              <Cursor cursorColor='#FFC107' cursorStyle='!' />
            </span>
          </p>
          <div className='py-3'>
            <Link to={'/login'}>
              <button className='px-10 py-3 border flex justify-between shadow-lg rounded-md text-clinic-color font-bold hover:shadow-xl'>
                Get Started
                <div className='flex justify-center'>
                  <FaArrowRight size={15} className='icon mt-1 ml-6' />
                </div>

              </button>
            </Link>

          </div>
        </div>
        <img className='order-first object-contain md:order-last' src={heroImg} alt="" />
      </div>
    </div>
  )
}

export default Hero