import React, { useState } from "react";

const Login = ({handleLogin}) => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    setemail("")
    setpassword("")
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
            onSubmit={(e)=>{
                submitHandler(e);
            }}
            
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value)
            }}
            required
            className=" text-white outline-none bg-transparent border-2 border-emerald-600 font-medium py-2 px-6 rounded-3xl placeholder:text-gray-400"
            type="email"
            placeholder="Enter Email"
          />
          <br />
          <input
          value={password}
          onChange={(e) => {
            setpassword(e.target.value)
          
          }}
            required
            className=" text-white outline-none  bg-transparent border-2 border-emerald-600 font-medium py-2 px-6 rounded-3xl placeholder:text-gray-400"
            type="password"
            placeholder="Enter Password"
          />
          <button className=" text-white outline-none hover:bg-emerald-700 font-semibold text-lg border-none bg-emerald-600 py-2 px-12 rounded-3xl placeholder:text-white mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
