import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';

const EngTools = () => {
   const { engTools } = useContext(AppContext);
  return (
    <div>
      <div className='flex justify-center'>
        <ul className="grid grid-flow-col md:grid-cols-4 gap-3">
          {engTools.map((data, index) => (
            <li key={index} className="bg-secondary p-5 rounded color-primary flex flex-col items-center gap-1">
              <p className="text-2xl">{data.icon}</p>
              <p className='text-xs'>{data.level}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EngTools