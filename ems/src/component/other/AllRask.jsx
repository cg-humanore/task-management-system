import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllRask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 mb-5 rounded h-60">
      <div className="bg-red-500 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div className="h-[80%] overflow-auto">
        {userData.map(function (elem, id) {
          return (
            <div key={id} className="bg-black-600 mb-2 py-2 px-4 flex justify-between rounded border-2 border-emerald-500 ">
              <h2 className="text-lg font-medium w-1/5 text-red-600">{elem.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-600">{elem.taskCounts.newTask}</h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-600 border-red-300">{elem.taskCounts.active}</h5>
              <h5 className="text-lg font-medium w-1/5 text-green-600 border-red-300">{elem.taskCounts.completed}</h5>
              <h5 className="text-lg font-medium w-1/5 text-indigo-600 border-red-300">{elem.taskCounts.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllRask;
