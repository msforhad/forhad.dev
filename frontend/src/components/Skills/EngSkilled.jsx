import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';

const EngSkilled = () => {
   const { engSkilled } = useContext(AppContext);
  return (
    <div>
      <div>
        <ul className="grid grid-flow-col md:grid-cols-4 gap-3 justify-center flex-wrap">
          {engSkilled.map((data, index) => (
            <li key={index} className="bg-secondary p-5 rounded color-primary flex flex-col items-center gap-1">
              <p className="text-2xl">{data.icon}</p>
              <p className='font-bold'>{data.name}</p>
              <p className='text-xs'>{data.level}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EngSkilled