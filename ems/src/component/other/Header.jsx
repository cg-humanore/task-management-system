import { useState } from "react";
import React from "react";

const Header = (props) => {
  // const [userName, setuserName] = useState("");
  // if (!data) {
  //   setuserName("Admin");
  // } else {
  //   setuserName(data.firstName);
  // }
  const logoutFeature=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }
  return (
    <div className=" flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        hello <br /> <span className="text-3xl font-semibold">Chaitanya</span>{" "}
        👋🏼
      </h1>
      <button onClick={logoutFeature} className="bg-red-600 text-lg font-medium px-2 py-2 rounded-sm">
        Log Out
      </button>
    </div>
  );
};

export default Header;
