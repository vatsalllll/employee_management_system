import React from 'react'

const  Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello 
            <br /> 
            <span className='text-3xl font-semibold'>World </span>
        </h1>
        <button className='bg-red-500 text-white px-5 oy-2 rounded-medium text-lg font-meduium'>Log Out</button>
    </div>
  )
}

export default  Header