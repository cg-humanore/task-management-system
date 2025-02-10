import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  // console.log(data)
  return (
    <div id='tasklist' className='my-10 overflow-x-auto py-5 flex items-center justify-start flex-nowrap gap-5 h-[55%] w-full'>
      {data.tasks.map((elem, id)=>{
        if(elem.active){
          return <AcceptTask  key={id} data={elem} />
        }
        if(elem.newTask){
          return <NewTask  key={id} data={elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={id} data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={id} data={elem}/>
        }
      })}
      
      
      
    </div>
  )
}

export default TaskList
