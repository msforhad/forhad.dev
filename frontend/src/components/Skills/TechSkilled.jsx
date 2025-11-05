import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const TechSkilled = () => {
  const {techSkilled}=useContext(AppContext)
  return (
    <div>
      <div>
        <ul className='grid grid-cols-3 md:grid-cols-4 gap-3'>
          {
            techSkilled.map((data,index)=>(
              <li key={index} className='bg-secondary p-5 rounded flex flex-col items-center gap-1 color-primary'>
                <p className='text-4xl'>{data.icon}</p>
                <p className='font-bold'>{data.name}</p>
                <p className='text-xs'>{data.level}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default TechSkilled