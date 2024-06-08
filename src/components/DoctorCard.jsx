import React from 'react'

const Card = ({doctor}) => {
  return (
    <div className='z-10 bg-white drop-shadow-lg overflow-hidden rounded-2xl mr-2  my-4'>
      <img src={doctor.img} className="object-cover h-40 w-full"/>
      <div className='p-5 border border-b'>
        <h1 className='py-2 truncate'>{doctor.title}</h1>
        <h1 className='py-2 truncate'>{doctor.speciality}</h1>
        
      </div> 
      {/* <h3 className='p-5 text-xl'>{course.price}</h3>

      <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
        {course.category}
      </div>

      <img src="https://bit.ly/3BQdTqk" className="h-40 w-full object-cover"/>
      <div className='p-5 border border-b'>
        <h1 className='py-2 truncate'>John Doe</h1>
        <h1 className='py-2 truncate'>Neurologist</h1>
        
      </div> */}
    </div>
  )
}

export default Card