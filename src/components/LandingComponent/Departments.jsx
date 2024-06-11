import React from 'react'
import DepartmentCard from './DepartmentCard'

import { FaDisease } from "react-icons/fa";
import { FaBrain, FaHeartbeat, FaTeeth } from "react-icons/fa";
import { FaPersonPregnant, FaXRay } from "react-icons/fa6";
import { GiBabyBottle, GiBrokenBone } from "react-icons/gi";
import { ImEyePlus } from "react-icons/im";

const Departments = () => {
  return (
    <div id='department' className='w-full bg-white py-24'>
        <div className='max-w-[400px] sm:max-w-[600px] md:max-w-[740px] lg:max-w-[1280px] m-auto px-4 md:px-0'>
                <h1 className='md:leading-[72px] text-3xl font-bold'>Popular <span className='text-clinic-color'>Departments</span></h1>
                <p className=' text-xl text-gray-600'>In entir ve ta che, ti vat vat ta che.</p>
                
                <div className='grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-1'>
                    <DepartmentCard icons={<FaHeartbeat size={25} />} title={'Cardiology'} />
                    <DepartmentCard icons={<FaBrain size={25} />} title={'Neurology'} />
                    <DepartmentCard icons={<GiBabyBottle size={25} />} title={'Pediatrics'} />
                    <DepartmentCard icons={<FaPersonPregnant size={25} />} title={'Obstetrics'} />

                    <DepartmentCard icons={<FaXRay size={25} />} title={'Radiology'} />
                    <DepartmentCard icons={<GiBrokenBone size={25} />} title={'Orthopedic'} />
                    <DepartmentCard icons={<ImEyePlus size={25} />} title={'Ophthalmology'} />
                    <DepartmentCard icons={<FaTeeth size={25} />} title={'Dental Medicine'} />

                    {/*<DepartmentCard icons={<TiHtml5 size={30} />} title={'Personal Develop'} />
                    <DepartmentCard icons={<TiHtml5 size={30} />} title={'Health & Fitness'} />
                    <DepartmentCard icons={<MdAttachMoney size={30} />} title={'Finance'} />
                    <DepartmentCard icons={<FaUniversity size={30} />} title={'Teaching'} /> */}
                </div>
        </div>
    </div>
  )
}

export default Departments