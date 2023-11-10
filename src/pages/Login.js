import React from "react";
import { BiSolidCameraMovie } from "react-icons/bi";

function Login() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 h-screen">
      <h1 className=" text-6xl flex justify-center gap-1 text-gray-500 font-bold">
        <BiSolidCameraMovie /> Movie App
      </h1>
      <div className="bg-slate-200 border rounded w-3/5 py-8">
        <form
          className="flex flex-col gap-5
         justify-center items-start w-10/12 m-auto"
        >
          <div className="flex sm:flex-col justify-between gap-4  w-4/5 mx-auto ">
            <label>Name: </label>
            <input
              type="text"
              name="name"
              className=" basis-3/5 outline-none p-1 rounded"
            />
          </div>
          <div className="flex sm:flex-col justify-between gap-4  w-4/5 mx-auto ">
            <label>Email: </label>
            <input
              type="email"
              name="email"
              className=" basis-3/5 outline-none p-1 rounded"
            />
          </div>
          <div className="flex sm:flex-col justify-between gap-4  w-4/5 mx-auto ">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              className=" basis-3/5 outline-none p-1 rounded"
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
    </div>
  );
}

export default Login;
