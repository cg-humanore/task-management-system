import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllRask from "../other/AllRask";
const AdminDashboard = (props) => {
  return (
    <div className="h-screen p-10 w-full">
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllRask/>
    </div>
  );
};

export default AdminDashboard;
