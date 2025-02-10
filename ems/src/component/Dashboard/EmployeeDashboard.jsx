import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  
  return (
    <>
    <div>
        <div className='p-10 bg-[#1C1C1C] h-screen '>
          {/* console.log({data.id}) */}
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskListNumber changeUser={props.changeUser} data={props.data}/>
            <TaskList changeUser={props.changeUser} data={props.data}/>
        </div>
    </div>
    </>
  )
}

export default EmployeeDashboard
