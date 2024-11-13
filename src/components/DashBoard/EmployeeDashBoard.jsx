import React from 'react'
import Header from '../Other/Header'
import TaskNumber from '../Other/TaskNumber'
import TaskList from '../TaskList/TaskList'
const EmployeeDashBoard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header />
        <TaskNumber />
        <TaskList />
    </div>
  )
}

export default EmployeeDashBoard