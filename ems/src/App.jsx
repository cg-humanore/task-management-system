import React, { useContext, useEffect, useState } from "react";
import Login from "./component/Auth/Login";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App=()=>{
  const [user, setUser] = useState(null);
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData]=useContext(AuthContext);

  useEffect(() => {
    // if(authData){
      const loggedInUser=localStorage.getItem("loggedInUser")
      
      if(loggedInUser){
        const userData=JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
    // }
  },[])
   


  const handleLogin = (email, password) => {
    if (email == "chaitanyaadmin@example.com" && password == "123"){
      setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))}
    else if (userData) {
      const employee=userData.find((e)=>email==e.email && password==e.password)
      if(employee){
        setUser('employees')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:"employees", data:employee}) )
      }
    } else {
      alert("Invalid credentials");
    }
  };


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : " "}
      {user=='admin'? <AdminDashboard changeUser={setUser}/> : user=='employees'?<EmployeeDashboard changeUser={setUser} data={LoggedInUserData}/>: null}

      

      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  );
}

export default App;
