import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
   const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [Category, setCategory] = useState('')

  const [newtask, setNewTask]=useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    setNewTask({taskTitle, taskDescription, taskDate, Category, assignTo, active:false, completed:false, newTask:true, failed:false})
    
    const dataa=userData

    dataa.forEach(function(elem){
      if(assignTo==elem.firstName){
        elem.tasks.push(newtask)
        elem.taskCounts.newTask+=1
      }
      console.log(elem)
    })
    setUserData(dataa)


    settaskTitle('')
    settaskDescription('')
    settaskDate('')
    setassignTo('')
    setCategory('')
   


  }
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}
        className="flex flex-wrap w-full items-start justify-between"
        action="">
        <div className="w-1/2 ">
          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">Task Title</h3>
            <input
            value={taskTitle}
            onChange={(e)=>{
              settaskTitle(e.target.value)
            }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>
          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">Date</h3>
            <input
            value={taskDate}
            onChange={(e)=>{
              settaskDate(e.target.value)
            }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
              name=""
              id=""
            />
          </div>
          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">Assign to</h3>
            <input
            value={assignTo}
            onChange={(e)=>{
              setassignTo(e.target.value)
            }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">Category</h3>
            <input
            value={Category}
            onChange={(e)=>{
              setCategory(e.target.value)
            }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design, dev etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
          value={taskDescription}
          onChange={(e)=>{
            settaskDescription(e.target.value)
          }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
