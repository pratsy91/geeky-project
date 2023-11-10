import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const showHandler = () => {
    setShow(false);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const savedName = localStorage.getItem("name");
    const savedPass = localStorage.getItem("password");
    const savedEmail = localStorage.getItem("email");

    if (savedEmail !== email || savedName !== name || savedPass !== pass) {
      setMsg("Invalid Login Credentials");
      setShow(true);
    } else {
      localStorage.setItem("auth", true);
      navigate("/movies");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10  pt-4">
      <h1
        className=" text-3xl sm:text-xl flex justify-center gap-1 text-gray-500 font-bold 
      pt-10"
      >
        Login to continue
      </h1>
      <div className="bg-slate-200 border rounded w-3/5 py-8 mb-2">
        <form
          className="flex flex-col gap-5
         justify-center items-start w-10/12 m-auto"
          onSubmit={loginHandler}
        >
          <div className="flex sm:flex-col justify-between gap-4  w-4/5 mx-auto ">
            <label>Name: </label>
            <input
              type="text"
              name="name"
              className=" basis-3/5 outline-none p-1 rounded"
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div className="flex sm:flex-col justify-between gap-4  w-4/5 mx-auto ">
            <label>Email: </label>
            <input
              type="email"
              name="email"
              className=" basis-3/5 outline-none p-1 rounded"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div className="flex sm:flex-col justify-between gap-4  w-4/5 mx-auto ">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              className=" basis-3/5 outline-none p-1 rounded"
              onChange={(e) => setPass(e.currentTarget.value)}
            />
          </div>
          <div className="w-4/5 text-start mx-auto">
            <button
              type="submit"
              className="bg-blue-500 px-2 py-1 rounded mt-4 mb-2 text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      {show && (
        <p
          className="w-2/5 p-2 sm:mx-auto  mb-10 z-50 sm:w-10/12  duration-1000 translate-y-10
        transition-transform bg-red-500 flex justify-between text-white rounded-t cursor-pointer"
        >
          {msg}
          <span>
            <RxCross1 onClick={showHandler} />
          </span>
        </p>
      )}
      <p className="flex gap-2 justify-center items-center text-xl sm:text-lg mb-5">
        <span className="font-bold">New User?</span>
        <NavLink
          className="bg-red-500 px-2 py-1 rounded text-white mr-2"
          to="/"
        >
          Signup to Register
        </NavLink>
      </p>
    </div>
  );
}

export default Login;
