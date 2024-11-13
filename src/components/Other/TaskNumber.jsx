import React from 'react'

const TaskNumber = () => {
  return (
    <div
    className='flex mt-10 screen justify-between gap-5'>
        <div className=' rounded-xl h-40 p-10 w-[45%] bg-red-400 py5 px-10'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className=' rounded-xl h-40 p-10 w-[45%] bg-blue-400 py5 px-10'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className=' rounded-xl h-40 p-10 w-[45%] bg-green-400 py5 px-10'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className=' rounded-xl h-40 p-10 w-[45%] bg-yellow-400 py5 px-10'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        
    </div>
  )
}

export default TaskNumber