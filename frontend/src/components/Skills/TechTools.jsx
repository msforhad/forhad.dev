import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const TechTools = () => {
  const {techTools}=useContext(AppContext)
  return (
    <div>
      <div>
        <ul className="grid grid-cols-3 md:grid-cols-4 gap-3 justify-center">
          {techTools.map((data, index) => (
            <li key={index} className="bg-secondary p-5 rounded gap-1 flex flex-col items-center color-primary">
              <p className="text-3xl">{data.icon}</p>
              <p className='font-bold'>{data.name}</p>
              <p className='text-xs'>{data.level}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TechTools