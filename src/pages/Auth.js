import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Auth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const profRef = useRef();
  const navigate = useNavigate();

  const signupHandler = (e) => {
    e.preventDefault();
    const prof = profRef.current.value;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", pass);
    localStorage.setItem("phone", phone);
    localStorage.setItem("profession", prof);
    navigate("/login");
  };

  return (
    <div
      className="flex flex-col justify-center items-center gap-6 
    pt-16"
    >
      <h1 className=" text-3xl sm:text-xl flex justify-center gap-1 text-gray-500 font-bold">
        SignUp to Register
      </h1>
      <div className="bg-slate-200 border rounded w-3/5 py-8 mb-10">
        <form
          className="flex flex-col gap-5
         justify-center items-start w-10/12 m-auto"
          onSubmit={signupHandler}
        >
          <div className="flex sm:flex-col justify-between gap-4 sm:gap-1  w-4/5 mx-auto ">
            <label>Name: </label>
            <input
              type="text"
              name="name"
              className=" basis-3/5 outline-none p-1 rounded"
              defaultValue={name}
              onChange={(e) => setName(e.currentTarget.value)}
              minLength={3}
              required
            />
          </div>
          <div className="flex sm:flex-col justify-between gap-4 sm:gap-1  w-4/5 mx-auto ">
            <label>Email: </label>
            <input
              type="email"
              name="email"
              className=" basis-3/5 outline-none p-1 rounded"
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
          </div>
          <div className="flex sm:flex-col justify-between gap-4 sm:gap-1  w-4/5 mx-auto ">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              className=" basis-3/5 outline-none p-1 rounded"
              onChange={(e) => setPass(e.currentTarget.value)}
              minLength={4}
              required
            />
          </div>
          <div className="flex sm:flex-col justify-between gap-4 sm:gap-1  w-4/5 mx-auto ">
            <label>Phone Number: </label>
            <input
              type="tel"
              name="phone"
              className=" basis-3/5 outline-none p-1 rounded"
              onChange={(e) => setPhone(e.currentTarget.value)}
              minLength={10}
              required
            />
          </div>
          <div className="flex sm:flex-col justify-between gap-4 sm:gap-1  w-4/5 mx-auto ">
            <label>Choose Profession: </label>
            <select
              name="profession"
              id="cars"
              className=" basis-3/5 outline-none p-1 rounded"
              ref={profRef}
            >
              <option value="doctor">Doctor</option>
              <option value="engineer">Engineer</option>
              <option value="entrepreneur">Entrepreneur</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="w-4/5 text-start mx-auto">
            <button
              type="submit"
              className="bg-blue-500 px-2 py-1 rounded mt-4 text-white"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <p className="flex gap-2 justify-center items-center text-xl sm:text-lg mb-5 ">
        <span className="font-bold">Already a User?</span>
        <NavLink
          className="bg-red-500 px-2 py-1 rounded text-white mr-2"
          to="/login"
        >
          Login to Continue
        </NavLink>
      </p>
    </div>
  );
}

export default Auth;
