import React from 'react'
import {BsArrowUpRight} from 'react-icons/bs'

const DepartmentCard = ({icons, title}) => {
  return (
    <div className='department-card bg-white md:p-4 p-2 shadow-lg rounded-md flex items-center gap-4 justify-between border border-b hover:border-clinic-color hover:cursor-pointer group/edit'>
        <div className='flex gap-4'>
            {icons}
            <h1 className='md:max-w-[200px] max-w-[70px] truncate md:text-xl text-lg font-medium absolute ml-10' >{title}</h1>
        </div>
        
        <div className='group-hover/edit:bg-clinic-color rounded-lg p-3'>
            <BsArrowUpRight 
                size={30}
                style={{color:'#797aec'}}
                className='arrow-icon'
            
            />
        </div>
        
    </div>
  )
}

export default DepartmentCard